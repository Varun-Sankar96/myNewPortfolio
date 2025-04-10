import React, { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Swal from 'sweetalert2'

const Contact = () => {
  const date = new Date().getFullYear();
  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    // contact form
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5207c49f-7ce8-47cf-b330-d0e840865acb");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
             
        }
      };

      

     
     

  return (
    <div id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <motion.h2 
        ref={ref}
        initial={{ opacity: 0, y:-100}}
        animate={
          inView ? { opacity: 1, y:0 } : { }
        }
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl font-bold text-white underline">Contact Me</motion.h2>
        <motion.p
         ref={ref}
         initial={{ opacity: 0, y:-100}}
         animate={
           inView ? { opacity: 1, y:0 } : { }
         }
         transition={{ duration: 0.5, delay: 0.3 }}
        className="text-slate-400 mt-4 text-lg">
          Interested in working together or just want to say hello? Feel free to
          reach out—I'd love to connect!
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center ">
        {/* <div className="space-y-6 flex justify-between w-full border-5 border-red-600"> */}
          {/* <div className="flex lg:flex-row  justify-between sm:flex-col lg:w-[1200px]  "> */}
          <div>
            <motion.div
             ref={ref}
             initial={{ opacity: 0, x:-50}}
             animate={
               inView ? { opacity: 1, x:0 } : { }
             }
             transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4 space-y-4">
              <div className="bg-purple-500 p-4 rounded-full">
                <FaPhone className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-medium text-purple-500">Call Me</p>
                <p className="text-white">+91 7695805324</p>
              </div>
            </motion.div>

            <motion.div 
             ref={ref}
             initial={{ opacity: 0, x:-50}}
             animate={
               inView ? { opacity: 1, x:0 } : { }
             }
             transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-4 mt-6">
              <div className="bg-purple-500 p-4 rounded-full">
                <FaEnvelope className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-medium text-purple-500">Email</p>
                <p className="text-white">varunprofessional3@gmail.com</p>
              </div>
            </motion.div>
          </div>

          <motion.form 
          onSubmit={onSubmit}
           ref={ref}
           initial={{ opacity: 0, x:50}}
           animate={
             inView ? { opacity: 1, x:0 } : { }
           }
           transition={{ duration: 0.5, delay: 0.8 }}
          className="space-y-4 text-white   ">
            <div className="flex flex-col items-center  gap-6">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                
                className="border border-purple-500 bg-gray-900 py-4 px-6 outline-none  w-1/2 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your email"
                name="email"
                required
                
                className="border border-purple-500 bg-gray-900 py-4 px-6 outline-none  w-1/2 rounded-lg"
              />
              <textarea
                placeholder="message"
                name="message"
                required
                
                className="border border-purple-500 bg-gray-900  py-4 px-6 outline-none w-1/2 rounded-lg max-h-28"
              ></textarea>
              <motion.button
              
              whileHover={{scale:1.05}}
              whileTap={{scale:0.95}}
              className="text-lg bg-purple-500 hover:bg-purple-400 duration-200 text-white px-4 py-2  rounded-full cursor-pointer">
                Submit message
              </motion.button>
            </div>
          </motion.form>
          {/* </div> */}
        {/* </div> */}
      </div>
      {/* footer */}
      <motion.div 

       ref={ref}
       initial={{ opacity: 0}}
       animate={
         inView ? { opacity: 1} : { }
       }
       transition={{ duration: 0.5, delay:1 }}
      
      className="container mx-auto mt-20 flex justify-between items-center p-5 text-white border-t-2 border-purple-500">
        <p>&copy; {date}. All Rights Reserved. </p>
        <p>Varun Sankar</p>
        <div className="flex justify-center space-x-4 ">
          <a href="https://www.linkedin.com/in/varun-vicky-4a6a12173/" target="_blank" className="hover:text-purple-500 cursor-pointer">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Varun-Sankar96" target="_blank" className="hover:text-purple-500 cursor-pointer">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href=" https://www.instagram.com/varun.vicky.5242018?igsh=MWthOWhlMDhtNjVo&utm_source=ig_contact_invite " target="_blank" className="hover:text-purple-500 cursor-pointer">
            <FaInstagram className="w-6 h-6" /> 
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
