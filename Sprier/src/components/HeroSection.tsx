"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { AuroraBackground } from "./ui/aurora-background";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function LampDemo() {
  const words = [
    {
      text: "Agile",
    },
    {
      text: "IT",
    },
    {
      text: "Solution",
    },
    {
      text: "for",
    },
    {
      text: "a",
    },
    {
      text: "Fast",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Paced",
    },
    {
      text: "World .",
    },
  ];
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div
            className="text-4xl md:text-8xl font-bold dark:text-white text-center"
            style={{ color: "#ad7800" }}
          >
            S P R I E R S
          </div>
          
            <TypewriterEffectSmooth words={words} />
          
        </motion.div>
      </AuroraBackground>
    </>
  );
}
