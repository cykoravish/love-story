"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/show-notes",
    },
    {
      name: "Chats",
      link: "/chats",
    },
    {
      name: "Notes",
      link: "/add-notes",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
