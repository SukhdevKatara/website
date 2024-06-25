import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomepageContent';
import Placement from './components/PlacementPage';
import ShortTermSpecializedPage from './components/ShortTermSpecializedPage';
import MoreCareerCoursesPage from './components/MoreCareerCoursesPage';
import SideNavbar from './components/SideNav';
import Gaming from './components/GamingPage';
import WebGraphicPage from './components/WebGraphicPage';
import CoursePage from './components/CoursePage';
import Contact from './components/Contact';
import VFXPage from './components/VFXPage';  
import DAnimation from './components/AnimationDesignPage';  
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShortTermSpecializedPage" element={<ShortTermSpecializedPage />} />
        <Route path="/MoreCareerCoursesPage" element={<MoreCareerCoursesPage />} />
        <Route path="/Placement" element={<Placement />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/VFX" element={<VFXPage />} />  {/* Ensure this matches the component */}
        <Route path="/3DAnimation" element={<DAnimation />} />  {/* Ensure this matches the component */}
        <Route path="/Gaming" element={<Gaming />} />  {/* Ensure this matches the component */}
        <Route path="/WebGraphicPage" element={<WebGraphicPage />} />  {/* Ensure this matches the component */}
        <Route path="/CoursePage" element={<CoursePage />} />  {/* Ensure this matches the component */}
        {/* Add more routes as needed */}
      </Routes>
      <SideNavbar />
      <Footer />
    </div>
  );
}

export default App;
