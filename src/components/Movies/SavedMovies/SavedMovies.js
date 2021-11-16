import React from 'react';
import './SavedMovies.css';
import { useRouteMatch } from 'react-router-dom';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import mainApi from '../../../utils/MainApi';
import filterFilms from '../../../utils/filterFilms';
import Header from '../../Header/Header';

import Footer from '../../Footer/Footer';

function SavedMovies(props) {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesToShow, setMoviesToShow] = React.useState([]);

  React.useEffect(() => {
    mainApi.getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
        setMoviesToShow(movies);
      })
      .catch((error) => props.showError(error));
  }, [moviesToShow]);

  function handleSeach(query, isShortMovie) {
    const filterItems = filterFilms(savedMovies, query, isShortMovie);
    setMoviesToShow(filterItems);
  }

  function handleMovieDelete(movie) {
    mainApi.dislikeMovie(movie.data._id)
      .then((movieId) => {
        const arr = savedMovies.filter((el) => el.id !== movieId._id);
        setSavedMovies(arr);
        const arr2 = moviesToShow.filter((el) => el.id !== movieId._id);
        setMoviesToShow(arr2);
      })
      .catch((error) => props.showError(error));
  }
  return (
    <>
      {useRouteMatch(props.routesPathsHeaderArray) ? null : (
        <Header
          loggedIn={props.loggedIn}
        />
      )}
      <section className="movies">
        <SearchForm
          searchCallBack={handleSeach}
        />
        <MoviesCardList
          movies={moviesToShow}
          isSaved={true}
          onMovieDelete={handleMovieDelete}
        />
      </section>
      {useRouteMatch(props.routesPathsFooterArray) ? null : <Footer />}
    </>
  );
}

export default SavedMovies;
