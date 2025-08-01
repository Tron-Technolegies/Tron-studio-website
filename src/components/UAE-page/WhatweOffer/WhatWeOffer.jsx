import React from 'react'
import './WhatWeOffer.css'

export default function WhatWeOffer() {
  return (
    <div>
      <section className='whatweoffer-section'>
        <div className='whatweoffer-text'>
            <h1>What <br /> we offer</h1>
            <p>At Tron Studio, we don’t just make videos—we craft visual <br />stories that connect, convert, and leave a lasting impression.</p>
        </div>

        <div className='whatweoffer-card-container'>
            <div className='whatweoffer-card'>
                <div className='whatweoffer-card-img'>
                    <img src="/who-we-are-img.jpg" alt="" />
                </div>
                <div className='whatweoffer-card-text'>
                    <div className='whatweoffer-card-title'> <h3>Product Video Production</h3></div>
                    <div className='whatweoffer-card-desc'><p>Showcase your product in action with cinematic clarity and compelling storytelling. Ideal for websites, Amazon listings, or ads.</p></div>
                </div>
            </div>

                        <div className='whatweoffer-card'>
                <div className='whatweoffer-card-img'>
                    <img src="/who-we-are-img.jpg" alt="" />
                </div>
                <div className='whatweoffer-card-text'>
                    <div className='whatweoffer-card-title'> <h3>Product Video Production</h3></div>
                    <div className='whatweoffer-card-desc'><p>Showcase your product in action with cinematic clarity and compelling storytelling. Ideal for websites, Amazon listings, or ads.</p></div>
                </div>
            </div>
                        <div className='whatweoffer-card'>
                <div className='whatweoffer-card-img'>
                    <img src="/who-we-are-img.jpg" alt="" />
                </div>
                <div className='whatweoffer-card-text'>
                    <div className='whatweoffer-card-title'> <h3>Product Video Production</h3></div>
                    <div className='whatweoffer-card-desc'><p>Showcase your product in action with cinematic clarity and compelling storytelling. Ideal for websites, Amazon listings, or ads.</p></div>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}
