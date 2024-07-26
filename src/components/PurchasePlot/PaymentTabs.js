// components/PaymentTabs.js
import { useState } from "react";

const PaymentTabs = ({ setPaymentMethod }) => {
  const [activeTab, setActiveTab] = useState("card");

  const handleTabClick = (method) => {
    setActiveTab(method);
    setPaymentMethod(method);
  };

  return (
    <div className="flex space-x-4 mb-5">
      <button
        onClick={() => handleTabClick("card")}
        className={`px-4 py-2 ${
          activeTab === "card"
            ? "bg-primary text-white"
            : "bg-white text-primary"
        }`}
      >
        Card
      </button>
      <button
        onClick={() => handleTabClick("googlePay")}
        className={`px-4 py-2 ${
          activeTab === "googlePay"
            ? "bg-primary text-white"
            : "bg-white text-primary"
        }`}
      >
        Google Pay
      </button>
      <button
        onClick={() => handleTabClick("applePay")}
        className={`px-4 py-2 ${
          activeTab === "applePay"
            ? "bg-primary text-white"
            : "bg-white text-primary"
        }`}
      >
        Apple Pay
      </button>
    </div>
  );
};

export default PaymentTabs;
