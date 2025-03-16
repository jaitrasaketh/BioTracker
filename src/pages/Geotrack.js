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
        <div className="geotrack-content">
          <h1>GeoTracker</h1>
          <p>
            Integrating geo-tracking and mapping features to monitor and analyze campus plant distribution, fostering ecological awareness and conservation efforts.
          </p>

          <ul>
            <li><strong>GIS-Based Plant Mapping:</strong> Use GIS tools to map and track the distribution of different plant species across the campus.</li>
            <li><strong>GPS Tagging:</strong> Employ GPS-enabled devices or mobile applications to geo-locate each plant species accurately and store its coordinates for easy reference.</li>
            <li><strong>Interactive Digital Maps:</strong> Develop an interactive campus biodiversity map that allows students and visitors to explore plant locations, species information, and ecological significance.</li>
            <li><strong>Data Collection & Monitoring:</strong> Regularly update the database with new plant entries, growth observations, and health status using GIS-based monitoring tools.</li>
            <li><strong>Educational & Research Applications:</strong> Enable students and researchers to analyze plant distribution patterns, environmental impact, and biodiversity conservation through GIS data visualization.</li>
            <li><strong>Community Engagement:</strong> Encourage student participation by allowing them to contribute plant data via mobile GIS applications, fostering awareness of campus ecology.</li>
            <li><strong>Integration with Climate Smart Green Club:</strong> Utilize GIS tracking to support eco-friendly initiatives, monitor green cover changes, and promote sustainable campus landscaping efforts.</li>
          </ul>

          <div className="geo-button-container">
            <a 
              href="https://earth.google.com/web/data=MkEKPwo9CiExOThWTkdJVEdMTGFoUTIyOXhhanJZbk1zanVUVjhwSWUSFgoUMDBEMzZGNEYwNzMzMzQwODA2MTEgAUICCABKCAi93JCpAhAB"
              target="_blank"
              rel="noopener noreferrer"
              className="geo-link-button"
            >
              Open BioTracker in Google Earth 🌍
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geotrack;
