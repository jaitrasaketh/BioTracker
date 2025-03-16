import React from "react";
import Navbar from "../component/Navbar"; // Adjust the import path if needed
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Navbar */}
      <Navbar />

      {/* Part 1: About Us Section */}
      <div className="about-section2">
        <div className="about-content">
          <h1>DEVELOPMENT OF A DIGITAL DATABASE AND GEO-TRACKING SYSTEM FOR COLLEGE FLORA</h1>
          <p>
            The biodiversity of a college campus is a valuable but often underutilized resource for education, research, and conservation. 
            Traditional methods of documenting flora, such as physical herbarium collections and paper-based records, are time-consuming and prone to degradation over time. 
          </p>
          <p>
            In response to this, there is a growing need for an efficient, modern approach to catalogue and preserve the flora within the college campus. 
            This system should include an innovative approach such as QR coding, enabling easy identification and retrieval of detailed species information. 
          </p>
          <p>
            Furthermore, a digital herbarium can serve as a permanent, accessible resource for future academic use and environmental studies.
          </p>
          <p>
            The proposed project seeks to address these issues by developing a database management system that digitizes the biodiversity of the college flora, integrates geo-location features, and aims to promote environmental awareness and conservation efforts on campus.
          </p>
        </div>
      </div>

      {/* Part 2: Contact Us Section */}
      <div className="contact-section">
        <div className="contact-content">
          <h1>CONTACT US</h1>
          <p>Email: gdcalair2008@gmail.com</p>
          <p>Address: Government Degree College, Alair, Yadadri Bhuvanagiri District, Telangana, 508101.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
