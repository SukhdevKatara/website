import React from 'react';
import '../styles/WhatsAppLink.css';

const WhatsAppLink = () => {
  const phoneNumber = '917249647735';
  const message = 'Hello, I would like to know more about your services.';

  const createWhatsAppLink = (phone, msg) => {
    const encodedMessage = encodeURIComponent(msg);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  const whatsappUrl = createWhatsAppLink(phoneNumber, message);

  return (
    <div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        Contact us on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppLink;