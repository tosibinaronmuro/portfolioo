import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import profilePic from "../public/recipeApp.png";
import Data from './ProjectsData.js'
function Projects() {
 
  console.log(Data)
  return (
    <div className={styles.bodyanimation3}>
        <div className={styles.cube}></div>
       <div className={styles.cube}></div>
       <div className={styles.cube}></div>
       <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className="flex h-auto w-screen">
        <div className=" mx-2 md:ml-40 lg:mx-40  m-auto flex flex-col justify-center items-start">
          <h1 className="text-3xl flex m-4   flex-col justify-start font-mono font-bold items-center">
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
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                   <a href={item.github} target={item.target}>
                   <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      GitHub
                    </span>
                   </a>
                  </button>
                  <button className="relative inline-flex items-center justify-center h-11 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
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
