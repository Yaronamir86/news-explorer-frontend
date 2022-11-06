/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import Facebook from "../../images/facebook.svg";
import Github from "../../images/github.svg";

const footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer__copyrights">
        © 2022 Supersite, Powered by Yaron amir. All rights reserved.
      </div>
      <div className="footer__socials">
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="#">Home</a>
          </li>
          <li className="footer__list-item"><a href="https://practicum.com">Practicum
        </a></li>
          <li className="footer__list-item"><a href="https://github.com">
         <img src={Github} alt='Github-logo'/>
        </a></li>
          <li className="footer__list-item"><a href="https://facebook.com">
         <img src={Facebook} alt='facebook-logo'/>
        </a></li>
        </ul>
      </div>
    </footer>
  );
};

export default footer;
