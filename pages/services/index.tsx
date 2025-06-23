// components

import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Services = () => {
  return (
    <div className="relative min-h-[100dvh] w-full bg-primary/40 flex flex-col justify-center pt-28 pb-24 xl:pt-0 xl:pb-0 overflow-hidden">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="h2"
            >
              My services <span className="text-accent">.</span>
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Services As a passionate frontend developer designing and
              implementing user interfaces, developing frontend components,
              integrating with backend APIs, optimizing performance, ensuring
              responsiveness, conducting testing, deploying applications,
              collaborating with team members, and documenting processes.
            </motion.p>
          </div>
          {/* slider */}

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="w-full xl:max-w-[65%] "
          >
            <ServiceSlider />{" "}
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
