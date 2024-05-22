import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

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

export default function SimpleSwiper() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4">
      <div className="flex justify-center items-center gap-4 mb-4">
        <div
          className="cursor-pointer rounded-sm p-4 bg-gold/50 hover:bg-gold/75 z-10"
          id="swiper-prev"
        >
          <FaArrowLeft className="text-grey text-2xl md:text-4xl" />
        </div>
        <div
          className="cursor-pointer rounded-sm p-4 bg-gold/50 hover:bg-gold/75 z-10"
          id="swiper-next"
        >
          <FaArrowRight className="text-grey text-2xl md:text-4xl" />
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: "#swiper-prev",
          nextEl: "#swiper-next",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => {
          const stars = Array(5)
            .fill()
            .map((_, starIndex) =>
              starIndex < testimonial.rating ? (
                <IoStar key={starIndex} className="text-4xl text-burgundy" />
              ) : (
                <IoStarOutline
                  key={starIndex}
                  className="text-4xl text-burgundy"
                />
              )
            );

          return (
            <SwiperSlide
              key={index}
              className="bg-gold/50 backdrop-blur-lg px-16 py-6 rounded-md space-y-4 flex flex-col items-center justify-center w-full slide-item"
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
              <q className="text-grey text-base md:text-lg">
                {testimonial.review}
              </q>
              <div className="flex justify-center items-center">{stars}</div>
              <div className="space-y-1 flex flex-col justify-center items-center">
                <div className="h-16 w-16 md:h-24 md:w-24 flex justify-center items-center relative">
                  <Image
                    src={testimonial.image}
                    fill
                    alt={`Picture of ${testimonial.fullname}`}
                    className="absolute rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl text-black font-semibold font-trajanpro3">
                  {testimonial.fullname}
                </h3>
                <p className="text-base md:text-lg font-medium text-grey">
                  {testimonial.position}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
