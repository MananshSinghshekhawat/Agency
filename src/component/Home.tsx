// Home.tsx
import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/919928430128", "_blank");
  };

  return (
    <section id="home">
      {/* Background blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* Left side text content */}
      <div className="home-content">
        <h1 className="home-heading">workbench india</h1>
        <h2 className="home-subheading">Unlock Your Digital Potential</h2>
        <p className="home-paragraph">
          We provide innovative software solutions tailored for your business.
          <br />
          #1 Choice for unleashing your online potential.
        </p>
        <button className="home-button" onClick={handleContactClick}>
          Contact Now
        </button>
      </div>

      {/* Right side image */}
      <div className="image-container">
        <img src="/image3.png" alt="Tech illustration" />
      </div>
    </section>
  );
};

export default Home;
