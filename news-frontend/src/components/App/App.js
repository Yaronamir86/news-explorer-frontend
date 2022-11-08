import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Header />
        <Main />
        </Route>
        <Route path="/saved-news">
          <Navigation/>
          <SavedNewsHeader/>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
