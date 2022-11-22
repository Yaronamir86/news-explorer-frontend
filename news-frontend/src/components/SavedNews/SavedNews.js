import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

const SavedNews = () => {
  return (
    <main className="saved-news">
      <NewsCardList />
    </main>
  );
};

export default SavedNews;
