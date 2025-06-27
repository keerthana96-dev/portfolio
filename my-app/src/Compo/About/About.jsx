import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.svg'
const About = () => {
  return (

    
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=''/>
            
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile} alt='image'/>
               

            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a dedicated Software Developer with hands-on experience at Acquiring Technology, specializing in front-end development and the MERN stack (MongoDB, Express.js, React.js, Node.js). I've worked on real-world projects using HTML, CSS, JavaScript, and React.js, building responsive interfaces and full-stack applications. With a strong grasp of web technologies, I focus on writing clean, maintainable code and continually seek opportunities to learn, grow, and tackle new challenges in web development.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React js</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Tailwind</p><hr style={{width:"50%"}}/></div>
                 <div className="about-skill"><p>MERN STACK</p><hr style={{width:"30%"}}/></div>
            </div>
        </div>
    </div>
    <div className="about-achievements"><div className="about-achievement">
        <h1>1+</h1>
        <p>YEAR EXPERIENCE</p>
    </div>
    <hr/>
    <div className="about-achievement">
        <h1>3+</h1>
        <p>PROJECTS COMPLETED </p>
    </div>
    <hr/>
    
    <div className="about-achievement">
        <h1>3+</h1>
        <p>TECHNOLOGIES USED</p>
        </div></div>
    
    </div>
  )
  }

export default About