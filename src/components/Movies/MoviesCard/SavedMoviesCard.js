import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  const [saved, setSeved] = React.useState(false);

  function savedClick() {
    setSeved(!saved);
  }

  return (

    <li>
      <article className="savedMoviesCard">
        <a href="#">
          <img className="movies-card__image" src={props.image} alt="Фото" />
        </a>
        <div className="movies-card__header">
          <div className="movies-card__text-container">
            <h2 className="movies-card__title">{props.name}</h2>
            <p className="movies-card__subtitle">{props.duration}</p>
          </div>
          <div className="movies-card__favorite-button" onClick={savedClick}>
            {saved ? (<button className="movies-card__save" alt="Добавить в избранное" ></button>
            ) : <button className="movies-card__saved" alt="Добавить в избранное" ></button>}
          </div>
        </div>

      </article>
    </li >

  );
}

export default MoviesCard;
