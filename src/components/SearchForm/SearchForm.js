/* eslint-disable no-unused-vars */
import React from 'react';
import './SearchForm.css';
import useFormWithValidation from '../../utils/FormValidator';

function SearchForm(props) {
  const [isChecked, setIsChecked] = React.useState(false);
  const validator = useFormWithValidation();
  const { filmSearch } = validator.values;
  const [error, setError] = React.useState('');

  const { handleChange, resetForm } = validator;
  React.useEffect(() => {
    resetForm();
  }, [resetForm]);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!filmSearch) {
      setError('Нужно ввести ключевое слово');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      event.preventDefault();
      props.searchCallBack(validator.values.filmSearch, isChecked);
      resetForm();
    }
  };

  return (
    <>
      <div className="search">
        <form
          className="search__form"
          onSubmit={handleSubmit} noValidate
        >
          <input
            className="search__title"
            name="filmSearch"
            type="text"
            placeholder="Фильм"
            onChange={handleChange}
            required autoComplete="off"
            value={filmSearch || ''}
          />
          <button
            className="search__button"
            type="submit"
          >
            Найти
          </button>
        </form>
      </div>
      {error && <span
        className='search__error search__error_active'>
        {error}      </span>}
      <div className="checkbox">
        <div className="checkbox__container">
          <input
            id="search-checkbox"
            type="checkbox"
            className="checkbox__input"
            name="shortFilm"
            onClick={props.onFilterClick}
          />
          <label htmlFor="search-checkbox" className="checkbox__label">Switch</label>
        </div>
        <label htmlFor="search-checkbox" className="checkbox__text">Короткометражки</label>
      </div>
    </>
  );
}

export default SearchForm;
