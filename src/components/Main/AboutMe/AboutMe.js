import React from 'react';
import './AboutMe.css';
import photo from '../../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="aboutMe" id="aboutMe">
      <h2 className="title">Студент</h2>

      <div className="aboutMe__textbox">

        <div>
          <h2 className="aboutMe__title">Вадим</h2>
          <h4 className="aboutMe__subtitle">Фронтенд-разработчик, 20 лет</h4>
          <p className="aboutMe__text">
            Родился и живу в Иваново, учусь на 3 курсе ИГХТУ, по специальности
             анализ данных и финансовые технологии .
            Начал кодить еще в 8 классе.
            Увлекался олимпиадным программированием. Занимал призовые места в региональных турнирах.
            Хочу заниматься и развиваться в frontend/backend сфере.
          </p>
          <a className="aboutMe__link" href="https://github.com/Norlip"> Github </a>
        </div>
        <img className="aboutMe__photo" src={photo} alt="фото"></img>
      </div>

      <h5 className="aboutMe__portfolio-title">Портфолио</h5>
      <ul className="aboutMe__portfolio-list">
        <li className="aboutMe__portfolio-list-element">
          <a
            className="aboutMe__portfolio-link"
            href="https://github.com/Norlip/russian-travel"
          >
            <p className="aboutMe__portfolio-text">Статичный сайт</p>
            <span>&#8599;</span>
          </a>
        </li>
        <li className="aboutMe__portfolio-list-element">
          <a
            className="aboutMe__portfolio-link"
            href="https://github.com/Norlip/russian-travel"
          >
            <p className="aboutMe__portfolio-text">Адаптивный сайт</p>
            <span>&#8599;</span>
          </a>
        </li>
        <li className="aboutMe__portfolio-list-element">
          <a
            className="aboutMe__portfolio-link"
            href="https://github.com/Norlip/react-mesto-api-full"
          >
            <p className="aboutMe__portfolio-text">Одностраничное приложение</p>
            <span>&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
