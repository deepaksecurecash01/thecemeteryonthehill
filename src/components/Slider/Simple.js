import React, { useState } from "react";
import Slider from "react-slick";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className={`absolute rounded-sm p-4 -top-[3.8rem] right-[6rem] xl:-top-[6.8rem] xl:right-[6rem] ${
      currentSlide === 0 ? "bg-gold/50" : "bg-gold/75 cursor-pointer"
    }`}
    style={{ animation: "moveRightLeft 1.5s infinite", zIndex: 1 }}
    onClick={() => {
      if (currentSlide !== 0) {
        onClick();
      }
    }}
  >
    <FaArrowLeft className="text-xl text-grey" />
  </div>
);

const CustomNextArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className={`absolute rounded-sm p-4 -top-[3.8rem] right-[2rem] xl:-top-[6.8rem] xl:right-[2rem] ${
      currentSlide === slideCount - 1
        ? "bg-gold/50"
        : "bg-gold/75 cursor-pointer"
    }`}
    style={{ animation: "moveRightLeft 1.5s infinite", zIndex: 1 }}
    onClick={() => {
      if (currentSlide !== slideCount - 1) {
        onClick();
      }
    }}
  >
    <FaArrowRight className="text-xl text-grey" />
  </div>
);
function Resizable() {
const testimonials = [
  {
    review:
      "This platform has transformed our business processes. The intuitive design and robust features make it a must-have for any enterprise.",
    rating: 5,
    fullname: "Deepak Kumar",
    position: "Project Manager",
    image: "/images/testimonials/dk.png",
  },
  {
    review:
      "A fantastic solution for our team's collaboration needs. The seamless integration with our existing tools is a game-changer.",
    rating: 4,
    fullname: "Charlie Brown",
    position: "Product Owner",
    image: "/images/testimonials/download (1).jpeg",
  },
  {
    review:
      "Excellent customer service and a product that truly delivers on its promises. We’ve seen significant improvements in efficiency.",
    rating: 4,
    fullname: "Dylan Cross",
    position: "Senior Developer",
    image: "/images/testimonials/download.jpeg",
  },
  {
    review:
      "User-friendly interface and outstanding performance. It’s been a vital tool for our day-to-day operations.",
    rating: 5,
    fullname: "Dana White",
    position: "Business Analyst",
    image: "/images/testimonials/images.jpeg",
  },
  {
    review:
      "The best investment we’ve made this year. The features are exactly what we needed, and the support team is phenomenal.",
    rating: 5,
    fullname: "Eli Martinez",
    position: "IT Director",
    image: "/images/testimonials/images (1).jpeg",
  },
  {
    review:
      "User-friendly interface and outstanding performance. It’s been a vital tool for our day-to-day operations.",
    rating: 5,
    fullname: "Dana White",
    position: "Business Analyst",
    image: "/images/testimonials/images.jpeg",
  },
  {
    review:
      "The best investment we’ve made this year. The features are exactly what we needed, and the support team is phenomenal.",
    rating: 5,
    fullname: "Eli Martinez",
    position: "IT Director",
    image: "/images/testimonials/images (1).jpeg",
  },
];

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
      responsive: [
        {
          breakpoint: 3200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 2560,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };



  return (
    <div className="slider-container space-x-2 py-10 ">
      <div className="">
        <Slider {...settings}>
          {testimonials.map(
            ({ fullname, review, rating, position, image }, index) => {
               const stars = Array(5)
                 .fill()
                 .map((_, starIndex) =>
                   starIndex < rating ? (
                     <IoStar
                       key={starIndex}
                       className="text-4xl text-burgundy"
                     />
                   ) : (
                     <IoStarOutline
                       key={starIndex}
                       className="text-4xl text-burgundy"
                     />
                   )
                 );
              return (
                <div
                  key={index}
                  className="bg-gold/50 backdrop-blur-lg px-8 py-8 rounded-md space-y-6 flex flex-col items-center justify-center w-full slide-item"
                  style={{
                    boxShadow: "0 .1em .8em #212121",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "1em",
                    borderRadius: "10px",
                  }}
                >
                  <q className="text-grey text-base lg:text-lg">
                    {review}
                  </q>
                  <div className="flex justify-center items-center">
                    {stars}
                  </div>
                  <div className="space-y-1 flex flex-col justify-center items-center">
                    <div className="h-16 w-16 md:h-24 md:w-24 flex justify-center items-center relative">
                      <Image
                        src={image}
                        fill
                        alt={`Picture of ${fullname}`}
                        className="absolute rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl text-black font-semibold font-trajanpro3">
                      {fullname}
                    </h3>
                    <p className="text-base md:text-lg font-medium text-grey">
                      {position}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Resizable;
