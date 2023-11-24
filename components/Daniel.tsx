import React from "react";
import Image from "next/image";
import { DanielProps } from "@/types";

const Daniel = ({
  points,
  Name,
  Paragraph,
  Potrait,
  Paragraph2,
  points2,
  Paragraph3,
}: DanielProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-start gap-6">
        <div className="flex flex-col justify-start gap-6">
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
          <p className="">{Paragraph}</p>
          {points && (
            <ul className="marker:text-fcs_black/50 list-disc list-inside">
              {points.map((items, index) => (
                <li className="list-inside w-full py-1" key={index}>
                  {items}
                </li>
              ))}
            </ul>
          )}{" "}
        </div>
        <div>
          <p className="">{Paragraph2}</p>
          {points2 && (
            <ul className="marker:text-fcs_black/50 list-disc list-inside">
              {points2.map((items, index) => (
                <li className="list-inside w-full py-1" key={index}>
                  {items}
                </li>
              ))}
            </ul>
          )}
          <p className="">{Paragraph3}</p>
        </div>
      </div>
    </div>
  );
};

export default Daniel;
