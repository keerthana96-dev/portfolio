// 

import React from 'react'
import './Person.css'
import about_profile from '../../assets/about_profile.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Person = () => {

  const handleResumeClick = () => {
   window.open('/R.keerthana%20software%20developer.pdf', '_blank');
// Replace with actual resume URL
  };

  return (
    <div id='home' className='person'>
        <img src={about_profile} alt=""  />
        <h1> <span>I am Keerthana,</span> frontend developement trainer based in chennai.</h1>
        <p>I’m a passionate Front-End Developer expertise in HTML, CSS, JavaScript and mordern library Reactjs, specialize in training aspiring developers and professionals to master front-end technologies.</p>
        <div className="person-action">
            <div className="person-connect"> 
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect with me 
              </AnchorLink> 
            </div>
            <div className="person-resume" onClick={handleResumeClick}>
              My Resume
            </div>
        </div>
    </div>
  )
}

export default Person
