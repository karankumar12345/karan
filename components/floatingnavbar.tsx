"use client";
import React from "react";
import { IconHome, IconBriefcase, IconMessageCircle, IconMail } from "@tabler/icons-react"; // Example icon imports

import { FloatingNav } from "./ui/FloatingNavbar";
export function FloatingNavDemo() {
 
    const navItems = [
      {
        name: "About",
        link: "#about",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />, // Home icon for About
      },
      {
        name: "Projects",
        link: "#projects",
        icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />, // Briefcase icon for Projects
      },
      {
        name: "Testimonials",
        link: "#testimonials",
        icon: <IconMessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />, // Chat/message icon for Testimonials
      },
      {
        name: "Contact",
        link: "#contact",
        icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />, // Mail icon for Contact
      },
    ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
 <>
 </>
  );
};
