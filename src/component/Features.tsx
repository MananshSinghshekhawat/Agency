import React from 'react';
import './Features.css'; // Import the CSS file

const Features: React.FC = () => {
  const leftFeatures = [
    {
      icon: '⚖️',
      title: 'Scalability',
      description: 'Our solutions grow seamlessly as your business expands.',
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Robust protection to keep your data safe and compliant.',
    },
  ];

  const rightFeatures = [
    {
      icon: '🔗',
      title: 'Integration',
      description: 'Connect with your favorite tools and platforms easily.',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Optimized for all screen sizes — mobile to desktop.',
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="features-title">Features</h2>
          <p className="text-secondary fs-5">
            Discover the core strengths we bring to every project.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="row align-items-center text-center">
          {/* Left Features */}
          <div className="col-md-4 d-flex flex-column gap-4">
            {leftFeatures.map((feature, index) => (
              <div key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h5 className="fw-bold mt-2">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="col-md-4 my-4 my-md-0">
            <img
              src="/image.png"
              alt="Feature Illustration"
              className="img-fluid feature-image"
            />
          </div>

          {/* Right Features */}
          <div className="col-md-4 d-flex flex-column gap-4">
            {rightFeatures.map((feature, index) => (
              <div key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h5 className="fw-bold mt-2">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
