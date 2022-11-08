import React from 'react'
import SavedNews from '../SavedNews/SavedNews';
import './SavedNewsHeader.css'

const SavedNewsHeader = () => {
  return (
    <div className="SavedNews">
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