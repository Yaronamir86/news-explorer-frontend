import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import ModalContextProvider from "./contexts/ModalContext";
import HomeContextProvider from "./contexts/HomePageContext";
import LoggedInContextProvider from "./contexts/LoggedInContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoggedInContextProvider>
      <ModalContextProvider>
        <HomeContextProvider>
          <App />
        </HomeContextProvider>
      </ModalContextProvider>
    </LoggedInContextProvider>
  </React.StrictMode>
);
