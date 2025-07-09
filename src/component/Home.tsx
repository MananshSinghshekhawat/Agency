// Home.tsx
import React from "react";
import "./Home.css";
import Chatbot from "./Chatbot";
import "./Chatbot.css";
import About from "./About";
import Services from "./Services";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Whatsapp from "./whatsapp";

const Home: React.FC = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/919928430128", "_blank");
  };

  return (
    <div className="single-page-layout">
      {/* Hero Section */}
      <section id="home" className="section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-md-6 left-content">
                <h1 className="home-heading">workbench india</h1>
                <h2 className="home-subheading">Unlock Your Digital Potential</h2>
                <p className="home-paragraph">
                  We provide innovative software solutions tailored for your business.
                  #1 Choice for unleashing your online potential.
                </p>
                <button className="home-button" onClick={handleContactClick}>
                  Contact Now
                </button>
              </div>
              <div className="col-md-6 right-content">
                <div className="image-container">
                  <img src="/image3.png" alt="Tech illustration" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <Services />
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <Features />
      </section>

      {/* Portfolio Section
      <section id="portfolio" className="section">
        <Portfolio />
      </section> */}

      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <Contact />
      </section>

      {/* Chatbot */}
      <Chatbot />

      {/* WhatsApp */}
      <Whatsapp />
    </div>
  );
};

export default Home;
