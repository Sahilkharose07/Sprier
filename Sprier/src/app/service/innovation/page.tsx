"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Innocontent from "./innocontent";
import Link from "next/link";
import Image from "next/image";

export default function Innovation() {
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
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="inno bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Innovation Consulting 
          </h2>
        </BackgroundLines>
        <Innocontent />
      </div>
    </>
  );
}
