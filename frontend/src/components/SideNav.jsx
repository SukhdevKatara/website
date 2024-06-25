import React from 'react';
import '../styles/SideNavbar.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

const SideNavbar = () => {
    const phoneNumber = '918859833392';
    const message = 'Hello, I would like to know more about your services.';
  const createWhatsAppLink = (phone, msg) => {
    const encodedMessage = encodeURIComponent(msg);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  const whatsappUrl = createWhatsAppLink(phoneNumber, message);
  return (
    <div className="side-navbar">
      <a href="https://www.instagram.com/maacmathura?igsh=MmlhbzA1MHUzdGlu" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61555951572659" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon" />
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="icon" />
      </a>
      <a href="tel:918859833392">
        <FaPhone className="icon" />
      </a>
    </div>
  );
};

export default SideNavbar;
