"use client";
import React from "react";
import { motion } from "framer-motion";
const sectiondivider = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.125 }}
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
    ></motion.div>
  );
};

export default sectiondivider;
