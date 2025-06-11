import React from 'react';
import './Services.css';

const services = [
  { title: 'Full-Stack Web Development', icon: 'laptop', description: 'Building fast, scalable web applications with React, Node.js & MongoDB.' },
  { title: 'Mobile App Development', icon: 'phone', description: 'Cross-platform mobile apps crafted with React Native & Flutter.' },
  { title: 'UI/UX Design', icon: 'brush', description: 'Designing intuitive and beautiful user experiences.' },
  { title: 'Cloud Integration', icon: 'cloud-upload', description: 'Deploying and managing apps on AWS, Firebase, and other cloud platforms.' },
  { title: 'Consulting & Support', icon: 'chat-dots', description: 'Providing expert advice and round-the-clock technical support.' },
  { title: 'Webflow Development', icon: 'columns-gap', description: 'Creating pixel-perfect no-code websites with Webflow.' },
  { title: 'WordPress Development', icon: 'wordpress', description: 'Custom themes and plugins to power your WordPress site.' },
  { title: 'E-commerce Solutions', icon: 'cart', description: 'Building secure and scalable e-commerce platforms.' },
  { title: 'AI integration', icon: 'robot', description: 'Integrating AI capabilities into your applications for smarter solutions.' },
  {title: 'API Development', icon: 'laptop', description: 'Creating robust APIs for seamless integration and data exchange.' },
  { title: 'Digital Marketing', icon: 'megaphone', description: 'Driving traffic and engagement through SEO and social media.' },
  { title: 'React & TypeScript Projects', icon: 'code-slash', description: 'Robust, type-safe frontends with React & TypeScript.' },
];

const Services: React.FC = () => (
  <section id="services" className="services-modern-section">
    <div className="container">
      <div className="services-header">
        <h2 className="services-title">🚀 Services</h2>
        <p>
          Empowering businesses with next-gen solutions, powerful technology, and world-class designs.
        </p>
      </div>

      <div className="services-grid">
        {services.map(({ title, icon, description }, idx) => (
          <div key={idx} className="service-modern-card">
            <div className="icon-wrapper">
              <i className={`bi bi-${icon}`}></i>
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
