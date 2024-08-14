"use client";
import { motion, useCycle } from "framer-motion";


const FormSuccessMessage = ({}) => {
  const [rotation, cycleRotation] = useCycle(0, 360); // Using useCycle hook to cycle between 0 and 360 degrees
  const [scale, cycleScale] = useCycle(1, 1.2); // Using useCycle hook to cycle between 1 and 1.2 for scaling

  return (
    <div className="relative flex flex-col h-full justify-around items-center">
      <div className="flex flex-col justify-center items-center h-full space-y-4 py-6">
        {/* Checkmark SVG Animation */}
        <motion.svg
          initial={{ scale: 0.8 }} // Initial scale of 0.8 for animation
          animate={{ scale: scale }} // Scale up smoothly
          transition={{ type: "spring", stiffness: 500, damping: 20 }} // Spring animation
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="bg-transparent p-1 border-solid border-2 border-primary shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full"
          onClick={() => cycleScale()} // Trigger cycleScale function onClick to change scale
        >
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            fill="transparent"
            initial={{ strokeDasharray: "78.54", strokeDashoffset: "78.54" }}
            animate={{ strokeDashoffset: "0" }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          />
          {/* Scaled-up tick SVG */}
          <motion.path
            d="M4 13 L10 18 L20 6"
            stroke="#933d38"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.3 }} // Add a delay of 2000 milliseconds
          />
        </motion.svg>
      </div>
      <div className="flex flex-col justify-center h-full items-center">
        <p className="text-primary text-center font-display text-4xl">
          Your form has successfully submitted!
        </p>
      </div>
    </div>
  );
};

export default FormSuccessMessage;