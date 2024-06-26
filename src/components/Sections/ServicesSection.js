import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const servicesData = [
  {
    title: "Ashes",
    description: `All ashes interments are offered for one of our renovated and
      beautifully landscaped ashes interment locations. We handle the physical
      interment of ashes and take pride in making this a pleasant experience, purchase and renewal of ashes interment rights, as well as managing lost interment rights.`,
    backgroundClass: "bg-services-bg-1",
    link: "/services/ashes",
  },
  {
    title: "Pet Interments",
    description: `At The Cemetery on the Hill, we can assist with all your memorial
      needs. This includes maintenance on existing memorials, as well as
      opportunities to create new memorials for your loved ones. Our
      compassionate team is dedicated to providing support during this
      difficult time.`,
    backgroundClass: "bg-services-bg-2",
    link: "/services/pet-interments",
  },
  {
    title: "Burials",
    description: `We offer reserved burial sites, purchase and renewal of Burial
      Interment Rights, and all necessities for a pleasant and memorable burial service. With our future focus predominantly on ashes interments, few burial sites are available.`,
    backgroundClass: "bg-services-bg-3",
    link: "/services/burials",
  },
];

const ServiceCard = ({ title, description, backgroundClass, link }) => (
  <div
    className={`${backgroundClass} bg-center bg-contain bg-no-repeat h-[52rem] xs:w-[23rem] sm:w-[28rem] md:w-[36rem] lg:h-[48rem] xl:h-[56rem] md:h-[62rem] xl:w-[26rem] lg:w-[22rem] grid grid-rows-2 place-items-center`}
  >
    <div className="row-span-1"></div>
    <div className="h-full w-full flex flex-col justify-evenly px-10  sm:px-20 pb-12 md:px-28 lg:px-10 xl:px-16 items-center space-y-4 lg:space-y-2 xl:space-y-4  row-span-1">
      <h3 className="text-2xl md:text-4xl lg:text-2xl font-bold text-primary font-display ">
        {title}
      </h3>
      <p className="text-base md:text-lg text-paragraph font-semibold tracking-wide text-center lg:text-base">
        {description}
      </p>
      <Link href={link} passHref>
        <span className="flex items-center justify-center px-4 py-2 text-white bg-secondary border border-secondary rounded-md cursor-pointer font-roboto uppercase hover:bg-primary hover:border-primary">
          Learn More <FaArrowRightLong className="ml-2 text-lg" />
        </span>
      </Link>
    </div>
  </div>
);

const ServicesSection = () => (
  <section className="min-h-screen py-[5rem] space-y-8 overflow-hidden">
    <h2 className="text-center text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
      Our Services
    </h2>
    <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly xl:justify-center min-h-[80vh] items-center gap-8 lg:gap-2 xl:gap-8">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </section>
);

export default ServicesSection;
