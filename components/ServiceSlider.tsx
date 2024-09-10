// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopLeft,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";
// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Web Development",
    link: "/services/webdevlopment",
    description:
      "Offering comprehensive web solutions, crafting visually appealing websites with rich experience.",
  },
  {
    icon: <RxCrop />,
    title: "System Architecture",
    link: "/services/systemArchitecture",
    description:
      "Specializing in scalable architectures, creating efficient application foundations to ensure seamless performance.",
  },
  {
    icon: <RxPencil2 />,
    title: "Deployment",
    link: "https://sudhanshu--sharma.notion.site/Fundamental-Of-System-Design-Structure-86f0b17c6f174a56be8cbbcbf791848d?pvs=4",
    description:
      "Demonstrated success in project deployment, ensuring secure communication through SSL integration.",
  },
  {
    icon: <RxReader />,
    title: "Commitment to Quality",
    link: "",
    description:
      "Dedicated to delivering high-quality solutions by integrating industry best practices and rigorous testing.",
  },
  {
    icon: <RxRocket />,
    title: "SEO Optimization",
    link: "",
    description:
      "Specializing in SEO strategies to enhance project visibility and maximize online presence.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="w-full h-auto py-4 overflow-x-hidden"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-[310px] mt-3 rounded-lg px-4  py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
             hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300
            "
            >
              <Link href={item.link}>
                {/* icons */}
                <div className="text-4xl text-accent mb-4"> {item.icon}</div>
                {/* title & desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title} </div>
                  <div className="max-w-[390px] leading-normal">
                    {item.description}
                  </div>
                </div>
                {/* arrow */}
                {item.title === "Web Development" ||
                item.title === "System Architecture" ? (
                  <div className="text-3xl hidden xl:flex">
                    <RxArrowTopRight className="animate-bounce group-hover:text-accent" />
                  </div>
                ) : null}
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
