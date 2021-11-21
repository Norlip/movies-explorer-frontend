function filterFilms(movies, query, isShortMovie) {
  return movies.filter((el) => {
    if (isShortMovie && el.duration > 40) {
      return false;
    }
    return true;
  });
}

export default filterFilms;
