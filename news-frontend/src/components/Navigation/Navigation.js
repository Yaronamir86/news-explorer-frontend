import React from "react";
import WhiteLogo from "../../images/NewsExplorerWhite.svg";
import BlackLogo from "../../images/NewsExplorerBlack.svg";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useModal } from "../../contexts/modalContext";

const Navigation = ({ isHome }) => {
  const { openModal } = useModal();

  const handleModalOpen = () => {
    openModal('signin');
  }

  return (
    <nav className={`${!isHome ? "nav" : "nav nav_bg-white"}`}>
      <img
        className="nav__logo"
        src={!isHome ? WhiteLogo : BlackLogo}
        alt="news-logo"
      />
      <div className="nav__container">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink
              to="/"
              className={`${
                isHome ? "nav__link_bg-white" : "nav__link nav__link_active"
              }`}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              to="/saved-news"
              className={`${
                !isHome ? "nav__link " : "nav__link nav__link_active_bg-white"
              }`}
              // style={{ display: "none" }}
            >
              Saved articles
            </NavLink>
          </li>
          <li className="nav__list-item">
            <button
              className="nav__button"
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
