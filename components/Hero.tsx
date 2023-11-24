import React from "react";
import { HeroProps } from "@/types";

const Hero = ({Heading, Paragraph, button}:HeroProps) => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col items-center gap-6">
      <h1 className="text-fcs_orange text-3xl sm:text-4xl md:text-5xl font-normal capitalize text-center self-stretch">
        {Heading}
      </h1>
      <h3 className="text-base md:text-lg font-normal text-center self-stretch">
        {Paragraph}
      </h3>
      {button && button}
    </div>
  );
};

export default Hero;
