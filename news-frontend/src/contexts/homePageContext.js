import { useContext, useState, createContext, useEffect } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

const HomePageContext = createContext();

const HomeContextProvider = ({ children }) => {
    const [isHome, setIsHome] = useState(true);
    const location = useLocation();


    useEffect(() => {
        location.pathname !== '/saved-news' ? setIsHome(true) : setIsHome(false);
    },[ location]);

    return (
        <HomePageContext.Provider value={isHome}>{children}</HomePageContext.Provider>
    );
};


export default HomeContextProvider; 

export const useHomePage = () => {
    const isHome = useContext(HomePageContext);
    return{ isHome};
}