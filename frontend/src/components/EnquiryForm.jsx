import React, { useState, useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import '../styles/EnquiryForm.css';

const EnquiryForm = () => {
  const parallaxContainer = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: 'animation',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (parallaxContainer.current) {
      new Parallax(parallaxContainer.current, {
        pointerEvents: true,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d+$/.test(formData.mobile)) {
      errors.mobile = 'Mobile number must be digits only';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      const response = await fetch('https://website-1-a1dl.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <div className="parallax-container" ref={parallaxContainer}>
      <div className="parallax-layer" data-depth="0.2">
        <div className="form-svg-container">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-row">
              <label>
                Mobile Number:
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
              </label>
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>
            <div className="form-row">
              <label>
                Email ID:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-row">
              <label>
                Select Course Interested In:
                <select name="course" value={formData.course} onChange={handleChange}>
                  <option value="animation">Animation</option>
                  <option value="vfx">VFX</option>
                  <option value="gaming">Gaming</option>
                  <option value="web_design">Web Design</option>
                </select>
              </label>
            </div>
            <div className="form-row">
              <button type="submit">Submit</button>
            </div>
          </form>
          <div className="svg-container">
            <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt="Login Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
