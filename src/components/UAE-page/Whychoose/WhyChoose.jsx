import React from 'react'
import "./WhyChoose.css"
export default function WhyChoose() {
  return (
    <div>
      <section className='whychoose-section' id='whychoose'>
        <div className='whychoose-container'>
            <div className='whychoose-content-container'>
                <h1 className='whychoose-title'>Why <br /> Dubai Brands <br /> Choose Us</h1>
                <div className='whychoose-description-container'>
                    <p className='whychoose-description'>At Tron Studio, we don’t just make videos—we craft visual
                      stories that connect, convert, and leave a lasting impression.
                      As a full-service marketing video agency based in Kerala, we help
                      brands grow using high-quality, strategy-driven content</p>
                </div>
                <div className='whychoose-button-container'><a href="#" className='whychoose-button'>Contact us →</a></div>
            </div>

            <div className='whychoose-right-container'>
              <div className='box-container'>
              <div className="whychoose-box"><p>Local crew,global quality</p></div>
              <div className="whychoose-box"><p>Full creative direction from start to finish</p></div>
              </div>

              <div className='box-container'>
              <div className="whychoose-box"><p>Rapid turnaround and flexible pricing</p></div>
              <div className="whychoose-box"><p>Video strategy designed to convert</p></div>
              </div>

            </div>
      </div>

      </section>
    </div>
  )
}
