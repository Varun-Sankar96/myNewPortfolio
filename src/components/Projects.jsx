import React from "react";
import project1 from "../assets/images/project1.webp";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.jpg";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Front-end",
      description:
        "A responsive eCommerce website built with React js, Redux Toolkit and Tailwind css. Features include product listings, filters, a shopping cart, and a smooth user experience optimized for all devices.",
      image: project1,
      link: "https://shopify-front-end.netlify.app/",
    },
    {
      id: 2,
      title: "Educity Front-end",
      description:
        "A responsive university website built with React js and CSS. Showcases courses, departments, faculty profiles, and includes a modern, user-friendly design for students and visitors.",
      image: project2,
      link: "https://educityuniv.netlify.app/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive front-end portfolio built with React, styled with Tailwind CSS, and enhanced with Framer Motion for smooth, modern animations. Showcases projects, skills, and contact information.",
      image: project3,
      link: "#",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id="projects" className="py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center  text-3xl md:text-4xl font-bold underline mb-12"
        >
          My Projects
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 text-gray-700 text-center text-lg"
        >
          Here are some of the projects I’ve worked on, showcasing my front-end
          development skills and passion for creating clean, responsive, and
          interactive web experiences.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: project.id * 0.3 }}
              key={project.id}
              className="bg-gray-900 shadow-lg rounded-lg"
            >
              <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt="projectImg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" className="border-2 border-purple-500 text-purple-500 text-xl px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition">
                  Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
