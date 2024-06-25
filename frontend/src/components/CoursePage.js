import React from 'react';
import '../styles/CoursePage.css';

import AnimationPage from './AnimationPage'

const CoursePage = () => {
  return (
    <div className="course">
      <h1>COURSES AT MAAC</h1>
      <p>Choose from specialized courses giving in-depth knowledge to learn skills that prepare you for a successful career in the professional Media and Entertainment industry</p>
      <div className="course-image-container">
        <img src="https://maacdelhi.com/img/home-ilus/erth-cl.png" alt="Earth" className="course-earth-image animated" />
        <img src="https://maacdelhi.com/img/courses-page-image/byo.png" alt="Boy on rocket" className="course-boy-image animated" />
        <img src="https://maacdelhi.com/img/courses-page-image/grl.png" alt="Girl on laptop" className="course-girl-image animated" />
      </div>
      <AnimationPage/>
    </div>
  );
};

export default CoursePage