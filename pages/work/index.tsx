// components

import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left  xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="h2 text-4xl"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I specialize in crafting websites and dashboards from scratch
              using React.js, and Next.js. I ensure a seamless user experience
              and prioritize optimizing speed and responsiveness through various
              techniques. I have expertise in creating scalable architectures
              and system design tailored to project requirements. Additionally,
              I focus on successful deployment on servers Integrating real-time
              alerts and data updates with code manageability and design
              standards.
            </motion.p>
            <div
              className="h-max rounded-lg flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
            transition-all duration-300"
            >
              <Link href={"/archive"}>
                <div className="text-lg">
                  <p className="group-hover:text-accent">
                    View Full Project Archive
                  </p>
                  <RxArrowTopRight className="text-xl group-hover:text-accent animate-bounce" />
                </div>
              </Link>
            </div>
          </div>
          {/* slider */}

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />{" "}
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
