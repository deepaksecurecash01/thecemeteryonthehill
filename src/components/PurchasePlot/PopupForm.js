"use client";
import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence from Framer Motion
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector from React Redux
import { selectAshesBed, selectAshesWall, selectPlot, selectPopupForm, setAshesBed, setAshesWall, setPlot, setPopupForm } from "@/redux/slice";
import RelinquishForm from "../ExpiredLeases/RelinquishForm";
import Receipt from "./Receipt";
import AshesPlots from "./AshesPlots";
import data from "./data.json";
import AshesBeds from "./AshesBeds";

const PopupForm = () => {
  const dispatch = useDispatch();
    const elementData = useSelector(selectPlot);
  const AshesWall = useSelector(selectAshesWall)
      const AshesBed = useSelector(selectAshesBed);

  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3, // Shortened duration for faster animation
        type: "spring", // Changed type to spring for smoother animation
        damping: 20, // Reduced damping for a less stiff motion
        stiffness: 200, // Reduced stiffness for a more elastic motion
      },
    },
    exit: {
      y: "100vh", // Move modal up during exit animation
      opacity: 0,
      transition: {
        duration: 0.5, // Keep exit duration longer for a smoother exit
        type: "spring", // Maintain spring type for consistency
        damping: 20,
        stiffness: 200,
      },
    },
  };

  const closeModal = () => {
    dispatch(setPlot("")); // Dispatch blank value when closing modal
    dispatch(setAshesWall("")); // Dispatch blank value when closing modal
    dispatch(setAshesBed("")); // Dispatch blank value when closing modal
  };

  return (
    <AnimatePresence>
      {(elementData || AshesWall || AshesBed) && (
        <motion.div
          className="fixed md:px-6 m-auto bottom-0 right-0 left-0 z-40 w-full max-w-screen min-h-screen flex justify-center items-center"
          initial={{ backdropFilter: "blur(0px)" }} // Apply initial blur of 0px
          animate={{ backdropFilter: "blur(10px)" }} // Apply blur when modal is open
          exit={{ backdropFilter: "blur(0px)" }} // Remove blur when modal is closing
          onClick={closeModal} // Close the modal when clicking outside of it
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
            className="w-full h-full "
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {elementData && <Receipt elementData={elementData} />}
            {AshesWall && (
              <AshesPlots data={data.elements} AshesWall={AshesWall} />
            )}
            {AshesBed && (
              <AshesBeds data={data.elements} AshesBed={AshesBed} />
            )}

            {/* Add additional product details here */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
