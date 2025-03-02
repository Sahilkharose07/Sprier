"use client";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
export default function Product() {
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
        <div className="shootinstar h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
          <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
            <span>A R R I V I N G . . . </span>
          </h2>
          <ShootingStars />
          <StarsBackground />
        </div>
      </div>

      <Footer />
    </>
  );
}
