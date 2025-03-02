"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { IoMdContact } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import {
  MdConnectWithoutContact,
  MdContactMail,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { FcAbout } from "react-icons/fc";
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Service",
      link: "/service",
      dropdown: [ 
        { name: "Web Development", link: "/service/web-development" },
        { name: "Mobile App Development", link: "/service/mobile-app" },
        { name: "UI/UX Design", link: "/service/ui-ux-design" },
      ],
      icon: <GrServices className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Product",
      link: "/product",
      icon: (
        <MdProductionQuantityLimits className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "About Us",
      link: "/aboutus",
      icon: <FcAbout className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },

    {
      name: "Career",
      link: "/career",
      icon: (
        <MdContactMail className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: "Hier Us",
      link: "/hireus",
      icon: (
        <MdConnectWithoutContact className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: "Contact Us",
      link: "/contact",
      icon: (
        <IoMdContact className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}