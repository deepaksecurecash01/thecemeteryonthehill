import { useEffect, useRef } from "react";
import Image from "next/image";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoStar, IoStarOutline } from "react-icons/io5";

const TestimonialsCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const elems = document.querySelectorAll(".carousel");
    const instances = M.Carousel.init(elems, {
      padding: 0,
    });

    carouselRef.current = instances[0]; // Get the carousel instance
  }, []);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const ratingStar = Math.floor(parseFloat(4));
  const stars = Array(5)
    .fill()
    .map((_, index) => {
      if (index < ratingStar) {
        return <IoStar key={index} className="h-5 text-burgundy" />;
      } else {
        return <IoStarOutline key={index} className="h-5 text-burgundy" />;
      }
    });

  return (
    <div className="carousel-container">
      <div className="carousel">
        {testimonials.map((testimonial, index) => (
          <a
            key={index}
            className="carousel-item space-y-4 overflow-hidden bg-[#CEBA94] min-h-[450px] min-w-[350px] backdrop-blur-2xl"
            href="#"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "1em",
              borderRadius: "10px",
            }}
          >
            <q className="text-grey text-lg">{testimonial.review}</q>
            <div className="flex justify-center items-center">{stars}</div>
            <div className="space-y-1 flex flex-col justify-center items-center">
              <div className="h-24 w-24 flex justify-center items-center relative">
                <Image
                  src={testimonial.image}
                  fill
                  alt={`Picture of ${testimonial.fullname}`}
                  className="absolute rounded-full object-cover"
                />
              </div>
              <h3 className="text-3xl text-black font-semibold font-trajanpro3">
                {testimonial.fullname}
              </h3>
              <p className="text-lg font-medium text-grey">
                {testimonial.position}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-control prev" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button className="carousel-control next" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
      <style jsx>{`
        .carousel-container {
          position: relative;
        }

        .carousel {
          height: 600px;
          perspective: 250px;
        }

        .carouselItem {
          width: 900px;
          background: #ff;
          padding: 50px;
          height: auto;
          text-align: center;
          border-radius: 15px;
        }
        .img-area {
          width: 100px;
          height: 100px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 50%;
          border: inset 8px deepskyblue;
        }
        .img-area img {
          width: 100%;
        }
        .testi p {
          font-size: 18px;
          line-height: 1.9;
        }
        .testi h4 {
          font-size: 20px;
          margin: 0;
        }
        .testi h5 {
          font-size: 14px;
          letter-spacing: 5px;
          margin: 7px 0;
        }
        .carousel-controls {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          transform: translateY(-50%);
        }
        .carousel-control {
          background: none;
          border: none;
          color: black;
          font-size: 2rem;
          cursor: pointer;
          padding: 0 20px;
        }
      `}</style>
    </div>
  );
};

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
      "Excellent customer service and a product that truly delivers on its promises. We’ve seen significant improvements in efficiency.",
    rating: 5,
    fullname: "Bob Smith",
    position: "Senior Developer",
    image: "/images/testimonials/download.jpeg",
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
      "Highly recommend this software to any organization looking to streamline their workflows. It’s both powerful and easy to use.",
    rating: 5,
    fullname: "Fiona Clark",
    position: "Operations Manager",
    image: "/images/testimonials/images (2).jpeg",
  },
];

export default TestimonialsCarousel;
