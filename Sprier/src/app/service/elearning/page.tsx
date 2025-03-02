import styles from "@/app/service/healthcare/Home.module.css";
import Elearningcontent from "./elerningccontent";
import Link from "next/link";
import Image from "next/image";
// import Healthcontent from "./heatlcontent";

export default function Healthcare() {
  return (
    <>
      <div className={styles.container}>
        <video autoPlay loop muted className={styles.videoBackground}>
          <source rel="preload" src="/assetes/videos/e-learning video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
          <h1
            className="healthcare text-2xl md:text-7xl dark:text-white"
            style={{ color: "rgb(181 152 122)" }}
          >
            Education Software <br /> Development Services
          </h1>
        </div>
      </div>

      <Elearningcontent />
    </>
  );
}
