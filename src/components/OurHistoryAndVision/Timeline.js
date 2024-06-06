import Image from "next/image";
import "./Timeline.css"; // Ensure you create a CSS module with the styles

const Timeline = () => {
  return (
    <>
      <section className="relative max-w-[1200px] my-[100px] timeline">
        <div className="flex">
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
            <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -right-[20px] top-0 z-10 circle" />
            <div className="text-box flex flex-col justify-center items-center relative py-[20px] px-[30px] rounded-[6px] ">
              <p className="text-base tracking-wide md:text-xl text-end text-paragraph ">
                In 1840, the Horseshoe Section, No-orlunga Township, known today
                as Old Noarlunga, was the first township to be successfully
                established in the Noarlunga district. Early settlers were
                composed of farmers, storekeepers, traders, timber cutters, and
                tradesmen such as stonemasons, builders, and carpenters. By the
                end of the year, the town had a hotel, the Horseshoe Inn, and a
                store.
              </p>
            </div>
          </div>
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container flex justify-center items-center">
            <div className="absolute bg-primary w-[50%] h-[6px] left-0" />
            <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] ">
              <div className="relative w-56 h-56 rounded-full border-primary border-solid border-[6px]">
                <Image
                  src="/images/hero-3.jpg"
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="Historic Cemetery Statue"
                  className="absolute rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container flex justify-center items-center">
            <div className="absolute bg-primary w-[50%] h-[6px] right-0" />
            <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] ">
              <div className="relative w-56 h-56 rounded-full border-primary border-solid border-[6px]">
                <Image
                  src="/images/hero-3.jpg"
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="Historic Cemetery Statue"
                  className="absolute rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
            <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -left-[20px] top-0 z-10 circle" />
            <div className="text-box flex flex-col justify-center items-center relative py-[20px] px-[30px] rounded-[6px] ">
              <p className="text-base tracking-wide md:text-xl text-start text-paragraph ">
                Year after year, despite the challenges in farming and the
                economic depression, the colony had seen growth. In 1851, the
                population had increased, with the addition of a new store and
                hotel, a mill, a brewery, and a malthouse.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
            <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -right-[20px] top-0 z-10 circle" />
            <div className="text-box flex flex-col justify-center items-center relative py-[20px] px-[30px] rounded-[6px] ">
              <p className="text-base tracking-wide md:text-xl text-end text-paragraph ">
                The foundation stone for The Church and Cemetery on the Hill was
                laid in 1850 by Bishop Augustus Short, the first Church of
                England Bishop in the colony. It was not until 1851 that The
                Church was ready for services. It has had improvements over the
                years, with the addition of a sanctuary, chancel, and a vestry
                in 1903.
              </p>
            </div>
          </div>
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container flex justify-center items-center">
            <div className="absolute bg-primary w-[50%] h-[6px] left-0" />
            <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] ">
              <div className="relative w-56 h-56 rounded-full border-primary border-solid border-[6px]">
                <Image
                  src="/images/hero-3.jpg"
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="Historic Cemetery Statue"
                  className="absolute rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container flex justify-center items-center">
            <div className="absolute bg-primary w-[50%] h-[6px] right-0" />
            <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] ">
              <div className="relative w-56 h-56 rounded-full border-primary border-solid border-[6px]">
                <Image
                  src="/images/hero-3.jpg"
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="Historic Cemetery Statue"
                  className="absolute rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
            <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -left-[20px] top-0 z-10 circle" />
            <div className="text-box flex flex-col justify-center items-center relative py-[20px] px-[30px] rounded-[6px] ">
              <p className="text-base tracking-wide md:text-xl text-start text-paragraph ">
                The first burial in The Cemetery on the Hill was on the 16th of
                August 1850 for John William Scott. He worked as a teacher in
                Noarlunga and as a poundkeeper in the council. John was married
                to Jane Osborne Bell and fathered his only child, Emily Susan
                Scott.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
            <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -right-[20px] top-0 z-10 circle" />
            <div className="text-box flex flex-col justify-center items-center relative py-[20px] px-[30px] rounded-[6px] ">
              <p className="text-base tracking-wide md:text-xl text-end text-paragraph ">
                Today, the oldest grave still in existence, within our state
                heritage-listed cemetery, is that of Mary Davey. Mary and her
                husband John arrived in Adelaide in 1848 and settled in
                Noarlunga soon after. Tragically, Mary died from complications
                due to childbirth on the 18th of July 1851, and she was buried
                on the 21st of July 1851 as the sixth recorded burial in The
                Cemetery.
              </p>
            </div>
          </div>
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container flex justify-center items-center">
            <div className="absolute bg-primary w-[50%] h-[6px] left-0" />
            <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] ">
              <div className="relative w-56 h-56 rounded-full border-primary border-solid border-[6px]">
                <Image
                  src="/images/hero-3.jpg"
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="Historic Cemetery Statue"
                  className="absolute rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container flex justify-center items-center">
            <div className="absolute bg-primary w-[50%] h-[6px] right-0" />
            <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] ">
              <div className="relative w-56 h-56 rounded-full border-primary border-solid border-[6px]">
                <Image
                  src="/images/hero-3.jpg"
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="Historic Cemetery Statue"
                  className="absolute rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
            <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -left-[20px] top-0 z-10 circle" />
            <div className="text-box flex flex-col justify-center items-center relative py-[20px] px-[30px] rounded-[6px] ">
              <p className="text-base tracking-wide md:text-xl text-start text-paragraph ">
                Several members of the founding pioneer families are interred in
                The Cemetery.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
            <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -right-[20px] top-0 z-10 circle" />
            <div className="text-box flex flex-col justify-center items-center relative py-[20px] px-[30px] rounded-[6px] ">
              <p className="text-base tracking-wide md:text-xl text-end text-paragraph ">
                Richard Bosworth, one of the appointed trustees for the
                construction and maintenance of The Church and Cemetery on the
                Hill was buried in the cemetery on the 21st of May 1866. Richard
                and his family arrived in South Australia in 1848 and built
                their family home in the colony. As one of the early settlers,
                he also became a local councillor, a Justice of the Peace, a lay
                reader, and a church warden. He died of cancer of the bladder
                and mania. His wife, Mary, died on 31 May 1868 after sustaining
                serious injuries from a horse trap accident and was buried in
                The Cemetery as well.
              </p>
            </div>
          </div>
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container flex justify-center items-center">
            <div className="absolute bg-primary w-[50%] h-[6px] left-0" />
            <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] ">
              <div className="relative w-56 h-56 rounded-full border-primary border-solid border-[6px]">
                <Image
                  src="/images/hero-3.jpg"
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="Historic Cemetery Statue"
                  className="absolute rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container flex justify-center items-center">
            <div className="absolute bg-primary w-[50%] h-[6px] right-0" />
            <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] ">
              <div className="relative w-56 h-56 rounded-full border-primary border-solid border-[6px]">
                <Image
                  src="/images/hero-3.jpg"
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="Historic Cemetery Statue"
                  className="absolute rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
            <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -left-[20px] top-0 z-10 circle" />
            <div className="text-box flex flex-col justify-center items-center relative py-[20px] px-[30px] rounded-[6px] ">
              <p className="text-base tracking-wide md:text-xl text-start text-paragraph ">
                Another one of the early pioneering families in the colony was
                the Holly family. Together with his wife and two children,
                William Holly came to South Australia aboard the Apolline in
                October 1840. He, later on, built a hotel and even donated £5
                towards funds for the building of The Church and Cemetery on the
                Hill. The Holly family had prospered in the emerging colony and
                their children had married into the other pioneer families.
                Although William Holly went back to England, his children and
                their descendants lived their lives in the district and were
                eventually buried in The Cemetery.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
            <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -right-[20px] top-0 z-10 circle" />
            <div className="text-box flex flex-col justify-center items-center relative py-[20px] px-[30px] rounded-[6px] ">
              <p className="text-base tracking-wide md:text-xl text-start text-paragraph ">
                The cemetery was granted a State Heritage listing on the 20th of
                November 1986. A number of people buried in the cemetery were
                recipients of the prestigious Medal of the Order of Australia
                and others had served during the World Wars. Some of the
                headstones found here are a testament to the craftsmanship of
                the time. The intricate carving and details on these headstones
                can still be admired in the Cemetery today.
              </p>
            </div>
          </div>
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container flex justify-center items-center">
            <div className="absolute bg-primary w-[50%] h-[6px] left-0" />
            <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] ">
              <div className="relative w-56 h-56 rounded-full border-primary border-solid border-[6px]">
                <Image
                  src="/images/hero-3.jpg"
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="Historic Cemetery Statue"
                  className="absolute rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container flex justify-center items-center">
            <div className="absolute bg-primary w-[50%] h-[6px] right-0" />
            <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] ">
              <div className="relative w-56 h-56 rounded-full border-primary border-solid border-[6px]">
                <Image
                  src="/images/hero-3.jpg"
                  fill
                  loading="lazy"
                  objectFit="cover"
                  alt="Historic Cemetery Statue"
                  className="absolute rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
            <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -left-[20px] top-0 z-10 circle" />
            <div className="text-box flex flex-col justify-center items-center relative py-[20px] px-[30px] rounded-[6px] ">
              <p className="text-base tracking-wide md:text-xl text-start text-paragraph ">
                After over 160 years, The Church and Cemetery on the Hill was
                put on the market and is now under the care of the Bacchus
                Family. The Cemetery was rebranded from St Philip and St James
                to The Cemetery on The Hill when purchased in early 2020, this
                was to recognise the separation of the Church and Cemetery from
                the Anglican Church. We want to reassure that while the name has
                changed, the history and origin of the Church and Cemetery will
                never be forgotten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
