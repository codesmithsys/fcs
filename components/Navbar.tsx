"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from "@/components";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems: { [key: string]: string } = {
    Home: "/",
    About: "/About",
    Services: "/Services",
    Portfolio: "/Portfolio",
    // Blog: "/Blog",
  };
  

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="nav bg-fcs_white  border-b-1 border-fcs_black/10"
      height='auto'
      maxWidth='full'
    >
      <div className="flex items-center p-0">
        
        <NavbarBrand className="pl-[1.5rem] md:pl-[3rem] lg:pl-[12rem]">
          <a href="/">
            <Image
              src="/Dark Logo L.png"
              alt="logo"
              width={200}
              height={200}
              className="max-w-[100px] md:max-w-[150px] lg:max-w-[150px] my-1"
            />
          </a>
        </NavbarBrand>
      </div>
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarItem>
          <Link className="text-fcs_orange font-normal text-base" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-fcs_orange font-normal text-base" href="/About">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-fcs_orange font-normal text-base" href="/Services">
            Our Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-fcs_orange font-normal text-base" href="/Portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link className="text-fcs_orange font-normal text-base" href="/Blog">
            Blog
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <div className="flex justify-end items-center">
        <NavbarItem className="mr-[1.5rem] md:mr-[3rem] lg:mr-[12rem]">
          <CustomButton
            title="Contact Us"
            buttonStyle="bg-fcs_orange rounded-full text-sm font-medium text-fcs_white hover:bg-fcs_white hover:text-fcs_orange"
            href="/Contact"
            size="sm"
          />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </div>
      <NavbarMenu>
        {Object.entries(menuItems).map(([item, href], index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-fcs_black font-normal text-base"
              href={href}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
