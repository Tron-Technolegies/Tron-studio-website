import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div>
        <section className='portfolio-section'>
            <div className='container'>
                <div>
                    <h3 className='portfolio-header'>Portfolio</h3>
                    <h1 className='portfolio-title'>We create beautiful,<br /><span className='practical-works'>practical works</span> </h1>
                </div>
                    <div><a href="#" className='portfolio-button'>View all works → </a></div>
            </div>

            <div className='portfolio-video-container'>

                <video
                  src="/hero-video.mp4"
                  autoPlay
                  muted
                  loop
                  className="portfolio-video"
                ></video>
                <video
                  src="/hero-video.mp4"
                  autoPlay
                  muted
                  loop
                  className="portfolio-video"
                ></video>

            </div>

      </section>

    </div>
  )
}
