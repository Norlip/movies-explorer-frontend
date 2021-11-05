import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import NavTab from './NavTab/NavTab';
import './Main.css';

function Main() {
  return (
    <>
      <div className="main__back">
        <Header />
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
}

export default Main;
