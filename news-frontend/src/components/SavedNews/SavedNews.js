import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

const SavedNews = () => {
  return (
    <main className="saved-news__container">
      <NewsCardList />
    </main>
  );
};

export default SavedNews;
