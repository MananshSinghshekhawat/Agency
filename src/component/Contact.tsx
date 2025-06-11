import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "Brazil",
  "South Africa",
  "Other",
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    location: COUNTRIES[0],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.fullName}, for contacting us from ${formData.location}!`);
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="contact-title">Contact Us</h1>
          <p className="lead text-muted">
            We're always on the lookout to work with new clients. Please get in touch with us.
          </p>
          {/* Divider line removed */}
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                {/* Office Info */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">
                    <i className="bi bi-geo-alt-fill text-primary me-2"></i> Office
                  </h5>
                  <p className="text-muted">Please visit us to have a discussion.</p>
                  <address className="text-muted">
                    BT-1, Poornima University,
                    <br />
                    Sitapura, Jaipur, Rajasthan 302022 India
                  </address>
                </div>

                {/* Phone Info */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">
                    <i className="bi bi-telephone-fill text-primary me-2"></i> Phone
                  </h5>
                  <p className="text-muted">Please speak with us directly.</p>
                  <p>
                    <a href="tel:+91 9928430128" className="d-block text-decoration-none text-dark">
                      <i className="bi bi-phone me-2"></i> +91 9928430128
                    </a>
                    <a href="tel:+91 01413179925" className="d-block text-decoration-none text-dark">
                      <i className="bi bi-phone me-2"></i> +91 01413179925
                    </a>
                  </p>
                </div>

                {/* Email Info */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">
                    <i className="bi bi-envelope-fill text-primary me-2"></i> Email
                  </h5>
                  <p className="text-muted">Please write to us directly.</p>
                  <p>
                    <a href="mailto:mananshshekhawat@gmail.com" className="d-block text-decoration-none text-dark">
                      <i className="bi bi-envelope me-2"></i> mananshshekhawat@gmail.com
                    </a>
                    <a href="mailto:rishushekhawat234@gmail.com" className="d-block text-decoration-none text-dark">
                      <i className="bi bi-envelope me-2"></i> rishushekhawat234@gmail.com
                    </a>
                  </p>
                </div>

                {/* Hours Info */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">
                    <i className="bi bi-clock-fill text-primary me-2"></i> Opening Hours
                  </h5>
                  <p className="text-muted">Explore our business opening hours.</p>
                  <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                    <span className="fw-medium">Mon - Fri</span>
                    <span>9am - 5pm</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="fw-medium">Sat - Sun</span>
                    <span>Holiday</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Send us a message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="fullName" className="form-label fw-medium">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label fw-medium">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label fw-medium">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="location" className="form-label fw-medium">
                        Location (Country) <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      >
                        {COUNTRIES.map((country, idx) => (
                          <option key={idx} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-medium">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-medium">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-danger submit-btn">
                    Send Appointment Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;