import React from 'react';

// Import all your components
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Features from './component/Features';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';
import Footer from './component/Footer';
import  Whatsapp  from './component/whatsapp'; 

// Optionally import your App-level CSS (if any)
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Whatsapp />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
