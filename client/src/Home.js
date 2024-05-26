import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/img.avif',
    '/img1.avif',
    '/img2.avif'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
}

export default Home;
