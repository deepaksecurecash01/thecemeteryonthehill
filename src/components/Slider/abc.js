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
    <div className="carousel-container w-full lg:grid lg:grid-cols-4 place-items-center md:ml-24 lg:ml-0 ">
      <div className="col-span-1 flex justify-center lg:justify-end items-center gap-4 w-full">
        <div
          className=" cursor-pointer rounded-sm p-4 bg-gold/50 hover:bg-gold/75  z-10"
          onClick={handlePrev}
        >
          <FaArrowLeft className="text-grey text-2xl md:text-4xl" />
        </div>
        <div
          className="arrow arrow-right cursor-pointer rounded-sm p-4 bg-gold/50  hover:bg-gold/75 z-10"
          onClick={handleNext}
        >
          <FaArrowRight className="text-grey text-2xl md:text-4xl" />
        </div>
      </div>
      <div className="carousel col-span-3 flex justify-center items-center">
        {testimonials.map((testimonial, index) => (
          <a
            key={index}
            className="carousel-item space-y-4 overflow-hidden bg-[#CEBA94] min-h-[350px] min-w-[250px] md:min-h-[400px] md:min-w-[280px] lg:min-h-[450px] lg:min-w-[350px] backdrop-blur-2xl"
            href="#"
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
          </a>
        ))}
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
        }

        .carousel {
          height: 600px;
          perspective: 500px;
        }

        @media (max-width: 640px) {
          .carousel {
            perspective: 198px;
          }
        }

        @media (min-width: 768px) {
          .carousel {
            perspective: 300px;
          }
        }

        @media (min-width: 1024px) {
          .carousel {
            perspective: 500px;
          }
        }

        .carouselItem {
          width: 900px;
          background: #ff;
          padding: 50px;
          height: auto;
          text-align: center;
          border-radius: 15px;
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
];

export default TestimonialsCarousel;
