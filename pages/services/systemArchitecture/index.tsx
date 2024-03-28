import React from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";

interface TableDataItem {
  year: number;
  project: string;
  domain: string;
  builtWith: string;
  link: string;
}
export default function archive() {
  return (
    <>
      <div className="h-full bg-primary/30 py-32 text-center">
        <div className="container mx-auto h-full  w-full flex-col">
          {/* title */}
          <motion.h3
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3 mb-8xl:mb-0 text-2xl "
          >
            <span className="text-accent"> System Architecture. </span>
          </motion.h3>
          <div className="flex">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full flex justify-center items-center"
            >
              <Image
                src={"/design-architecture.png"}
                width={900}
                height={978}
                alt=""
              />
            </motion.div>{" "}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full flex justify-left items-center"
            >
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">
                  Focus Areas in System Design
                </h1>
                <div className="flex justify-between">
                  <ol className="list-decimal pl-4">
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">Requirement</h2>
                      <p className="text-left">
                        Collaborate with stakeholders to understand and analyze
                        project needs and goals from a frontend perspective.
                        This involves gathering requirements related to user
                        interface design, functionality, and user experience.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">Scoping</h2>
                      <p className="text-left">
                        Define the frontend-specific boundaries, constraints,
                        and objectives of the project. This includes determining
                        the scope of frontend development tasks, setting
                        priorities, and establishing timelines for frontend
                        deliverables.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">Tech Choices</h2>
                      <p className="text-left">
                        Evaluate frontend technologies and tools based on their
                        compatibility with project requirements and constraints.
                        This involves selecting frameworks, libraries, and
                        development tools that best support the frontend
                        architecture and meet performance, scalability, and
                        browser compatibility requirements.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">
                        Component Architecture
                      </h2>
                      <p className="text-left">
                        Design the frontend system structure, including the
                        organization of components, modules, and their
                        interactions. This entails creating a modular and
                        reusable component architecture that promotes code
                        reusability, scalability, and maintainability.
                      </p>
                    </li>{" "}
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">
                        Data API & Implement
                      </h2>
                      <p className="text-left">
                        Develop frontend data access interfaces to interact with
                        backend systems and implement them within the chosen
                        frontend architecture. This involves designing and
                        implementing data fetching, manipulation, and
                        integration mechanisms using technologies such as
                        RESTful APIs, GraphQL, or WebSocket connections. The
                        goal is to ensure seamless data exchange between the
                        frontend and backend while maintaining a responsive and
                        interactive user experience.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </motion.div>
          </div>{" "}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full flex justify-center items-center"
          >
            <Image
              src={"/design-responsibilities.png"}
              width={1200}
              height={978}
              alt=""
            />
          </motion.div>{" "}
        </div>
      </div>
    </>
  );
}
