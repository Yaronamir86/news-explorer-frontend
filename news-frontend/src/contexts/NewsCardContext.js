import React from "react";
const{  createContext, useContext, } =  require('react');

const NewsCardContext = createContext();

const data = require('../cards')

const NewsCardContextProvider = ({children}) => {
    return (
        <NewsCardContext.Provider value={{ data }}>
        {children}
        </NewsCardContext.Provider>
    )
}

export default NewsCardContextProvider;

export const useArticles = () => {
  const { data }= useContext(NewsCardContext).data; 

  return { data };
}