import React from "react";
import Navbar from "../component/Navbar"; // Adjust the import path if needed
import "./Aim.css";

const Aim = () => {
  return (
    <div className="aim-page">
      {/* Navbar */}
      <Navbar />

      {/* Part 1: Aim and Objectives Section */}
      <div className="aim-section">
        <div className="aim-content">
          <h1>AIMS & OBJECTIVES</h1>
          <p>
            To develop a comprehensive digital database management system that documents the biodiversity of the college flora, incorporating geo-tracking, QR coding, and the creation of a digital herbarium for enhanced accessibility and conservation.
          </p>

          <ul>
            <li>
              <strong>To document the college flora:</strong> Conduct a thorough survey and documentation of plant species on campus, recording botanical details such as taxonomy, morphology, habitat, and ecological importance.
            </li>
            <li>
              <strong>To develop a biodiversity database management system:</strong> Design and implement a user-friendly database for storing and managing the documented data of campus plant species, enabling easy access to information.
            </li>
            <li>
              <strong>To integrate geo-tracking and mapping features:</strong> Employ Geographic Information System (GIS) tools to geo-locate each plant species and map their distribution across the campus.
            </li>
            <li>
              <strong>To generate QR codes for plant species identification:</strong> Create QR codes linked to the database for each species, allowing users to scan and retrieve detailed information about the plants in real time.
            </li>
            <li>
              <strong>To establish a digital herbarium:</strong> Digitize images and data of herbarium specimens to create an interactive, online herbarium collection that can be accessed anytime.
            </li>
            <li>
              <strong>To promote biodiversity awareness and conservation:</strong> Foster awareness of the biodiversity on campus by providing students, faculty, and visitors with an interactive and informative tool to learn about the college's flora and its ecological significance.
            </li>
          </ul>
        </div>
      </div>



      {/* Part 2: Contact Us Section */}
      <div className="contact-section">
        <div className="contact-content">
          <h1>CONTACT US</h1>
          <p>Email: gdcalair2008@gmail.com</p>
          <p>Address: Government Degree College, Alair, Yadadri Bhuvanagiri District, Telangana, 508101</p>
        </div>
      </div>
    </div>
  );
};

export default Aim;
