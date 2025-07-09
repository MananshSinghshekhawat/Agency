import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import Chatbot from './component/Chatbot';
import About from './component/About';
import Services from './component/Services';

import Contact from './component/Contact';
import { Helmet } from 'react-helmet-async';
import './App.css';

function App() {
  return (
    <>
      <Helmet titleTemplate="%s | Workbench India" defaultTitle="Workbench India - Digital Solutions Partner">
        <meta name="description" content="Workbench India - Digital Solutions Partner. Full-stack development, UI/UX design, and scalable software architecture services." />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
