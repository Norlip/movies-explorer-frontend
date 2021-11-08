import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} />

      <div className="profile">
        <main className="profile__content">
          <h1 className="profile__title">Привет, Вадим!</h1>
          <form className="profile__form" name="user-data">
            <label className="profile__label" htmlFor="user-name">
              <span className="profile__subtitle">Имя</span>
              <input className="profile__input" type="text" name="user-name" required />
            </label>
            <label className="profile__label" htmlFor="user-email">
              <span className="profile__subtitle profile__subtitle_bottom">E-mail</span>
              <input
                className="profile__input profile__input_bottom"
                type="email"
                name="user-email"
                required
              />
            </label>
            <button className="profile__btn profile__btn_type_edit" type="submit">
              Редактировать
            </button>
          </form>
          <button className="profile__btn profile__btn_type_logout" type="button">
            Выйти из аккаунта
          </button>
        </main>
      </div>
    </>

  );
}

export default Profile;
