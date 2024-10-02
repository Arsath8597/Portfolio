"use client";
import React from "react";
import Heading from "./heading";
import { motion } from "framer-motion";

const about = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
      id="about"
    >
      <Heading>About Me</Heading>
      <p className="mb-3 ">
        As a passionate Full Stack Developer, I specialize in building dynamic,
        high-performance web applications using modern technologies such as
        ReactJS, Tailwind CSS, TypeScript, Node.js, and Express.
      </p>
      <p>
        With a strong foundation in both front-end and back-end development, I
        take pride in delivering clean, efficient, and scalable
        solutions.Proficient in ReactJS for creating responsive, interactive
        user interfaces, leveraging Tailwind CSS for sleek and mobile-friendly
        designs. Expertise in TypeScript ensures strong type safety and
        maintainable code.
      </p>
    </motion.div>
  );
};

export default about;
