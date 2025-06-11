import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">

        {/* Header */}
        <div className="about-header">
          <h2>About Us</h2>
          <p>
            Workbench India is not just a software agency — we're your long-term digital partner in building modern, scalable, and innovative solutions.
          </p>
        </div>

        {/* Image Left, Text Right */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="/image2.png" alt="Team working" className="img-fluid about-image" />
          </div>
          <div className="col-md-6">
            <div className="about-text-box">
              <h3 className="text-primary fw-semibold mb-3">Who We Are</h3>
              <p>
                With <strong>2+ years</strong> in the industry, we’ve helped over <strong>30 clients</strong> across the globe with
                more than <strong>30 successful projects</strong>. Our <strong>10+ expert team members</strong> specialize in full-stack
                development, UI/UX design, mobile app development, and scalable software architecture.
              </p>
              <p>
                Whether you’re a startup or enterprise, we deliver tailored solutions that evolve with your business.
                At Workbench India, your idea becomes reality — with speed, precision, and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-5 about-features">
          <h4 className="text-center text-primary fw-bold mb-4">Why Choose Workbench India?</h4>
          <div className="row">
            {[
              { title: '🔧 Tailored Engineering', desc: 'We customize every project to your unique needs with clean, maintainable code.' },
              { title: '⏱ On-Time Delivery', desc: 'We follow agile methodology to keep you in control and deliver on schedule.' },
              { title: '💡 Creative UX/UI', desc: 'We build user experiences that engage, convert, and retain customers.' },
              { title: '🛠️ Full-Stack Experts', desc: 'From backend systems to frontend interfaces — we handle everything end-to-end.' },
              { title: '🔍 Transparent Process', desc: 'We believe in clear communication, frequent updates, and complete visibility.' },
              { title: '🤝 Long-Term Support', desc: 'Our team stays with you — even after launch — to keep things smooth and scalable.' },
            ].map((feature, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="text-secondary mb-0">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="row text-center mb-5 about-stats">
          {[
            { value: '2+', label: 'Years of Experience' },
            { value: '30+', label: 'Projects Delivered' },
            { value: '30+', label: 'Clients Worldwide' },
            { value: '10+', label: 'Expert Team Members' },
          ].map((stat, index) => (
            <div className="col-sm-6 col-md-3 mb-4" key={index}>
              <div className="card">
                <h3 className="card-title">{stat.value}</h3>
                <p className="text-secondary mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-4 about-values">
          <h4 className="text-center fw-bold text-primary mb-4">Our Core Values</h4>
          <div className="row">
            {[
              { title: '⚡ Innovation', desc: 'We lead with creativity to solve problems with fresh, modern tech.' },
              { title: '🤝 Collaboration', desc: 'We work with you, not just for you — every step of the way.' },
              { title: '🎯 Excellence', desc: 'We don’t just deliver — we exceed expectations.' },
            ].map((value, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="text-secondary">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
