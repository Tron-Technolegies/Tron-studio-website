import React from 'react';
import './ContactUs.css';
import { FaFacebookF, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="contact-wrapper">
      <p className="contact-label">Contact Us</p>
      <h1 className="contact-title">
        Let's Work <br /> Together!
      </h1>

      <div className="contact-row">
        <div className="contact-image">
          <img src="/contactus.png" alt="office" />
        </div>

        <div className="contact-info">
          <h3>Information</h3>
          <div className="info-block">
            <p className="label">ADDRESS</p>
            <p>8455 East Johns Crossing Suite<br />
              175 Johns Creek,<br />
              GA 30097 United States.</p>
          </div>
          <div className="info-block">
            <p className="label">Call us</p>
            <p>+1 2345 657823<br />+1 4523 234591</p>
          </div>
          <div className="info-block">
            <p className="label">Follow us</p>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaEnvelope />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      <div className="form-wrapper">
        <h2>Get In Touch</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email address" />
          <select>
            <option value="" disabled selected>What’s services are you looking for?</option>
            <option value="commercial">Creative Commercial</option>
            <option value="video">Product Videos</option>
            <option value="photo">Model Photography</option>
          </select>
          <textarea placeholder="Your project description"></textarea>
          <button type="submit">Send message ↗</button>
        </form>
      </div>
    </div>
  );
}
