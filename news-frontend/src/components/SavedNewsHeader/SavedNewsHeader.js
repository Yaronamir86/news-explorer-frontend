import React from 'react'

const SavedNewsHeader = () => {
  return (
    <div className='savedNewsHeader__wrapper'>
        <p className='savedNewsHeader__page'>Saved articles</p>
        <h2 className='savedNewsHeader__title'>Elise, you have 5 saved articles</h2>
        <p className='savedNewsHeader__info'>By keywords:<span className='savedNewsHeader__info-span'>Nature, Yellowstone, and 2 other</span> Nature, Yellowstone, and 2 other</p>
    </div>
  )
}

export default SavedNewsHeader;