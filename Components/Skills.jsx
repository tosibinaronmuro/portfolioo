import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import profilePic from "../public/recipeApp.png";
import Languages from "./Languages";
import { motion } from "framer-motion"
import TabSection from "./TabSection";
import { useMediaQuery } from "react-responsive";
import Hero from "./Hero";
import DrawerComp from "../Components/Drawer";
import { useSelector } from "react-redux";
 
 

function Skills() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 766px)" });
  const themee=useSelector(state=>state.theme)
  return (
    <div className={ themee.light ? styles.bodyanimation2 : styles.bodyanimation }>
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
      <div className="flex h-screen px-7 w-screen m-auto">
        <div className=" mx-2 md:ml-40 lg:mx-40 w-full   m-auto flex flex-col justify-center items-start">
          <h1 className="text-3xl flex text-yellow-500 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-yellow-200 md:to-yellow-800  lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r from-yellow-200 to-yellow-800 flex-col justify-start font-poppins font-bold items-center">
              Skills
          </h1>
          <div className="flex w-full   flex-col lg:flex-row m-auto lg:m-14 justify-between">
            
            <TabSection/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
