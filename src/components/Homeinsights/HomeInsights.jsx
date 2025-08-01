import React from 'react';
import './HomeInsights.css';

export default function HomeInsights() {
  const blogs = [
    {
      id: 1,
      category: 'Design',
      title: 'How collaboration makes us better designers',
      description: 'Collaboration can make our teams stronger, and our individual designs better.',
      author: 'Natalie Craig',
      date: '14 Jan 2025',
      image: '/who-we-are-img.jpg',
      authorImage: '/author1.jpg'
    },
    {
      id: 2,
      category: 'Product',
      title: 'Our top 10 Javascript frameworks to use',
      description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
      author: 'Drew Cano',
      date: '14 Jan 2025',
      image: '/blog2.jpg',
      authorImage: '/Sampleteammember.png'
    },
    {
      id: 3,
      category: 'Customer Success',
      title: 'Podcast: Creating a better CX Community',
      description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
      author: 'Orlando Diggs',
      date: '14 Jan 2025',
      image: '/blog3.jpg',
      authorImage: '/author3.jpg'
    },
    {
      id: 4,
      category: 'Customer Success',
      title: 'Podcast: Creating a better CX Community',
      description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
      author: 'Orlando Diggs',
      date: '14 Jan 2025',
      image: '/Sampleteammember.png',
      authorImage: '/author3.jpg'
    }
  ];

  return (
    <section className="hi-section">
      <h3 className="hi-subtitle">From our blog</h3>
      <div className="hi-header-row">
        <h1 className="hi-main-heading">
          Check out our resources to <br /> get started with video marketing.
        </h1>
        <button className="hi-read-more-btn">Read more blogs →</button>
      </div>

      <div className="hi-blog-grid">
        {blogs.map((blog) => (
          <div className="hi-blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="hi-blog-image" />
            <div className="hi-blog-content">
              <span className="hi-blog-category">{blog.category}</span>
              <h3 className="hi-blog-title">
                {blog.title} <span className="hi-arrow">↗</span>
              </h3>
              <p className="hi-blog-description">{blog.description}</p>
              <div className="hi-blog-author">
                <img src={blog.authorImage} alt={blog.author} className="hi-author-image" />
                <div>
                  <p className="hi-author-name">{blog.author}</p>
                  <p className="hi-author-date">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
