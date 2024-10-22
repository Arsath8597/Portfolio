"use client"; // Ensure this runs on the client side

import { useEffect, useState } from "react";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

const Page = () => {
  const [hasRefreshed, setHasRefreshed] = useState(false);

  useEffect(() => {
    const refreshed = sessionStorage.getItem("hasRefreshed");

    if (!refreshed) {
      sessionStorage.setItem("hasRefreshed", "true");
      setHasRefreshed(true);
      location.reload(); // Trigger the reload
    }
  }, []);

  return (
    <div className="flex flex-col items-center px-4">
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

export default Page;
