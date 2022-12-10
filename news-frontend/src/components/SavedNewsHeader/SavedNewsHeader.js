import { React, useEffect, useState } from "react";
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
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const newArr = isSaveCards.map((card) => card.keyword);
    setKeywords([...new Set(newArr)]);
  }, [isSaveCards]);

  return (
    <div className="SavedNews">
      <Navigation isHome={!isHome} />
      <div className="savedNewsHeader">
        <p className="savedNewsHeader__page">Saved articles</p>
        <h1 className="savedNewsHeader__title">
          {currentUser.name}, you have {isSaveCards.length} saved articles
        </h1>
        <p className="savedNewsHeader__info">
          By keywords:{" "}
          <strong>
            {keywords?.slice(0, 2).map((word, i) => {
              return (
                <span key={i}>
                  {word}
                  {i + 1 < keywords.length && ","}
                  {""}
                </span>
              );
            })}
            {keywords.length > 2 &&
              `${" "}and ${" "} ${keywords.length - 2} others`}
          </strong>
        </p>
      </div>
      <SavedNews />
    </div>
  );
};

export default SavedNewsHeader;
