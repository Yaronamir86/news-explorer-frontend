import React from "react";
import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div className="preloader">
      <i className="preloader__circle"></i>
      <p className="preloader__paragraph">Searching for news...</p>
    </div>
  );
};

export default PreLoader;
