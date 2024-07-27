
import React, { useState } from 'react';

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://picsum.photos/600/300?random=1',
    'https://picsum.photos/600/300?random=2',
    'https://picsum.photos/600/300?random=3'
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-8">
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={handlePrevSlide}>‹</button>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img src={slide} alt={`Slide ${index}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-1 w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded">Static Button</button>
    </div>
  );
};

export default CarouselComponent;
