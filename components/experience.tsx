import React from "react";
import Heading from "./heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

const experience = () => {
  return (
    <section>
      <Heading children="Experience" />
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement>
              <h3>{experience.title}</h3>
              <p>{experience.location}</p>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default experience;
