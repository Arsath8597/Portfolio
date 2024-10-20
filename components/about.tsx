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
        I am a highly motivated full-stack developer with expertise in ReactJS,
        TypeScript, Next.js, Framer Motion, Tailwind CSS, Node.js, Express,
        JavaScript, and Redux. Despite being a fresher, I have completed several
        freelance projects, demonstrating my ability to create dynamic,
        responsive, and scalable applications.
      </p>
      <p>
        I have a solid grasp of web development principles and a keen focus on
        building efficient solutions that deliver exceptional user experiences.
        With a commitment to teamwork, hard work, and continuous learning, I am
        excited to contribute meaningfully to projects and grow alongside
        evolving technologies.
      </p>
    </motion.div>
  );
};

export default about;
