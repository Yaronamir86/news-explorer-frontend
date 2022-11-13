import React from 'react'
import Navigation from '../Navigation/Navigation';
import SavedNews from '../SavedNews/SavedNews';
import './SavedNewsHeader.css'
import { useHomePage } from '../../contexts/homePageContext';

const SavedNewsHeader = () => {
  const isHome = useHomePage();
  return (
    
    <div className="SavedNews">
      <Navigation isHome={!isHome}/>
    <div className='savedNewsHeader__wrapper'>
        <p className='savedNewsHeader__page'>Saved articles</p>
        <h2 className='savedNewsHeader__title'>Elise, you have 5 saved articles</h2>
        <p className='savedNewsHeader__info'>By keywords:<span className='savedNewsHeader__span'>Nature, Yellowstone, and 2 other</span></p>
    </div>
    <SavedNews/>
    </div>
  )
}

export default SavedNewsHeader;