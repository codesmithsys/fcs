import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectsFeatureProps } from "@/types";

const ProjectsFeature = ({
  ProjectImg,
  ProjectTitle,
}: ProjectsFeatureProps) => {
  return (
    <div>
      <h6 className="uppercase pb-1 font-normal text-base">Projects Feature</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ProjectImg.map((item, index) => (
          <div className="flex flex-col gap-2">
            <Image
              key={index}
              src={`/${item}.png`}
              width={1000}
              height={1000}
              alt="project image"
              className="rounded-xl w-screen md:w-full h-auto"
            />
            <h6 className="font-light text-xl capitalize">
              {ProjectTitle[index]}
            </h6>
            {/* <Link
              href="#"
              className="text-fcs_orange font-medium hover:text-fcs_orange/75"
            >
              See case study
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFeature;
