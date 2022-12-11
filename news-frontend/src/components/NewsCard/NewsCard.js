import React, { useState } from "react";
import "./NewsCard.css";
import { useHomePage } from "../../contexts/HomePageContext";
import { useLoggedIn } from "../../contexts/LoggedInContext";
import { useModal } from "../../contexts/ModalContext";
import { useArticles } from "../../contexts/ArticleContext";

const NewsCard = (article) => {
  const [showToolTip, setShowToolTip] = React.useState(false);
  const [isSave, setIsSave] = React.useState(false);
  const { isHome } = useHomePage();
  const { isLoggedIn } = useLoggedIn();
  const { openModal } = useModal();
  const { handleSaveCard, handleDeleteCard, isSaveCards } = useArticles();

  React.useEffect(() => {
    const checkIfSaved = () => {
      const articleIsSaved = isSaveCards.find((isSaveCards) => {
        return article.link === isSaveCards.link;
      });
      articleIsSaved ? setIsSave(true) : setIsSave(false);
    };
    if (!isHome) {
      return;
    }
    checkIfSaved();
  }, [isSaveCards, article, isHome]);

  const handleMouseOn = () => {
    !isLoggedIn && setShowToolTip(true);
    !isHome && isLoggedIn && setShowToolTip(true);
  };
  const handleMouseOut = () => {
    setShowToolTip(false);
  };

  const handleSaveArticles = () => {
    handleSaveCard(article);
    setIsSave(true);
    console.log(isSave);
  };

  const handleButtonClick = () => {
    isHome && !isLoggedIn && openModal("signin");
    isHome && isLoggedIn && handleSaveArticles();
    !isHome && handleDeleteCard(article._id);
  };

  const realDate = new Date(article.date);

  const [defaultImage] = useState(
    "https://images.unsplash.com/photo-1670520616940-63680640b0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
  );

  return (
    <article className="news-card">
      <div
        className="news-card__image-container"
        style={{
          backgroundImage: `url(${
            article.image === undefined ? defaultImage : article.image
          })`,
        }}
      ></div>
      <div className="news-card__text-container">
        <p className="news-card__date">{realDate.toDateString()}</p>
        <h2 className="news-card__title">{article.title}</h2>
        <p className="news-card__text">{article.text}</p>
        <a
          target="_blank"
          className="news-card__source"
          href={article.url}
          rel="noreferrer"
        >
          {article.source}
        </a>
      </div>
      {showToolTip && (
        <button className="news-card__tooltip">
          {isHome ? "Sign in to save articles" : "Remove from saved"}
        </button>
      )}
      <button
        className={`news-card__button ${
          isHome
            ? `news-card__button-save ${
                isSave ? "news-card__button-save_active" : ""
              }`
            : "news-card__button-trash"
        }`}
        aria-label={isHome ? "save article" : "delete article"}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOut}
        onClick={handleButtonClick}
      ></button>
      {!isHome && <p className="news-card__keywords">{article.keyword}</p>}
    </article>
  );
};

export default NewsCard;
