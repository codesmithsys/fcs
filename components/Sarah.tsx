import React from "react";
import Image from "next/image";
import { SarahProps } from "@/types";

const Sarah = ({ points,Name,Paragraph,Potrait }: SarahProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-start gap-8">
        <Image
          src={`/${Potrait}.png`}
          alt="Daniel Njaga"
          width={1000}
          height={1000}
          className="rounded-xl w-52 h-auto self-center"
        />
        <h5 className="text-fcs_black text-lg sm:text-1xl md:text-4xl font-medium capitalize text-center">
          {Name}
        </h5>
      </div>
      <div>
        <p className="">
          {Paragraph}
        </p>
        {points && (
          <ul className="marker:text-fcs_black/50 list-disc list-inside">
            {points.map((items, index) => (
              <li className="list-inside w-full py-1" key={index}>
                {items}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sarah;
