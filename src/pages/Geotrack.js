import React from "react";
import Navbar from "../component/Navbar"; // Adjust the import path if needed
import "./Geotrack.css";

const Geotrack = () => {
  return (
    <div className="geotrack-page">
      {/* Navbar */}
      <Navbar />

      {/* Part 1: Geotrack Section */}
      <div className="geotrack-section">
        <h1>GeoTracker</h1>
      </div>
    </div>
  );
};

export default Geotrack;
