"use client";
import { TextGenerateEffect1 } from "@/components/ui/text-generate-effect1";
import styles from "@/app/service/healthcare/Home.module.css";
import Omscontent from "./omscontent";
import Image from "next/image";
import Link from "next/link";

const words = `Operations Management Software`;

export default function Oms() {
  return (
    <>
      <div className={styles.container}>
        <video autoPlay loop muted className={styles.videoBackground}>
          <source rel="preload" src="/assetes/videos/omsvideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="oms flex justify-center items-center h-screen">
          <TextGenerateEffect1
            words={words}
            className="text-6xl justify-center items-center font-bold"
          />
        </div>
      </div>

      <Omscontent />
    </>
  );
}

