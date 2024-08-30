import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const servicesData = [
  {
    title: "Ashes Interments",
    description: `At The Cemetery on The Hill, we honour the passage of time and memory with our ashes interments. We offer several options for Ashes Interments set within carefully restored and beautifully landscaped locations. With meticulous care, we manage all aspects of the interment process, ensuring that each life is remembered with reverence. We take pride in making this as pleasant of an experience as possible.`,
    backgroundClass: "bg-services-bg-1",
    link: "/services/ashes",
  },
  {
    title: "Pet Interments",
    description: `We understand that family members come in all shapes and forms. For those who shared their lives with these cherished companions, we offer dedicated pet interment services that recognise the profound bond between humans and beloved pets. In this historic cemetery, we provide a place of rest for pets, allowing their memories to endure in a space that reflects the peace and care they brought to your life. `,
    backgroundClass: "bg-services-bg-2",
    link: "/services/pet-interments",
  },
  {
    title: "Burials",
    description: `As a State Heritage Site, The Cemetery on The Hill may offer a unique opportunity to rest within its historic grounds, where the stories of early settlers are interwoven with the landscape. With our future focus predominantly on ashes interments, a limited number of burial sites may be available, making this a unique opportunity to secure a resting place within our historic grounds.`,
    backgroundClass: "bg-services-bg-3",
    link: "/services/burials",
  },
];

const ServiceCard = ({ title, description, backgroundClass, link }) => (
  <div
    className={`${backgroundClass} bg-center bg-contain bg-no-repeat h-[52rem] xs:w-[23rem] sm:w-[28rem] md:w-[36rem] xl:h-[56rem] md:h-[62rem] lg:h-[58rem] lg:w-[26rem] xl:w-[26rem] grid grid-rows-2 place-items-center`}
  >
    <div className="row-span-1"></div>
    <div className="h-full w-full flex flex-col justify-evenly px-10  sm:px-20 pb-12 md:px-28 lg:px-10 xl:px-16 items-center space-y-2 lg:space-y-0  row-span-1">
      <h3 className="text-2xl md:text-3xl xl:text-2xl font-bold text-primary font-display ">
        {title}
      </h3>
      <p className="text-sm text-paragraph font-semibold text-center md:text-base">
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
    <div className="flex flex-col xl:flex-row justify-center lg:justify-center xl:justify-center min-h-[80vh] items-center gap-8 lg:gap-2 xl:gap-8">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </section>
);

export default ServicesSection;
