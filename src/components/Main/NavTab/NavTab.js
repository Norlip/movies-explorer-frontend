import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li >
          <a href="#aboutProject" className="nav-tab__list-link">О проекте</a></li>
        <li >
          <a href="#techs" className="nav-tab__list-link">Технологии</a></li>
        <li >
          <a href="#aboutMe" className="nav-tab__list-link">Студент</a></li>
      </ul>
    </nav>
  );
}

export default NavTab;
