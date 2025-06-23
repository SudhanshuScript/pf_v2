import { motion } from "framer-motion";
// components
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { fadeIn } from "../variants";
const Home = () => {
  return (
  <div className="relative w-full bg-primary/60 h-auto xl:h-screen overflow-auto pt-28 pb-20 xl:pt-0 xl:pb-0">
      {/* text */}
      <div className="w-full h-full  bg-gradient-to-r from-primary/10 via-black/30  to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="text-accent"> Frontend Developer </span>
          </motion.h2>
          {/* Subtitle */}
    <motion.p
  variants={fadeIn("down", 0.3)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 xl:mb-2"
>
  A dedicated <span className="text-white font-normal">Frontend Engineer</span> with over 4+ years of experience, I’ve led and delivered{" "}
  <span className="text-white font-normal">17+ SaaS-based projects</span> across IoT, AdTech, EdTech, logistics, and tracking domains. I specialize in{" "}
  <span className="text-white font-normal">React.js</span>, <span className="text-white font-normal">Next.js</span>, and <span className="text-white font-normal">TypeScript</span>, building scalable, performant UIs with modern stacks like Tailwind, MUI, and Chart.js. Skilled in{" "}
  designing system architectures, I integrate real-time communication (MQTT, WebSocket, TCP) and{" "}
  <span className="text-white font-normal">secure cloud deployments</span> via Docker, CI/CD, and AWS. I lead cross-functional teams,{" "}
  mentor junior developers, and use Agile practices and tools like Asana and Notion for smooth delivery. Passionate about intuitive design, secure systems, and impactful web experiences.
</motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden  relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right  xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer></ParticlesContainer>
        {/* avatar img */}
        {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[140px] max-h-[280px] absolute lg:bottom-0 rounded-2xl lg:right-[21%]"
        >
          <Avatar />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Home;
