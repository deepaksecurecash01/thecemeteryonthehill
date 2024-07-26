// components/CustomCardNumberElement.js
import { useEffect, useRef } from "react";
import { CardNumberElement } from "@stripe/react-stripe-js";

const CustomCardNumberElement = ({ options, ...props }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleFocus = () => {
      inputRef.current.classList.add(
        "peer-focus:-translate-y-6",
        "peer-focus:scale-75"
      );
    };
    const handleBlur = () => {
      inputRef.current.classList.remove(
        "peer-focus:-translate-y-6",
        "peer-focus:scale-75"
      );
    };

    inputRef.current.addEventListener("focus", handleFocus);
    inputRef.current.addEventListener("blur", handleBlur);

    return () => {
      inputRef.current?.removeEventListener("focus", handleFocus);
      inputRef.current?.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <div>
      <CardNumberElement
        options={options}
        {...props}
        className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
      />
      <label
        ref={inputRef}
        className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 "
      >
        <span className="hidden md:block">Card Number</span>
        <span className="block md:hidden">Card Number</span>
      </label>
    </div>
  );
};

export default CustomCardNumberElement;
