import React from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";

interface TableDataItem {
  year: number;
  project: string;
  domain: string;
  builtWith: string;
  link: string;
}
export default function archive() {
  const tableData: TableDataItem[] = [
    {
      year: 2023,
      project: "Brainstorm International LMS",
      domain: "Ed-Tech",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
    {
      year: 2023,
      project: "Shipment Tracking & Monitoring",
      domain: "IoT in Logistics",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
    {
      year: 2023,
      project: "PostMyAd",
      domain: "Ad-Tech",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
    {
      year: 2023,
      project: "IAF - Energy Monitoring System",
      domain: "IoT in Energy & Utilities",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
    {
      year: 2023,
      project: "PolicyWings",
      domain: "Insurance",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
    {
      year: 2023,
      project: "Smart Home System",
      domain: "IoT in Home",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
    {
      year: 2023,
      project: "Mckey - Game Key market",
      domain: "E-Commerce",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
    {
      year: 2023,
      project: "Honda - Energy Monitoring",
      domain: "IoT in Energy",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
    {
      year: 2023,
      project: "Remote Health Monitoring",
      domain: "IoT in Healthcare",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
    {
      year: 2023,
      project: "Zoommer Play LMS",
      domain: "Ed-Tech",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
    {
      year: 2023,
      project: "Solar Monitoring",
      domain: "IoT in Energy",
      builtWith: "Next.js TypeScript Material-Ui",
      link: "https://example.com",
    },
  ];
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
            All <span className="text-accent"> Projects. </span>
          </motion.h3>
          <div className="flex flex-wrap  mt-5  mb-5">
            <div className="w-full max-w-full px-3 mb-6 mx-auto">
              <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-blue">
                <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                  {/* card header */}
                  <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                    <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                      <span className="mr-3 font-semibold text-dark">
                        Here's List of all of my frontend Projects
                      </span>
                      <span className="mt-2 font-medium text-secondary-dark text-sm/normal">
                        I have developed all of below project single-handedly
                        along with Deployment and Hosting
                      </span>
                    </h3>
                  </div>
                  {/* end card header */}
                  {/* card body */}
                  <div className="flex-auto block py-8 pt-6 px-9">
                    <div className="overflow-x-auto">
                      <table className="w-full my-0 align-middle text-dark border-neutral-200">
                        <thead className="align-bottom">
                          <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                            <th className="pb-3 text-start ">Year</th>
                            <th className="pb-3 text-start">Project</th>
                            <th className="pb-3 text-start">Domain</th>
                            <th className="pb-3 pr-12 text-center">
                              Built with
                            </th>
                            <th className="pb-3 pr-12 text-end">Link</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((data, index) => (
                            <tr
                              key={index}
                              className="text-secondary-dark border-b   border-t border-neutral-600"
                            >
                              <td className="text-start pt-4  text-gray-400 pb-4 pr-12">
                                {data.year}
                              </td>
                              <td className="text-start pr-12">
                                {data.project}
                              </td>
                              <td className="text-start">{data.domain}</td>
                              <td className="text-center  pr-6">
                                <span className="">
                                  {data.builtWith
                                    .split(" ")
                                    .map((tech, index) => (
                                      <span
                                        key={index}
                                        className="badge-chip ml-2 bg-accent bg-opacity-10 rounded-bl-md text-accent ring-red-600/10"
                                      >
                                        {tech}
                                      </span>
                                    ))}{" "}
                                </span>
                              </td>
                              <td>
                                <a
                                  href={data.link}
                                  className="text-gray-400  hover:underline hover:text-accent"
                                >
                                  <span className="inline-flex">
                                    {data.link}
                                    <RxArrowTopRight className="group-hover:rotate-45   text-xl group-hover:text-accent transition-all  duration-300" />
                                  </span>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
