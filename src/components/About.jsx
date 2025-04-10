import React from "react";
import aboutme from "../assets/images/aboutme.webp"
import { motion } from "motion/react";
import {useInView} from 'react-intersection-observer'

const About = () => {

    const {ref, inView} = useInView({
        triggerOnce:true,
        threshold:0.2,
    })

  return (
    <div id="about" className="text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
        ref={ref}
        initial={{opacity:0, y:100}}
        animate={inView?{opacity:1, y:0}:{}}
        transition={{delay:0.2,duration:0.8}}
        className="text-3xl md:text-4xl font-bold mb-8 underline">About Me</motion.h2>
        <div className=" flex flex-col lg:flex-row items-center ">
          <motion.div
          ref={ref}
          initial = {{opacity:0, x:-100}}
          animate={inView?{opacity:1 , x:0}: {}}
          transition={{delay:1, duration:0.8}}
          className="lg:w-1/2  ">
            <img className=" " src={aboutme} alt="aboutme" />
          </motion.div>
          <motion.p
          ref={ref}
          initial = {{opacity:0, x:100}}
          animate={inView?{opacity:1 , x:0}:{}}
          transition={{delay:1, duration:0.5}}
          className="lg:w-1/2 text-center text-md md:text-lg lg:text-xl ">
            I’m a passionate Front-End Developer with a strong foundation in
            HTML, CSS, JavaScript, and React.js. I specialize in creating
            responsive, user-friendly web interfaces that not only look great
            but also deliver seamless user experiences.My journey into front-end
            development is driven by a love for clean code, continuous learning,
            and building products that make an impact. I’m well-versed in
            collaborating with cross-functional teams, adapting to fast-paced
            environments, and staying updated with the latest trends and
            technologies in the web development world.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
