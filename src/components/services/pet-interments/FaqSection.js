import React from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "What types of interment do you offer for pets?",
      answer:
        "We offer ashes interments for pets on our beautifully landscaped grounds. You can choose from a variety of peaceful locations, ensuring your pet’s memory is honoured with dignity.",
    },
    {
      question: "Can I visit my pet’s resting place?",
      answer:
        "Yes, our grounds are open for visitation. You are welcome to visit your pet’s resting place as often as you like. Our visiting hours are from Sunrise to Sunset.",
    },
    {
      question: "Do you provide memorials for pets?",
      answer:
        "Yes, we offer a range of personalised memorial options, from plaques to custom markers, that allow you to create a lasting tribute to your beloved pet.",
    },
    {
      question: "How long does the interment process take?",
      answer:
        "The timeline can vary based on your preferences, but our team is committed to ensuring the process is handled smoothly and respectfully. We will work closely with you to accommodate your needs.",
    },
    {
      question: "Can I pre-plan a pet interment?",
      answer:
        "Absolutely. Pre-planning allows you to make thoughtful decisions about your pet’s final resting place in advance. We are here to help you through this process with care and compassion.",
    },
    {
      question: "How much does pet interment cost?",
      answer:
        "The cost of pet interment depends on factors such as the type of interment and any personalised memorials you choose. We recommend contacting us directly so we can provide you with more specific details based on your needs.",
    },
    {
      question: "What should I bring when planning my pet’s interment?",
      answer:
        "You don’t need to bring much—just your love and memories of your pet. Our team will guide you through the rest, helping you with every detail to ensure your pet is laid to rest with dignity.",
    },
    {
      question: "Is there a specific area for pet interments?",
      answer:
        "Yes, our pet cemetery is a dedicated area within the serene grounds of The Cemetery on The Hill. But you may also choose for your pet to be interred in your family’s plot.",
    },
    {
      question: "How do I begin the process of arranging my pet’s interment?",
      answer:
        "Simply reach out to our team. We are here to listen, provide information, and help you make the decisions that are right for you and your pet. We’ll guide you through every step.",
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
