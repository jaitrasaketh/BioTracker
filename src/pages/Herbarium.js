import React from "react";
import Navbar from "../component/Navbar"; // Adjust the import path if needed
import "./Herbarium.css";

const Herbarium = () => {
  return (
    <div className="herbarium-page">
      {/* Navbar */}
      <Navbar />

      {/* Part 1: Geotrack Section */}
      <div className="herbarium-section">
        <h1>Virtual Herbarium</h1>
      </div>
    </div>
  );
};

export default Herbarium;
