import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject" id="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__textItem">

        <div className="aboutProject__text-item">
          <h3 className="aboutProject__text-title">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>

        <div className="aboutProject__texbox-item">
          <h3 className="aboutProject__text-title">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>

      </div>

      <div className="aboutProject__grid">
        <p className="aboutProject__grid-element aboutProject__grid-green">1 неделя</p>
        <p className="aboutProject__grid-element">4 недели</p>
        <p className="aboutProject__grid_text">Back-end</p>
        <p className="aboutProject__grid_text">Front-end</p>

      </div>
    </section>
  );
}

export default AboutProject;
