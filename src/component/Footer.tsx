import React from "react";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer-advanced bg-primary text-white pt-5 pb-3">
    <div className="container">
      <div className="row gy-4 align-items-start">
        {/* Agency Info */}
        <div className="col-md-4">
          <h4 className="footer-logo mb-2">Workbench India</h4>
          <p className="footer-desc mb-3">
            Empowering businesses with next-gen solutions, powerful technology, and world-class designs.
          </p>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/manansh-singh-shekhawat-121553326/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <i className="bi bi-linkedin"></i>
              <span className="footer-social-text"></span>
            </a>
            <a
              href="https://www.instagram.com/shekhawat_manansh_singh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-link"
            >
              <i className="bi bi-instagram"></i>
              <span className="footer-social-text"></span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100081773924839"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-link"
            >
              <i className="bi bi-facebook"></i>
              <span className="footer-social-text"></span>
            </a>
          </div>
        </div>
        {/* Quick Links & Services */}
        <div className="col-md-4">
          <h5 className="mb-3">Quick Links</h5>
          <ul className="footer-links list-unstyled">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <h6 className="mt-4 mb-2" style={{ color: "#fff", fontWeight: 600 }}>Our Services</h6>
          <ul className="footer-links list-unstyled">
            <li>
              <a href="#services">Web Development</a>
            </li>
            <li>
              <a href="#services">Mobile App Development</a>
            </li>
            <li>
              <a href="#services">UI/UX Design</a>
            </li>
            <li>
              <a href="#services">Cloud Integration</a>
            </li>
            <li>
              <a href="#services">Digital Marketing</a>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="col-md-4">
          <h5 className="mb-3">Contact</h5>
          <ul className="footer-contact list-unstyled">
            <li>
              <i className="bi bi-geo-alt-fill me-2"></i>
              BT-1, Poornima University, Sitapura, Jaipur, Rajasthan 302022 India
            </li>
            <li>
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:mananshshekhawat@gmail.com">mananshshekhawat@gmail.com</a>
            </li>
            <li>
              <i className="bi bi-telephone-fill me-2"></i>
              <a href="tel:+919928430128">+91 9928430128</a>
            </li>
          </ul>
          <div className="footer-hours mt-3">
            <strong>Hours:</strong>
            <div>Mon-Fri: 9am - 5pm</div>
            <div>Sat-Sun: Holiday</div>
          </div>
        </div>
      </div>
      <hr className="footer-divider my-4" />
      <div className="text-center small">
        &copy; {new Date().getFullYear()} <span className="fw-bold">Workbench India</span>. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;