import React from 'react';
import '../styles/AnimationPage.css';

const videoContentData = [
  {
    videoSrc: "https://maacdelhi.com/img/video/updated-video/2.mp4",
    title: "AD3D Edge PLUS - Advanced Program in 3D Animation Design",
    description: "27 Months – Start from basics of animation and learn advanced 3D Animation softwares like AUTODESK MAYA, 3DS MAX, UNREAL Engine to master 3D Animation Design and Film Making"
  },
  {
    videoSrc: "https://maacdelhi.com/img/video/updated-video/5.mp4",
    title: "AD3D Edge PLUS - Advanced Program in 3D Animation Design",
    description: "27 Months – Start from basics of animation and learn advanced 3D Animation softwares like AUTODESK MAYA, 3DS MAX, UNREAL Engine to master 3D Animation Design and Film Making"
  },
  {
    videoSrc: "https://maacdelhi.com/img/video/updated-video/6.mp4",
    title: "ADVFX PLUS - Advanced Program in Visual Effects Film Making",
    description: "27 Months - Learn Visual Effects Design using popularly used industry software like NUKE, MOCHA, FUSION, HOUDINI."
  },
  {
    videoSrc: "https://maacdelhi.com/img/video/updated-video/3.mp4",
    title: "ADVFX PLUS - Advanced Program in Visual Effects Film Making",
    description: "27 Months - Learn Visual Effects Design using popularly used industry software like NUKE, MOCHA, FUSION, HOUDINI."
  },
  {
    videoSrc: "https://maacdelhi.com/img/video/updated-video/1.mp4",
    title: "ADVFX PLUS - Advanced Program in Visual Effects Film Making",
    description: "27 Months - Learn Visual Effects Design using popularly used industry software like NUKE, MOCHA, FUSION, HOUDINI."
  },
  {
    videoSrc: "https://maacdelhi.com/img/video/updated-video/4.mp4",
    title: "ADVFX PLUS - Advanced Program in Visual Effects Film Making",
    description: "27 Months - Learn Visual Effects Design using popularly used industry software like NUKE, MOCHA, FUSION, HOUDINI."
  }
];

const AnimationPage = () => {
  return (
    <div>
      {videoContentData.map((item, index) => (
        <div className="container" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="text-section text-left">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button className="view-detail"><span>View Full Detail</span></button>
              </div>
              <div className="video-section video-right">
                <video src={item.videoSrc} controls={false} autoPlay loop muted playsInline />
              </div>
            </>
          ) : (
            <>
              <div className="video-section video-left">
                <video src={item.videoSrc} controls={false} autoPlay loop muted playsInline />
              </div>
              <div className="text-section text-right">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button className="view-detail"><span>View Full Detail</span></button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimationPage;
