import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import { SHORT_MOVIE_DURATION_MIN } from '../../utils/constants';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({
  savedMovies, onSubmitSearch, movies, isLoading, loadingError, onBookmarkClick, isMovieAdded,
  routesPathsHeaderArray, loggedIn, routesPathsFooterArray,
}) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  // eslint-disable-next-line max-len
  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < SHORT_MOVIE_DURATION_MIN);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };
  return (
    <>
      {
        useRouteMatch(routesPathsHeaderArray) ? null : (
          <Header
            loggedIn={loggedIn}
          />
        )
      }
      < section className="movies" >
        <SearchForm onFilterClick={onFilterClick} searchCallBack={onSubmitSearch} />

        {isLoading && <Preloader />}

        {
          !isLoading
          && loadingError === ''
          && (
            <MoviesCardList
              savedMovies={savedMovies}
              movies={filterIsOn ? filterShortFilm(movies) : movies}
              onBookmarkClick={onBookmarkClick}
              isMovieAdded={isMovieAdded}
            />
          )
        }
        {
          !isLoading
          && loadingError !== ''
          && <div className="movies-notfound">Ничего не найдено</div>
        }
      </section >
      {useRouteMatch(routesPathsFooterArray) ? null : <Footer />}

    </>
  );
}

export default Movies;
