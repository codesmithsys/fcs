import React from "react";
import Image from "next/image";
import { ServiceCardProps } from "@/types";

const ServiceCardB = ({ Photo, Title, Paragraph, points }: ServiceCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Image
        src={`/${Photo}`}
        alt=" "
        width={500}
        height={500}
        className="order-last md:order-first rounded-xl w-screen md:w-full h-auto"
      />
      <div className="flex flex-col items-start self-center gap-1">
        <h6 className="uppercase pb-2 font-normal text-base">{Title}</h6>
        <p>{Paragraph}</p>
        <ul className="marker:text-fcs_black/50 list-disc list-inside">
          {points.map((items, index) => (
            <li className="list-inside w-full py-1" key={index}>
              {items}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCardB;
