import React, { useContext, useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePageContext = createContext();

const HomeContextProvider = ({ children }) => {
    const [isHome, setIsHome] = useState(true);
    const location = useLocation();


    useEffect(() => {
        location.pathname !== '/' ? setIsHome(false) : setIsHome(true);
    }, [location])

    return (
        <HomePageContext.Provider value={isHome}>{children}</HomePageContext.Provider>
    );
};


export default HomeContextProvider; 

export const useHomePage = () => {
    const isHome = useContext(HomePageContext);
    return{ isHome};
}