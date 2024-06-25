import React, { useEffect, useRef, useState } from "react";
import "../styles/VFXPage.css";
const VFXPage = () => {
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
        scrollAmount += 2; // Adjust this value to control the scroll speed
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const scrollInterval = setInterval(autoScroll, 50); // Adjust this value to control the scroll interval

    return () => clearInterval(scrollInterval);
  }, []);

  const studentWorksData = [
    "https://maacdelhi.com/img/advfx-pg-img/img5.webp",
    "https://maacdelhi.com/img/advfx-pg-img/img6.webp",
    "https://maacdelhi.com/img/advfx-pg-img/img7.webp",
    "https://maacdelhi.com/img/advfx-pg-img/img8.webp",
    "https://maacdelhi.com/img/advfx-pg-img/img9.webp",
    "https://maacdelhi.com/img/advfx-pg-img/img1.webp",
    "https://maacdelhi.com/img/advfx-pg-img/img2.webp",
    "https://maacdelhi.com/img/advfx-pg-img/img3.webp",
    "https://maacdelhi.com/img/advfx-pg-img/img4.webp",
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      <div className="vfx-animation-page">
        <div className="vfx-content">
          <h1>ADVFX PLUS - Advanced Program in Visual Effects Film Making</h1>
          <div className="vfx-details">
            <span>Duration - 16 Months</span>
            <span>Skill Level - Advanced</span>
          </div>
        </div>
      </div>
      <div className="vfx-about-p">
        <p>
          Visual effects is an exciting field where no two days are the same!
          This course will walk you through the entire VFX production process
          step-by-step, give you plenty of hands-on experience, plus the
          confidence and job skills to pursue a career in the entertainment
          industry. Master not just the fundamentals, but also the advanced
          techniques of VFX artistry. Learn the latest tools & technologies and
          gain a thorough understanding of the new-age production workflow!
        </p>
      </div>
      <div className="vfx-para-B">
        <p>
          Be the VFX artist that makes an ordinary movie or a scene
          extraordinary with unparalleled visual effects!
        </p>
      </div>
      <div className="vfx-software-section">
        <h2>Software covered</h2>
        <div className="vfx-software-container">
          {softwareData.map((software) => (
            <div className="vfx-soft-inr-div" key={software.name}>
              <img src={software.img} alt={software.name} loading="lazy" />
              <p>{software.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="vfx-faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="vfx-faq-item">
          <div
            className={`vfx-faq-question ${activeFaq === 0 ? "active" : ""}`}
            onClick={() => toggleFaq(0)}
          >
            <span>Can I learn Animation &amp; VFX both??</span>
            <span className="vfx-dropdown-symbol">
              {activeFaq === 0 ? "▲" : "▼"}
            </span>
          </div>
          {activeFaq === 0 && (
            <div className="vfx-faq-answer">
              Yes, ADVFX covers the best of both worlds
            </div>
          )}
        </div>
        <div className="vfx-faq-item">
          <div
            className={`vfx-faq-question ${activeFaq === 1 ? "active" : ""}`}
            onClick={() => toggleFaq(1)}
          >
            <span>What is the scope of Animation?</span>
            <span className="vfx-dropdown-symbol">
              {activeFaq === 1 ? "▲" : "▼"}
            </span>
          </div>
          {activeFaq === 1 && (
            <div className="vfx-faq-answer">
              3D Animation is employed in movies, Tv series, Ott, E-Commerce,
              Ad-Films, ELearning, Games, Architecture Visualization, Medical &
              other Training Simulation Programs, Product Designing, Augmented
              Reality & Virtual Reality Experiences and Much More.
            </div>
          )}
        </div>
        <div className="vfx-faq-item">
          <div
            className={`vfx-faq-question ${activeFaq === 2 ? "active" : ""}`}
            onClick={() => toggleFaq(2)}
          >
            <span>Is it degree or diploma?</span>
            <span className="vfx-dropdown-symbol">
              {activeFaq === 2 ? "▲" : "▼"}
            </span>
          </div>
          {activeFaq === 2 && (
            <div className="vfx-faq-answer">
              All courses are certificate programs by MAAC. The primary goal of
              MAAC courses is making you skilled and providing 100% Job
              Placement Assistance.
            </div>
          )}
        </div>
      </div>
      <div className="vfx-student-works-section">
        <h2>Student Works</h2>
        <p>
          Sneak peek into creations from students studying 3D Animation with us.
        </p>
        <div className="vfx-student-works-container" ref={scrollContainerRef}>
          {studentWorksData.map((imgSrc, index) => (
            <div className="vfx-student-work-item" key={index}>
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
    img: "https://maacdelhi.com/img/software-img13.png",
    name: "Adobe Substance 3d Painter",
  },
  { img: "https://maacdelhi.com/img/software-img38.png", name: "Silhouette" },
  { img: "https://maacdelhi.com/img/software-img32.png", name: "Real Flow" },
  { img: "https://maacdelhi.com/img/software-img35.png", name: "Nuke" },
  { img: "https://maacdelhi.com/img/software-img36.png", name: "Mocha" },
  { img: "https://maacdelhi.com/img/software-img48.png", name: "3D Equalizer" },
  { img: "https://maacdelhi.com/img/software-img52.png", name: "Houdini" },
  { img: "https://maacdelhi.com/img/software-img53.png", name: "Vue" },
];

export default VFXPage;
