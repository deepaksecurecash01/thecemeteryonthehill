import React from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "What is a SAAS platform?",
      answer:
        "SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
    },
    {
      question: "Can I get a refund for my subscription?",
      answer:
        "We offer a 30-day money-back guarantee for most of our subscription plans. If you're not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "To cancel your subscription, log in to your account, navigate to the subscription management page, and cancel your subscription to stop future billing.",
    },
    {
      question: "Can I try this platform for free?",
      answer:
        "We offer a free trial of our platform for a limited time. During the trial period, you'll have access to a limited set of features and functionality, but you won't be charged.",
    },
    {
      question: "How do I access documentation?",
      answer:
        "Documentation is available on our website and can be accessed by logging into your account. It provides detailed information on how to use the platform, along with code examples and other resources.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact our support team by submitting a support request through our website or emailing support@We.com.",
    },
    {
      question: "Do you offer any discounts or promotions?",
      answer:
        "We may offer discounts or promotions from time to time. Stay up-to-date by signing up for our newsletter or following us on social media.",
    },
    {
      question: "How do we compare to other similar services?",
      answer:
        "Our platform is highly reliable, feature-rich, and competitively priced. We offer various billing options to suit different needs and budgets.",
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
