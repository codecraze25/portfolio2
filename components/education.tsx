"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import universityLogo from "@/public/university.png";
import Image from "next/image";

export default function Education() {
  // const { ref } = useSectionInView("Education");
  const { ref } = useSectionInView("Home");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={universityLogo} alt="Antioch" width="100" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Bachelor's degree in Computer Science
          </p>
          <p className="mt-3">Copenhagen University</p>
          <p className="mt-3">August 2013 - June 2016</p>
        </div>
      </div>
    </motion.section>
  );
}
