import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavTab from './NavTab/NavTab';

import './Main.css';

function Main(props) {
  return (
    <>
      <div className="main__back">
        {useRouteMatch(props.routesPathsHeaderArray) ? null : (
          <Header
            loggedIn={props.loggedIn}
          />
        )}        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        {useRouteMatch(props.routesPathsFooterArray) ? null : <Footer />}
      </div>
    </>
  );
}

export default Main;
