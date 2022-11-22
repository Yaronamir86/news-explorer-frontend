import React from "react";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <section className="Search">
    <form action="submit" className="search__form" autoComplete="off">
      <div className="search__wrapper">
        <input
          type="text"
          placeholder="Enter topic"
          className="search__input"
        ></input>
        <button className="search__button" type="submit">
          Search
        </button>
      </div>
    </form>
    </section>
  );
};

export default SearchForm;
