import React from 'react';
import './ServiceSection.css';
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Product Videos",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      id: 2,
      title: "Explainer Videos", 
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      id: 3,
      title: "Social Media Ads",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      id: 4,
      title: "Brand Films",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      id: 5,
      title: "Testimonial Videos",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      id: 6,
      title: "Youtube Ads & Reels",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      id: 7,
      title: "Corporate Videos",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    }
  ];

  return (
    <>
      <section className="services-section">
        <div className="container">
          {/* Header */}
          <div className="header">
            <h2 className="title">our services</h2>
            <p className="subtitle">
              At Trim Studio, we don't just make videos—we craft visual stories that connect, convert, and leave a lasting impression.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                {/* Image */}
                <div className="image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                </div>

                {/* Content */}
                <div className="card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <div className="arrow-container">
                    <svg 
                      className="arrow-icon" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;