import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import useFormWithValidation from '../../utils/FormValidator';
import { currentUserContext } from '../context/CurrentUserContext';

function Profile(props) {
  const currentUser = React.useContext(currentUserContext);
  const validator = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: 'name' in validator.values ? validator.values.name : currentUser.name,
      email: 'email' in validator.values ? validator.values.email : currentUser.email,
    });
  }

  function handleLogOut() {
    localStorage.clear();
    props.onLogOut(false);
  }
  return (
    <>
      <Header loggedIn={props.loggedIn} />

      <div className="profile">
        <form className="profile__content" onReset={validator.resetForm}
          onSubmit={handleSubmit}
          noValidate>
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
          <div className="profile__form" name="user-data">
            <label className="profile__label" htmlFor="user-name">
              <span className="profile__subtitle">Имя</span>
              <input className="profile__input" type="text" minLength="1"
                maxLength="30"
                required
                id="name"
                name="name" pattern="^[а-яА-ЯёЁa-zA-Z0-9]+$"

                defaultValue={currentUser.name}
                onChange={validator.handleChange} />
            </label>
            <span
              className={`form__error ${validator.errors.name && validator.errors.name.length > 0 && 'form__error_active'}`}> {validator.errors.name}
            </span>
            <label className="profile__label" htmlFor="user-email">
              <span className="profile__subtitle profile__subtitle_bottom">E-mail</span>
              <input
                className="profile__input profile__input_bottom"
                type="email"
                id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

                name="email"
                required defaultValue={currentUser.email}
                onChange={validator.handleChange}
              />
            </label>
            <span className={`form__error ${validator.errors.email && validator.errors.email.length > 0 && 'form__error_active'}`}
            >{validator.errors.email}
            </span>
            <button className="profile__btn profile__btn_type_edit" disabled={!validator.isValid}
              type="submit">
              Редактировать
            </button>
          </div>
          <Link to="/"
            onClick={handleLogOut} className="profile__btn profile__btn_type_logout" type="button">
            Выйти из аккаунта

          </Link>
        </form>
      </div>
    </>

  );
}

export default Profile;
