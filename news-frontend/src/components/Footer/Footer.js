/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import Facebook from "../../images/facebook.svg";
import Github from "../../images/github.svg";

const footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer__copyrights">
        © 2022, Powered by Yaron amir.
      </div>
<div className="footer__links">
      <ul className="footer__list">
        <li className="footer__list-item">
          <a href="#" className="footer__link">
            Home
          </a>
        </li>
        <li className="footer__list-item">
          <a href="https://practicum.com" className="footer__link">
            Practicum
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com" className="footer__link">
          <img src={Github} alt="Github-logo" />
        </a>
        <a href="https://facebook.com" className="footer__link">
          <img src={Facebook} alt="facebook-logo" />
        </a>
      </div>
      </div>
    </footer>
  );
};

export default footer;
