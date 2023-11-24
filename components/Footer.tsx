import React from "react";
import Image from "next/image";
import { CustomButton } from "@/components";

const Footer = () => {
  return (
    <div className="border-t-1 border-fcs_black/10 mt-8 mb-1">
      <div className="responsive flex flex-col md:grid md:grid-cols-3 gap-4 pt-4">
        <div className="flex flex-col gap-4">
          <p className="text-sm">
            For any additional information or if you're interested in partnering
            with us, please don't hesitate to get in touch.
          </p>
          <CustomButton
            title="Contact Us"
            href="/Contact"
            buttonStyle="w-full text-sm bg-fcs_orange text-fcs_white hover:bg-fcs_white hover:text-fcs_orange rounded-full"
            size="sm"
          />
        </div>
        <div className="col-span-2 justify-self-end flex flex-col items-center gap-2">
          <Image
            src="/Dark Logo L.png"
            alt="logo"
            width={600}
            height={600}
            className="max-w-[100px] md:max-w-[150px] lg:max-w-[150px] my-1"
            />
          <p className="text-sm text-fcs_black/70">© 2023 FRONTLINE CONSULTING</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
