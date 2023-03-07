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
import PdfResume from "../assets/pdf/Resume.pdf";
function About() {
  return (
    <div className="p-4">
      <div className="flex flex-col justify-around p-2 bg-slate-800/20 md:flex-row  mb-12">
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col  w-[100%] max-w-[320px] rounded-xl items-center  text-center p-2 "
        >
          <img src={Image1} alt="me" className="w-[150px] rounded-lg mb-2" />
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
        </motion.div>

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
            <p
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex items-center"
            >
              {" "}
              <FaLaptopCode className="mr-2 text-primary" /> 50+ Webapps Created{" "}
            </p>
            <div className="flex items-center flex-wrap justify-center sm:justify-start mt-5">
              <motion.a
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                href="https://web.facebook.com/jayjanezkieO3"
                target="_blank"
                className="btn w-[160px] justify-center rounded-md p-2 text-black font-secondary hover:text-white flex items-center text-sm mb-5 sm:mb-0"
              >
                <FaFacebookMessenger className="mr-2" />
                Send message
              </motion.a>
              <motion.a
                href={PdfResume}
                target="_blank"
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="btn  w-[160px] flex items-center ml-0 sm:ml-8 rounded-md p-2 text-black font-secondary text-sm hover:text-white"
              >
                <FaFilePdf className="mr-2" />
                View PDF resume
              </motion.a>
            </div>
            <div className="mt-12 flex items-center border-2 border-x-0 border-t-0 border-b-slate-700 ">
              <a
                href="#"
                className="text-sm flex items-center text-primary font-bold mr-5"
              >
                <FaUserAlt className="mr-2" />
                About Me
              </a>

              <Link to="/about/comment" className="text-sm flex items-center ">
                <FaNewspaper className="mr-2" />
                Comments
              </Link>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col">
                <motion.div
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-sm"
                >
                  <p className="mt-12">Contact Information</p>
                  <div className="flex mt-7">
                    <p className="mr-12 flex items-center">
                      <FaPhoneAlt className="mr-2" />
                      Phone 1:{" "}
                    </p>
                    <a href="3" className="text-primary">
                      +63 9665616586
                    </a>
                  </div>
                  <div className="flex mt-3">
                    <p className="mr-12 flex items-center">
                      <FaPhoneAlt className="mr-2" />
                      Phone 2:{" "}
                    </p>
                    <a href="3" className="text-primary">
                      +63 9562059570
                    </a>
                  </div>
                  <div className="flex mt-3">
                    <p className="mr-12 flex items-center">
                      <FaMailBulk className="mr-2" />
                      Email:{" "}
                    </p>
                    <a href="3" className="text-primary">
                      jaywrsnp6@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-sm"
                >
                  <p className="mt-12">Basic Information</p>
                  <div className="flex mt-7">
                    <p className="mr-12 flex items-center">
                      <FaBirthdayCake className="mr-2" />
                      Birthday:{" "}
                    </p>
                    <a href="3" className="text-primary">
                      October 22 1997
                    </a>
                  </div>
                  <div className="flex mt-3">
                    <p className="mr-12 flex items-center">
                      <FaMale className="mr-2" />
                      Gender:{" "}
                    </p>
                    <a href="3" className="text-primary">
                      Male
                    </a>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-row mt-12 justify-center">
                <div className="text-sm">
                  <p
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    Used Programming Languages:
                  </p>

                  <motion.div
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex flex-row mt-2"
                  >
                    <img
                      src={Image2}
                      className="h-[45px] w-[50px] mr-3"
                      alt=""
                    />
                    <img
                      src={Image3}
                      className="h-[45px] w-[50px] mr-3"
                      alt=""
                    />
                    <img src={Image4} className="h-[45px] w-[50px]" alt="" />
                  </motion.div>
                  <p
                    variants={fadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="mt-12"
                  >
                    Used Frameworks/Libraries:
                  </p>
                  <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex flex-row mt-2"
                  >
                    <img
                      src={Image6}
                      className="h-[45px] w-[50px] mr-3"
                      alt=""
                    />
                    <img
                      src={Image7}
                      className="h-[45px] w-[50px] mr-3"
                      alt=""
                    />
                    <img
                      src={Image8}
                      className="h-[45px] w-[50px] mr-3"
                      alt=""
                    />
                    <img
                      src={Image9}
                      className="h-[45px] w-[50px] mr-3 rounded-md"
                      alt=""
                    />
                  </motion.div>
                  <p
                    variants={fadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="mt-12"
                  >
                    Used Softwares:
                  </p>
                  <motion.div
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex flex-row mt-2"
                  >
                    <img
                      src={Image5}
                      className="h-[45px] w-[50px] mr-3"
                      alt=""
                    />
                    <img
                      src={Image10}
                      className="h-[45px] w-[50px] mr-3"
                      alt=""
                    />
                    <img
                      src={Image11}
                      className="h-[45px] w-[50px] mr-3"
                      alt=""
                    />
                    <img
                      src={Image12}
                      className="h-[45px] w-[50px] mr-3"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
