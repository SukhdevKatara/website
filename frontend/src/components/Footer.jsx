import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import maac from '../images/maac.jpg';
import '../styles/Footer.css';

const Footer = () => {
  
  const phoneNumber = '918859833392';
  const message = 'Hello, I would like to know more about your services.';

  const createWhatsAppLink = (phone, msg) => {
    const encodedMessage = encodeURIComponent(msg);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  const whatsappUrl = createWhatsAppLink(phoneNumber, message);

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={maac} alt="Company Logo" />
      </div>
      <div className="footer-paragraph">
        <p>
          This will be through its wide network of centers. Mac has prepared thousands of students for career in animation, VFX, filmmaking, gaming, web, and graphic design. The academy provides quality education through career-oriented courses. Leading to top-notch job placements, Mac has a dedicated research and development team consisting of industry professionals.
        </p>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
            <li><Link to="/" style={{ color: 'white' }}>Courses</Link></li>
            <li><Link to="/ShortTermSpecializedPage" style={{ color: 'white' }}>Short Term</Link></li>
            <li><Link to="/MoreCareerCoursesPage" style={{ color: 'white' }}>More Courses</Link></li>
            <li><Link to="/Placement" style={{ color: 'white' }}>Placements</Link></li>
            <li><Link to="/Contact" style={{ color: 'white' }}>Apply Now</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Courses</h3>
          <ul>
            <li><Link to="/3DAnimation">3D Animation</Link></li>
            <li><Link to="/VFX">VFX</Link></li>
            <li><Link to="/Gaming">Gaming</Link></li>
            <li><Link to="/WebGraphicPage">Web and Graphic Design</Link></li>
            <li><Link to="/ShortTermSpecializedPage">Short Term</Link></li>
            <li><Link to="/MoreCareerCoursesPage">More Courses</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Mobile: 91 8859833392</p>
          <ul className="social-media">
            <li className='abc'>
              <a href="https://www.instagram.com/maacmathura?igsh=MmlhbzA1MHUzdGlu" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
            </li>
            <li className='abc'>
              <a href="https://www.facebook.com/profile.php?id=61555951572659" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" />
              </a>
            </li>
            <li className='abc'>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
