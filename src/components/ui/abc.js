import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowRightLong,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const IntroSection = () => {
  return (
    <section className="relative h-full xl:min-h-screen grid grid-cols-1 xl:grid-cols-7 place-items-center overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-full bg-ellipse-1 bg-cover bg-no-repeat -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-full w-full bg-ellipse-2 bg-cover bg-no-repeat -z-10"
        aria-hidden="true"
      />

      <div className="relative col-span-1 h-[30vh]  xl:col-span-4 xl:h-full w-full flex justify-end items-end order-1 xl:order-2">
        <div
          className="absolute w-full h-full bg-intro-overlay bg-cover bg-no-repeat object-right -z-20"
          aria-hidden="true"
        />
        <div className="object-bottom rounded-t-2xl w-full h-full">
          <Image
            src="/images/intro-statue.png"
            layout="fill"
            loading="lazy"
            alt="Historic Cemetery Statue"
            className=" object-contain lg:object-cover 4xl:object-contain"
          />
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3 lg:h-full w-full py-6 px-8 xl:px-12 md:pr-4 space-y-6 md:flex md:flex-col justify-start xl:justify-center items-start order-2 xl:order-1">
        <h1 className="text-[1.75rem] md:text-[3rem] font-bold text-start text-primary font-display">
          PRESERVING HISTORY, HONOURING LEGACIES
        </h1>
        <p className="text-base tracking-wide md:text-lg text-start text-paragraph">
          High on the hill overlooking Old Noarlunga, The Church on The Hill,
          previously the Church of St. Philip and St. James, along with its
          cemetery, has stood as a steadfast symbol of community since 1850. The
          construction of the church was made possible through the tireless
          efforts of local figures such as Richard Bosworth, Philip Hollins, and
          James Clark, who raised funds and gathered support from the community
          to build a place of assembly and worship.
        </p>
        <p className="text-base tracking-wide md:text-lg text-start text-paragraph">
          The rocks used to build the Church were quarried from the banks of the
          Onkaparinga River and hauled up the steep hill—a lasting testament to
          the skill of local stonemasons, including William Davey and Mr.
          Shepard. Despite its isolated location atop a steep hill, which made
          attendance difficult for some, the Church quickly became a spiritual
          anchor for the community. Bishop Augustus Short, South Australia's
          first Church of England bishop, laid the foundation stone, marking the
          beginning of a long history of The Church on The Hill.
        </p>
        <p className="text-base tracking-wide md:text-lg text-start text-paragraph">
          The Cemetery, nestled beside the Church, became the resting place for
          the early settlers who played a key role in shaping the region. Over
          the years, our grounds have witnessed the passage of time, with
          generations of families returning to honour those who came before
          them. Listed on the State Heritage Register in 1985, the Cemetery and
          Church are both recognised for their historical and cultural
          significance, with ongoing restoration efforts ensuring that this
          important piece of South Australian heritage is preserved for future
          generations.
        </p>
        <p className="text-base tracking-wide md:text-lg text-start text-paragraph">
          Today, The Cemetery on The Hill continues to offer a serene place for
          ashes interments, pet interments, burials and memorials, maintaining
          the deep connection between the land, the community, and the history
          that has sustained it for more than 170 years.
        </p>
        <Link href="/contact-us" passHref>
          <span className="flex items-center justify-center mt-4 md:mt-0 px-4 py-2 lg:px-6 lg:py-3 text-white bg-secondary border border-secondary rounded-md cursor-pointer font-roboto uppercase lg:text-xl hover:bg-primary hover:border-primary">
            Get in touch <FaArrowRightLong className="ml-2 text-lg" />
          </span>
        </Link>

        <div className="flex items-center justify-start gap-4 mt-4 md:mt-0">
          <button
            className="text-xl lg:text-2xl text-paragraph cursor-pointer hover:text-secondary"
            aria-label="Facebook"
          >
            <FaFacebook role="button" />
          </button>
          <button
            className="text-xl lg:text-2xl text-paragraph cursor-pointer hover:text-secondary"
            aria-label="Instagram"
          >
            <FaInstagram role="button" />
          </button>
          <button
            className="text-xl lg:text-2xl text-paragraph cursor-pointer hover:text-secondary"
            aria-label="Tiktok"
          >
            <FaTiktok role="button" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
