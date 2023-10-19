import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuPlaneTakeoff } from "react-icons/lu";
import focusapp from "@/public/Focus-Project.png";
import gamersGrid from "@/public/GamersGridProject.png";
import spaceDestroyers from "@/public/SpaceDestroyersProject.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "London - Remote",
    description:
      "I graduated after 2 months of studying, with over 400h. And now looking for the next step. while learning new technologies and frameworks",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "Bar Supervisor (Yummy-Pubs)",
    location: "London - UK",
    description:
      "I worked as a Bar Supervisor for nearly three years. My responsibilities included cocktail menu planning, implementation, and staff training.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Bar manager/supervisor (Wright Brothers Oyster House) ",
    location: "London - UK",
    description:
      "Worked as a Bar Supervisor, later promoted to Manager, and was responsible for staff training on all aspects of beverage service. Additionally, I played a central role in the creation and deployment of the cocktail menus",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
  {
    title: "Moved to London",
    location: "London - UK",
    description:
      "After spending five wonderful years in France, I decided it was time for a change. So, I packed my bags and chose London as my new home.",
    icon: React.createElement(LuPlaneTakeoff),
    date: "2016 - 2020",
  },
  {
    title: "Bar Manager/Supervisor (Hotels Vinuales) ",
    location: "Lourdes - France",
    description:
      "My first experience in hospitality was a valuable learning opportunity. During this time, I became adept at working in a team, improved my communication skills, managed my time effectively, and leveraged my fluency in French to enhance guest interactions.",
    icon: React.createElement(CgWorkAlt),
    date: "2011 - 2016",
  },
  {
    title: "Moved to France",
    location: "Lourdes - France",
    description:
      "At the age of 20, I said goodbye to Lisbon and set out in search of new horizons. My insatiable curiosity, boundless drive, and passion for travel were simply too strong for me to remain in Portugal, so I made the decision to embark on a new journey. ",
    icon: React.createElement(LuPlaneTakeoff),
    date: "2011 - 2016",
  },
] as const;

export const projectsData = [
  {
    title: "Focus.",
    description:
      "A collaborative task manager App , inspired by Trello, the classic Kanban app.",
    tags: [
      "Express.js",
      "Handlebars.js",
      "MongoDB",
      "Tailwind",
      "JavaScript",
      "Node.js",
    ],
    imageUrl: focusapp,
  },
  {
    title: "GamersGrid",
    description:
      "A tournament publishing website as final project during the Ironhack Web Development bootcamp.",
    tags: ["React", "Bootstrap", "Express.js", "Node.js", "MongoDB"],
    imageUrl: gamersGrid,
  },
  {
    title: "Space Destroyers",
    description:
      "3rd person Space Shooter game, first project with Ironhack, meant to showcase the core fundamentals from the bootcamp",
    tags: ["HTML5", "CSS", "JavaScript"],
    imageUrl: spaceDestroyers,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
  "Express.js",
  "Bootstrap",
  "Resend",
  "Vercel",
] as const;
