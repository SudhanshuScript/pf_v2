import React from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";

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
            className="h3 mb-8xl:mb-0 text-2xl"
          >
            Web Development Architecture.
          </motion.h3>
          <div className="flex">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full flex justify-left items-center"
            >
              <Image src={"/webdev.png"} width={587} height={478} alt="" />
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
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">
                        Network Communication Techniques
                      </h2>
                      <p className="text-left">
                        This covers how your React application communicates with
                        servers or APIs. It's essential for fetching data,
                        sending requests, and handling responses asynchronously.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">Security</h2>
                      <p className="text-left">
                        Security is paramount in web development. React
                        applications should be designed with security in mind to
                        protect against common vulnerabilities like XSS
                        (Cross-Site Scripting), CSRF (Cross-Site Request
                        Forgery), and others.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">Performance</h2>
                      <p className="text-left">
                        React applications should be optimized for performance
                        to ensure fast loading times and smooth user
                        experiences. This includes techniques like code
                        splitting, lazy loading, minimizing bundle size, and
                        optimizing rendering performance.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">
                        Caching/Database
                      </h2>
                      <p className="text-left">
                        Caching and database management are crucial for storing
                        and retrieving application data efficiently. This can
                        involve client-side caching, server-side caching, or
                        integrating with databases for persistent data storage.
                      </p>
                    </li>
                  </ol>
                  <ol className="list-decimal" start={5}>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">
                        Offline Support
                      </h2>
                      <p className="text-left">
                        Providing offline support enhances user experience by
                        allowing the application to function even when the user
                        is offline or has a poor internet connection. Techniques
                        like caching data, using service workers, and
                        implementing offline storage can help achieve this.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">Accessibility</h2>
                      <p className="text-left">
                        Accessibility ensures that your React application is
                        usable by everyone, including users with disabilities.
                        This involves adhering to accessibility standards, using
                        semantic HTML, providing alternative text for images,
                        and ensuring keyboard navigation.
                      </p>
                    </li>
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">
                        Logging and Monitoring
                      </h2>
                      <p className="text-left">
                        Logging and monitoring are essential for tracking
                        application behavior, identifying errors, and monitoring
                        performance metrics. Logging helps in debugging issues,
                        while monitoring allows you to keep track of application
                        health and performance in real-time.
                      </p>
                    </li>{" "}
                    <li className="mb-4 ml-6">
                      <h2 className="text-left font-semibold">Testing</h2>
                      <p className="text-left">
                        Testing ensures the reliability and correctness of your
                        React application. It involves writing unit tests,
                        integration tests, and end-to-end tests to cover
                        different aspects of your application's functionality.
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
            <Image src={"/road-map.png"} width={1000} height={778} alt="" />
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
}
