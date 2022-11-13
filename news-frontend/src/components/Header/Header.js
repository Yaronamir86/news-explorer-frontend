import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import { useHomePage } from "../../contexts/homePageContext";


const Header = () => {
  const isHome = useHomePage();
  return (
    <div className = "header">
      <Navigation isHome={ isHome }/>
      <div className = "header__container">
        <h1 className = "header__title">What's going on in the world?</h1>
        <p className="header__paragraph">Find the latest news on any topic and save them in your personal account.</p>
      </div>
      <SearchForm />
      </div>
  );
};

export default Header;
