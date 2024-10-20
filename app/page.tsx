import Intro from "@/components/intro";
import React from "react";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
const page = () => {
  return (
    <div className="flex flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <ThemeSwitch />
    </div>
  );
};

export default page;
