"use client";

import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { ButtonProps } from "@/types";
import { link } from "fs";
import { title } from "process";

export default function App({ title, icon, buttonStyle, href, size, onClick, type }: ButtonProps) {
  return (
    <a href={`${href}`}>
      <Button className={`${buttonStyle}`} 
      size={`${size}`}
      onClick={onClick} 
      type={type}
      >
        {title}
        {icon && <span className="icon">{icon}</span>}
      </Button>
    </a>
  );
}
