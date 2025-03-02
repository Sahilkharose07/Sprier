"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function Arvr() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="arvr text-8xl font-semibold text-black dark:text-white">
              AR / VR <br />
              <span className="arvr text-4xl md:text-[3rem] font-bold mt-1 leading-none">
                Technology
              </span>
            </h1>
          </>
        }
      >
        <Image
          fetchPriority="high"
          src={"/assetes/images/arvr1.webp"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
