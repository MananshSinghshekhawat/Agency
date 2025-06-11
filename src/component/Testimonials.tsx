/*import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => (
  <section id="testimonials" className="testimonials-section">
    <div className="container">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-wrapper">
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Outstanding service and amazing results! Highly recommended.”
          </p>
          <footer className="testimonial-footer">Jane Doe, CEO of Company X</footer>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Professional team with great attention to detail.”
          </p>
          <footer className="testimonial-footer">John Smith, CTO of Startup Y</footer>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;


import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: "“Outstanding service and amazing results! Highly recommended.”",
    author: "Jane Doe, CEO of Company X",
  },
  {
    text: "“Professional team with great attention to detail.”",
    author: "John Smith, CTO of Startup Y",
  },
  {
    text: "“Excellent work and great communication.”",
    author: "Emily Chen, Founder of Z",
  },
];
*/

import React, { useState } from 'react';
import './Testimonials.css';

const partners = [
  "Reliance Industries",
  "Tata Consultancy",
  "Infosys",
  "HDFC Bank",
  "Mahindra Group"
];

const testimonials = [
  {
    text: "“Outstanding service and amazing results! Highly recommended.”",
    author: "Jane Doe, CEO of Company  Stealth ",
  },
  {
    text: "“Professional team with great attention to detail.”",
    author: "John Smith, CTO of Company OSTTRA ",
  },
  {
    text: "“They exceeded our expectations at every step.”",
    author: "Priya Patel, Founder of Archezign Solutions",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => setCurrent((current + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-grid">
        {/* Left Side */}
        <div className="clients-left">
          <h3 className="clients-title">Our Clients</h3>
          <ul className="partners-list">
            {partners.map((name, idx) => (
              <li key={idx} className="partner-name">{name}</li>
            ))}
          </ul>
          <div className="trusted-partner-label">Your Trusted Partner</div>
        </div>
        {/* Right Side */}
        <div className="testimonials-right">
          <h2 className="section-title red-title">Testimonials</h2>
          <div className="testimonial-slider">
            <button className="slider-btn left" onClick={prevTestimonial} aria-label="Previous testimonial">&#8592;</button>
            <div className="testimonial-card unique">
              <p className="testimonial-text">{testimonials[current].text}</p>
              <footer className="testimonial-footer">{testimonials[current].author}</footer>
            </div>
            <button className="slider-btn right" onClick={nextTestimonial} aria-label="Next testimonial">&#8594;</button>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`dot${idx === current ? ' active' : ''}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
