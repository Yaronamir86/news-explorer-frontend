import React from "react";
import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useArticles } from "../../contexts/ArticleContext";

const SearchResults = () => {
  const { setToShowMore } = useArticles();
  const addMore = () => {
    setToShowMore((prev) => (prev += 3))
  }

  return (
    <div className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <NewsCardList />
      <button
        className="search-results__button"
        onClick={addMore}
      >
        Show more
      </button>
    </div>
  );
};

export default SearchResults;
