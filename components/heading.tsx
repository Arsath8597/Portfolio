import React from "react";
type sectionHeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: sectionHeadingProps) => {
  return (
    <h2 className="text-3xl mb-8 font-medium capitalize text-center">
      {children}
    </h2>
  );
};

export default Heading;
