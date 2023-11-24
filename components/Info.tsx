"use client";

import React from "react";
import {Link} from "@nextui-org/react";
import { InfoProps } from "@/types";

const Info = ({ Heading, Paragraph, points, href, LinkTitle }: InfoProps) => {
  return (
    <div className="flex flex-col items-center self-stretch gap-1">
      <h1 className="uppercase pb-1 font-normal text-base">{Heading}</h1>
      <p className="text-center">{Paragraph}</p>
      {points && ( 
        <ul className="marker:text-fcs_black/50 list-disc list-inside">
          {points.map((items, index) => (
            <li className="list-inside w-full py-1 px-20" key={index}>{items}</li>
          ))}
        </ul>
      )}
      <Link
        className="text-fcs_orange font-medium hover:text-fcs_orange/75"
        href={`${href}`}
        size="md"
      >
        {LinkTitle}
      </Link>
      
    </div>
  );
};

export default Info;
