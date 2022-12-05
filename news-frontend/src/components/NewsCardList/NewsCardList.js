/* eslint-disable no-sequences */
import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
 import { useArticles } from "../../contexts/ArticleContext";
 import Preloader from "../PreLoader/PreLoader";
 import NotFound from "../NotFound/NotFound";
 import { useHomePage } from "../../contexts/HomePageContext";
 


const NewsCardList = () => {
  const { cards, toShowMore, isLoading, notFound, isSaveCards, keyword} = useArticles();
  const { isHome } = useHomePage();



  return (
    <>
    <ul className="news-card-list">
    {isLoading && <Preloader/>}
    {notFound && <NotFound/>}
      {isHome ? cards.slice(0, toShowMore).map((article, index) => (
        <li key={index} className="news-card-list__item">
          <NewsCard 
          image={article.urlToImage}
            title={article.title}
            text= {article.description}
            date={article.publishedAt}
            source={article.source.name}
            keyword={keyword}
            link={article.url}
            />
        </li>
      ))
      : 
      isSaveCards.map((article, index) => (
        <li key={index} className="news-card-list__item">
          <NewsCard 
          image={article.image}
          title={article.title}
          text= {article.text}
          date={article.date}
          source={article.source}
          keyword={article.keyword}
          url={article.link}
          _id={article._id}
            />
        </li>
      ))}
    </ul>
    </>
  );
};

export default NewsCardList;