import React from 'react'
import { useSelector } from "react-redux";
import styles from '../styles/Home.module.css'
import { useMediaQuery } from "react-responsive";
import Hero from './Hero';
import DrawerComp from './Drawer';
import Socials from './Socials';

function Footerr() {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 766px)" });
    const themee=useSelector(state=>state.theme)
  return (
    <div className={ themee.light ? styles.bodyanimation2 : styles.bodyanimation } >
        {isTabletOrMobile ? (
          <DrawerComp />
        ) : (

          <div className="ml-1 lg:ml-5 h-full fixed top-40   flex flex-col justify-center items-start">
            
            <Hero />
          </div>
        )}
        <hr className="  h-0.5 bg-yellow-500 pr-5"/>
        <div className="flex flex-col justify-center items-center h-28 pt-5">
    <h1 className="text-lg flex   text-yellow-500 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-yellow-200 md:to-yellow-800  lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r from-yellow-200 to-yellow-800  justify-start font-poppins font-bold items-center">
        Tosiron Jegede
    </h1>
    <p className='flex justify-center font-extralight font-raleway text-xs text-yellow-500'>Strive not to be a success, but rather to be of value</p>
</div>
<div className='flex justify-center mb-3'>
<Socials/>
</div>
</div>
  )
}

export default Footerr