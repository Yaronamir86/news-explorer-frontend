import React from "react";
import { useArticles } from "../../contexts/ArticleContext";
import About from "../About/About";
import Header from "../Header/Header";
import SearchResults from "../SearchResults/SearchResults";
import NotFound from '../NotFound/NotFound';
import PreLoader from '../PreLoader/PreLoader';
import "./Main.css";

const Main = () => {

  const {cards, notFound, isLoading} = useArticles();
  return (
    <main className="main">
      <Header/>
      {cards.length > 1 && ( <SearchResults /> )}
      {notFound && <NotFound/>}
      {isLoading && <PreLoader/>}
      <About />
    </main>
  );
};

export default Main;
