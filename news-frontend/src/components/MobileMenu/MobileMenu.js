import React from "react";
import "./MobileMenu.css";
import WhiteLogo from "../../images/NewsExplorerWhite.svg";
import BlackLogo from "../../images/NewsExplorerBlack.svg";
import { useModal } from "../../contexts/ModalContext";
import { NavLink } from "react-router-dom";
import { useLoggedIn } from "../../contexts/LoggedInContext";
import { useHomePage } from "../../contexts/HomePageContext";

const MobileMenu = () => {
    const { isHome } = useHomePage();
    const{ closeModal} = useModal();
    const { isLoggedIn, user, } = useLoggedIn();

  
  return (
    <div className="mobile mobile_opened">
        <div className="mobile__container">
            <div className="mobile__header">
            <img
        className="mobile__logo"
        src={isHome ? WhiteLogo : BlackLogo}
        alt="news-logo"
      />
      <button
          className="mobile__close-btn"
          type="button"
          aria-label="close"
          onClick={closeModal}
        ></button>
            </div>
        
        <ul className="mobile__list">
          <li className="mobile__list-item">
            <NavLink
              exact={true}
              to="/"
              className={`${
                isHome
                  ? "mobile__link mobile__link_active"
                  : "mobile__link mobile__link_bg-white"
              }`}
            >
              Home
            </NavLink>
          </li>
          <li className="mobile__list-item">
            {isLoggedIn && (
              <NavLink
                to="/saved-news"
                className={`${
                  isHome ? "mobile__link" : "mobile__link mobile__link_active_bg-white"
                }`}
              >
                Saved articles
              </NavLink>
            )}
          </li>
          <li
            className={`${
              isHome
                ? "mobile__list-item"
                : "mobile__list-item mobile__list-item_bg-white"
            }`}
          >
            <button
              className={`${
                isHome ? "mobile__button" : "mobile__button mobile__button_bg-white"
              }`}
              type="button"
            >
              <span className="mobile__button-text">
                {isLoggedIn ? user.firstName : "sign in"}
              </span>
              {isLoggedIn && <span className={`${
                isHome ? "mobile__button-icon" : "mobile__button-icon mobile__button-icon_bg-white"
              }`}></span>}
            </button>
          </li>
        </ul>
        </div>
    </div>
  )
};

export default MobileMenu;
