import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import SoftwaredevContent from "./softwarecontent";
import Image from "next/image";

function Softwaredev() {
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
        <div className="overflow-hidden dark:bg-[#000] bg-white w-full">
          <MacbookScroll
            title={
              <span className="softdev text-6xl font-semibold text-black dark:text-white">
                Software Development
              </span>
            }
            src={`/assetes/images/sodev.webp`}
            showGradient={false}
          />
        </div>

        <SoftwaredevContent />
      </div>
    </>
  );
}

export default Softwaredev;
