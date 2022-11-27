import React from "react";
import { useState } from "react";
import "./SearchForm.css";
import { useArticles } from "../../contexts/ArticleContext";

const SearchForm = () => {
 
  const [search, setKeyword] = useState("");
  const { getCardsByKeyWord } = useArticles();
 

  function handleChange(e) {
    const { value } = e.target;
    setKeyword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getCardsByKeyWord(search);
    
  }

  return (
    <section className="Search">
      <form
        action="submit"
        className="search__form"
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <div className="search__wrapper">
          <input
            type="text"
            placeholder="Enter topic"
            className="search__input"
            name="keyword"
            value={search || ""}
            onChange={handleChange}
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
