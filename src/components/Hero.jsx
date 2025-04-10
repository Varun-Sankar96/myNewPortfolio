import React from 'react'
import myImg from '../assets/images/myImg2.png'  
import { motion } from "motion/react";
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div 
    className='text-white py-5'>
        <motion.img
        initial={{opacity:0, scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{
            delay:0.5,
            duration:0.5
        }}
        className='h-120  mx-auto w-2/3 md:w-1/3 lg:w-1/4 ' src={myImg} alt="myImg"/>

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className='container mx-auto text-center py-5'>
            <motion.h1
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{delay:1, duration:0.5}}
            className='text-xl md:text-3xl lg:text-5xl font-bold'>Hello,<span className='text-purple-500'> Im a Front-End Developer </span> </motion.h1>
            
            <motion.button 
            initial={{opacity:0, y:100}}
            animate={{opacity:1,y:0}}
            transition={{delay:1.5,duration:0.5}}
            className='bg-purple-500 hover:bg-purple-700 duration-100 py-2 px-4 rounded-full cursor-pointer mt-3 text-md lg:text-xl font-semibold'>

                <Link to='contact' smooth='true' duration={500} offset={-70}>Hire Me</Link>
            </motion.button>
        </motion.div>

    </div>
  )
}

export default Hero