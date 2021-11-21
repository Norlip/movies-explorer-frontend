import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import SearchForm from '../../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { SHORT_MOVIE_DURATION_MIN } from '../../../utils/constants';
import Preloader from '../Preloader/Preloader';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function SavedMovies({
  savedMovies, movies, isLoading, loadingError, onBookmarkClick, isMovieAdded,
  routesPathsHeaderArray, loggedIn, routesPathsFooterArray,

}) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  // eslint-disable-next-line max-len
  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < SHORT_MOVIE_DURATION_MIN);
  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  const [moviesToRender, setMoviesToRender] = useState([]);

  React.useEffect(() => {
    setMoviesToRender(movies);
  }, [movies]);

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      return data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
    }
    return [];
  };

  const searchInSavedHandler = (searchQuery) => {
    setMoviesToRender(searchFilter(movies, searchQuery));
  };

  return (
    <>
      {useRouteMatch(routesPathsHeaderArray) ? null : (
        <Header
          loggedIn={loggedIn}
        />
      )}
      <section className="movies">
        <SearchForm onFilterClick={onFilterClick} searchCallBack={searchInSavedHandler} />

        {isLoading && <Preloader />}

        {!isLoading
          && loadingError === ''
          && (
            <MoviesCardList
              savedMovies={savedMovies}
              movies={filterIsOn ? filterShortFilm(moviesToRender) : moviesToRender}
              onBookmarkClick={onBookmarkClick}
              isMovieAdded={isMovieAdded}
            />
          )}
        {
          !isLoading
          && loadingError !== ''
          && <div className="movies-notfound">Ничего не найдено</div>
        }
      </section>
      {useRouteMatch(routesPathsFooterArray) ? null : <Footer />}
    </>
  );
}

export default SavedMovies;
