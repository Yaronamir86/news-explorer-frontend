import React from "react";
import WhiteLogo from "../../images/NewsExplorerWhite.svg";
import BlackLogo from "../../images/NewsExplorerBlack.svg";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import { useLoggedIn } from "../../contexts/LoggedInContext";
import { useHomePage } from "../../contexts/HomePageContext";

const Navigation = () => {
  const { openModal } = useModal();
  const { isHome } = useHomePage();
  const { isLoggedIn, user, handleLogOut } = useLoggedIn();


  const handleNavButtonClick = () => {
    !isLoggedIn ? openModal("signin") : handleLogOut();
  }

  const handleHamburgerClick = () => {
    openModal("mobile")
    console.log("opend!")
  }

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
            {isLoggedIn && (
              <NavLink
                to="/saved-news"
                className={`${
                  isHome ? "nav__link" : "nav__link nav__link_active_bg-white"
                }`}
              >
                Saved articles
              </NavLink>
            )}
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
              onClick={handleNavButtonClick}
              type="button"
            >
              <span className="nav__button-text">
                {isLoggedIn ? user.firstName : "sign in"}
              </span>
              {isLoggedIn && <span className={`${
                isHome ? "nav__button-icon" : "nav__button-icon nav__button-icon_bg-white"
              }`}></span>}
            </button>
          </li>
        </ul>
      </div>
      <button className="nav__hamburger"
      onClick={handleHamburgerClick}
      type="button"
      aria-label="mobile-menu"
      ></button>
    </nav>
  );
};

export default Navigation;
