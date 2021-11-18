import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const history = useHistory();

  return (
    <section className='notFound'>
      <div className='notFound__text'>
        <h1 className='notFound__head'>404</h1>
        <p className='notFound__subtitle'>Страница не найдена</p>
      </div>
      <a className='notFound__link' onClick={history.goBack}>Назад</a>
    </section>
  );
}

export default NotFound;
