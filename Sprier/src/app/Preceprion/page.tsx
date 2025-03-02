"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

const words = `Perception-Enabled Technology`;
export default function Perception() {
  return (
    <div className="relative bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Smart Tech. Smarter Perception
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                fetchPriority="high"
                src="/assetes/images/touch-screen-6091015.jpg"
                height={1000}
                width={1000}
                className="h-75 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="My Custom Thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>

        <div className="flex flex-col justify-center">
          <h2 className="text-1xl font-bold mb-6">
            <TextGenerateEffect words={words} />
          </h2>
          <p className="text-l text-gray-300 mb-6">
            Systems that can interpret and respond to sensory data from their
            surroundings using sensors, cameras, and advanced algorithms. These
            technologies aim to emulate human perception abilities, enabling
            machines to recognize and react to various stimuli, such as visual,
            auditory, or tactile inputs.
          </p>
          <p className="text-l text-gray-300">
            This often involves artificial intelligence (AI) and machine
            learning (ML) to process and analyze sensory data, leading to
            applications in autonomous vehicles, robotics, smart homes, and
            assistive devices.
          </p>
        </div>
      </div>
    </div>
  );
}
