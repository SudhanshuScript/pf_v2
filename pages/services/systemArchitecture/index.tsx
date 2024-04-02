import React from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import ImageMagnifier from "@/components/ImageMagnifier";

const systemArchitecture = () => {
  return (
    <>
      <div className="h-full bg-primary/30 overflow-y-scroll py-32 text-center">
        <div className="container mx-auto h-max    w-full flex-col">
          {/* title */}
          <div className="flex items-center  justify-center relative">
            <Link href={"/services"}>
              <motion.h3
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                class="text-2xl"
              >
                <div className="flex items-center hover:text-accent justify-center cursor-pointer absolute -mt-3 z-20">
                  <IoArrowBack size={20} />
                  <span className="ml-2 text-lg">Back</span>
                </div>{" "}
              </motion.h3>
            </Link>
            <div className="mx-auto">
              <motion.h3
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                class="text-2xl h2 text-center"
              >
                System <span className="text-accent"> Architecture </span>
              </motion.h3>
            </div>
          </div>
          <div className="flex ">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full flex justify-center items-center"
            >
              <ImageMagnifier
                src={"/design-architecture.png"}
                width={600}
                height={678}
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
                        Understanding and documenting the needs and goals of a
                        project, including features, functionalities, and user
                        expectations, to guide the development process
                        effectively.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">Scoping</h2>
                      <p className="text-left">
                        Defining the boundaries and limitations of a project,
                        including its objectives, deliverables, timelines, and
                        resources, to ensure a clear understanding of what will
                        be accomplished.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">Tech Choices</h2>
                      <p className="text-left">
                        Selecting appropriate technologies, frameworks, and
                        libraries based on project requirements, team expertise,
                        scalability, and maintainability, to build robust and
                        efficient solutions.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">
                        Component Architecture
                      </h2>
                      <p className="text-left">
                        esigning the structure and organization of frontend
                        components, including their hierarchy, relationships,
                        and interactions, to facilitate code reuse, modularity,
                        and maintainability.
                      </p>
                    </li>{" "}
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">
                        Data API & Implement
                      </h2>
                      <p className="text-left">
                        t: Integrating data sources and APIs into the frontend
                        application, including fetching, processing, and
                        displaying data, to provide dynamic and interactive user
                        experiences.
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
            className="w-full  flex justify-center items-center"
          >
            <ImageMagnifier
              src={"/design-responsibilities.png"}
              width={1200}
              height={678}
            />
          </motion.div>{" "}
        </div>
      </div>
    </>
  );
};
export default systemArchitecture;
