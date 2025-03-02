import Link from "next/link";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Crmcontent from "./crmcontent";

function HeroSection() {
  return (
    <>
      <div
        className="h-auto md:h-[40rem] w-full rounded-md flex 
      flex-col item-center justify-center relative 
      overflow-hidden mx-auto py-10 md:py-0"
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="purple"
        />
        <div className="mt-20 p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-50 to-neutral-400">
            CRM Consulting Company
          </h1>
        </div>
      </div>

      <Crmcontent />
    </>
  );
}

export default HeroSection;
