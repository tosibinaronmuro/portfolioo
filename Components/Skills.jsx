import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import profilePic from "../public/recipeApp.png";
import Languages from "./Languages";
import { motion } from "framer-motion"
import TabSection from "./TabSection";
 

function Skills() {
  return (
    <div className={styles.bodyanimation4}>
        <div className={styles.cube}></div>
       <div className={styles.cube}></div>
       <div className={styles.cube}></div>
       <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className="flex h-screen w-screen m-auto">
        <div className=" mx-2 md:ml-40 lg:mx-40 w-full   m-auto flex flex-col justify-center items-start">
          <h1 className="text-3xl flex   flex-col justify-start font-mono font-bold items-center">
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
