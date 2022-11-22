import React from "react";
import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = () => {
  return (
    <div className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <NewsCardList />
      <button className="search-results__button">Show more</button>
    </div>
  );
};

export default SearchResults;
