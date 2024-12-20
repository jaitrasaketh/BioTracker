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
        <h1>ABOUT US</h1>
      </div>

      {/* Part 2: Contact Us Section */}
      <div className="contact-section">
        <h1>CONTACT US</h1>
      </div>
    </div>
  );
};

export default About;
