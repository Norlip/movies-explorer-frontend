import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';

function Register() {
  return (
    <>
      <section className="register">
        <div className="register__container">
          <Link to="/" className="register__link-logo"><img className="register__logo" src={logo} alt="лого" /></Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <Form style={'register'}/>
          <p className="register__text">
            Уже зарегистрированы?
            <Link className="register__link" to="/signin">
              Войти
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Register;
