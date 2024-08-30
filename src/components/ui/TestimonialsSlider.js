"use client";
import React from "react";
import Slider from "react-slick";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className={`absolute rounded-sm p-4 -top-[3.8rem] right-[6rem] xl:-top-[4.8rem] lg:right-[6rem] ${
      currentSlide === 0 ? "bg-secondary/50" : "bg-secondary/75 cursor-pointer"
    }`}
    style={{ animation: "moveRightLeft 1.5s infinite", zIndex: 1 }}
    onClick={() => {
      if (currentSlide !== 0) {
        onClick();
      }
    }}
  >
    <FaArrowLeft className="text-xl text-paragraph" />
  </div>
);

const CustomNextArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className={`absolute rounded-sm p-4 -top-[3.8rem] right-[2rem]  xl:-top-[4.8rem] xl:right-[2rem] ${
      !onClick
        ? "bg-secondary/50"
        : "bg-secondary/75 cursor-pointer"
    }`}
    style={{ animation: "moveRightLeft 1.5s infinite", zIndex: 1 }}
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    <FaArrowRight className="text-xl text-paragraph" />
  </div>
);

function TestimonialSlider() {
  const testimonials = [
    {
      review:
        "What a wonderful thing you’re all doing. I love learning about others even if I am not related to them. Cemeteries give us all a look into those that were here before us and old headstones have so much information.",
      fullname: "Jodie B.",
    },
    {
      review:
        "Our great great grandfather’s legacy lives on in this beautiful church, cemetery and its land. Our family wishes all the very best to all involved in the renovation of The Cemetery on The Hill-a wonderful place of historic importance and for reflection.",
      fullname: "Sharon F.",
    },
    {
      review:
        "Thank you for restoring the graves of the pioneers of the Onkaparinga District.",
      fullname: "Mary S.",
    },
    {
      review: "Looks beautiful. So glad mum is resting in a beautiful place.",
      fullname: "Kaylene P.",
    },
    {
      review:
        "This is very lovely. I recently visited The Cemetery on The Hill and thought it had been kept lovely and well-maintained. Very good team they have keeping it all together up there!",
      fullname: "Erin S.",
    },
  ];


  const settings = {
    infinite: false,
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
          infinite: false,
        },
      },
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
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
    <div className="slider-container space-x-2 py-10 relative cursor-grab testimonials">
      <div className="">
        <Slider {...settings}>
          {testimonials.map(
            ({ fullname, review }, index) => {
          
              return (
                <div
                  className="flex flex-col items-center max-w-lg mx-12 lg:mx-0 bg-secondary/50 backdrop-blur-lg rounded-md px-8 py-8 slide-item"
                  key={index}
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
                  <div className="h-64 4xl:h-64 flex justify-center items-center">
                  

                    <q className="text-paragraph relative font-semibold text-base tracking-wide h-full lg:text-lg">
                      {review}
                    </q>
                  </div>

                  <div className=" space-y-2 flex flex-col justify-center items-center">
                    <span className="w-12 h-1 my-2 rounded-lg bg-primary z-50"></span>

                    <h3 className="text-2xl text-tertiary font-semibold font-display">
                      {fullname}
                    </h3>
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

export default TestimonialSlider;
