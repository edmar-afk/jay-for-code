/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import Image1 from "../assets/images/favicon.png";
import { FaMap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import React from "react";

import Image2 from "../assets/images/python.png";
import Image3 from "../assets/images/php.png";
import Image4 from "../assets/images/javascript.png";
import Image5 from "../assets/images/photoshop.png";

import Image6 from "../assets/images/flutter.png";
import Image7 from "../assets/images/django.png";
import Image8 from "../assets/images/react.png";
import Image9 from "../assets/images/tailwind.png";

import Image10 from "../assets/images/powerpoint.png";
import Image11 from "../assets/images/word.png";
import Image12 from "../assets/images/AE.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function AboutComment() {
  return (
    <div className="p-4">
      <div className="flex flex-col justify-around p-2 bg-slate-800/20 md:flex-row  mb-12">
        <div className="flex flex-col  w-[100%] max-w-[320px] rounded-xl items-center  text-center p-2 ">
          <img
            src={Image1}
            alt="me"
            className="w-[150px] rounded-lg mb-2"
          />
          <div className="flex items-center mt-10">
            <div className="bg-slate-700 w-[50px] h-[.5px] mr-2" />
            <p className="text-sm"> Qoutes</p>
            <div className="bg-slate-700 ml-2 w-[50px] h-[.5px]" />
          </div>
          <div className="flex flex-auto">
            <p className="mt-4 text-center">
              “Perfection is achieved not when there is nothing more to add, but
              rather when there is nothing more to take away.” –{" "}
              <span className="italic font-bold text-primary">
                Antoine de Saint – Exupery
              </span>
            </p>
          </div>
        </div>

        <div className="w-[100%] rounded-xl ml-2 p-2">
          <div className="p-2">
            <div className="flex justify-between flex-wrap">
              <h1 className="text-primary font-bold flex text-center text-[25px]">
                Edmar Jay Heolin
              </h1>
            </div>

            <div className="flex justify-between items-center flex-wrap">
              <p className="text-md">Software Developer</p>

              <p className="text-md flex items-center">
                <FaMap className="mr-2 text-primary text-[19px]" />
                Pob. Guipos
              </p>
            </div>
            <p className="mt-10 text-sm">Experience</p>
            <p className="flex items-center">
              {" "}
              <FaLaptopCode className="mr-2 text-primary" /> 50+ Webapps Created{" "}
            </p>
            <div className="flex items-center flex-wrap justify-center sm:justify-start mt-5">
              <a
                href="s"
                className="btn w-[160px] justify-center rounded-md p-2 text-black font-secondary hover:text-white flex items-center text-sm mb-5 sm:mb-0"
              >
                <FaFacebookMessenger className="mr-2" />
                Send message
              </a>
              <a
                href="s"
                className="btn  w-[160px] flex items-center ml-0 sm:ml-8 rounded-md p-2 text-black font-secondary text-sm hover:text-white"
              >
                <FaFilePdf className="mr-2" />
                View PDF resume
              </a>
            </div>
            <div className="mt-12 flex items-center border-2 border-x-0 border-t-0 border-b-slate-700 ">
              <Link to="/about" className="text-sm flex items-center  mr-5">
                <FaUserAlt className="mr-2" />
                About Me
              </Link>

              <a
                href="#"
                className="text-sm flex items-center text-primary font-bold "
              >
                <FaNewspaper className="mr-2" />
                Comments
              </a>
            </div>
            <div className="flex flex-wrap flex-col items-center  mt-12">
              <div className="flex flex-col">
                <motion.div
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="flex flex-col text-2xl mb-12 md:items-center">
                    <h1>No Comments Yet.</h1>
                    <h1>The Programmer didn't add any backend features.</h1>
                    <h1>It will be add soon, he preferred Python(Django)</h1>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComment;
