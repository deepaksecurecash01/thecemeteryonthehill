<>
  <section className="relative flex flex-col justify-center items-center w-full md:mac-w-[600px] lg:max-w-[1024px] xl:max-w-[1280px] py-6 md:py-2 my-[100px] timeline">
    {timelineData.map((item, index) => (
      <div
        key={index}
        className={`flex flex-col justify-center items-center md:flex-row container ${
          index % 2 === 0 ? "" : "md:flex-row-reverse"
        }`}
      >
        <div
          className={`relative py-[10px] px-6 md:px-[50px] md:w-[50%] left-0 left-container flex justify-center items-center ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute  top-0 z-10 circle ${
              index % 2 === 0 ? "-right-[20px]" : "-left-[20px]"
            }
`}
          />

          <div className="text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] flex flex-col gap-2">
            <h3
              className={`text-2xl md:text-4xl lg:text-4xl ${
                index % 2 === 0 ? "text-end" : "text-start"
              } font-bold text-primary font-display`}
            >
              {item.year}
            </h3>
            <h5
              className={`text-2xl md:text-4xl lg:text-2xl ${
                index % 2 === 0 ? "text-end" : "text-start"
              } font-bold text-primary font-display`}
            >
              {item.title}
            </h5>
            <p
              className={`text-base tracking-wide md:text-lg ${
                index % 2 === 0 ? "text-end" : "text-start"
              } text-paragraph`}
            >
              {item.description}
            </p>
          </div>
        </div>
        <div
          className={`relative py-[10px] px-6 md:px-[50px] md:w-[50%] left-0 left-container flex justify-center items-center ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`absolute bg-primary w-[50%] h-[6px] ${
              index % 2 === 0 ? "md:left-0" : "md:right-0"
            }`}
          />
          <div className="text-box relative py-[20px] md:px-[30px] rounded-[6px] text-[15px] ">
            <div className="relative w-[80vw] h-64 md:w-96 md:h-64 rounded-lg border-primary border-solid">
              <Image
                src={item.imageSrc}
                fill
                loading="lazy"
                objectFit="contain"
                alt="Historic Cemetery Statue"
                className="absolute"
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
</>;
