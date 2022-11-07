import React from "react";
import "./NewsCard.css";

const card = ({card}) => {
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
        <p className="news-card__keywords">{card.keyword}</p>
      </div>
    </article>
    </li>
  );
};

export default card;
