"use client";
import { TextGenerateEffect1 } from "@/components/ui/text-generate-effect1";
import Aboutuscontent from "./aboutcontent";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "@/app/service/healthcare/Home.module.css";
import Link from "next/link";

const words = `About Us`;

export default function Aboutus() {
  return (
    <>
      <div className={styles.container}>
        <video autoPlay loop muted className={styles.videoBackground}>
          <source rel="preload" src="/assetes/videos/aboutus3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex flex-col justify-center items-center h-screen">
          <TextGenerateEffect1
            words={words}
            className="text-6xl font-bold text-gray-300"
          />
        </div>
      </div>

      <Aboutuscontent />
      <Footer />
    </>
  );
}
