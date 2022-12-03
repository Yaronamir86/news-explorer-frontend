import React from "react";
import "./NewsCard.css";
import { useHomePage } from "../../contexts/HomePageContext";
import { useLoggedIn } from "../../contexts/LoggedInContext";
import { useModal } from "../../contexts/ModalContext";
import { useArticles } from "../../contexts/ArticleContext";

const NewsCard = (article) => {
  const [showToolTip, setShowToolTip] = React.useState(false);
  const [isSave, setIsSave] = React.useState(false)
  const { isHome } = useHomePage();
  const { isLoggedIn } = useLoggedIn();
  const { openModal } = useModal();
  const { handleSaveCard, handleDeleteCard, isSaveCards } = useArticles();

  

  React.useEffect(() => {
    const checkIfSaved = () => {
      const articleIsSaved = isSaveCards.find((article) => {
        return article.link === article.url;
      });
  
      articleIsSaved ? setIsSave(true) : setIsSave(false);
    };
    if (!isHome) {
      return;
    }
    checkIfSaved();
  },[isSaveCards, article.url, isHome]);


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
  }

  const handleButtonClick = () => {
    isHome && !isLoggedIn && openModal("signin");
    isHome && isLoggedIn && handleSaveArticles();
    !isHome && handleDeleteCard();
  };

  const realDate = new Date(article.date);

  return (
    <article className="news-card">
      <div
        className="news-card__image-container"
        style={{ backgroundImage: `url(${article.image})` }}
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
          isHome ? `news-card__button-save ${
            isSave ? 'news-card__button-save_active' : ''}` : "news-card__button-trash"
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
