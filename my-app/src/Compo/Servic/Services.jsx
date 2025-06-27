import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import './Services.css'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    

  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>Design and Development</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="services-container">
            {Services_Data.map((service, index)=>{
               
                
                return <div key={index} className='services-format'>
                    <h3>{service.s_no}</h3>
                    
                    
                    <a href={service.s_link} target="_blank" rel="noopener noreferrer">
                        <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
           </a>
                    

                </div>

            })}
        </div>
    </div>
  )
}

export default Services