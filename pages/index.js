import { Drawer, Menu } from "antd";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import App from "../Components/Antd";
import DrawerComp from "../Components/Drawer";
import Hero from "../Components/Hero";
import Socials from "../Components/Socials";
import styles from "../styles/Home.module.css";
import { useMediaQuery } from "react-responsive";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Cursor from "../Components/Cursor";
import Skills from "../Components/Skills";
import DownloadButton from "../Components/DownloadButton";
 
 

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 766px)" });
  
const router= useRouter()
  return (
    <div  >
      <Head>
        <title>{"Tosiron's Portfolio|| Home"}</title>
        <meta name="description" content="personal portfolio by Tosiron, a Frontend Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className="bg-hero-pattern yolo h-screen flex-col"> */}
        <main className={styles.bodyanimation }>
<Cursor/>
        {/* sidenav */}
        <div id="home" className="flex h-screen w-screen">
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
       
          <div  className=" mx-5 md:ml-40 lg:ml-40  text-gray-300 m-auto flex flex-col justify-center items-start">
            <h1 className="text-3xl flex flex-col text-yellow-500  justify-start font-mono font-bold items-center">
              
              Tosiron Jegede
            </h1>
            <p className="text-2xl   flex flex-col justify-start font-sans items-center ">
            
               Frontend Developer
            </p>

            <Socials />
        <div className="mt-5">
           
          <a href="/TosironJegede.pdf" download={true} target='_blank'><button  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-200 to-yellow-800 group-hover:from-yellow-600 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-200  "><span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Get my resume
  </span></button></a>
        </div>


          </div>

          
        </div>
   
    <div className="flex justify-center items-center w-full absolute bottom-14 ">
          <svg className={styles.goDown} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>
          </div>
      </main>
      <div   id='about'>
      <About/>
      </div>
      <div   id='skills'>
   <Skills/>
      </div>
      <div   id='projects'>
      <Projects/>
      </div>
      
    
    </div>
  );
}
