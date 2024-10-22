import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's in Computer Science-2024",
    location: "Kingston University",
    description:
      "I hold a Bachelors degree in Computer Science from Kingston University, completed in 2024. ",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2024",
  },
  {
    title: "Higher National Diploma in Software Engineering -2022 ",
    location: "Orlando, FL",
    description:
      "I earned a Higher National Diploma in Software Engineering in 2022, focusing on web and mobile application development.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2023",
  },
  {
    title: "Freelance Full-Stack Developer ",
    location: "Online",
    description:
      "I work as a freelance full-stack developer, building dynamic and scalable web applications using technologies like React, Node.js, and Tailwind CSS. I focus on delivering efficient solutions and enhancing user experiences through modern development practices.",
    icon: React.createElement(FaReact),
    date: "2022- present",
  },
] as const;

export const projectsData = [
  {
    title: "BNR FARM House – Freelance Project ",
    description:
      "Created a modern, responsive farm website with smooth animations to enhance user interaction. Built using ReactJS, Framer Motion, and Tailwind CSS",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "HHMA Sri Lanka – NGO Frontend Project ",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Virtual Meeting Platform – Trincomalee Campus ",
    description:
      "Developed a user-friendly, responsive website for a non-profit organization to support their mission. Built with ReactJS and Tailwind CSS",
    tags: ["React", "express", "MongoDB", "node", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "vercel",
  "Github",
  "MongoDB",
  "Redux",

  "Express",

  "Framer Motion",
] as const;
