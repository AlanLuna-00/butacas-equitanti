/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const slides = [
    { image: "https://picsum.photos/800/800", text: "Texto 1" },
    { image: "https://picsum.photos/800/800", text: "Texto 2" },
    { image: "https://picsum.photos/800/800", text: "Texto 3" },
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="h-screen-95 relative">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
              {slide.text}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
