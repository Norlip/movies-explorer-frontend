import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';

function Login() {
  return (
    <>
      <section className="register">
        <div className="register__container">
          <Link to="/" className="register__link-logo"><img className="register__logo" src={logo} alt="лого" /></Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <Form />
          <p className="register__text">
            Ещё не зарегистрированы?
            <Link className="register__link" to="/signup">
              Регистрация
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Login;
