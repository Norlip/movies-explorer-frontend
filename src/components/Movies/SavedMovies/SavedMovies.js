import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movieList from '../../../utils/Movies.json';
import SavedMoviesCard from '../MoviesCard/SavedMoviesCard';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function SavedMovies(props) {
  const currentMovieList = movieList;

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <section className="movies">
        <SearchForm
          title="Сохранённые фильмы"
        />
        <MoviesCardList
          movieList={currentMovieList}
          component={SavedMoviesCard}
        />
      </section>
      <Footer />

    </>
  );
}

export default SavedMovies;
