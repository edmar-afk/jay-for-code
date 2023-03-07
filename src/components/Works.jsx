/* eslint-disable no-unused-vars */
import Image1 from "../assets/images/myWorks/PHP-SQL/schoolProjects/Capture.PNG";
import Image2 from "../assets/images/myWorks/PHP-SQL/schoolProjects/Capture1.PNG";
import Image3 from "../assets/images/myWorks/PHP-SQL/schoolProjects/Capture2.PNG";
import Image4 from "../assets/images/myWorks/PHP-SQL/schoolProjects/Capture3.PNG";

import Image5 from "../assets/images/myWorks/python/capstone.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Image7 from "../assets/images/php.png";
import Image8 from "../assets/images/javascript.png";
import Image9 from "../assets/images/photoshop.png";

import Image10 from "../assets/images/flutter.png";
import Image11 from "../assets/images/django.png";
import Image12 from "../assets/images/react.png";
import Image13 from "../assets/images/tailwind.png";
import Image14 from "../assets/images/python.png";
import Image15 from "../assets/images/mysql.png";

function Works() {
  return (
    <>
      <h1 className="font-bold text-center mb-12 text-[25px] text-primary">
        My Works
      </h1>
      <div className="container mx-auto mb-[200px]">
        <div className="flex justify-evenly flex-wrap">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="group relative overflow-hidden  max-w-[300px] w-[100%] mb-5"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 rounded-lg transition-all duration-500  "
              src={Image5}
              alt=""
            />
            <div className="absolute -bottom-full left-2 group-hover:bottom-14 transition-all duration-500 z-50">
              <span className="text-md text-primary">Capstone Project</span>
            </div>
            <div className="absolute -bottom-full left-2 group-hover:bottom-8 transition-all duration-700 z-50">
              <span className="text-white">
                My solo Capstone School Project
              </span>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex absolute -bottom-full left-2 group-hover:top-2 transition-all duration-700 z-50">
                <img src={Image11} className="h-[25px] w-[30px]" alt="" />
                <img src={Image14} className="h-[25px] w-[30px]" alt="" />
                <img src={Image15} className="h-[25px] w-[20px]" alt="" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="group relative overflow-hidden  max-w-[300px] w-[100%] mb-5"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 rounded-lg transition-all duration-500  "
              src={Image1}
              alt=""
            />
            <div className="absolute -bottom-full left-2 group-hover:bottom-14 transition-all duration-500 z-50">
              <span className="text-md text-primary"> Text to ASCII</span>
            </div>
            <div className="absolute -bottom-full left-2 group-hover:bottom-8 transition-all duration-700 z-50">
              <span className="text-white">Basic PHP school Project</span>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex absolute -bottom-full left-2 group-hover:top-2 transition-all duration-700 z-50">
                <img src={Image7} className="h-[25px] w-[30px]" alt="" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="group relative overflow-hidden   max-w-[300px] w-[100%] mb-5"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 rounded-lg transition-all duration-500  "
              src={Image2}
              alt=""
            />
            <div className="absolute -bottom-full left-2 group-hover:bottom-14 transition-all duration-500 z-50">
              <span className="text-md text-primary">
                Decimal to Hexadecimal
              </span>
            </div>
            <div className="absolute -bottom-full left-2 group-hover:bottom-8 transition-all duration-700 z-50">
              <span className="text-white">Basic PHP school Project</span>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex absolute -bottom-full left-2 group-hover:top-2 transition-all duration-700 z-50">
                <img src={Image7} className="h-[25px] w-[30px]" alt="" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="group relative overflow-hidden   max-w-[300px] w-[100%] mb-5"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 rounded-lg transition-all duration-500  "
              src={Image3}
              alt=""
            />
            <div className="absolute -bottom-full left-2 group-hover:bottom-14 transition-all duration-500 z-50">
              <span className="text-md text-primary"> Decimal to Binary</span>
            </div>
            <div className="absolute -bottom-full left-2 group-hover:bottom-8 transition-all duration-700 z-50">
              <span className="text-white">Basic PHP school Project</span>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex absolute -bottom-full left-2 group-hover:top-2 transition-all duration-700 z-50">
                <img src={Image7} className="h-[25px] w-[30px]" alt="" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="group relative overflow-hidden   max-w-[300px] w-[100%] mb-5"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 rounded-lg transition-all duration-500  "
              src={Image4}
              alt=""
            />
            <div className="absolute -bottom-full left-2 group-hover:bottom-14 transition-all duration-500 z-50">
              <span className="text-md text-primary"> Calculator</span>
            </div>
            <div className="absolute -bottom-full left-2 group-hover:bottom-8 transition-all duration-700 z-50">
              <span className="text-white">Basic PHP school Project</span>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex absolute -bottom-full left-2 group-hover:top-2 transition-all duration-700 z-50">
                <img src={Image7} className="h-[25px] w-[30px]" alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Works;
