import React from 'react'
import './ReadySection.css'

export default function ReadySection() {
  return (
    <div>
      <section className='ready-section'>
        <div className='ready-container1'>
            <h1 className='ready-title'>Ready to <br /> bring your</h1>
            <img src="/ready-section-icon.png" alt="" className='ready-icon'/>
            <img src="/ready-img.png" alt="" className='ready-img' />
        </div>
        <div className="ready-container2">
            <p className='ready-desc'>
                We handle a variety of projects including short films, commercials,<br /> music videos, and documentary projects. <br /> Each project is designed to create a strong visual impact.
            </p>
            <h2 className='ready-h2'>ideas to <br /> life?</h2>
        </div>

      </section>
    </div>
  )
}
