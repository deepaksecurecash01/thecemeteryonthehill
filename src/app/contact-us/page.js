import ContactForm from "@/components/contact-us/ContactForm";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description:
    "Reach out to The Cemetery on The Hill for any inquiries regarding burials, ashes interments, pet interments, or memorial services. We're here to assist with compassion and care.",
  keywords:
    "Contact cemetery, burial inquiries, interment questions, cemetery support, The Cemetery on The Hill contact, cemetery services",
  author: "The Cemetery on The Hill",
  canonical: "https://www.thecemeteryonthehill.com.au/contact-us",
};

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
      <div className="lg:h-screen w-full flex flex-col items-center pt-10 lg:pt-2 xl:pt-10">
        <div className="lg:h-[25vh] xl:h-auto flex flex-col justify-center items-center">
          <h1 className="text-[1.75rem] md:text-[2.75rem] font-bold font-display text-primary">
            Get in Touch with Us!
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-paragraph tracking-wide">
            Let us know how we can help you
          </p>
        </div>
        <div className="relative h-full w-full grid grid-cols-1 lg:grid-cols-2 place-items-center overflow-hidden pt-10 lg:pt-0">
          <div className="relative col-span-1 h-[30vh] lg:col-span-1 lg:h-full w-full flex justify-end items-end order-1">
            <div
              className="absolute w-full h-full bg-contact-overlay -left-12 bg-left bg-cover lg:bg-bottom lg:bg-contain xl:-left-16 xl:-bottom-72 bg-no-repeat -z-20"
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Page;
