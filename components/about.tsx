"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 mx-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading> About me</SectionHeading>
      <section className=" mb-3">
        <p>
          After over a decade in international hospitality, spanning six
          countries, I embarked on a new adventure.
        </p>
        <p>
          My fascination with programming led me to shift gears and pursue web
          development. I've always been curious about the magic <br /> behind striking
          user experiences, and now I aim to be the one creating them. <br />
          Problem-solving and continuous learning have always been my passions,
          and they drive me to excel in this dynamic field. <br />I'm thrilled to be
          on this journey, transitioning from hospitality to web development, <br />
          where I can inspire and craft innovative digital solutions while
          feeding my love for code.
        </p>
      </section>

      <section>
        <p>
          My core stack includes <strong>MongoDB</strong>,{" "}
          <strong>Express.js</strong>, <strong>React</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>
        <p>
          I'm also proficient with <strong>TypeScript</strong> and have a
          passion for exploring new technologies and frameworks. <br />I'm actively
          seeking a full-time role as a <strong>Full Stack Developer</strong>,
          but I'm open to flexible opportunities that align with my{" "}
          <strong>skills</strong> and <strong>enthusiasm</strong> for{" "}
          <strong>growth</strong>. <br /> When I'm not in front of my computer, I love
          to <strong>cycle</strong>, explore new <strong>pubs</strong>,{" "}
          <strong>restaurants</strong>, and travel to new destinations. <br /> My{" "}
          <strong>passion</strong> for adventure extends beyond the digital
          world.
        </p>
      </section>
    </motion.section>
  );
}
