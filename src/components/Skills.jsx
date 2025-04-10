import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  let skills = [
    { title: "HTML", icon: <FaHtml5 /> },
    { title: "CSS", icon: <FaCss3Alt /> },
    { title: "TAILWIND", icon: <RiTailwindCssFill /> },
    { title: "JAVASCRIPT", icon: <IoLogoJavascript /> },
    { title: "REACT JS", icon: <FaReact /> },
    { title: "EXPRESS JS", icon: <SiExpress /> },
    { title: "MONGODB", icon: <SiMongodb /> },
    { title: "NODE JS", icon: <FaNode /> },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      id="skills"
      className="container mx-auto text-white  "
    >
      <h2 className="text-center  text-3xl md:text-4xl font-bold underline">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 mt-12 ">
        {skills.map((skill, index) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-xl flex flex-col items-center justify-center gap-y-4 
                bg-[#1c1a2b] rounded-lg p-4 lg:p-8  hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-500"
            key={index}
          >
            <span className="text-5xl text-purple-500 ">{skill.icon}</span>
            <span className="font-semibold">{skill.title}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
