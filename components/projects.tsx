import React, { useRef } from "react";
import Heading from "./heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 mb-20">
      <Heading children="My Project" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default Projects;