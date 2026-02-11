import React, { useState, useEffect } from "react";
import "./ResponsiveCarousel.css";

// Import all images from PrintsImg folder
import roomViewSquare from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/room-view-square-ind.jpg";
import canvasEdge from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/canvas-edge-ind.jpg";
import canvasPrintsSizes from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/canvas-prints-sizes-ind.jpg";
import canvasThickness from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/canvas-thickness-ind.jpg";
import canvasWrap from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/canvas-wrap-ind.jpg";
import easelBackAndDustCover from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/easel-back-and-dust-cover_1.jpg";
import hangingOptions from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/hanging-options-ind.jpg";
import roomViewCircle from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/room-view-circle-ind.jpg";
import roomViewPanoramic from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/room-view-panoramic-ind.jpg";
import roomViewRectangle from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/room-view-rectangle-ind.jpg";
import roomViewTriangle from "../../Pages/PrintPages/Canvas-Prints/PrintsImg/room-view-triangle-ind.jpg";

// Carousel slides - room-view-square first, then other room-views EXCLUDED, then other images
const CAROUSEL_SLIDES = [
  {
    id: 1,
    image: roomViewSquare,
    alt: "Room View Square",
  },
  {
    id: 2,
    image: canvasEdge,
    alt: "Canvas Edge",
  },
  {
    id: 3,
    image: canvasPrintsSizes,
    alt: "Canvas Prints Sizes",
  },
  {
    id: 4,
    image: canvasThickness,
    alt: "Canvas Thickness",
  },
  {
    id: 5,
    image: canvasWrap,
    alt: "Canvas Wrap",
  },
  {
    id: 6,
    image: easelBackAndDustCover,
    alt: "Easel Back and Dust Cover",
  },
  {
    id: 7,
    image: hangingOptions,
    alt: "Hanging Options",
  },
];

const ResponsiveCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Navigate to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(true);
  };

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    setIsAutoPlay(true);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1,
    );
    setIsAutoPlay(true);
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Carousel Image */}
      <div className="carousel-main">
        <img
          src={CAROUSEL_SLIDES[currentSlide].image}
          alt={CAROUSEL_SLIDES[currentSlide].alt}
          className="carousel-image"
        />

        {/* Left Arrow */}
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <span className="arrow-icon">&#10094;</span>
        </button>

        {/* Right Arrow */}
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span className="arrow-icon">&#10095;</span>
        </button>

        {/* Slide Counter */}
        <div className="slide-counter">
          {currentSlide + 1} / {CAROUSEL_SLIDES.length}
        </div>
      </div>

      {/* Thumbnail Indicators */}
      <div className="carousel-thumbnails">
        {CAROUSEL_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            className={`thumbnail ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <img src={slide.image} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
