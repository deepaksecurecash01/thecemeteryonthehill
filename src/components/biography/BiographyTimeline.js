import Image from "next/image";
import "./styles/BiographyTimeline.css";

const BiographyTimeline = ({ BiographyData }) =>
{
  console.log(BiographyData);
  return (
    <>
      <section className="relative flex flex-col justify-center items-center w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mb-16 py-6 md:py-8 timeline">
        {BiographyData.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center card  ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } ${index === 0 ? "" : "md:-mt-6"}`}
          >
            <div
              className={`md:relative px-6 lg:px-[50px] w-full md:w-[50%]  flex justify-center items-center ${
                index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <div
                className={`absolute  p-4 bg-primary h-10 w-10 top-5 md:top-0 z-10 rounded-full overflow-hidden flex justify-center items-center circle ${
                  index % 2 === 0 ? "-right-[21.5px]" : "-left-[19px]"
                }`}
              >
                <Image
                  src={`/images/${
                    index % 2 === 0 ? "left" : "right"
                  }-arrow.svg`}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                  className="rounded-md p-3 absolute hidden md:block"
                />
                <Image
                  src={`/images/${
                    index % 2 === 0 ? "right" : "right"
                  }-arrow.svg`}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                  className="rounded-md p-3 absolute md:hidden"
                />
              </div>
              <div className="text-box relative px-[40px] md:px-6 py-5 md:py-0 rounded-[6px] text-[15px] flex flex-col gap-2">
                <h3
                  className={`text-3xl md:text-4xl lg:text-4xl font-bold text-primary font-display ${
                    index % 2 === 0 ? "md:text-end" : "md:text-start"
                  }`}
                >
                  {item.Date}
                </h3>
                <p
                  className={`text-base md:text-lg text-paragraph ${
                    index % 2 === 0 ? "md:text-end" : "md:text-start"
                  }`}
                >
                  {item.Description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default BiographyTimeline;
