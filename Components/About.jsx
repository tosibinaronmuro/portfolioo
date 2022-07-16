import { Drawer, Menu } from "antd";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import App from "./Antd";
import DrawerComp from "./Drawer";
import Hero from "./Hero";
import Socials from "./Socials";
import styles from "../styles/Home.module.css";
import { useMediaQuery } from "react-responsive";
 

export default function About() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 766px)" });

  return (
    <div>
      {/* <Head>
        <title>{"Tosiron's Portfolio|| Home"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {/* <main className="bg-hero-pattern yolo h-screen flex-col"> */}
        <main className={styles.bodyanimation2}>
        <div className={styles.cube}></div>
       <div className={styles.cube}></div>
       <div className={styles.cube}></div>
       <div className={styles.cube}></div>
      <div className={styles.cube}></div>
        {/* sidenav */}
        <div className="flex h-screen w-screen">
        {isTabletOrMobile ? (
          <DrawerComp />
        ) : (
          <div className="ml-1 lg:ml-5 h-full fixed top-40   flex flex-col justify-center items-start">
            
            <Hero />
          </div>
        )}
          <div className=" mx-4 md:ml-40 lg:mx-40  m-auto flex flex-col justify-center items-start">
            <h1 className="text-3xl text-yellow-500 flex flex-col justify-start font-mono font-bold items-center">
              About Me
            </h1>
            <p className="text-sm lg:text-lg font-light flex flex-col justify-start font-sans text-justify items-center">
            
              Tosibinaronmuro Jegede is a Front End Developer, with a bachelor of Engineering degree in Electrical and Electronics Engineering.
              He is fueled by his passion for the acquisition, understanding and application of knowledge and actively pursues it. He considers himself a ‘forever student,’ eager to both build on his academic foundations in STEM and stay in tune with the latest trends through continued coursework and professional development.
            </p>
            <p className="text-sm lg:text-lg font-extralight flex flex-col justify-start font-sans text-justify items-center">
            Tosiron is currently working as a freelance Web Application developer and is always interested in a challenge. Reach out to Tosiron <a href="Contact">here</a> to connect!
            </p>

       

          </div>
        </div>
    
      </main>
    </div>
  );
}
