/* eslint-disable no-sequences */
import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
 import { useArticles } from "../../contexts/ArticleContext";
 import Preloader from "../PreLoader/PreLoader";
 import NotFound from "../NotFound/NotFound";
 


const NewsCardList = () => {
  const { cards, toShowMore, isLoading, notFound} = useArticles();


  return (
    <>
    <ul className="news-card-list">
    {isLoading && <Preloader/>}
    {notFound && <NotFound/>}
      {cards.slice(0, toShowMore).map((card, index) => {
        return (
        <li key={index} className="news-card-list__item">
          <NewsCard 
          image={card.urlToImage}
            title={card.title}
            text= {card.content}
            date={card.publishedAt}
            currentCard={card}
            source={card.source.name}
            />
        </li>
      )}
      )}
    </ul>
    </>
  );
};

export default NewsCardList;