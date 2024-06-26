import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/HomePage.css';

import EnquiryForm from './EnquiryForm';
import ImageSlider from './ImageSlider';

import company1 from '../images/company1.png';
import company2 from '../images/company2.png';
import company3 from '../images/company3.png';
import company4 from '../images/company4.png';
import company5 from '../images/company5.png';
import company6 from '../images/company6.png';

// import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';
import video3 from '../videos/video3.mp4';
import video4 from '../videos/video4.mp4';
import video5 from '../videos/video5.mp4';
// import video6 from '../videos/video6.mp4';

// import image1 from '../gifimages/image1.gif'
import image from '../gifimages/image.gif'
// import image6 from '../gifimages/image6.gif'
import image3 from '../gifimages/image3.png'


import img1 from '../images/bottom.png';
// import img2 from '../images/img2.png';
// import img3 from '../images/img3.png';
// import img4 from '../images/img4.png';
// import img5 from '../images/img5.png';
// import img6 from '../images/img6.png';

const Home = () => {
  return (
    <div className="home-page">
      <div className="image-slider-container">
        <ImageSlider />
      </div>
      <div className="main-content">
      <div className="form-container">
        <EnquiryForm />
      </div>
      </div>
      <div className='bg1'>
      <h1 className="centered-text">About MAAC</h1>
        <h4 className="about-maac" >MAAC is the high-end 3D Animation & VFX education vertical of Aptech Ltd.</h4>
        <p className='row1'>
          Through its wide network of centres, MAAC has prepared thousands of students 
          for careers in Animation, VFX, Filmmaking, Gaming, Web and Graphics Designing. 
          MAAC institutes provide quality education through internationally recognised career 
          courses leading to top-notch job placements. MAAC has a dedicated Research & Development 
          team consisting of industry professionals.
        </p>
        <p className='row1'>
          MAAC Institute Mathura conduct faculty training programs to ensure high standards of teaching in the classroom.
          All MAAC teachers are trained and vetted by Animation industry professionals who help sharpen their
          creative & technical skills. MAAC in Mathura lays strong emphasis on using the best infrastructure to train
          students. Our MAAC institutes use high-end computers, Wacom tablets & other equipment in the classroom. 
          The infrastructure is similar to that used in the global colleges training in Animation & VFX. 
          This helps create an 'on-the-job' environment in the design classes at MAAC. As a result, MAAC 
          students win many Awards for the films they create during and after successfully completing their 
          design courses.
        </p>
      </div>
      <div className="placements">
      <div className="placements-content">
        <h2>Companies that our students get placements in</h2>
        <p>Through expert career training and mentorship, our students start their careers at major companies across the globe.</p>
      </div>
      <div className="companies">
        <img src={company1} alt="Technicolor" />
        <img src={company2} alt="MPC" />
        <img src={company3} alt="DNEG" />
        <img src={company4} alt="Prime Focus" />
        <img src={company5} alt="Netflix" />
        <img src={company6} alt="Red Chillies" />
      </div>
    </div>
    <div className="placements-content">
    </div>
      <div className="courses">
      <div className="courses-grid">
        <div className="course-item">
          <div className="course-video">
            {/* <video autoPlay loop muted playsInline> */}
              <img src={image} alt="gif" />
            {/* </video> */}
            <div className="course-content">
            <h2>3D Animation Courses</h2>
            <p>Learn animation with the top animation courses at MAAC. Discover animation courses fees and more details about animation related courses.</p>
            </div>
          </div>
        </div>
        <div className="course-item">
          <div className="course-video">
            <video autoPlay loop muted playsInline>
              <source src={video2} type="video/mp4" />
            </video>
            {/* <img src={image6} alt="gif" /> */}
            <div className="course-content">
              <h2>VFX Courses</h2>
              <p>Join a VFX course that covers VFX animation and Learn 3d VFX at MAAC. Know VFX course fees and more details about VFX training.</p>
            </div>
          </div>
        </div>
        <div className="course-item">
          <div className="course-video">
            <video autoPlay loop muted playsInline>
              <source src={video5} type="video/mp4" />
            </video>
            <div className="course-content">
              <h2>Gaming Courses</h2>
              <p>Explore Game Design Courses at MAAC. Get details about game designing programs’ course fees and more about gaming courses.</p>
            </div>
          </div>
        </div>
        <div className="course-item">
          <div className="course-video">
            <video autoPlay loop muted playsInline>
              <source src={video4} type="video/mp4" />
            </video>
            {/* <img src={image1} alt="gif" /> */}
            <div className="course-content">
              <h2>Web & Graphic Design Courses</h2>
              <p>See all graphic design courses in Delhi & web designing programs. Options to learn graphic designing in Delhi and related courses fees details.</p>
            </div>
          </div>
        </div>
        <div className="course-item">
          <div className="course-video">
            <video autoPlay loop muted playsInline>
              <source src={video3} type="video/mp4" />
            </video>
            <div className="course-content">
              <h2>More Career Courses</h2>
              <p>Pick out from various digital animation programs at MAAC. Learn about Animation VFX Gaming and other design courses at MAAC Institutes in Delhi.</p>
            </div>
          </div>
        </div>
        <div className="course-item">
          <div className="course-video">
            {/* <video autoPlay loop muted playsInline>
              <source src={video6} type="video/mp4" />
            </video> */}
            <img src={image3} alt="gif" />
            <div className="course-content">
              <h2>Short Term Courses</h2>
              <p>Choose from MAAC courses focussed on specific learning goals in mind for professionals looking to Upskill or add to their skill set.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bottom'>
      <img src={img1} alt="bottom" />
    </div>
    {/* <div className="how-it-works">
      <div className="how-it-text w-100 text-center">
        <h2 className="how">How it works</h2>
      </div>
      <div className="step-container">
        
        <div className="step-row">
          <div className="step-number">1</div>
          <div className="step-content">
            <h2>Enquire</h2>
            <p>About Courses, Fees, Duration, Career opportunities</p>
          </div>
          <div className="step-image">
            <img src={img1} alt="Enquire" className="img-fluid" />
          </div>
        </div>

        
        <div className="step-row rev-row">
          <div className="step-number">2</div>
          <div className="step-image">
            <img src={img2} alt="Enroll" className="img-fluid" />
          </div>
          <div className="step-content">
            <h2>Enroll</h2>
            <p>Hurray! You are a student at MAAC!</p>
          </div>
        </div>

        
        <div className="step-row">
          <div className="step-number">3</div>
          <div className="step-content">
            <h2>Attend</h2>
            <p>Regular classes and practice with the best trainers in Delhi</p>
          </div>
          <div className="step-image">
            <img src={img3} alt="Attend" className="img-fluid" />
          </div>
        </div>

        
        <div className="step-row rev-row">
          <div className="step-number">4</div>
          <div className="step-image">
            <img src={img4} alt="Participate" className="img-fluid" />
          </div>
          <div className="step-content">
            <h2>Participate</h2>
            <p>In Seminars, Workshops, Events, Competitions</p>
          </div>
        </div>

        
        <div className="step-row">
          <div className="step-number">5</div>
          <div className="step-content">
            <h2>Submit</h2>
            <p>Student works and show reel</p>
          </div>
          <div className="step-image">
            <img src={img5} alt="Submit" className="img-fluid" />
          </div>
        </div>

        
        <div className="step-row rev-row">
          <div className="step-number">6</div>
          <div className="step-image">
            <img src={img6} alt="Prepare" className="img-fluid" />
          </div>
          <div className="step-content">
            <h2>Prepare</h2>
            <p>Get ready for placements with top companies</p>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Home;
