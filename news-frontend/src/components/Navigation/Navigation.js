import React from "react";
import WhiteLogo from "../../images/NewsExplorerWhite.svg";
import BlackLogo from "../../images/NewsExplorerBlack.svg";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";

const Navigation = ({ isHome }) => {
  const { openModal } = useModal();

  const handleModalOpen = () => {
    openModal("signin");
  };

  return (
    <nav className={`${isHome ? "nav" : "nav nav_bg-white"}`}>
      <img
        className="nav__logo"
        src={isHome ? WhiteLogo : BlackLogo}
        alt="news-logo"
      />
      <div className="nav__container">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink
              exact={true}
              to="/"
              className={`${
                isHome
                  ? "nav__link nav__link_active"
                  : "nav__link nav__link_bg-white"
              }`}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              to="/saved-news"
              className={`${
                isHome ? "nav__link" : "nav__link nav__link_active_bg-white"
              }`}
            >
              Saved articles
            </NavLink>
          </li>
          <li
            className={`${
              isHome
                ? "nav__list-item"
                : "nav__list-item nav__list-item_bg-white"
            }`}
          >
            <button
              className={`${
                isHome ? "nav__button" : "nav__button nav__button_bg-white"
              }`}
              onClick={handleModalOpen}
              type="button"
            >
              Sign in
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
