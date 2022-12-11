import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import ModalContextProvider from "./contexts/ModalContext";
import HomeContextProvider from "./contexts/HomePageContext";
import LoggedInContextProvider from "./contexts/LoggedInContext";
import { BrowserRouter } from "react-router-dom";
import ArticleContextProvider from "./contexts/ArticleContext";
import UserContextProvider from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
    <HomeContextProvider>
      <LoggedInContextProvider>
        <ModalContextProvider>
          <ArticleContextProvider>
          <App />
          </ArticleContextProvider>
        </ModalContextProvider>
      </LoggedInContextProvider>
    </HomeContextProvider>
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
