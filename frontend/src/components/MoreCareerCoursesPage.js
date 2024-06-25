// src/CoursesPage.js
import React from 'react';
import '../styles/MoreCareerCoursesPage.css';

import adobe from '../icons/adobe.png'
import AdobePremiere from '../icons/AdobePremiere.jpeg'
import AdobeAudition from '../icons/adobeAudition.png'
import Autodesk3dsMax from '../icons/Autodesk3dsMax.png'
// import Unity from '../icons/Unity.png'
// import GoogleSketchup from '../icons/Google Sketchup.png'
// import Lumion from '../icons/Lumion.png'
// import Zbrush from '../icons/Zbrush.png'
import AdobeSubstance3dPainter from '../icons/AdobeSubstance3dPainter.png'
import AutodeskMaya from '../icons/AutodeskMaya.png'
import Nuke from '../icons/Nuke.png'
import Mocha from '../icons/Mocha.png'
import Silhouette from '../icons/Silhouette.png'
import DEqualizer from '../icons/3DEqualizer.png'
import Blender from '../icons/Blender.png'
import RealFlow from '../icons/RealFlow.png'
import FumeFX from '../icons/FumeFX.png'
// import VRay from '../icons/V-Ray.jpeg'
import AutodeskMudbox from '../icons/AutodeskMudbox.jpeg'
import AdobeAfterEffects from '../icons/AdobeAfterEffects.jpeg'
import Fusion from '../icons/Fusion.jpeg'
import Cinema4D from '../icons/Cinema4D.jpeg'

