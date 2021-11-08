import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';
import PropTypes from 'prop-types';
import profile from '../../images/profile.svg';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navigation">
      <nav className="navigation__menu">
        <button
          className="navigation__btn navigation__btn_type_open"
          type="button"
          onClick={handleOpenMenu}
        />

        <button
          className={`navigation__btn navigation__btn_type_close ${isOpen ? 'navigation__btn_status_open' : ''
          }`}
          type="button"
          onClick={handleCloseMenu}
        />

        <ul
          className={`navigation__list navigation__list_type_accaunt ${isOpen ? 'navigation__list_status_open' : ''
          }`}
          id="menu"
        >  <li className="navigation__zero">
          </li>
          <li>
            <ul className="navigation__left-column">
              <li className="navigation__item navigation__item_type_main">
                <NavLink
                  exact
                  activeClassName="navigation__link_active"
                  className="navigation__link navigation__link_type_main"
                  to="/"
                >
                  Главная
                </NavLink>

              </li>

              <li className="navigation__item navigation__item_type_movies">
                <NavLink
                  activeClassName="navigation__link_active"
                  className="navigation__link navigation__link_type_movies"
                  to="/movies"
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__item navigation__item_type_save-movies">
                <NavLink
                  activeClassName="navigation__link_active"
                  className="navigation__link navigation__link_type_save-movies"
                  to="/saved-movies"
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </li>
          <li className=" navigation__link_type_profile" >
            <Link className="navigation__link " to="/profile">
              Аккаунт
            </Link>
            <Link to="/profile" >  <img className="navigation__link_img" src={profile}></img></Link>

          </li>
        </ul>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Navigation;
