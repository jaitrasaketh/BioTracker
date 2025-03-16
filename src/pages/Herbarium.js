import React, { useState } from "react";
import Navbar from "../component/Navbar"; // Adjust the import path if needed
import "./Herbarium.css";

const plants = [
  "Annona squamosa", "Azadirachta indica", "Bixa orellaana", "Bouganvillea glabra",
  "Butea monosperma", "Celosia argentia", "Cordyline fructicosa", "Ficus religiosa",
  "Hibiscus rosasinensis", "Justicia adhatoda", "Lawsonia inermis", "Leucaena leucocephala",
  "Mangifera indica", "Nerium oleander", "Peltophorum pterocarpum", "Phanera vahlii",
  "Phoenix sylvestris", "Phyllanthus emblica", "Plumeria obtusa", "Plumeria pudica",
  "Pongamia pinnata", "Pseuderanthemum maculata", "Psidium gujava", "Punica granatum",
  "Senna auriculata", "Simarouba amara", "Syzygium cumini", "Tabernaemontana divaricata",
  "Tradescantia", "Tridax procumbens", "Zizipus mauritiana"
];

const Herbarium = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <div className="herbarium-container">
      {/* Navbar */}
      <Navbar />

      <div className="herbarium-content">
        {/* Sidebar with scrollable plant list */}
        <div className="sidebar">
          <h2>Plant List</h2>
          <ul>
            {plants.map((plant, index) => (
              <li key={index} onClick={() => setSelectedPlant(plant)}>
                {plant}
              </li>
            ))}
          </ul>
        </div>

        {/* Display selected plant details */}
        <div className="plant-display">
          <h1>VIRTUAL HERBARIUM</h1>

          {/* Show image only if no plant is selected */}
          {!selectedPlant && (
            <img 
              src="/images/vhb.png" 
              alt="Virtual Herbarium" 
              className="vhub-image"
            />
          )}

          {selectedPlant ? (
            <div>
              <h2>{selectedPlant}</h2>
              <img 
                src={`/images/${selectedPlant.toLowerCase().replace(/\s+/g, "_")}.png`} 
                alt={selectedPlant} 
                className="plant-image"
              />
            </div>
          ) : (
            <h2>Select a plant to view details</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Herbarium;
