import React from "react";

const FaqSection = () => {
 const faqData = [
   {
     question: "Do you offer cremation services at The Cemetery on The Hill?",
     answer:
       "No, we currently do not offer cremation services. We specialise in ashes interments after the cremation has been completed elsewhere.",
   },
   {
     question: "What types of ashes interment options do you offer?",
     answer:
       "We offer several options for ashes interment, including memorial beds, memorial walls, and family plots. Each option provides a beautiful and serene setting for honouring your loved one’s memory.",
   },
   {
     question: "How long is an ashes interment right valid for?",
     answer:
       "Ashes interment rights at The Cemetery on The Hill are granted for a period of 25 years. After this period, you have the option to renew the interment right for an additional term.",
   },
   {
     question: "Can I pre-plan an ashes interment?",
     answer:
       "Yes, you can reserve a site in advance for up to two years. Once the reservation period ends, you can choose to purchase the interment right or release the reservation.",
   },
   {
     question: "How do I plan an ashes interment ceremony?",
     answer:
       "We can help you organise a meaningful ashes interment ceremony. You may include eulogies, readings, or any other tributes that reflect the life of your loved one. Our team will guide you through the process to ensure the ceremony is both personal and respectful.",
   },
   {
     question: "How much does ashes interment cost?",
     answer:
       "The cost of ashes interment depends on the location of the plot and any additional services such as memorial plaques. Please contact us for specific pricing details, and we’ll be more than willing to discuss your options.",
   },
 ];

  return (
    <div className="overflow-hidden w-full bg-white shadow-xl my-10 rounded-xl">
      <div className="grid divide-y divide-secondary/30 mx-auto px-10 py-5">
        {faqData.map((faq, index) => (
          <div className="py-5" key={index}>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className=" font-roboto text-tertiary">
                  {faq.question}
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-paragraph mt-3 group-open:animate-fadeIn">
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
