import React from 'react';
import '../styles/PhoneLink.css';

const PhoneLink = () => {
  const phoneNumber = '917249647735'; 

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      <button onClick={handleClick} className="phone-button">
        Call Us
      </button>
      {/* Or use the anchor tag method */}
      {/* <a href={`tel:${phoneNumber}`} className="phone-link">Call Us</a> */}
    </div>
  );
};

export default PhoneLink;
