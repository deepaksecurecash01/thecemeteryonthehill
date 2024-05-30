import ContactForm from "@/components/Sections/ContactForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowRightLong,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const Page = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-full bg-ellipse-1 bg-cover bg-no-repeat -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-full w-full bg-ellipse-2 bg-cover bg-no-repeat -z-10"
        aria-hidden="true"
      />
      <div className="h-screen w-full flex flex-col items-center pt-10">
        <h1 className="text-[1.75rem] md:text-[2.75rem] font-bold font-display text-primary">
          Get in Touch with Us!
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-lg text-paragraph tracking-wide">
          Let us know how we can help you
        </p>
        <div className="relative h-full w-full grid grid-cols-1 lg:grid-cols-2 place-items-center overflow-hidden">
          <div className="relative col-span-1 h-[30vh] lg:col-span-1 lg:h-full w-full flex justify-end items-end order-1">
            <div
              className="absolute w-full h-full bg-contact-overlay bg-bottom bg-contain xl:-left-16 xl:-bottom-72 bg-no-repeat -z-20"
              aria-hidden="true"
            />
            <div className="object-bottom rounded-t-2xl w-full h-full">
              <Image
                src="/images/contact-statue.png"
                layout="fill"
                loading="lazy"
                objectFit="contain"
                alt="Historic Cemetery Statue"
                className="object-bottom"
              />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-1 lg:h-full w-full py-6 px-8 xl:px-12 md:pr-4 space-y-6 md:flex md:flex-col justify-start lg:justify-center items-center order-2 ">
            <div className="bg-contact-form-bg bg-center bg-contain bg-no-repeat h-auto w-full lg:h-[38rem] xl:-[46rem] 2xl:h-[46rem] xl:w-full flex flex-col justify-between items-center py-20 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
