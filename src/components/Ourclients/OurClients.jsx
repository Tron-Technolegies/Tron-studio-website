import React from 'react'
import './OurClients.css'

export default function OurClients() {
  return (
    <div>
      <section className='ourclients-section'>
        <div className='ourclients-container'>
            <div className='ourclients-content-container'>
                <h3 className='ourclients-header'>OUR CLIENTS</h3>
                <h1 className='ourclients-title'>Calling all pioneers,visionaries,<br /> and trailblazers.</h1>
                <p className='ourclients-description'>Whether you’re building a brand from the ground up or writing the next chapter of a success story, we’re just as invested as you are. So contact us to see how our expertise can boost your brand. </p>

                <a href="#" className='ourclients-button'>Contact us →</a>
            </div>

            <div className='ourclients-image-container'>
                <img src="/our-clients-img.png" alt="" />
               
            </div>
        </div>

      </section>
    </div>
  )
}
