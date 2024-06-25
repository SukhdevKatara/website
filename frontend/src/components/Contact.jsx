import React from 'react';
import '../styles/ContactUs.css'; 
import EnquiryForm from './EnquiryForm';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <EnquiryForm />
      </div>
    </div>
  );
};

export default ContactUs;
