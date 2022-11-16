import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import LoginPopup from "../LoginPopup/LoginPopup";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import InfoToolTip from "../InfoToolTip/InfoToolTip";



function App() {

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader/>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
      <LoginPopup/>
      <RegisterPopup/>
     <InfoToolTip/>
    </div>
  );
}

export default App;
