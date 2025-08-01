import React from 'react'
import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <div>
      <section className='howitworks-section'>
        <div className='howitworks-container'>
            <div >
                <h3 className='howitworks-header'>How it works</h3>
                <h1 className='howitworks-title'>Where your<br /><span className='story-comes'>story comes</span> to life. </h1>
                <p className='howitworks-description'>Multiple professional sets and versatile spaces ready for your next production.</p>
            </div>
            <div><a href="#" className='Explore-button'>Explore our studio → </a></div>
        </div>
        <div className='howitworks-card-grid'>
        <div className='howitworks-card'>
          <img src='/img1.jpg' alt='Equipment' />
          <div className='card-overlay'>
            <h4>PROFESSIONAL EQUIPMENT ON HAND</h4>
            <p>Our studio is fully equipped with top-tier gear, allowing for more tools on hand than typical external shoots.</p>
          </div>
        </div>
        <div className='howitworks-card'>
          <img src='/img2.jpg' alt='Versatile Spaces' />
          <div className='card-overlay'>
            <h4>VERSATILE SPACES WITH ENDLESS POSSIBILITIES</h4>
            <p>Film in customizable sets, like kitchens and bedrooms, with access to props, all in one convenient location.</p>
          </div>
        </div>
        <div className='howitworks-card'>
          <img src='/img3.jpg' alt='Cost Savings' />
          <div className='card-overlay'>
            <h4>COST SAVINGS WITHOUT COMPROMISE</h4>
            <p>Avoid the expense of renting multiple or unique locations while still achieving a high-quality production.</p>
          </div>
        </div>
        <div className='howitworks-card'>
          <img src='/img4.jpg' alt='Quick Setups' />
          <div className='card-overlay'>
            <h4>QUICK SETUPS FOR MORE FILMING TIME</h4>
            <p>Efficient setups mean more time is spent on filming, capturing the best possible content.</p>
          </div>
        </div>
      </div>
      </section>
    </div>

    
  )
}
  