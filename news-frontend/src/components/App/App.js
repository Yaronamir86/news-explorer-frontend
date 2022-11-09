import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Navigation from "../Navigation/Navigation";
import LoginPopup from "../LoginPopup/LoginPopup";


function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);


  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
    console.log('open!');
  };
  return (
    <div className="app">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Header 
        handleLoginClick={handleLoginClick}/>
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
      <LoginPopup
            isOpen={isLoginPopupOpen}
            />
    </div>
  );
}

export default App;
