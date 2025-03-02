"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const words = `Our Service`;

export default function Service() {
  const cards = [
    {
      title: "Cloud Computing",
      src: "/assetes/images/cloudimg.webp",
      href: "/service/clouds",
    },
    {
      title: "Software Development",
      src: "/assetes/images/softimg.webp",
      href: "/service/softwaredev",
    },
    {
      title: "Website Development",
      src: "/assetes/images/webimg.webp",
      href: "/service/webdev",
    },
    {
      title: "App Development",
      src: "/assetes/images/app1.webp",
      href: "/service/appdev",
    },
    {
      title: "UI / UX Development",
      src: "/assetes/images/uiux1.webp",
      href: "/service/uiux",
    },
    {
      title: "SAAS Development",
      src: "/assetes/images/saasimg.webp",
      href: "/service/saas",
    },
    {
      title: "CRM Development",
      src: "/assetes/images/crm.webp",
      href: "/service/crm",
    },
    {
      title: "Technology Enabled Business Transformation",
      src: "/assetes/images/techimg.webp",
      href: "/service/tech",
    },
    {
      title: "Innovation Consulting",
      src: "/assetes/images/innoimg.webp",
      href: "/service/innovation",
    },
    {
      title: "Operation Consulting",
      src: "/assetes/images/oms2.webp",
      href: "/service/oms",
    },
    {
      title: "Fintech",
      src: "/assetes/images/fintech1.webp",
      href: "/service/fintech",
    },
    {
      title: "Manufacturing Tracking Software",
      src: "/assetes/images/mts1.webp",
      href: "/service/manufecture",
    },
    {
      title: "Health Care",
      src: "/assetes/images/healthcare.webp",
      href: "/service/healthcare",
    },
    {
      title: "E-Commerce",
      src: "/assetes/images/vecteezy_online-retail-at-its-core-laptop-shopping-basket-keyboard_30465269.jpg",
      href: "/service/ecommerce",
    },
    {
      title: "Education & E-Learning",
      src: "/assetes/images/e-learning1.webp",
      href: "/service/elearning",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Link href="/">
          <Image
            fetchPriority="high"
            className="mx-20 py-10 z-20 absolute"
            src="/assetes/images/1500px1.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Our <br /> Services
          </motion.h1>
        </LampContainer>
        <FocusCards cards={cards} />
      </div>
      <Footer />
    </>
  );
}
