import React from 'react';
import Helmet from './Helmet';

const NotFound: React.FC = () => {
  return (
    <div className="container py-5">
      <Helmet
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
      />
      
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn btn-primary btn-lg">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
