import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp: React.FC = () => {
  const phoneNumber = '9928430128';
  const message = encodeURIComponent('Hello! I would like to know more about your services.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="position-fixed bottom-0 end-0 m-4 btn btn-success rounded-circle d-flex align-items-center justify-content-center"
      style={{ width: '60px', height: '60px', zIndex: 1050 }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default Whatsapp;
