import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Feedback.css';

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const feedbacks = [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Mickaël Grants",
      position: "CEO of Apples to Oranges",
      rating: 5
    },
    {
      id: 2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Mic",
      position: "CEO of Apples to Oranges",
      rating: 5
    },
    {
      id: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Mickaël",
      position: "CEO of Apples to Oranges",
      rating: 5
    },
    {
      id: 4,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Mickaël Gra",
      position: "CEO of Apples to Oranges",
      rating: 5
    },
    {
      id: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Mickaël Grant",
      position: "CEO of Apples to Oranges",
      rating: 5
    }
  ];

  const cardsPerView = 3; // Number of cards visible at once
  const maxIndex = Math.max(0, feedbacks.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div>
      <section className='feedback-section'>
        <div>
          <h3 className='feedback-title'>Feedback</h3>
          <h1 className='feedback-header'>Real feedback from <br />Our happy clients</h1>
        </div>
        <div className='feedback-slider'>
          <div 
            className='feedback-slider-inner'
            style={{ 
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              transition: 'transform 0.5s ease'
            }}
          >
            {feedbacks.map(feedback => (
              <div key={feedback.id} className='feedback-card'>
                <div className='feedback-content'>
                  <p>{feedback.content}</p>
                  <div className='feedback-author'>
                    <img src="path_to_image.jpg" alt={feedback.author} />
                    <div>
                      <h4>{feedback.author}</h4>
                      <p>{feedback.position}</p>
                    </div>
                  </div>
                </div>
                <div className='feedback-rating'>
                  {[...Array(feedback.rating)].map((_, i) => (
                    <span key={i} className='star'>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='slider-controls'>
          <button 
            className='prev' 
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>
          <button 
            className='next' 
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}