import React from 'react'
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
// import NotFound from '../NotFound/NotFound';
// import PreLoader from '../PreLoader/PreLoader';
import "./Main.css";

const Main = () => {
  return (
    <main className='main'>
      <div className="main-search__container">
      <h1 className='main__title'>Search results</h1>
      <NewsCardList/>
      <button className="main__button">Show more</button>
      </div>
      {/*<NotFound/>*/}
      {/*<PreLoader/>*/}
      <About/>
      </main>
  )
}

export default Main;
