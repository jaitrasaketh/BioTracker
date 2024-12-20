import React, { useState, useEffect, useCallback } from "react";
import "./Home.css";
import Navbar from "../component/Navbar";

const Home = () => {
  const images = [
    "/image1.png", // Replace with the paths to your images
    "/image2.png",
    "/image3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  // Handle next slide
  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTranslateValue((prev) => prev - 100);
    } else {
      setCurrentIndex(0);
      setTranslateValue(0);
    }
  }, [currentIndex, images.length]);

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, [handleNext]);

  // Handle previous slide
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTranslateValue((prev) => prev + 100);
    } else {
      setCurrentIndex(images.length - 1);
      setTranslateValue(-100 * (images.length - 1));
    }
  };

  return (
    <div className="home">
      {/* Navbar */}
      <Navbar />

      {/* Part 1: Image Slider */}
      <div className="slider-section">
        <button className="slider-arrow left-arrow" onClick={handlePrev}>
          &#8592;
        </button>
        <div className="slider-wrapper">
          <div
            className="slider"
            style={{ transform: `translateX(${translateValue}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`slide-${index}`}
                className="slider-image"
              />
            ))}
          </div>
        </div>
        <button className="slider-arrow right-arrow" onClick={handleNext}>
          &#8594;
        </button>
      </div>

      {/* Part 2: ABOUT US */}
      <div className="about-section">
        <h2>ABOUT US.</h2>
      </div>

      {/* Part 3: AIMS AND OBJECTIVES */}
      <div className="aims-section">
        <h2>AIMS AND OBJECTIVES.</h2>
      </div>
    </div>
  );
};

export default Home;
