/* eslint-disable no-unused-vars */
import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsTrophy, BsBriefcase, BsCodeSquare } from "react-icons/bs";
import { Link } from "react-router-dom";


function Nav() {
  return (
    
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] 
        mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          
          <Link to="/"  className="cursor-pointer w-[60px] flex items-center justify-center text-primary hover:text-orange-500">
            <BiHomeAlt />
          </Link>
          <Link to="/about" className="cursor-pointer w-[60px] flex items-center justify-center text-primary hover:text-orange-500">
            <BiUser />
          </Link>
          <Link to="/achievements" className="cursor-pointer w-[60px] flex items-center justify-center text-primary hover:text-orange-500">
            <BsTrophy />
          </Link>
          <Link to="/works" className="cursor-pointer w-[60px] flex items-center justify-center text-primary hover:text-orange-500">
            <BsBriefcase />
          </Link>
          <Link to="/skills" className="cursor-pointer w-[60px] flex items-center justify-center text-primary hover:text-orange-500">
            <BsCodeSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
