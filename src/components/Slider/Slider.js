"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import TestimonialsSlider from "../Slider/TestimonialsSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const TestimonialSection = () => {
  const rating = 4;
  const ratingStar = Math.floor(parseFloat(rating));

  const stars = Array(5)
    .fill()
    .map((_, index) => {
      if (index < ratingStar) {
        return <IoStar key={index} className="h-5 text-burgundy" />;
      } else {
        return <IoStarOutline key={index} className="h-5 text-burgundy" />;
      }
    });

  const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
    <div
      className={`absolute rounded-sm p-4 -top-[6.8rem] right-[40rem] ${
        currentSlide === 0 ? "bg-gold/50" : "bg-gold/75 cursor-pointer"
      }`}
      style={{ animation: "moveRightLeft 1.5s infinite", zIndex: 1 }}
      onClick={() => {
        if (currentSlide !== 0) {
          onClick();
        }
      }}
    >
      <FaArrowLeft className="text-lg text-grey" />
    </div>
  );

  const CustomNextArrow = ({ currentSlide, slideCount, onClick }) => (
    <div
      className={`absolute rounded-sm p-4 -top-[6.8rem] right-[36.5rem] ${
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
      <FaArrowRight className="text-lg text-grey" />
    </div>
  );
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const testimonials = [
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi voluptas aspernatur veritatis quod iusto eligendi id unde harum optio aut, dolor blanditiis recusandae totam! Vel tempore nostrum sequi explicabo.",
      rating: 4,
      fullname: "Deepak Kumar",
      position: "Web Developer",
      image: "/images/testimonials/dk.png",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi voluptas aspernatur veritatis quod iusto eligendi id unde harum optio aut, dolor blanditiis recusandae totam! Vel tempore nostrum sequi explicabo.",
      rating: 4,
      fullname: "Deepak Kumar",
      position: "Web Developer",
      image: "/images/testimonials/dk.png",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi voluptas aspernatur veritatis quod iusto eligendi id unde harum optio aut, dolor blanditiis recusandae totam! Vel tempore nostrum sequi explicabo.",
      rating: 4,
      fullname: "Deepak Kumar",
      position: "Web Developer",
      image: "/images/testimonials/dk.png",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi voluptas aspernatur veritatis quod iusto eligendi id unde harum optio aut, dolor blanditiis recusandae totam! Vel tempore nostrum sequi explicabo.",
      rating: 4,
      fullname: "Deepak Kumar",
      position: "Web Developer",
      image: "/images/testimonials/dk.png",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi voluptas aspernatur veritatis quod iusto eligendi id unde harum optio aut, dolor blanditiis recusandae totam! Vel tempore nostrum sequi explicabo.",
      rating: 4,
      fullname: "Deepak Kumar",
      position: "Web Developer",
      image: "/images/testimonials/dk.png",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi voluptas aspernatur veritatis quod iusto eligendi id unde harum optio aut, dolor blanditiis recusandae totam! Vel tempore nostrum sequi explicabo.",
      rating: 4,
      fullname: "Deepak Kumar",
      position: "Web Developer",
      image: "/images/testimonials/dk.png",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute bg-ellipse-1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10" />
      <div className="absolute bg-ellipse-2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10" />
      <div className="absolute bg-testimonials_overly bg-no-repeat object-right w-72 h-full -z-20 bg-contain " />
      <div className="flex justify-center items-center">
        <div className="px-8 space-y-2 w-full pl-64">
          <h2 className="text-[2.75rem] font-bold text-start font-trajanpro3 text-burgundy">
            Testimonial
          </h2>
          <p className="text-grey text-start tracking-wide pr-10">
            {
              " Don't just take our word for it - see what actual users of our service have to say about their experience."
            }
          </p>
        </div>
      </div>
      <div className="flex justify-end items-center py-8 px-8 space-x-4 w-full">
        <div className="slider-container w-[90vw]">
          <Slider {...settings}>
            {testimonials.map(
              ({ fullname, review, rating, position, image }, index) => (
                <div
                  key={index}
                  className="bg-gold/50 backdrop-blur-lg px-16 py-6 rounded-md space-y-4 flex flex-col items-center justify-center w-full slide-item"
                >
                  <q className="text-grey">{review}</q>
                  <div className="flex justify-center items-center">
                    {stars}
                  </div>
                  <div className="space-y-1 flex flex-col justify-center items-center">
                    <div className="h-24 w-24 flex justify-center items-center relative">
                      <Image
                        src={image}
                        fill
                        alt={`Picture of ${fullname}`}
                        className="absolute rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold font-trajanpro3">
                      {fullname}
                    </h3>
                    <p className="text-sm font-medium text-grey">{position}</p>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
