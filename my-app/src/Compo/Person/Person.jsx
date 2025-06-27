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
        <h1> <span>I am Keerthana,</span> Software developer based in chennai.</h1>
        <p>Passionate about building clean, responsive web applications using React and the MERN stack. Currently looking for opportunities to grow professionally and contribute to impactful projects.</p>
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
