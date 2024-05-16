"use client";
import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import TestimonialsSlider from "../Slider/TestimonialsSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const TestimonialSection = () => {


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
    <div className="relative overflow-hidden w-full min-h-screen flex justify-start items-center">
      <div className="absolute bg-elipse1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10" />
      <div className="absolute bg-elipse2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10" />
      <div className="absolute bg-testimonials_overly bg-no-repeat object-right w-72 h-full -z-20 bg-contain " />
      <div className="py-20 flex flex-col justify-between items-start h-full w-full space-y-4">
        <div className="flex justify-center items-center ">
          <div className="px-8 space-y-2 w-full pl-64">
            <h2 className="text-[2.75rem] font-bold text-start font-trajanpro3 text-burgundy">
              Testimonial
            </h2>
            <p className="text-grey text-start tracking-wide">
             {" Don't just take our word for it - see what actual users of our"}
              <br />
              service have to say about their experience.
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center py-8 px-8 space-x-4 w-full">
          <div className="w-[90vw]">
            <TestimonialsSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
