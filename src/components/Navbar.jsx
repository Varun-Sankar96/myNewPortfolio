import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import Resume from '../assets/myresume.pdf'

const Navbar = () => {
  const variant = {
    open: { clipPath: "circle(1200px at 43px 43px)" },
    transition: {
      type: "spring",
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
    },
    transition: {
      type: "spring",
      duration: 1,
    },
  };
  const [menu, setMenu] = useState(false);
  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Skills", to: "skills" },
    { id: 3, text: "Projects", to: "projects" },
    { id: 4, text: "Contact", to: "contact" },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-6"
      >
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
          <span className="text-white">Varun</span>
          <span className="text-purple-500">Sankar</span>
        </div>
        <div>
          <ul className="hidden md:flex items-center space-x-6 text-white list-none lg:text-lg md:text-base">
            {items.map((item, id, to) => (
              <li className="cursor-pointer" key={item.id}>
                <Link to={item.to} smooth={true} duration={500} offset={-70}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a  href={Resume} download='Resume' className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full cursor-pointer">
          {" "}
          Download resume{" "}
        </a>
      </motion.div>

      {/* for mobile screen */}

      <div className="flex md:hidden justify-between">
        <motion.div animate={menu ? "open" : "closed"}>
          <motion.div
            variants={variant}
            onClick={() => setMenu((prev) => !prev )}
            className="bg-white  w-2/3 h-screen text-black fixed z-10"
          >
            <div className="px-7 py-6 cursor-pointer">
              {menu ? <IoClose size={30} /> : <IoIosMenu size={30} />}
            </div>
            {menu && (
              <div className="flex flex-col justify-center items-center">
                <ul className="space-y-6 text-black text-lg">
                  {items.map((item, id, to) => (
                    <li
                      className="hover:text-purple-500 duration-200 cursor-pointer"
                      key={item.id}
                    > 
                      <Link onClick={()=>{setMenu(false)}} to={item.to} smooth={true} duration={500} offset={-70}>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a href={Resume} download='Resume' className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-4 rounded-full cursor-pointer"> Download Resume</a>
              </div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold flex items-center gap-2 py-6 px-4"
        >
          <span className="text-white">Varun</span>
          <span className="text-purple-500">Sankar</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
