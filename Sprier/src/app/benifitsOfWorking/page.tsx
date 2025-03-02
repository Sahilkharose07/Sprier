"use client";

import Image from "next/image";
import React from "react";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

const words = `Benefits Of Working With Us`;

export default function Benefits() {
  return (
    <div className="relative bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">
            <TextGenerateEffect words={words} />
          </h2>
          <p className="benifitp text-lg text-gray-300 mb-6">
            Creative, innovative, and strategic. We have great achievements made
            together and are looking to enhance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🔒",
                text: "Cutting-edge solutions to keep your brand ahead.",
              },
              {
                icon: "🔍",
                text: "Innovative strategies to enhance your goals.",
              },
              { icon: "📊", text: "Advanced analytics to ensure progress." },
              {
                icon: "🎯",
                text: "Precision-focused solutions tailored for you.",
              },
            ].map((item, index) => (
              <div
                className="flex items-center gap-4 bg-black-500 p-4 rounded-lg"
                key={index}
              >
                <span className="text-3xl text-emerald-500">{item.icon}</span>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                fetchPriority="high"
                src="/assetes/images/Benefits.webp"
                height={1000}
                width={1000}
                className="h-75 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Benefits Thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
