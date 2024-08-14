import Image from "next/image";
import "./styles/Timeline.css";

const Timeline = () => {
  const timelineData = [
    {
      year: "1840",
      title: "Early Settlers",
      description:
        "In 1840, the Horseshoe Section, Noarlunga Township, known today as Old Noarlunga, was the first township to be successfully established in the Noarlunga district. Early settlers were composed of farmers, storekeepers, traders, timber cutters, and tradesmen such as stonemasons, builders, and carpenters. By the end of the year, the town had a hotel, the Horseshoe Inn, and a store.",
      imageSrc: "/images/History-Image-Test.png",
    },
    {
      year: "1851",
      title: "Colony Growth",
      description:
        "Year after year, despite the challenges in farming and the economic depression, the colony had seen growth. In 1851, the population had increased, with the addition of a new store and hotel, a mill, a brewery, and a malthouse.",
      imageSrc: "/images/History-Image-Test.png",
    },
    {
      year: "1850",
      title: "The Church & Cemetery on the Hill",
      description:
        "The foundation stone for The Church and Cemetery on the Hill was laid in 1850 by Bishop Augustus Short, the first Church of England Bishop in the colony. It was not until 1851 that The Church was ready for services. It has had improvements over the years, with the addition of a sanctuary, chancel, and a vestry in 1903.",
      imageSrc: "/images/History-Image-Test.png",
    },
    {
      year: "1850",
      title: "First Burial at The Cemetery",
      description:
        "The first burial in The Cemetery on the Hill was on the 16th of August 1850 for John William Scott. He worked as a teacher in Noarlunga and as a poundkeeper in the council. John was married to Jane Osborne Bell and fathered his only child, Emily Susan Scott.",
      imageSrc: "/images/History-Image-Test.png",
    },
    {
      year: "1851",
      title: "Mary Davey's Burial",
      description:
        "Today, the oldest grave still in existence, within our state heritage-listed cemetery, is that of Mary Davey. Mary and her husband John arrived in Adelaide in 1848 and settled in Noarlunga soon after. Tragically, Mary died from complications due to childbirth on the 18th of July 1851, and she was buried on the 21st of July 1851 as the sixth recorded burial in The Cemetery.",
      imageSrc: "/images/History-Image-Test.png",
    },
    {
      year: "1850",
      title: "Founding Pioneer Families",
      description:
        "Several members of the founding pioneer families are interred in The Cemetery. These families played a vital role in the early development of the colony, contributing to its growth and prosperity. Their legacies live on through their descendants and the historical landmarks they helped establish.",
      imageSrc: "/images/History-Image-Test.png",
    },
    {
      year: "1866",
      title: "Richard Bosworth's Burial",
      description:
        "Richard Bosworth, one of the appointed trustees for the construction and maintenance of The Church and Cemetery on the Hill was buried in the cemetery on the 21st of May 1866. Richard and his family arrived in South Australia in 1848 and built their family home in the colony. As one of the early settlers, he also became a local councillor, a Justice of the Peace, a lay reader, and a church warden. He died of cancer of the bladder and mania. His wife, Mary, died on 31 May 1868 after sustaining serious injuries from a horse trap accident and was buried in The Cemetery as well.",
      imageSrc: "/images/History-Image-Test.png",
    },
    {
      year: "1986",
      title: "State Heritage Listing",
      description:
        "The cemetery was granted a State Heritage listing on the 20th of November 1986. A number of people buried in the cemetery were recipients of the prestigious Medal of the Order of Australia and others had served during the World Wars. Some of the headstones found here are a testament to the craftsmanship of the time. The intricate carving and details on these headstones can still be admired in the Cemetery today.",
      imageSrc: "/images/History-Image-Test.png",
    },
    {
      year: "2020",
      title: "Church and Cemetery Ownership Change",
      description:
        "After over 160 years, The Church and Cemetery on the Hill was put on the market and is now under the care of the Bacchus Family. The Cemetery was rebranded from St Philip and St James to The Cemetery on The Hill when purchased in early 2020, this was to recognise the separation of the Church and Cemetery from the Anglican Church. We want to reassure that while the name has changed, the history and origin of the Church and Cemetery will never be forgotten.",
      imageSrc: "/images/History-Image-Test.png",
    },
    // Add more timeline data objects as needed
  ];

  return (
    <>
      <section className="relative flex flex-col justify-center items-center w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] py-6 md:py-2 my-[100px] timeline">
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
