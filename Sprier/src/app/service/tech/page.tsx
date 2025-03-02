import React from "react";
import { Vortex } from "@/components/ui/vortex";
import TechContent from "./techcontent";
import Image from "next/image";
import Link from "next/link";

export default function Tech() {
  return (
    <>
      <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Link href="/">
          <Image
            className="mx-20 py-10 z-20 absolute"
            src="/assetes/images/1500px1.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
              Technology Enabled <br />
              Business Transformation
            </h2>
          </Vortex>
        </div>

        <TechContent />
      </div>
    </>
  );
}
