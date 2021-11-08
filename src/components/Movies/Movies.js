import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCard from './MoviesCard/MoviesCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {
  const [isLoadingData, setIsLoadingData] = React.useState(true);

  React.useEffect(() => {
    const loadingDataTimeout = setTimeout(() => {
      setIsLoadingData(false);
    }, 1500);

    return () => {
      clearTimeout(loadingDataTimeout);
    };
  }, []);

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <section className="movies">
        <SearchForm
          title="Фильмы"
        />
        {isLoadingData ? (
          <Preloader />
        ) : (
          <MoviesCardList
            component={MoviesCard}
          />
        )}

      </section>
      <Footer />

    </>
  );
}

export default Movies;
