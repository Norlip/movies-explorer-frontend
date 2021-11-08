import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__block">
        <div className="footer__copyright">&copy; 2021</div>
        <nav className="footer__links">
          <p className="footer__list-element"><a className="footer__link" href="https://praktikum.yandex.ru/web/">Яндекс.Практикум</a></p>
          <p className="footer__list-element"><a className="footer__link" href="https://github.com/Norlip">Github</a></p>
          <p className="footer__list-element"><a className="footer__link" href="https://www.facebook.com/">Facebook</a></p>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
