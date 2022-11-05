import React from 'react'
import "./About.css";
import avatar from '../../images/avatar.png';

const About = () => {
  return (
      <div className="about__wrapper">
        <img className='about__avatar' src={avatar} alt='about avatar'/>
        <div className='about__content'>
          <h1 className='about__header'>About the author</h1>
          <p className='about__paragraph'>This block describes the project author. Here you should indicate your name,
           what you do, and which development technologies you know.</p>
           <p className='about__paragraph'>You can also talk about your experience with Practicum,
            what you learned there, and how you can help potential customers.</p>
        </div>
        </div>
  )
}

export default About;
