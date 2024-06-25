import React, { useEffect, useRef, useState } from "react";
import "../styles/AnimationDesignPage.css";

const AnimationDesignPage = () => {
  const scrollContainerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0;
      } else {
        scrollAmount += 4; // Adjust this value to control the scroll speed
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const scrollInterval = setInterval(autoScroll, 100); // Increase this value to slow down the scroll interval

    return () => clearInterval(scrollInterval);
  }, []);

  const studentWorksData = [
    "https://maacdelhi.com/img/ad3d-pg-img/img9.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img10.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img11.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img12.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img13.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img14.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img15.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img16.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img1.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img2.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img3.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img4.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img5.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img6.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img7.webp",
    "https://maacdelhi.com/img/ad3d-pg-img/img8.webp",
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      <div className="animation-page">
        <div className="content">
          <h1>AD3D Edge PLUS - Advanced Program in 3D Animation Design</h1>
          <div className="details">
            <span>Duration - 16 Months</span>
            <span>Skill Level - Advanced</span>
          </div>
        </div>
      </div>
      <div className="about-p">
        <p>
          Learn 3D animation from the best and discover what it takes to become
          a professional animator. Once you’ve mastered the foundational skills,
          you’ll get your characters interacting with their environment. Learn
          to design advanced animation sequences for international films and 3D
          projects.
        </p>
      </div>
      <div className="software-section">
        <h2>Software covered</h2>
        <div className="software-container">
          {softwareData.map((software) => (
            <div className="soft-inr-div" key={software.name}>
              <img src={software.img} alt={software.name} loading="lazy" />
              <p>{software.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="elective-section">
        <h2>Elective specialization options</h2>
        <div className="elective-container">
          {electiveData.map((elective) => (
            <div className="elective-img-bx" key={elective.name}>
              <img src={elective.img} alt={elective.name} loading="lazy" />
              <p>{elective.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <div
            className={`faq-question ${activeFaq === 0 ? "active" : ""}`}
            onClick={() => toggleFaq(0)}
          >
            <span>
              Is it required to have good drawing skills to learn Animation?
            </span>
            <span className="dropdown-symbol">
              {activeFaq === 0 ? "▲" : "▼"}
            </span>
          </div>
          {activeFaq === 0 && (
            <div className="faq-answer">
              Animation is as much a technical skill as creative, at MAAC you
              are taught to convert your imagination into creations using tools
              from basic to advanced. Hence, there is no necessary
              pre-requisition of drawing skills.
            </div>
          )}
        </div>
        <div className="faq-item">
          <div
            className={`faq-question ${activeFaq === 1 ? "active" : ""}`}
            onClick={() => toggleFaq(1)}
          >
            <span>What is the scope of Animation?</span>
            <span className="dropdown-symbol">
              {activeFaq === 1 ? "▲" : "▼"}
            </span>
          </div>
          {activeFaq === 1 && (
            <div className="faq-answer">
              3D Animation is employed in movies, Tv series, Ott, E-Commerce,
              Ad-Films, ELearning, Games, Architecture Visualization, Medical &
              other Training Simulation Programs, Product Designing, Augmented
              Reality & Virtual Reality Experiences and Much More.
            </div>
          )}
        </div>
        <div className="faq-item">
          <div
            className={`faq-question ${activeFaq === 2 ? "active" : ""}`}
            onClick={() => toggleFaq(2)}
          >
            <span>Is it degree or diploma?</span>
            <span className="dropdown-symbol">
              {activeFaq === 2 ? "▲" : "▼"}
            </span>
          </div>
          {activeFaq === 2 && (
            <div className="faq-answer">
              All courses are certificate programs by MAAC. The primary goal of
              MAAC courses is making you skilled and providing 100% Job
              Placement Assistance.
            </div>
          )}
        </div>
      </div>
      <div className="student-works-section">
        <h2>Student Works</h2>
        <p>
          Sneak peek into creations from students studying 3D Animation with us.
        </p>
        <div className="student-works-container" ref={scrollContainerRef}>
          {studentWorksData.map((imgSrc, index) => (
            <div className="student-work-item" key={index}>
              <img src={imgSrc} alt={`Student work ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const softwareData = [
  {
    img: "https://maacdelhi.com/img/software-img1.png",
    name: "Adobe Photoshop",
  },
  {
    img: "https://maacdelhi.com/img/software-img2.png",
    name: "Adobe After Effects",
  },
  {
    img: "https://maacdelhi.com/img/software-img3.png",
    name: "Adobe Premiere",
  },
  {
    img: "https://maacdelhi.com/img/software-img4.png",
    name: "Adobe Audition",
  },
  {
    img: "https://maacdelhi.com/img/software-img5.png",
    name: "Autodesk 3ds Max",
  },
  { img: "https://maacdelhi.com/img/software-img6.png", name: "Autodesk Maya" },
  {
    img: "https://maacdelhi.com/img/software-img7.png",
    name: "Autodesk Mudbox",
  },
  {
    img: "https://maacdelhi.com/img/software-img8.png",
    name: "Blackmagic Fusion",
  },
  {
    img: "https://maacdelhi.com/img/software-img9.png",
    name: "Autodesk MotionBuilder",
  },
  {
    img: "https://maacdelhi.com/img/software-img15.png",
    name: "Unreal Engine",
  },
  {
    img: "https://maacdelhi.com/img/software-img13.png",
    name: "Adobe Substance 3d Painter",
  },
  { img: "https://maacdelhi.com/img/software-img40.png", name: "Zbrush" },
];

const electiveData = [
  {
    img: "https://maacdelhi.com/img/elective-option-img1.webp",
    name: "Modeling & Texturing",
  },
  {
    img: "https://maacdelhi.com/img/elective-option-img2.webp",
    name: "Lighting",
  },
  {
    img: "https://maacdelhi.com/img/elective-option-img3.webp",
    name: "3D Animation",
  },
];

export default AnimationDesignPage;
