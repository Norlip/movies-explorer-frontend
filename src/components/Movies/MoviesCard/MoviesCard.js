import React from 'react';
import BookmarkBtn from '../../ui/BookmarkBtn/BookmarkBtn';
import BookmarkRemoveBtn from '../../ui/BookmarkRemoveBtn/BookmarkRemoveBtn';
import durationFormatter from '../../../utils/movieCardHelper';
import './MoviesCard.css';

function MoviesCard({
  savedMovies, movie, onBookmarkClick, isMovieAdded,
}) {
  const {
    nameRU, duration, trailer, image,
  } = movie;

  const isAdded = isMovieAdded(movie);

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    onBookmarkClick(movie, !isAdded);
  };
  function handleClick() {
    if (movie.trailer !== '') {
      window.open(movie.trailer);
    }
  }

  const removeHandler = () => {
    onBookmarkClick(movie, false);
  };

  return (
    <article className="movies-card">
      <img
        className="movies-card__image"
        src={image}
        alt={`Фотография к фильму ${nameRU}`}
        onClick={handleClick}

      />
      <div className="movies-card__header">
        <div className="movies-card__text-container">
          <h2 className="movies-card__title">{nameRU}</h2>
          <p className="movies-card__subtitle">{durationFormatter(duration)}</p>
        </div>
        {savedMovies
          ? <BookmarkRemoveBtn onClick={removeHandler} />
          : <BookmarkBtn isAdded={isAdded} onClick={handleBookmarkClick} />}
      </div>
      <a className="movie-card__link" href={trailer} target="_blank" rel="noopener noreferrer">

      </a>
    </article >
  );
}

export default MoviesCard;
