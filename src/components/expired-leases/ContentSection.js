"use client";
import { useDispatch } from "react-redux";
import { FaArrowRightLong } from "react-icons/fa6";
import { setPopupForm } from "@/redux/slice";

const servicesData = [
  {
    title: "RENEW INTERMENT",
    description: `As the expiration date of an Interment Right approaches, holders have the option to renew for an additional period. Renewal fees vary based on the specific plot. Our team is available to guide you through the renewal process and provide all the necessary information to help you maintain your interment right at The Cemetery on The Hill.`,
    backgroundClass: "bg-expiredleases-overlay-bg",
    link: "/services/ashes",
    button: "Renew",
  },
  {
    title: "RELEASE INTERMENT",
    description: `If you choose to surrender your Interment Right, The Cemetery on The Hill will regain the right to the associated plot. Once released, the plot may become available for a new holder, ensuring the continued respectful use of our historic grounds. Rest assured that we handle all aspects of this process with care and in full compliance with South Australian regulations.`,
    backgroundClass: "bg-expiredleases-overlay-bg",
    link: "/services/pet-interments",
    button: "Release",
  },
];

const ServiceCard = ({ title, description, backgroundClass, link, button }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setPopupForm(button));
  };

  return (
    <div
      id="leases-form"
      className={`${backgroundClass} backgroundClass bg-center bg-contain bg-no-repeat h-[20rem] w-full sm:w-[28rem] md:w-[40rem] lg:h-[22rem] xl:h-[24rem] md:h-[32rem] xl:w-[36rem] lg:w-[31rem]`}
    >
      <div className="h-full w-full pb-8 pt-10 flex flex-col justify-evenly px-10  sm:px-20  md:px-28 lg:px-14 xl:px-24 items-center space-y-0 md:space-y-4 lg:space-y-2 xl:space-y-0  row-span-1">
        <h3 className="text-xl md:text-3xl lg:text-2xl font-bold text-primary font-display ">
          {title}
        </h3>
        <p className="text-sm md:h-28 lg:h-44 flex justify-center items-center md:text-lg text-paragraph font-semibold tracking-wide text-justify lg:text-base">
          {description}
        </p>

        <button type="button" onClick={handleButtonClick}>
          <span className="flex items-center justify-center text-sm md:text-base px-4 py-2 text-white bg-secondary border border-secondary rounded-md cursor-pointer font-roboto uppercase hover:bg-primary hover:border-primary">
            {button} {" Now"} <FaArrowRightLong className="ml-2 md:text-lg" />
          </span>
        </button>
      </div>
    </div>
  );
};

const ContentSection = () => {
  return (
    <section
      className="relative 6xl:min-h-[35vh] flex justify-center items-center"
      aria-labelledby="banner-heading"
    >
      <div
        className={`absolute bg-banner-bg-2 bg-no-repeat w-full h-full bg-cover bg-center -z-20`}
        role="img"
        aria-label="Decorative background image"
      />

      <div className="absolute bg-tertiary bg-opacity-60 w-full h-full -z-10" />
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly xl:justify-center py-6 items-center gap-2 lg:gap-2 xl:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
