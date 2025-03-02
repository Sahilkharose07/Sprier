import styles from "@/app/service/healthcare/Home.module.css";
import Healthcontent from "./heatlcontent";
import Image from "next/image";
import Link from "next/link";

export default function Healthcare() {
  return (
    <>
      <div className={styles.container}>
        <video autoPlay loop muted className={styles.videoBackground}>
          <source rel="preload" src="/assetes/videos/health3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
          <h1
            className="healthcare text-2xl md:text-7xl dark:text-white"
            style={{ color: "rgb(255 117 117)" }}
          >
            Healthcare Software <br /> Development Services
          </h1>
          <p
            className="max-w-2xl text-base md:text-l mt-9 dark:text-neutral-200"
            style={{ color: "rgb(134 255 161)" }}
          >
            From start-ups and device manufacturers to healthcare payer and
            provider organizations, our expertise in healthcare software
            development can satisfy the unique requirements of this industry.
          </p>
        </div>
      </div>

      <Healthcontent />
    </>
  );
}
