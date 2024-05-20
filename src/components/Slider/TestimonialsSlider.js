import Image from "next/image";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSlider = () =>
{
  
  const [items] = useState([
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
  ]);

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("");

  const moveLeft = () => {
    setDirection("left");
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  const moveRight = () => {
    setDirection("right");
    setActive((prev) => (prev + 1) % items.length);
  };

  const generateItems = () => {
    const levelSettings = [
      {
        level: -2,
        boxShadow: "-.2em .0em .9em #212121",
        height: "400px",
        width: "300px",
        zIndex: 1,
      },
      {
        level: -1,
        boxShadow: "-.1em .0em .8em #212121",
        height: "450px",
        width: "300px",
        zIndex: 2,
      },
      {
        level: 0,
        boxShadow: "0 .1em .8em #212121",
        height: "500px",
        width: "350px",
        zIndex: 3,
      },
      {
        level: 1,
        boxShadow: ".1em .0em .8em #212121",
        height: "450px",
        width: "300px",
        zIndex: 2,
      },
      {
        level: 2,
        boxShadow: ".2em .0em .9em #212121",
        height: "400px",
        width: "300px",
        zIndex: 1,
      },
    ];

    const displayedItems = [-2, -1, 0, 1, 2].map((level) => {
      const index = (active + level + items.length) % items.length;
      const { left, boxShadow, height, width, zIndex } =
        levelSettings.find((setting) => setting.level === level) || {};
      const item = items[index];
      const ratingStar = Math.floor(parseFloat(item.rating));
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
        <motion.div
          key={index}
          className={`item level${level} space-y-4 overflow-hidden bg-[#CEBA94] backdrop-blur-2xl`}
          initial={{
            opacity: 0,
            x: direction === "left" ? 100 : -100,
            rotateY: direction === "left" ? 100 : -100,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: direction === "left" ? -100 : 100,
            rotateY: direction === "left" ? 100 : -100,
            scale: 0.5,
          }}
          transition={{ duration: 0.5 }}
          style={{
            height,
            width,
            left,
            boxShadow,
            zIndex,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "1em",
            borderRadius: "10px",
          }}
        >
          <q className="text-grey text-lg">{item.review}</q>
          <div className="flex justify-center items-center">{stars}</div>
          <div className="space-y-1 flex flex-col justify-center items-center">
            <div className="h-24 w-24 flex justify-center items-center relative">
              <Image
                src={item.image}
                fill
                alt={`Picture of ${item.fullname}`}
                className="absolute rounded-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-semibold font-trajanpro3">
              {item.fullname}
            </h3>
            <p className="text-lg font-medium text-grey">{item.position}</p>
          </div>
        </motion.div>
      );
    });

    return displayedItems;
  };

  return (
    <>
      <style>{`
        .carousel-container {
          perspective: 1000px;
        }
        .item {
          backface-visibility: hidden;
          transform-style: ease-in-out;
        }
      `}</style>
      <div className="relative h-full grid lg:grid-cols-3 md:gap-24 lg">
        <div className="col-span-1 flex justify-center items-center gap-4 w-full">
          <div
            className=" cursor-pointer rounded-sm p-4 bg-gold/50 hover:bg-gold/75  z-10"
            onClick={moveLeft}
          >
            <FaArrowLeft className="text-grey text-4xl" />
          </div>
          <div
            className="arrow arrow-right cursor-pointer rounded-sm p-4 bg-gold/50  hover:bg-gold/75 z-10"
            onClick={moveRight}
          >
            <FaArrowRight className="text-grey text-4xl" />
          </div>
        </div>
        <div className=" col-span-2 carousel-container relative h-[28rem] w-full flex justify-center items-center -space-x-20">
          <AnimatePresence>{generateItems()}</AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSlider;
