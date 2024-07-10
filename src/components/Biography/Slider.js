"use client";
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute p-4 bg-primary top-1/2 transform -translate-y-1/2 rounded-sm left-0 md:-left-16"
    style={{ animation: "moveRightLeft 1.5s infinite", zIndex: 1 }}
    onClick={onClick}
    aria-label="Previous"
  >
    <FaArrowLeft className="text-xl text-white" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute p-4 bg-primary top-1/2 transform -translate-y-1/2 rounded-sm right-0 md:-right-16"
    style={{ animation: "moveRightLeft 1.5s infinite", zIndex: 1 }}
    onClick={onClick}
    aria-label="Next"
  >
    <FaArrowRight className="text-xl text-white" />
  </button>
);

function BiographySlider() {
  const images = ["/images/Richard-1.jpg", "/images/Richard-2.jpg","/images/Richard-3.jpg"];

  const maxSlidesToShow = 3;
  const slidesToShow =
    images.length > maxSlidesToShow ? maxSlidesToShow : images.length;

  let settings = {
    infinite: images.length > 1, // Conditionally set infinite to false when there is only one image
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: images.length > 1, // Conditionally set infinite to false when there is only one image
          swipe: images.length > 1, // Disable swipe if only one image
          draggable: images.length > 1, // Disable dragging if only one image
          touchMove: images.length > 1, // Disable touch move if only one image
          arrows: images.length > 1, // Hide arrows if only one image
        },
      },
    ],
  };

  // Conditionally disable swipe and arrows if there are 3 or fewer images
  if (images.length <= 3) {
    settings = {
      ...settings,
      swipe: false, // Disable swipe
      draggable: false, // Disable dragging
      touchMove: false, // Disable touch move
      arrows: false, // Hide arrows
      slidesToShow: images.length,
    };
  }

  return (
    <div className="slider-container space-x-2 py-10 relative cursor-grab biography-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="backdrop-blur-lg rounded-md flex items-center justify-center w-full slide-item"
            style={{
              boxShadow: "0 .1em .8em #212121",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              loading="lazy"
              alt={`Richard's image ${index + 1}`}
              className="rounded-md object-top"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BiographySlider;
