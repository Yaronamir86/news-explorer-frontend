import React from "react";
import "./NewsCard.css";

const card = ({card}) => {
  return (
    <li className="news-card-list__item">
    <article className="card" key={card.id}>
      <div
        className="card__image-container"
        style={{ backgroundImage: `url(${card.image})` }}
      ></div>
      <div className="card__text-container">
        <p className="card__date">{card.date}</p>
        <h2 className="card__title">{card.title}</h2>
        <p className="card__text">{card.text}</p>
        <p className="card__keywords">{card.keywords}</p>
      </div>
    </article>
    </li>
  );
};

export default card;
