"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { FloatingDock } from "./ui/floating-dock";
import { IconBrandX, IconHome } from "@tabler/icons-react";
import { FcAbout } from "react-icons/fc";
import {
  MdMiscellaneousServices,
  MdOutlinePrivacyTip,
  MdOutlineRuleFolder,
} from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import Image from "next/image";

const Footer = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About Us",
      icon: (
        <FcAbout className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/aboutus",
    },
    {
      title: "Services",
      icon: (
        <MdMiscellaneousServices className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/service",
    },
    {
      title: "Privacy Policy",
      icon: (
        <MdOutlinePrivacyTip className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/PrivacyPolicy",
    },
    {
      title: "Terms And Conditions",
      icon: (
        <MdOutlineRuleFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/TermsAndConditions",
    },
    {
      title: "Instagram",
      icon: (
        <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/_sprier_/",
    },

    {
      title: "Linkedin",
      icon: (
        <IoLogoLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sprier-technology-01716731a/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Sprier22",
    },

    {
      title: "Facebook",
      icon: (
        <CiFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=61563329455790",
    },
  ];

  return (
    <div
      className={styles["footer-main"]}
      style={{ backgroundColor: " rgb(0 0 0)" }}
    >
      <div className={styles["container"]}>
        <div className={styles["inner-footer"]}>
          <div>
            <div className={styles["logo"]}>
              <Link href="/">
                <Image
                  src="/assetes/images/1500px1.png"
                  alt="Logo"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
          </div>
          <div className={styles["right-inner"]}>
            <div
              className={styles["floating-dock"]}
              style={{ marginTop: "5rem" }}
            >
              <h1 className="footerh1">Quick Links</h1>
              <FloatingDock mobileClassName="translate-y-20" items={links} />
            </div>
          </div>
          <div>
            <div className={styles["mail"]} style={{ marginTop: "5.7rem" }}>
              <a href="mailto:info@spirertechnology.com">
                info@spirertechnology.com
              </a>
            </div>
          </div>
        </div>
        <div className={styles["copyright"]}>
          2024 © All Rights Reserved By Sprier Technology Consultancy.
        </div>
      </div>
    </div>
  );
};

export default Footer;
