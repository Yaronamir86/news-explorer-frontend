import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
//import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import LoginPopup from "../LoginPopup/LoginPopup";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import MobileMenu from "../MobileMenu/MobileMenu";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="app">
      <Switch>
        <ProtectedRoute path="/saved-news">
          <SavedNewsHeader />
        </ProtectedRoute>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
      <LoginPopup />
      <RegisterPopup />
      <InfoToolTip />
      <MobileMenu />
    </div>
  );
}

export default App;
