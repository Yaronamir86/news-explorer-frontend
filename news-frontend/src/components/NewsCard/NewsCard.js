import React from "react";
import "./NewsCard.css";
import { useHomePage } from "../../contexts/HomePageContext";
import { useLoggedIn } from "../../contexts/LoggedInContext";
import { useModal } from "../../contexts/ModalContext";

const NewsCard = ({ card }) => {
  const [showToolTip, setShowToolTip] = React.useState(false);

  const { isHome } = useHomePage();
  const { isLoggedIn } = useLoggedIn();
  const { openModal } = useModal();

  const handleMouseOn = () => {
    !isLoggedIn && setShowToolTip(true);
  };
  const handleMouseOut = () => {
    setShowToolTip(false);
  };

  const handleButtonClick = () => {
    isHome && !isLoggedIn && openModal("signin");
    isHome && isLoggedIn && console.log("save card");
    !isHome && console.log("delete card");
  };


  return (
    <li className="news-card-list__item">
      <article className="news-card" key={card.id}>
        <div
          className="news-card__image-container"
          style={{ backgroundImage: `url(${card.image})` }}
        ></div>
        <div className="news-card__text-container">
          <p className="news-card__date">{card.date}</p>
          <h2 className="news-card__title">{card.title}</h2>
          <p className="news-card__text">{card.text}</p>
          <p className="news-card__keywords">{card.source}</p>
        </div>
        {showToolTip && (
          <button className="news-card__tooltip">
            Sign in to save articles
          </button>
        )}
        <button
          className={`news-card__button ${
            isHome ? "news-card__button-save" : "news-card__button-trash"
          }`}
          aria-label={isHome ? "save article" : "delete article"}
          onMouseEnter={handleMouseOn}
          onMouseLeave={handleMouseOut}
          onClick={handleButtonClick}
        ></button>
        {!isHome && <p className="news-card__keyword">{card.keyword}</p>}
      </article>
    </li>
  );
};

export default NewsCard;
