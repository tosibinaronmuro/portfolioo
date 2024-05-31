import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Hero from "./Hero";
import DrawerComp from "../Components/Drawer";
import { useSelector } from "react-redux";

function Experience() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 766px)" });
  const themee = useSelector((state) => state.theme);
  return (
    <div
      className={themee.light ? styles.bodyanimation2 : styles.bodyanimation}
    >
      {isTabletOrMobile ? (
        <DrawerComp />
      ) : (
        <div className="ml-1 lg:ml-5 h-full fixed top-40   flex flex-col justify-center items-start">
          <Hero />
        </div>
      )}

      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className="flex h-auto w-screen">
        <div className=" mx-9 md:ml-40 lg:mx-40  m-auto flex flex-col justify-center items-start">
          <h1 className="text-3xl text-yellow-500 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-yellow-200 md:to-yellow-800  lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r from-yellow-200 to-yellow-800 flex flex-col justify-start font-poppins font-bold items-center">
            Experience
          </h1>
          <p
            className={
              themee.light
                ? "text-sm lg:text-lg font-light flex flex-col text-gray-900 justify-start font-raleway text-justify items-center"
                : "text-sm lg:text-lg font-light flex flex-col justify-start font-raleway text-gray-200 text-justify items-center"
            }
          ></p>
          <div className="flow-root rounded-lg border w-[50%]   py-3 shadow-sm">
            <dl className="-my-3 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3   sm:grid-cols-3 sm:gap-4">
                <dt
                  className={
                    themee.light
                      ? "font-medium text-gray-900"
                      : "font-medium text-gray-200"
                  }
                >
                  Title
                </dt>
                <dd className={
                    themee.light
                      ? "font-medium text-gray-900 sm:col-span-2"
                      : " text-gray-200 sm:col-span-2"}>
                  FrontEnd Engineer
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3   sm:grid-cols-3 sm:gap-4">
                <dt
                  className={
                    themee.light
                      ? "font-medium text-gray-900"
                      : "font-medium text-gray-200"
                  }
                >
                  Company
                </dt>
                <dd className={
                    themee.light
                      ? "font-medium text-gray-900 sm:col-span-2"
                      : " text-gray-200 sm:col-span-2"}>SCALEIN</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3   sm:grid-cols-3 sm:gap-4">
                <dt
                  className={
                    themee.light
                      ? "font-medium text-gray-900"
                      : "font-medium text-gray-200"
                  }
                >
                  Description
                </dt>
                <dd className={
                    themee.light
                      ? "font-medium text-gray-900 sm:col-span-2"
                      : " text-gray-200 sm:col-span-2"}>
                  Troubleshooting Expertise: Proficiently resolved frontend
                  issues by leveraging browser developer tools, extensions, and
                  plugins, including the JavaScript console and network tab,
                  effectively enhancing user experiences.<br/>
                   Optimization Achievement: Implemented a recursive component model, reducing
                  load times by 3% and streamlining code by 10%, resulting in
                  improved web application efficiency.<br/> Agile Collaboration: Led
                  daily stand-ups, sprint planning, and pair programming
                  sessions for the development of a new web application. This
                  helped to ensure seamless project progress and issue
                  resolution, resulting in the application being launched on
                  time and within budget. <br/> Process Improvement: Created a
                  reusable component library for common web development tasks,
                  which significantly accelerated development speed and code
                  maintainability for the team. The library was widely adopted
                  by peers and is now used on all new projects.
                </dd>
              </div>
            </dl>
          </div>
          {/* SCALEIN, Lagos— FrontEnd Engineer Aug 2022 - Present (Full Time)
          ISEEA, Abuja— Full Stack Developer May 2023 - Present (Part Time)
          ISSEA Contribution: Actively engaged as a Full stack Engineer with
          ISSEA, a non-profit organization dedicated to promoting self-esteem,
          self-awareness, and overall well-being in Nigeria. Developed a new
          website for the organization, which increased website traffic by 5%
          and helped to reach more people in need of the organization's
          services. Community Engagement: Engaged directly with local
          communities in Nigeria to drive impact projects, such as a computer
          literacy program for women and girls. This fostered a deeper
          understanding of the organization's mission and created a positive
          change in the lives of over 200 Women and Children. SDG Alignment:
          Aligned with ISSEA's commitment to achieving Sustainable Development
          Goal 3, focusing on ensuring healthy lives and promoting well-being
          for all at all ages. */}
          
        </div>
      </div>
    </div>
  );
}

export default Experience;