const courses = [
  {
    title: "D3D - Program in 3D Animation Filmmaking",
    duration: "12 Months",
    skillLevel: "Advanced",
    description: "It is a mix of imagination, creativity & technology. With MAAC's 3D Animation Film making course, a career course in 3D animation filmmaking, you will learn all the creative aspects of animation like pre-production, storyboarding, filmmaking and character animation. The 3D animation course prepares you to enter the professional world of 3D animation by providing you with extensive classroom and practical training, latest software and portfolio development.",
    softwareCovered: [
      { name: "Adobe Photoshop", icon: adobe },
      { name: "Autodesk 3ds Max", icon: Autodesk3dsMax },
      { name: "Autodesk Maya", icon: AutodeskMaya },
      { name: "Autodesk Mudbox", icon: AutodeskMudbox },
      { name: "Adobe After Effect", icon: AdobeAfterEffects },
      { name: "Adobe Substance 3d Painter", icon: AdobeSubstance3dPainter },
      { name: "Adobe Premiere", icon: AdobePremiere },
      { name: "Adobe Audition", icon: AdobeAudition },
    ],
  },
  {
    title: "VFX PLUS- Program in Visual Effects",
    duration: "12 Months",
    skillLevel: "Advanced ",
    description: "VFX Plus is a professional course designed to train you in the latest visual effects software and techniques that are extensively used in filmmaking. From Bollywood movies like Baahubali, to Hollywood movies like Dawn of the Planet of the Apes and web series like Game of Thrones, all have massive use of Visual Effects. You will learn the fundamentals of digital designs, layer-based compositing, clean plate & wire removal, concepts of set extension & CG integration and match moving & camera tracking. All the aspects prepare you to work on high-end projects in an authentic studio environment.",
    softwareCovered: [
      { name: "Fusion", icon: Fusion },
      { name: "Nuke", icon: Nuke },
      { name: "Autodesk Mudbox", icon: AutodeskMudbox },
      { name: "3D Equalizer", icon: DEqualizer },
      { name: "Real Flow", icon: RealFlow },
      { name: "Fume FX", icon: FumeFX },
      { name: "Adobe Photoshop", icon: adobe },
      { name: "Mocha", icon: Mocha },
      { name: "Autodesk 3ds Max", icon: Autodesk3dsMax },
      { name: "Adobe After Effect", icon: AdobeAfterEffects },
    ],
  },
  {
    title: "APDMC - Advanced Program in Digital Media Creation",
    duration: "12 Months",
    skillLevel: "Advanced",
    description: "Program in Digital Media Creation makes you an expert in building state-of-the-art print, web, and 3D animation content for different platforms and audiences. If you dream to work as a 3D Animator or a Communication Designer in a reputed company, then join Program in Digital Media Creation at MAAC now. The career course teaches you the fundamentals of drawing, concepts of design and illustration, concepts of web designing, and a lot more.",
    softwareCovered: [
      { name: "Autodesk 3ds Max", icon: Autodesk3dsMax },
      { name: "Autodesk Mudbox", icon: AutodeskMudbox },
      { name: "Adobe Photoshop", icon: adobe },
      { name: "Adobe After Effect", icon: AdobeAfterEffects },
    ],
  },
  {
    title: "DIGITAL FILMMAKING",
    duration: "6 Months",
    skillLevel: "Intermediate",
    description: "Short term digital filmmaking course is one of the most preferred introductory courses, where you can learn the basics and core areas of filmmaking, like pre-production techniques, linear editing, sound editing, and clay animation.",
    softwareCovered: [
      { name: "Adobe Photoshop", icon: adobe },
      { name: "Adobe After Effect", icon: AdobeAfterEffects },
      { name: "Adobe Audition", icon: AdobeAudition },
      { name: "Adobe Premiere", icon: AdobePremiere },
    ],
  },
  {
    title: "COMPOSITING PLUS",
    duration: "7 Months",
    skillLevel: "Intermediate",
    description: "No film, TV or music video is complete without going through the process of compositing and editing. At this stage, different visual elements are placed together to create one scene or one sequence. The short-term Compositing Plus course at MAAC prepares you to excel in areas like digital design, match moving, rotoscopy, and camera tracking.",
    softwareCovered: [
      { name: "Adobe Photoshop", icon: adobe },
      { name: "Adobe After Effects", icon: AdobeAfterEffects },
      { name: "Fusion", icon: Fusion },
      { name: "Nuke", icon: Nuke },
      { name: "Mocha", icon: Mocha },
      { name: "Silhouette", icon: Silhouette },
      { name: "3D Equalizer", icon: DEqualizer },
    ],
  },
  {
    title: "Blender",
    duration: "6 Months",
    skillLevel: "Intermediate",
    description: "Blender is an open source 3D production software. You will learn to create 3D animation designs. Blender is widely used and gaining popularity in small and medium size studios producing for digital mediums.",
    softwareCovered: [
      { name: "Blender", icon: Blender },
    ],
  },
  {
    title: "MAX PRO",
    duration: "6 Months",
    skillLevel: "Intermediate",
    description: "MAX Pro trains students in texturing, lighting, modeling, skinning and character set up. You will be introduced to 3ds Max software. The usage of latest software like 3d Max helps you understand the functioning of the animation industry and the kinds of tools and technologies used. The MAX Pro course at MAAC helps you learn the fundamentals of 3D World along with advanced areas like dynamics and animation. This is ideal in case you are looking for short-duration multimedia courses.",
    softwareCovered: [
      { name: "Cinema 4D", icon: Cinema4D },
    ],
  },
];
const MoreCareerCoursesPage = () => {
  return (
    <>
      <div className="main-container-more">
        <h1 className="title">MORE CAREER COURSES</h1>
        <div className="info">
          <span>Duration - 6 to 16 Months</span>
          <span>Skill Level - Advanced</span>
        </div>
      </div>
      <p className="paragraph">
      Learn core skills like Graphic Designing, Web Designing and get training in 3D Animation Design, study VFX, or Game Design.
        </p>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2 className="course-title">{course.title}</h2>
            <div className="course-info">
              <span>Duration - {course.duration}</span>
              <span>Skill Level - {course.skillLevel}</span>
            </div>
            <p className="course-paragraph">{course.description}</p>
            <div className="software-list">
              <h3>Software Covered</h3>
              {course.softwareCovered.map((software, i) => (
                <div className="software-item" key={i}>
                  <img src={software.icon} alt={software.name} width="30" height="30" />
                  <span>{software.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreCareerCoursesPage;
