"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
const Intro = () => {
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl bottom-0 right-0 absolute "
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-10 my-14 px-4 font-serif text-justify text-xl leading-[1.5] sm:text-3xl"
      >
        A passionate full-stack developer skilled in modern web technologies
        like React, TypeScript, Next.js, and Node.js. Eager to build innovative
        applications, enhance user experiences, and grow through continuous
        learning.
      </motion.p>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 text-lg font-medium "
      >
        <Link
          className="group bg-gray-800 px-7 py-3 text-white flex items-center justify-center gap-2 
          rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 transition  "
          href="#contact"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-3 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="bg-white dark:bg-black group cursor-pointer  px-7 py-3  flex items-center justify-center gap-2 outline-none 
          focus:scale-110 hover:scale-105  active:scale-105 transition border border-black/10
          rounded-full"
        >
          Dawnload CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          href="/"
          className="bg-white outline-none 
          focus:scale-110 hover:scale-105  active:scale-105 transition border border-black/10
          rounded-full px-4 py-4 text-gray-700   flex items-center justify-center gap-2 
          "
        >
          <BsLinkedin />
        </a>
        <a
          href="/"
          className="bg-white  outline-none 
          focus:scale-110 hover:scale-105  active:scale-105 transition border border-black/10
          rounded-full px-4 py-4 text-gray-700   flex items-center justify-center gap-2 
           text-[1.35rem]"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
