import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HelmetProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

const SEOHelmet: React.FC<HelmetProps> = ({
  title = 'Workbench India - Digital Solutions Partner',
  description = 'Workbench India is a leading digital solutions partner offering full-stack development, UI/UX design, and scalable software architecture services.',
  keywords = ['digital solutions', 'software development', 'UI/UX design', 'full-stack development', 'web development'],
  image = '/logo.png'
}) => {
  return (
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="author" content="Workbench India" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://workbenchindia.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://workbenchindia.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHelmet;
