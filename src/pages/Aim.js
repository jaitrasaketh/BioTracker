import React from "react";
import Navbar from "../component/Navbar"; // Adjust the import path if needed
import "./Aim.css";

const Aim = () => {
  return (
    <div className="aim-page">
      {/* Navbar */}
      <Navbar />

      {/* Part 1: Aim and objectives Section */}
      <div className="aim-section">
        <h1>AIMS & OBJECTIVES</h1>
      </div>

      {/* Part 2: Contact Us Section */}
      <div className="contact-section">
        <h1>CONTACT US</h1>
      </div>
    </div>
  );
};

export default Aim;
