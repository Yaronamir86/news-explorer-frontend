import React from "react";
import WhiteLogo from "../../images/NewsExplorerWhite.svg";
import BlackLogo from "../../images/NewsExplorerBlack.svg";
import "./Navigation.css";

const Navigation = ({ isHome }) => {
  return (
    <nav className={`${!isHome ? "nav" : "nav nav_bg-white"}`}>
      <img
        className="nav__logo"
        src={!isHome ? WhiteLogo : BlackLogo}
        alt="news-logo"
      />
      <div className="nav__container">
        <ul className="nav__list">
          <li
            className={`${
              isHome ? "nav__list-item" : "nav__list-item nav__list-item_active"
            }`}
          >
            Home
          </li>
          <li
            className={`${
              !isHome
                ? "nav__list-item"
                : "nav__list-item nav__list-item_active"
            }`} style={{display: "none"}}
          >
            Saved articles
          </li>
          <li className="nav__list-item">Sign in</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
