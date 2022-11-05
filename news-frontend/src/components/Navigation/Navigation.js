import React from 'react';
import Logo from '../../images/NewsExplorer.svg';
import './Navigation.css';


const Navigation = () => {
  return (
      <nav className="nav">
      <img className="nav__logo" src={Logo} alt="news-logo" />
        <div className="nav__container">
        <ul className="nav__list">
          <li className="nav__list-item">
            Home
          </li>
          <li className="nav__list-item">
            Sign in
          </li>
        </ul>
        </div>
      </nav>
  )
}

export default Navigation;
