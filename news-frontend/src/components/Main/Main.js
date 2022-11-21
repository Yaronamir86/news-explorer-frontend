import React from "react";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";
// import NotFound from '../NotFound/NotFound';
// import PreLoader from '../PreLoader/PreLoader';
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <SearchResults />
      {/*<NotFound/>*/}
      {/*<PreLoader/>*/}
      <About />
    </main>
  );
};

export default Main;
