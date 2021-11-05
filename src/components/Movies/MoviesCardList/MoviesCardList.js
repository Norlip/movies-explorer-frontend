import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Movies from '../../../utils/Movies.json';

function MoviesCardList() {
  return (
    <>
      <section className='movies-card-list'>

        {Movies.map((movie, index) => (
          <MoviesCard key={index} name={movie.nameRU}
            duration={movie.duration} image={movie.image} />
        ))}

      </section>
      <button className='movies-card-list__btn'>Ещё</button>
    </>
  );
}

export default MoviesCardList;
