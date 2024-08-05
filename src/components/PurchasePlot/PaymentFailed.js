"use client";
import { motion, useCycle } from "framer-motion";
import Lottie from "lottie-react";
import failed from "../../../public/images/failed.json";

const PaymentFailed = ({ error }) => {
  const [rotation, cycleRotation] = useCycle(0, 360); // Using useCycle hook to cycle between 0 and 360 degrees
  const [scale, cycleScale] = useCycle(1, 1.2); // Using useCycle hook to cycle between 1 and 1.2 for scaling

  return (
    <div className="relative flex flex-col justify-center gap-4 items-center">
      <div className="flex flex-col justify-end h-48 items-center">
        <Lottie animationData={failed} loop={false} />
      </div>
      <div className="flex flex-col justify-start h-48 items-center">
        <p className="text-primary text-center font-display text-4xl">
          {error}
        </p>
      </div>
    </div>
  );
};

export default PaymentFailed;
