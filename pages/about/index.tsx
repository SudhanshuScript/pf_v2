import React, { useState } from "react";
// icons
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import Figma from "../assets/figma.svg";
import Slack from "../assets/slack.svg";
import NotionFill from "../assets/notion.svg";
import Asana from "../assets/asana.svg";
import Jira from "../assets/jira.svg";
import Trello from "../assets/trello.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import Image from "next/image";

// components
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";

// Image

//  data

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
type AboutDataItem = {
  title: string;
  info: Array<{
    title: string;
    icons?: any;
    stage?: string;
  }>;
};
// counter
import Countup from "react-countup";

const aboutData: Array<AboutDataItem> = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [htmlIcon, cssIcon, jsIcon, nodeIcon, reactIcon, typescriptIcon],
      },
      {
        title: "Tools",
        icons: [Figma, Slack, NotionFill, Asana, Jira, Trello],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Most Goal Achieved of the Year Awards - PsiBorg",
        stage: "2022 - 2023 ",
      },
      {
        title:
          "React Mastery Award from Tech Altum for Expertise in Life Cycle Methods ",
        stage: "2021",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Senior Frontend Developer - PsiBorg Technologies",
        stage: "2023 - Present",
      },
      {
        title: "Frontend Developer - PsiBorg Technologies",
        stage: "2022",
      },
      {
        title: "MERN Stack Training - Techaltum Institute",
        stage: "2021",
      },
    ],
  },
];

const About = () => {
  return (
    <div className="h-full bg-primary/40 py-32 text-center xl:text-left">
      <Circles />
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-20  -left-[280px]"
      >
        <Avatar />
      </motion.div> */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h3
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3 mb-2 font-medium"
          >
            Frontend Developer | Reactjs | Nextjs | Javascript | Typescript
          </motion.h3>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-6 px-2  xl:px-0"
          >
            In my 3 years of experience as a Frontend Developer in a{" "}
            <span className="text-white  font-normal">
              fast-paced IoT startup,{" "}
            </span>{" "}
            I've had the opportunity to deploy over 13 projects across diverse
            domains including IoT,{" "}
            <span className="text-white  font-normal">
              Healthcare, Energy, Ed-tech, Ad-tech and E-commerce{" "}
            </span>{" "}
            . From the initial idea to the final product, I've been involved in
            every step of the process. Proficient in React JS, Next JS, HTML,
            CSS, JavaScript, and TypeScript, I specialize in developing scalable
            design systems, IoT dashboards, and websites. My comprehensive
            understanding of the entire product development lifecycle allows me
            to effectively contribute to every stage of a project.
          </motion.p>
          {/* counteres */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={3} duration={5} /> +{" "}
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={13} duration={5} /> +{" "}
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={13} duration={5} /> +{" "}
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Project
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={2} duration={5} /> +{" "}
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[52%] h-[480px]"
        >
          <div className="flex-col  gap-x-4 xl:gap-z-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item: any) => {
              return (
                <div className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)]  transition-all duration-300 rounded-lg p-4 mt-4">
                  <div className="capitalize  xl:text-xl  font-extrabold text-accent">
                    {item.title}
                  </div>
                  <div className="mt-1">
                    {item.info.map((item: any, aboutIndex: number) => {
                      return (
                        <div
                          key={aboutIndex}
                          className="flex-1 mt-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center"
                        >
                          {/* title */}
                          <div className="font-light mb-2 md:mb-0">
                            {item.title}
                          </div>
                          <div className="hidden md:flex">-</div>
                          <div className="font-medium">{item.stage}</div>
                          {/* icons */}
                          <div className="flex gap-x-4">
                            {item.icons?.map((icon: any) => {
                              return (
                                <div className="text-2xl ">
                                  <Image
                                    alt="icon"
                                    src={icon}
                                    width={30}
                                    height={30}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
