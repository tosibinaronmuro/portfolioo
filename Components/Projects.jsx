import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Hero from "./Hero";
import DrawerComp from "../Components/Drawer";
import { useSelector } from "react-redux";
 
import Data from './ProjectsData.js'
function Projects() {
 
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
      <div className="flex h-auto w-screen">
        <div className=" mx-2 md:ml-40 lg:mx-40  m-auto flex flex-col justify-center items-start font-raleway">
          <h1 className="text-3xl flex m-4 text-yellow-500 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-yellow-200 md:to-yellow-800  lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r from-yellow-200 to-yellow-800   flex-col justify-start font-poppins font-bold items-center">
            Recent Projects
          </h1>
          <div className="flex   flex-wrap justify-center  ">
             {Data.map((item)=>{
              return(
            <div key={item.id} className="bg-black text-white m-5 lg:m-3    h-auto w-full lg:w-1/3 rounded-lg p-4 hover:border-2 hover:border-t-0   hover:border-yellow-500">
              <Image src={item.image} className="rounded-lg" alt="photo" />
              <div>
                <h1 className="text-white text-xl">{item.title}</h1>
                <p>{item.tools}</p>
                <div className="flex justify-center p-4  ">
                  <button className="relative inline-flex items-center justify-center h-11 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-200 to-yellow-800 group-hover:from-yellow-600 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-200 ">
                   <a href={item.github} target={item.target}>
                   <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      GitHub
                    </span>
                   </a>
                  </button>
                  <button className="relative inline-flex items-center justify-center h-11 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-200 to-yellow-800 group-hover:from-yellow-600 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-200  ">
                  <a href={item.demo} target={item.target}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Live Demo
                    </span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
              )
             })}
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
