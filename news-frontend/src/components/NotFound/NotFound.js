import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found__container'>
      <div className='not-found__icon'></div>
      <h2 className='not-found__title'>Nothing found</h2>
      <p className='not-found__paragraph'>Sorry, but nothing matched 
your search terms.</p>
      </div>
  )
}

export default NotFound;
