import { FaExclamation } from "react-icons/fa";

const WarningPopup = ({ error, isFirstError }) => {
  return (
    isFirstError && (
      <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base flex items-center text-primary shadow-sm z-10">
        <span className="bg-primary p-1 rounded-sm mr-1">
          <FaExclamation className="  text-xs text-white" />
        </span>
        {error}
      </span>
    )
  );
};

export default WarningPopup;
