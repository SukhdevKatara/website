// src/CoursesPage.js
import React from 'react';
import '../styles/ShortTermSpecializedPage.css';

import adobe from '../icons/adobe.png'
import AdobePremiere from '../icons/AdobePremiere.jpeg'
import AdobeAudition from '../icons/adobeAudition.png'
import Autodesk3dsMax from '../icons/Autodesk3dsMax.png'
import Unity from '../icons/Unity.png'
import GoogleSketchup from '../icons/Google Sketchup.png'
import Lumion from '../icons/Lumion.png'
import Zbrush from '../icons/Zbrush.png'
import AdobeSubstance3dPainter from '../icons/AdobeSubstance3dPainter.png'
import AutodeskMaya from '../icons/AutodeskMaya.png'
import Nuke from '../icons/Nuke.png'
import Mocha from '../icons/Mocha.png'
import Silhouette from '../icons/Silhouette.png'
import DEqualizer from '../icons/3DEqualizer.png'
import Blender from '../icons/Blender.png'
import VRay from '../icons/V-Ray.jpeg'
import AutodeskMudbox from '../icons/AutodeskMudbox.jpeg'
import AdobeAfterEffects from '../icons/AdobeAfterEffects.jpeg'
import Fusion from '../icons/Fusion.jpeg'
import Cinema4D from '../icons/Cinema4D.jpeg'

const courses = [
  {
    title: "Design Viz Pro",
    duration: "7 Months",
    skillLevel: "Intermediate",
    description: "Design Viz Pro allows you to deep dive into design and visualization, from planning till execution. If you have strong visualization skills and love to play with the latest software, then this is the course for you. On successful completion of the animation course, you will be able to make a career in the animation industry, production houses, or architecture and engineering companies.",
    softwareCovered: [
      { name: "Adobe Photoshop", icon: adobe },
      { name: "Autodesk 3ds Max", icon: Autodesk3dsMax },
      { name: "Unity", icon: Unity },
      { name: "Google Sketchup", icon: GoogleSketchup },
      { name: "V-Ray", icon: VRay },
      { name: "Lumion", icon: Lumion },
      { name: "Adobe Premiere", icon: AdobePremiere },
      { name: "Adobe Audition", icon: AdobeAudition },
    ],
  },
  {
    title: "Maya Pro",
    duration: "4 Months",
    skillLevel: "Intermediate",
    description: "MAYA Pro is one of the most sought after short-term courses at MAAC. It covers areas of animation including character animation, digital sculpting, and 3D design and modeling. Maya Pro takes you through the nuances of modeling, texturing, lighting, rigging, VFX and animation with the help of two advanced and industry-leading software, Maya and Mudbox. Maya Pro can be used for animation, environments, motion graphics, virtual reality, and character creation.",
    softwareCovered: [
      { name: "Autodesk Maya", icon: AutodeskMaya },
      { name: "Adobe Substance 3d Painter", icon: AdobeSubstance3dPainter },
      { name: "Zbrush", icon: Zbrush },
    ],
  },
  {
    title: "MAX PRO",
    duration: "6 Months",
    skillLevel: "Intermediate",
    description: "MAX Pro trains students in texturing, lighting, modeling, skinning and character set up. You will be introduced to 3ds Max software. The usage of latest software like 3d Max helps you understand the functioning of the animation industry and the kinds of tools and technologies used. The MAX Pro course at MAAC helps you learn the fundamentals of 3D World along with advanced areas like dynamics and animation. This is ideal in case you are looking for short-duration multimedia courses.",
    softwareCovered: [
      { name: "Autodesk 3ds Max", icon: Autodesk3dsMax },
      { name: "Autodesk Mudbox", icon: AutodeskMudbox },
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
const ShortTermSpecializedPage = () => {
  return (
    <>
      <div className="main-container-sort">
        <h1 className="title">Short-term Courses</h1>
        <div className="info">
          <span>Duration: Less than 12 months</span>
          <span>Skill Level: Beginner</span>
        </div>
      </div>
      <p className="paragraph">
          Maac offers a boutique of short-term courses, enabling students to kickstart their career with limited time or budget at their disposal. These short-term courses also train the student to be job ready at the end of their training period.
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

export default ShortTermSpecializedPage;
