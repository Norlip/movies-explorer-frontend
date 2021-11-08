import React from 'react';
import './MoviesCardList.css';
import Movies from '../../../utils/Movies.json';

function MoviesCardList(props) {
  const Component = props.component;

  return (
    <>
      <section className='movies-card-list'>

        {Movies.map((movie, index) => (
          <Component key={index} name={movie.nameRU}
            duration={movie.duration} image={movie.image} />
        ))}

      </section>
      <button className='movies-card-list__btn'>Ещё</button>
    </>
  );
}

export default MoviesCardList;
