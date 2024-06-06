import Image from "next/image";
import "./Timeline.css"; // Ensure you create a CSS module with the styles

const Timeline = () => {
  return (
    <>
      <section className="relative max-w-[1200px] my-[100px] timeline">
        <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
          <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -right-[20px] top-[32px] z-10 circle" />
          <div className="text-box relative py-[20px] px-[30px] bg-[#fff] rounded-[6px] text-[15px] ">
            <p className="text-base tracking-wide md:text-xl text-justify text-paragraph ">
              Dealing with loss will never be easy. It can be painful to say
              goodbye to a loved one. And it is equally difficult to find a
              suitable memorial and location for their forever resting place.
            </p>
            <span className="container-arrow h-0 w-0 absolute top-[28px] z-10 border-t-[15px] -right-[15px] border-t-transparent border-t-solid border-b-[15px] border-b-transparent border-b-solid border-l-[15px] border-l-white border-l-solid " />
          </div>
        </div>
        <div className="container relative py-[10px] px-[50px] w-[50%]  left-[50%] right-container">
          <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -left-[20px] top-[32px] z-10 circle" />

          <div className="text-box relative py-[20px] px-[30px] bg-[#fff] rounded-[6px] text-[15px] ">
            <p className="text-base tracking-wide md:text-xl text-justify text-paragraph ">
              The memories we hold of them may never be forgotten and we may not
              necessarily need a place to grieve and reflect. The Cemetery on
              the Hill offers you the opportunity to have a meaningful funeral
              and gain closure. At our unique location, surrounded by the
              stunning Onkaparinga gorge and river, you will find a peaceful and
              beautiful place to mourn your loved ones, and to reflect and
              reminisce those cherished memories.
            </p>
            <span className="container-arrow h-0 w-0 absolute top-[28px] z-10 border-t-[15px] -left-[15px] border-t-transparent border-t-solid border-b-[15px] border-b-transparent border-b-solid border-r-[15px] border-r-white border-r-solid " />
          </div>
        </div>
        <div className="container relative py-[10px] px-[50px] w-[50%]  left-0 left-container">
          <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -right-[20px] top-[32px] z-10 circle" />

          <div className="text-box relative py-[20px] px-[30px] bg-[#fff] rounded-[6px] text-[15px] ">
            <p className="text-base tracking-wide md:text-xl text-justify text-paragraph ">
              As a heritage-listed site and a prominent landmark in the area, we
              are dedicated to preserving the history of the place as we
              carefully restore and open it up to greater possibilities. It is
              our mission to make The Cemetery on the Hill a serene and
              beautifully landscaped place to put your loved ones to rest.
            </p>
            <span className="container-arrow h-0 w-0 absolute top-[28px] z-10 border-t-[15px] -right-[15px] border-t-transparent border-t-solid border-b-[15px] border-b-transparent border-b-solid border-l-[15px] border-l-white border-l-solid " />
          </div>
        </div>
        <div className="container relative py-[10px] px-[50px] w-[50%]  left-[50%] right-container">
          <div className="h-10 w-10 bg-white rounded-full bg-transparent border-4 border-primary absolute -left-[20px] top-[32px] z-10 circle" />

          <div className="text-box relative py-[20px] px-[30px] bg-[#fff] rounded-[6px] text-[15px] ">
            <p className="text-base tracking-wide md:text-xl text-justify text-paragraph ">
              With the ongoing developments in The Cemetery, we assure the
              families and the rest of the community that the ashes and buried
              remains of your loved ones are in safe hands and will always be
              treated with the utmost respect.
            </p>
            <span className="container-arrow h-0 w-0 absolute top-[28px] z-10 border-t-[15px] -left-[15px] border-t-transparent border-t-solid border-b-[15px] border-b-transparent border-b-solid border-r-[15px] border-r-white border-r-solid " />
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
