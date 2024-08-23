// components/PaymentTabs.js
import { useState } from "react";

const PaymentTabs = ({ setPaymentMethod }) => {
  const [activeTab, setActiveTab] = useState("card");

  const handleTabClick = (method) => {
    setActiveTab(method);
    setPaymentMethod(method);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleTabClick("card")}
        className={`px-4 py-2 rounded-lg font-roboto ${
          activeTab === "card"
            ? "bg-primary text-white"
            : "bg-secondary/30 text-primary "
        }`}
      >
        Card
      </button>
      <button
        onClick={() => handleTabClick("googlePay")}
        className={`px-4 py-2 rounded-lg font-roboto ${
          activeTab === "googlePay"
            ? "bg-primary text-white"
            : "bg-secondary/30 text-primary "
        }`}
      >
        Online Pay
      </button>
     
    </div>
  );
};

export default PaymentTabs;
