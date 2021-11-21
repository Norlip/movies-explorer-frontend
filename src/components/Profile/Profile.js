import React, { useEffect } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Profile.css';
import Header from '../Header/Header';

function Profile({
  currentUser, logOutHandler, changeUserInfo, editIsSuccess, editIsFailed, loggedIn,
}) {
  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
  } = useFormWithValidation();

  useEffect(() => {
    setValues(currentUser);
    setIsValid(true);
  }, [currentUser, setValues, setIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    changeUserInfo(values);
  };

  return (
    <>
      <Header loggedIn={loggedIn} />

      <div className="profile">
        <form
          className="profile__content"
          onSubmit={submitHandler}
          noValidate
        >
          <h1 className="profile__title">
            {`Привет, ${currentUser.name}!`}
          </h1>
          <div className="profile__form" name="user-data">

            <label className="profile__label" htmlFor="name">
              <span className="profile__subtitle">Имя</span>
              <input
                className="profile__input"
                id="name"
                required
                minLength="2"
                maxLength="30"
                name="name"
                type="text"
                placeholder="Имя"
                value={values.name || ''}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
            <span className="form__error form__error_active">{errors.name}</span>

            <label className="profile__label" htmlFor="email">
              <span className="profile__subtitle profile__subtitle_bottom">E-mail</span>
              <input
                className="profile__input profile__input_bottom"
                id="email"
                required
                name="email"
                type="email"
                placeholder="Почта"
                value={values.email || ''}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
            <span className="form__error form__error_active">{errors.email}</span>

            {editIsSuccess && <p className="profile__form-sbmt-success">Данные успешно изменены!</p>}
            {editIsFailed && <p className="profile__form-sbmt-failed">Ошибка при изменении данных</p>}

            <button
              type="submit"
              className={(isValid && (values.name !== currentUser.name
                || values.email !== currentUser.email))
                ? 'profile__btn profile__btn_type_edit'
                : 'profile__btn profile__btn_type_edit-disabled'}
              disabled={(values.name === currentUser.name
                && values.email === currentUser.email) || !isValid}
            >
              Редактировать
            </button>
          </div>
        </form>

        <button
          type="button"
          className="profile__btn profile__btn_type_logout"
          onClick={logOutHandler}
        >
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
}

export default Profile;
