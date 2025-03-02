import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import LayoutGridDemo from "./extrasection/page";
import Link from "next/link";
import Image from "next/image";
import Arvr from "./ARVR/page";
import Benefits from "./benifitsOfWorking/page";
import Perception from "./Preceprion/page";

export default function Home() {
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

        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          <HeroSection />
          <Arvr />
          <LayoutGridDemo />
          <Perception />
          <Benefits />
          <Footer />
        </main>
      </div>
    </>
  );
}

