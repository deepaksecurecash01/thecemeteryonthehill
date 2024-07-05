import Image from "next/image";
import "@/components/OurHistoryAndVision/Timeline.css";

const Timeline = () => {
  const timelineData = [
    {
      year: "5th December,1848",
      title: "Arrived in South Australia",
      description:
        "Richard and Mary Bosworth, along with their five children, arrived in South Australia aboard the Hooghly on the 5th of December 1848. The family were listed as cabin passengers which indicated that they had the means to pay their fare to South Australia.",
      imageSrc: "/images/Richard-1.jpg",
    },
    {
      year: "24th August,1848",
      title: "The family left London",
      description:
        "Richard was born in Cricklewood, Middlesex, England, and was the son of Thomas Bosworth and Ann (nee Wright). On the 8th of February 1824, Richard married Mary (nee Miller) in the Parish of St. Pancras, County of Middlesex, England. Their five children were born prior to their emigration – Charlotte aged 15, Ann aged 14, Richard Daniel aged 9, Henry aged 7 and John aged 4. The family left London on the 24th of August 1848 and travelled via Plymouth, prior to their arrival in Adelaide.",
      imageSrc: "/images/Richard-2.jpg",
    },

    {
      year: "May & June of 1949",
      title: "Richard Purchased Land",
      description:
        "Richard wasted no time in purchasing land and in May of 1849 he purchased three sections of land: Section 3078 consisting of 82 acres, for which he paid eighty two pounds one shilling, section 616 consisting of 77 acres, paying seventy seven pounds one shilling, section 609 consisting of 79 acres, paying seventy nine pounds one shilling. In June of 1849, Richard purchased more Crown Land, being Section 100, consisting of 79 acres, for which he paid one hundred and eighteen pounds. He also purchased Section 110 which consisted of 80 acres, paying ninety eight pounds.",
      imageSrc: "/images/Richard-3.jpg",
    },

    // Add more timeline data objects as needed
  ];

  return (
    <>
      <section className="relative flex flex-col justify-center items-center w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] py-6 md:py-2 mt-[100px] mb-12 timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center card ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`md:relative py-[10px] px-6 lg:px-[50px] w-full md:w-[50%] flex justify-center items-center ${
                index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <div
                className={`h-10 w-10 bg-transparent border-4 border-primary bg-white rounded-full absolute top-0 z-10 circle ${
                  index % 2 === 0 ? "-right-[20px]" : "-left-[20px]"
                }`}
              />
              <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] flex flex-col gap-2">
                <h3
                  className={`text-3xl md:text-4xl lg:text-4xl font-bold text-primary font-display ${
                    index % 2 === 0 ? "md:text-end" : "md:text-start"
                  }`}
                >
                  {item.year}
                </h3>
                <h5
                  className={`text-xl md:text-2xl lg:text-2xl font-bold text-primary font-display ${
                    index % 2 === 0 ? "md:text-end" : "md:text-start"
                  }`}
                >
                  {item.title}
                </h5>
                <p
                  className={`text-base md:text-lg text-paragraph ${
                    index % 2 === 0 ? "md:text-end" : "md:text-start"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
            <div
              className={`relative py-[10px] px-6 md:px-[50px] w-full md:w-[50%] flex justify-center items-center ${
                index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
              } order-first md:order-none`}
            >
              <div
                className={`absolute hidden md:block bg-primary w-[50%] h-[6px] ${
                  index % 2 === 0 ? "md:left-0" : "md:right-0"
                }`}
              />
              <div className="text-box relative py-[20px] md:px-[30px] rounded-[6px] text-[15px]">
                <div className="relative w-[80vw] h-64 md:w-96 md:h-64 rounded-lg border-primary border-solid">
                  <Image
                    src={item.imageSrc}
                    fill
                    loading="lazy"
                    objectFit="contain"
                    alt={item.title}
                    className="absolute"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Timeline;
