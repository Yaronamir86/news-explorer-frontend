import React from 'react'
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import "./Main.css";

const Main = () => {
  return (
    <main className='main'>
      <NewsCardList/>
      <About/>
      </main>
  )
}

export default Main;
