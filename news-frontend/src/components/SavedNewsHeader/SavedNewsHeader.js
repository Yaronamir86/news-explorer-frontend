import React from "react";
import Navigation from "../Navigation/Navigation";
import SavedNews from "../SavedNews/SavedNews";
import "./SavedNewsHeader.css";
import { useHomePage } from "../../contexts/HomePageContext";
import { useUser } from "../../contexts/UserContext";
import { useArticles } from "../../contexts/ArticleContext";


const SavedNewsHeader = () => {
  const { currentUser } = useUser();
  const { isHome } = useHomePage();
  const { isSaveCards } = useArticles();

  

  return (
    <div className="SavedNews">
      <Navigation isHome={!isHome} />
      <div className="savedNewsHeader">
        <p className="savedNewsHeader__page">Saved articles</p>
        <h1 className="savedNewsHeader__title">
          {currentUser.name}, you have {isSaveCards.length} saved articles
        </h1>
        <p className="savedNewsHeader__info">
          By keywords:
          <span className="savedNewsHeader__span">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
      <SavedNews />
    </div>
  );
};

export default SavedNewsHeader;
