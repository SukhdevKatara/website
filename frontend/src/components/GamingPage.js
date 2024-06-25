import React, { useEffect, useRef, useState } from "react";
import "../styles/GamingPage.css";

const GamingPage = () => {
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
        scrollAmount += 4;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const scrollInterval = setInterval(autoScroll, 100);

    return () => clearInterval(scrollInterval);
  }, []);

  const studentWorksData = [
    "https://maacdelhi.com/img/adidg-pg-img/img8.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img9.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img10.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img11.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img12.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img13.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img14.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img1.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img2.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img3.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img4.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img5.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img6.webp",
    "https://maacdelhi.com/img/adidg-pg-img/img7.webp",
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const softwareData = [
    {
      img: "https://maacdelhi.com/img/software-img1.png",
      name: "Adobe Photoshop",
    },
    {
      img: "https://maacdelhi.com/img/software-img3.png",
      name: "Adobe Premiere",
    },
    {
      img: "https://maacdelhi.com/img/software-img4.png",
      name: "Adobe Audition",
    },
    { img: "https://maacdelhi.com/img/software-img6.png", name: "Autodesk Maya" },
    {
      img: "https://maacdelhi.com/img/software-img7.png",
      name: "Autodesk MotionBuilder",
    },
    {
      img: "https://maacdelhi.com/img/software-img13.png",
      name: "Adobe Substance 3d Painter",
    },
    {
      img: "https://maacdelhi.com/img/software-img14.png",
      name: "Unity",
    },
    {
      img: "https://maacdelhi.com/img/software-img15.png",
      name: "Unreal Engine",
    },
    {
      img: "https://maacdelhi.com/img/software-img18.png",
      name: "Adobe Illustrator",
    },
    {
      img: "https://maacdelhi.com/img/software-img21.png",
      name: "Adobe Animate CC",
    },
    { img: "https://maacdelhi.com/img/software-img40.png", name: "Mazon Zbrush" },
    {
      img: "https://maacdelhi.com/img/software-img58.png",
      name: "Marvellous Designer",
    },
  ];

  return (
    <div>
      <div className="game-animation-page">
        <div className="game-content">
          <h1>ADIDGP - Advanced Program in Interactive Game Design Plus</h1>
          <div className="game-details">
            <span>Duration - 16 Months</span>
            <span>Skill Level - Advanced</span>
          </div>
        </div>
      </div>
      <div className="game-about-p">
        <p>
          The course offers dedicated modules for 2D Interactivity & Design Viz,
          Integration using Unity game engine for Augmented and Virtual Reality,
          Mobile Gaming development using Unity, Games level designing and
          development, and Game asset integration using Unreal game engine.
          <br />
          <br />
          ADIDGP course at MAAC makes you a pro in design visualization,
          character animation, digital sculpting, game asset creation, and
          augmented and virtual reality. These skills are high in-demand at the
          top studios who are constantly looking for all-round professionals who
          can deliver high quality.
        </p>
      </div>
      <div className="game-software-section">
        <h2>Software covered</h2>
        <div className="game-software-container">
          {softwareData.map((software) => (
            <div className="game-soft-inr-div" key={software.name}>
              <img src={software.img} alt={software.name} loading="lazy" />
              <p>{software.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="game-faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="game-faq-item">
          <div
            className={`game-faq-question ${activeFaq === 0 ? "active" : ""}`}
            onClick={() => toggleFaq(0)}
          >
            <span>Do you teach game development/coding in ADIDGP?</span>
            <span className="game-dropdown-symbol">
              {activeFaq === 0 ? "▲" : "▼"}
            </span>
          </div>
          {activeFaq === 0 && (
            <div className="game-faq-answer">
              ADIDGP is a design first programme. Development/coding is touched
              upon wherever required to learn integration of design with
              real-time game play.
            </div>
          )}
        </div>
        <div className="game-faq-item">
          <div
            className={`game-faq-question ${activeFaq === 1 ? "active" : ""}`}
            onClick={() => toggleFaq(1)}
          >
            <span>How can I make my own game?</span>
            <span className="game-dropdown-symbol">
              {activeFaq === 1 ? "▲" : "▼"}
            </span>
          </div>
          {activeFaq === 1 && (
            <div className="game-faq-answer">
              Step by step guidance will be provided during the programme to
              help you design the game you dream of.
            </div>
          )}
        </div>
        <div className="game-faq-item">
          <div
            className={`game-faq-question ${activeFaq === 2 ? "active" : ""}`}
            onClick={() => toggleFaq(2)}
          >
            <span>Is it too technical to learn Gaming courses?</span>
            <span className="game-dropdown-symbol">
              {activeFaq === 2 ? "▲" : "▼"}
            </span>
          </div>
          {activeFaq === 2 && (
            <div className="game-faq-answer">
              Game designing is easier than it sounds, with the latest software
              like Unity and Unreal, game design can be learnt while MAAC
              trainers hold hands and take you through the course curriculum.
            </div>
          )}
        </div>
      </div>
      <div className="game-student-works-section">
        <h2>Student Works</h2>
        <p>
          Sneak peek into creations from students studying 3D Animation with us.
        </p>
        <div className="game-student-works-container" ref={scrollContainerRef}>
          {studentWorksData.map((imgSrc, index) => (
            <div className="game-student-work-item" key={index}>
              <img src={imgSrc} alt={`Student work ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingPage;
