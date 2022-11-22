/* eslint-disable no-sequences */
import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const { cards } = require("../../cards");

const NewsCardList = () => {
  return (
    <ul className="news-card-list">
      {cards.map((card) => (
        <li className="news-card-list__item">
          <NewsCard card={card} key={card.id} />
        </li>
      ))}
    </ul>
  );
};

export default NewsCardList;
