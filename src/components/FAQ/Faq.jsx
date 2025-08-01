import React, { useState } from 'react';
import './Faq.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is sccvr AI?", answer: "sccvr AI is an advanced artificial intelligence tool designed to enhance outreach and personalization." },
    { question: "What is AI personalization?", answer: "AI personalization involves tailoring content and interactions to individual user preferences using machine learning." },
    { question: "What's the impact of AI on prospecting?", answer: "AI improves prospecting by identifying high-potential leads and automating initial outreach efforts." },
    { question: "Can AI replace human interaction in outreach?", answer: "AI can assist but not fully replace human interaction, adding efficiency while maintaining personal touch." },
    { question: "How does AI improve outreach effectiveness?", answer: "AI enhances outreach by optimizing timing, content, and targeting for better engagement rates." },
    { question: "What are the benefits of using AI in outreach?", answer: "Benefits include increased efficiency, higher conversion rates, and scalable personalization." },
    { question: "Can AI help in optimizing outreach campaigns?", answer: "Yes, AI can analyze data to optimize campaign performance and suggest improvements." },
    { question: "How to generate personalized campaigns with lemnis AI?", answer: "lemnis AI allows you to input data to create tailored campaigns using its advanced algorithms." },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-header">Frequently <br /> Asked <br />Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}