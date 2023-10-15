"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      className="mb-28 mx-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }} id="about"
    >
      <SectionHeading> About me</SectionHeading>
      <p className=" mb-3">
        After over a decade in international hospitality, spanning six
        countries, I embarked on a new adventure. My fascination with
        programming led me to shift gears and pursue web development. I've
        always been curious about the magic behind striking user experiences,
        and now I aim to be the one creating them. Problem-solving and
        continuous learning have always been my passions, and they drive me to
        excel in this dynamic field. I'm thrilled to be on this journey,
        transitioning from hospitality to web development, where I can inspire
        and craft innovative digital solutions while feeding my love for code.
      </p>
      <p>
        My core stack includes MongoDB, Express.js, React, and Node.js. I'm also
        proficient with TypeScript and have a passion for exploring new
        technologies and frameworks. I'm actively seeking a full-time role as a
        Full Stack Developer, but I'm open to flexible opportunities that align
        with my skills and enthusiasm for growth. When I'm not in front of my
        computer, I love to cycle, explore new pubs, restaurants, and travel to
        new destinations. My passion for adventure extends beyond the digital
        world
      </p>
    </motion.section>
  );
}
