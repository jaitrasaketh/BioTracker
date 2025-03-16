// Navbar.js
import React from 'react';
import './Navbar.css'; // Include the CSS file for styling


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">BioTrack</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About The Project</a></li>
        <li><a href="/aims">Aims</a></li>
        <li className="dropdown">
          <span>Digiflora</span> 
          <ul className="dropdown-menu">
            <li><a href="/herbarium">Herbarium</a></li>
            <li><a href="/geotracker">GeoTracker</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
