"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  selectAshesBed,
  selectAshesWall,
  selectPlot,
  setAshesBed,
  setAshesWall,
  setPlot,
} from "@/redux/slice";
import Receipt from "./Receipt";
import AshesPlots from "./AshesPlots";
import AshesBeds from "./AshesBeds";
import data from "./data.json";

const PopupForm = () => {
  const dispatch = useDispatch();
  const elementData = useSelector(selectPlot);
  const AshesWall = useSelector(selectAshesWall);
  const AshesBed = useSelector(selectAshesBed);

  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
  };

  const closeModal = () => {
    dispatch(setPlot(""));
    dispatch(setAshesWall(""));
    dispatch(setAshesBed(""));
  };

  const renderContent = () => {
    switch (true) {
      case !!elementData:
        return <Receipt elementData={elementData} />;
      case !!AshesWall:
        return <AshesPlots data={data.elements} AshesWall={AshesWall} />;
      case !!AshesBed:
        return <AshesBeds data={data.elements} AshesBed={AshesBed} />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {(elementData || AshesWall || AshesBed) && (
        <motion.div
          className="fixed md:px-6 m-auto bottom-0 right-0 left-0 z-40 w-full max-w-screen min-h-screen flex justify-center items-center"
          initial={{ backdropFilter: "blur(0px)" }}
          animate={{ backdropFilter: "blur(10px)" }}
          exit={{ backdropFilter: "blur(0px)" }}
          onClick={closeModal}
        >
          <motion.button
            type="button"
            className="navbar-close absolute top-16 lg:top-6 right-6 bg-primary h-12 w-12 rounded-full flex justify-center items-center z-50"
            onClick={closeModal}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <svg
              className="h-6 w-6 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
          <motion.div
            className="w-full h-full"
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {renderContent()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
