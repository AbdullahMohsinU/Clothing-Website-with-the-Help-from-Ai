import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselSlider.css"; // Custom CSS for carousel

const CarouselSlider = () => {
  // Slider settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Image array with descriptive alt texts
  const images = [
    { src: "/assets/product1.jpg", alt: "Men's Outfit 1" },
    { src: "/assets/product2.jpg", alt: "Men's Outfit 2" },
    { src: "/assets/product3.jpg", alt: "Men's Outfit 3" },
    { src: "/assets/product4.jpg", alt: "Men's Outfit 4" },
    { src: "/assets/product5.jpg", alt: "Men's Outfit 5" },
  ];

  return (
    <div className="carousel-container" role="region" aria-label="Product carousel">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="carousel-slide">
            <img
              src={img.src}
              alt={img.alt}
              className="carousel-img"
              onError={(e) => {
                e.target.src = "/assets/fallback.jpg"; // Fallback image
                e.target.alt = "Image not available";
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;