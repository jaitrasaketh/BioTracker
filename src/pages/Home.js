import React, { useState, useEffect, useCallback } from "react";
import "./Home.css";
import Navbar from "../component/Navbar";

const Home = () => {
  const images = [
    "/image1.jpeg", // Replace with the paths to your images
    "/image2.jpeg",
    "/image3.jpeg",
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
      <div className="about-section2">
        <div className="about-content">
          <h2>ABOUT US</h2>
          <p>
            Government Degree College (GDC), Alair, established in 2008, is a prominent
            institution located in the Yadadri Bhuvanagiri district of Telangana.
            Affiliated with Mahatma Gandhi University, the college offers a range
            of undergraduate programs across various disciplines.
          </p>
          <h3>Academic Programs:</h3>
          <ul>
            <li>Bachelor of Science (B.Sc) in Life Sciences</li>
            <li>Bachelor of Science (B.Sc) in Physical Sciences</li>
            <li>Bachelor of Commerce (B.Com) in Computers</li>
            <li>Bachelor of Arts (B.A) in Economics, History, and Political Science</li>
          </ul>
          <h3>Infrastructure and Facilities:</h3>
          <ul>
            <li>10-acre campus with spacious classrooms.</li>
            <li>Semi-automated library with 2,140 books.</li>
            <li>Well-equipped laboratories.</li>
            <li>Digital classrooms with modern teaching aids.</li>
          </ul>
          <h3>Accreditation:</h3>
          <p>
            GDC Alair has been accredited with a 'B+' grade (2.58 CGPA) by the
            National Assessment and Accreditation Council (NAAC), reflecting its
            commitment to quality education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
