import React, { useEffect } from "react";
import "./MobileMenu.css";
import WhiteLogo from "../../images/NewsExplorerWhite.svg";
import BlackLogo from "../../images/NewsExplorerBlack.svg";
import { useModal } from "../../contexts/ModalContext";
import { NavLink } from "react-router-dom";
import { useLoggedIn } from "../../contexts/LoggedInContext";
import { useHomePage } from "../../contexts/HomePageContext";
import { useUser } from "../../contexts/UserContext"

const MobileMenu = () => {
  const { isHome } = useHomePage();
  const { closeModal, openModal, modalState } = useModal();
  const { isLoggedIn, handleLogOut } = useLoggedIn();
  const { currentUser } = useUser();
  const { mobile } = modalState;

  const handleMobileButtonClick = () => {
    !isLoggedIn ? openModal("signin") : handleLogOut();
  };

  useEffect(() => {
    if (!mobile) return;

    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeModal();
        console.log("closed");
      }
    }

    function handleClickToClose(evt) {
      if (evt.target.classList.contains('mobile_opened')) {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickToClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleClickToClose);
    };
  }, [mobile, closeModal]);

  return (
    <div className={`${mobile ? "mobile mobile_opened" : "mobile"}`}>
      <div
        className={`${
          isHome
            ? "mobile__container"
            : "mobile__container mobile__container_bg-white"
        }`}
      >
        <div className="mobile__header">
          <img
            className="mobile__logo"
            src={isHome ? WhiteLogo : BlackLogo}
            alt="news-logo"
          />
          <button
            className={`${
              isHome
                ? "mobile__close-btn"
                : "mobile__close-btn mobile__close-btn_bg-white"
            }`}
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
                isHome ? "mobile__link" : "mobile__link mobile__link_bg-white"
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
                  isHome ? "mobile__link" : "mobile__link mobile__link_bg-white"
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
                isHome
                  ? "mobile__button"
                  : "mobile__button mobile__button_bg-white"
              }`}
              type="button"
              onClick={handleMobileButtonClick}
            >
              <span className="mobile__button-text">
                {isLoggedIn ? currentUser.name : "sign in"}
              </span>
              {isLoggedIn && (
                <span
                  className={`${
                    isHome
                      ? "mobile__button-icon"
                      : "mobile__button-icon mobile__button-icon_bg-white"
                  }`}
                ></span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
