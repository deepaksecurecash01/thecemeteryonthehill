import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

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

const App = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          modules={[EffectCoverflow, Navigation]}
          navigation={{
            prevEl: "#swiper-button-prev",
            nextEl: "#swiper-button-next",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          className="swiper testimonial-slider"
        >
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => {
              const stars = Array(5)
                .fill()
                .map((_, starIndex) =>
                  starIndex < testimonial.rating ? (
                    <IoStar key={starIndex} className="h-5 text-burgundy" />
                  ) : (
                    <IoStarOutline
                      key={starIndex}
                      className="h-5 text-burgundy"
                    />
                  )
                );

              return (
                <SwiperSlide
                  key={index}
                  className="swiper-slide testimonial-slide  bg-[#CEBA94]  backdrop-blur-2xl"
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
                  <div className="flex justify-center items-center">
                    {stars}
                  </div>
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
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default App;
