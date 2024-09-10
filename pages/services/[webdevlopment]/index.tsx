import React from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import ImageMagnifier from "@/components/ImageMagnifier";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

const webdevelopment = () => {
  return (
    <>
      <div className="h-full   bg-primary/30 py-32 overflow-y-auto">
        <div className="container mx-auto h-full  w-full flex-col">
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
                <div className="flex items-center hover:text-accent justify-center cursor-pointer absolute xl:-mt-4 z-20">
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
                Web Development{" "}
                <span className="text-accent"> Architecture. </span>
              </motion.h3>
            </div>
          </div>
          <div className="flex mt-2">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full flex justify-left items-center"
            >
              <ImageMagnifier src={"/webdev.png"} height={478} width={587} />{" "}
            </motion.div>
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
                  Focus Areas in Web Development Fundamental
                </h1>
                <div className="flex justify-between">
                  <ol className="list-decimal pl-4">
                    <li className="mb-4">
                      <h2 className="text-left font-semibold">
                        Network Communication Techniques
                      </h2>
                      <p className="text-left">
                        Understanding various methods and protocols for
                        communication between client and server, including HTTP,
                        WebSockets, and REST APIs.
                      </p>
                    </li>
                    <li className="mb-4">
                      <h2 className="text-left font-semibold">Security</h2>
                      <p className="text-left">
                        Implementing measures to protect against threats such as
                        XSS (Cross-Site Scripting), CSRF (Cross-Site Request
                        Forgery), and ensuring data confidentiality, integrity,
                        and availability.
                      </p>
                    </li>
                    <li className="mb-4">
                      <h2 className="text-left font-semibold">Performance</h2>
                      <p className="text-left">
                        Optimizing website or application speed and
                        responsiveness through techniques like code
                        minification, image optimization, lazy loading, and
                        efficient resource utilization.
                      </p>
                    </li>
                    <li className="mb-4">
                      <h2 className="text-left font-semibold">
                        Caching/Database
                      </h2>
                      <p className="text-left">
                        Utilizing caching mechanisms and efficient database
                        queries to enhance performance by reducing server load
                        and response times.
                      </p>
                    </li>
                  </ol>
                  <ol className="list-decimal" start={5}>
                    <li className="mb-4 ml-12">
                      <h2 className="text-left font-semibold">
                        Offline Support
                      </h2>
                      <p className="text-left">
                        Implementing features that allow users to access content
                        or perform tasks even when they are offline, utilizing
                        technologies like Service Workers and IndexedDB.
                      </p>
                    </li>
                    <li className="mb-4 ml-12">
                      <h2 className="text-left font-semibold">Accessibility</h2>
                      <p className="text-left">
                        Ensuring that web content is accessible to people with
                        disabilities by adhering to WCAG (Web Content
                        Accessibility Guidelines) standards and implementing
                        features such as keyboard navigation, screen reader
                        compatibility, and semantic HTML.
                      </p>
                    </li>
                    <li className="mb-4 ml-12">
                      <h2 className="text-left font-semibold">
                        Logging and Monitoring
                      </h2>
                      <p className="text-left">
                        Implementing logging mechanisms to track errors, user
                        interactions, and system events for troubleshooting and
                        performance monitoring purposes.
                      </p>
                    </li>{" "}
                    <li className="mb-4 ml-12">
                      <h2 className="text-left font-semibold">Testing</h2>
                      <p className="text-left">
                        Implementing various testing methodologies like unit
                        testing, integration testing, and end-to-end testing to
                        ensure the quality and reliability of the codebase, as
                        well as adherence to functional requirements and
                        specifications.
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
            className="w-full h-full flex justify-center items-center"
          >
            <ImageMagnifier
              src={"/road-map.png"}
              height={478} // Specify height as string
              width={1000} // Specify width as string
            />{" "}
          </motion.div>{" "}
          <div className="container  px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">
              My Personalized React Application Development Roadmap
            </h1>
            <div className="flex justify-between">
              <ol className="list-decimal pl-4">
                <li className="mb-4">
                  <h2 className="text-left font-semibold">
                    Implementing Key Considerations
                  </h2>
                  <p className="text-left">
                    I incorporated key considerations into my development
                    process, including security measures, performance
                    optimization techniques, error handling strategies, and
                    cross-browser testing.
                  </p>
                </li>
                <li className="mb-4">
                  <h2 className="text-left font-semibold">
                    Building Scalable and Maintainable Codebase
                  </h2>
                  <p className="text-left">
                    I wrote clean, modular code adhering to best practices. I
                    ensured scalability and maintainability by organizing my
                    codebase effectively and following coding standards.
                  </p>
                </li>
                <li className="mb-4">
                  <h2 className="text-left font-semibold">
                    Version Control and Collaboration
                  </h2>
                  <p className="text-left">
                    I utilized Git for version control and implemented
                    collaboration workflows like feature branching and pull
                    requests. I maintained clear documentation and fostered
                    effective communication within my development team.
                  </p>
                </li>
                <li className="mb-4">
                  <h2 className="text-left font-semibold">
                    Testing and Quality Assurance
                  </h2>
                  <p className="text-left">
                    I wrote comprehensive unit tests and integration tests using
                    testing frameworks like Jest and React Testing Library. I
                    ensured code quality and reliability through continuous
                    integration and code review processes.
                  </p>
                </li>{" "}
                <li className="mb-4">
                  <h2 className="text-left font-semibold">
                    Deployment and Continuous Integration/Deployment (CI/CD)
                  </h2>
                  <p className="text-left">
                    I developed deployment strategies for deploying my React
                    application to various environments. I automated deployment
                    processes using CI/CD pipelines for seamless releases.
                  </p>
                </li>
                <li className="mb-4">
                  <h2 className="text-left font-semibold">
                    Monitoring, Analytics, and User Feedback
                  </h2>
                  <p className="text-left">
                    I implemented monitoring tools to track application
                    performance and user interactions. I collected user feedback
                    and analyzed analytics data to iteratively improve my React
                    application based on user insights.
                  </p>
                </li>
                <li className="mb-4">
                  <h2 className="text-left font-semibold">
                    Compliance and Regulations
                  </h2>
                  <p className="text-left">
                    I ensured compliance with relevant regulations and standards
                    such as GDPR and accessibility guidelines. I regularly
                    audited my application to maintain compliance and addressed
                    any issues that arose.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default webdevelopment;
