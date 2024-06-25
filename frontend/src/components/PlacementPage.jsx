import React from 'react';

import image from '../images/maac.jpg';
import image1 from '../companies/image.png';
import image2 from '../companies/image1.png';
import image3 from '../companies/image2.png';
import image4 from '../companies/image3.png';
import image5 from '../companies/image4.png';
import image6 from '../companies/image5.png';
import image7 from '../companies/image6.png';
import image8 from '../companies/image7.png';
import image9 from '../companies/image8.png';
import image10 from '../companies/image9.png';
import image11 from '../companies/image10.png';
import image12 from '../companies/image11.png';
import image13 from '../companies/image12.png';
import image14 from '../companies/image13.png';
import image15 from '../companies/image14.png';
import image16 from '../companies/image15.jpg';
import image17 from '../companies/image16.jpg';
import image18 from '../companies/image17.png';
import image19 from '../companies/image18.png';
import image20 from '../companies/image19.png';
import image21 from '../companies/image20.png';
import image22 from '../companies/image21.png';


import '../styles/PlacementPage.css'; 

// Array of logo paths
const logoPaths = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
];

const PlacementPage = () => {

  return (
    <div className="placement-page">
      <div className="main-content-placement">
        <h1 className="page-heading">Placement</h1>
        <div className="content-container">
          <div className="left-section">
            <h2 className="why-maac-heading">Why MAAC?</h2>
            <p className="why-maac-paragraph">
              MAAC provides job-oriented graphics, animation, VFX, gaming, and digital design courses to students.
              It also offers career development training to prepare students for different job roles in the media
              and entertainment industry globally. Animation studios, gaming studios, publishing houses,
              TV channels, production houses, and advertising agencies are continuously looking out for
              photographers, UI designers, gaming experts, animators, filmmakers, website developers, VFX artists,
              photographers, and graphic designers to work with them. MAAC helps such organizations to find
              skilled and talented individuals who knows the demand of the industry and work as professionals in
              their respective fields.
            </p>
          </div>
          <div className="right-section">
      <div className="image-or-svg">
        <img className="placementimg" src={image} alt='maac logo'/>
      </div>
    </div>
        </div>
        <div className="company-logos-grid">
          {logoPaths.map((logoPath, index) => (
            <div 
              key={index}
              className={`company-logo-container ${index >= 24 ? 'last-row' : ''}`}
            >
              <img 
                src={logoPath} 
                alt={`Company logo ${index + 1}`} 
                className="company-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementPage;
