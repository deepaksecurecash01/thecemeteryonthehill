    "use client";
    import { motion, useCycle } from "framer-motion";

    const FormFailedMessage = ({ setSubmissionStatus }) => {
    const [scale, cycleScale] = useCycle(1, 1.2); // Scale between 1 and 1.2

    return (
      <div className="relative flex flex-col h-full justify-around items-center">
        <div className="flex flex-col justify-center items-center h-full space-y-4 py-6">
          {/* Exclamation SVG Animation */}
          <motion.svg
            initial={{ scale: 0.8 }} // Initial scale of 0.8
            animate={{ scale }} // Animate scale property
            transition={{ type: "spring", stiffness: 500, damping: 20 }} // Spring animation
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bg-transparent p-1 border-solid border-2 border-primary shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full"
            onClick={() => cycleScale()} // Cycle scale on click
          >
            <motion.line
              x1="12"
              y1="7"
              x2="12"
              y2="13"
              stroke="#933d38"
              strokeWidth="2"
              initial={{ strokeDasharray: "6" }} // Exclamation mark line animation
              animate={{ strokeDasharray: "6" }}
              transition={{ ease: "easeInOut", duration: 0.9, delay: 0.3 }} // Add delay for the line animation
            />
            <motion.circle
              cx="12"
              cy="17"
              r="1"
              fill="#933d38"
              initial={{ scale: 0 }} // Initial scale for the dot animation
              animate={{ scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.9, delay: 0.6 }} // Add delay for the dot animation
            />
          </motion.svg>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 h-full z-10 cursor-pointer">
          <p className="text-primary text-center font-display text-4xl">
            There was an error submitting the form.
          </p>
          <button
            className="text-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg z-50 "
            onClick={() => setSubmissionStatus(null)}
          >
            Try Again!
          </button>
        </div>
      </div>
    );
    };

    export default FormFailedMessage;