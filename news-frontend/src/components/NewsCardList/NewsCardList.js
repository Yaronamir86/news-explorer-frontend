/* eslint-disable no-sequences */
import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const { cards } = require('../../cards');

const NewsCardList = () => {

  return (
    <div className ="news-card-list__container">
      <ul className="news-card-list__list">
        {cards.map((card) => {
          return <NewsCard card={card} key={card.id}/>;
        })}
      </ul>
      <button className="news-card-list__button">Show more</button>
      </div>
  );
};

export default NewsCardList;