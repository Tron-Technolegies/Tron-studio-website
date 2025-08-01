import React from 'react'
import './RecentProjects.css'

export default function RecentProjects() {
  return (
    <div>
      <section className='recentprojects-section'>
        <div className='recentprojects-container'>
            <div className='recentprojects-content-container'>
                <div className='recentprojects-header'>
                    <h3>• Our Latest Work</h3>
                </div>
                <div className='recentprojects-title'>
                    <h1>Recent<br/>Projects</h1>
                </div>
                <div className='recentprojects-button'>
                    <a href="#" className='recentprojects-button'>View all →</a>
                </div>
            </div>

            <div className='recentprojects-image-container'>
                <div className='project1 project-tall'>
                    <a href="#">
                        <img src="/elder-tech.png" alt="" />
                        <p>ELDER TECH →</p>
                    </a>
                </div>
                
                <div className='project1 project-short'>
                    <a href="#">
                        <img src="/mystic-haven.png" alt="" />
                        <p>MYSTIC HAVEN →</p>
                    </a>
                </div>
                
                <div className='project1 project-medium'>
                    <a href="#">
                        <img src="/sugar-stone.png" alt="" />
                        <p>SUGAR STONE →</p>
                    </a>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}