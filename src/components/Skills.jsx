/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */

import Image1 from "../assets/images/django.png";
import Image2 from "../assets/images/react.png";
import Image3 from "../assets/images/mysql.png";
import Image4 from "../assets/images/python.png";
import Image5 from "../assets/images/php.png";
import Image6 from "../assets/images/html.jpg";
import Image7 from "../assets/images/css.jpg";
import Image8 from "../assets/images/flutter.png";
import Image9 from "../assets/images/javascript.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Skills() {
  return (
    <>
      <motion.h1
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="font-bold text-center text-[25px] text-primary"
      >
        My Skills
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-9 lg:mr-12 lg:ml-12 text-center"
      >
        “When I stand before God at the end of my life, I would hope that I
        would not have a single bit of talent left, and could say, 'I used
        everything you gave me.” ―{" "}
        <span className="text-primary">Erma Bombeck</span>
      </motion.p>
      <div class="flex flex-col sm:flex-row p-3 lg:p-12 justify-around flex-wrap items-center">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" bg-slate-900/50 h-[350px] w-[300px] rounded-xl mb-5"
        >
          <div className="flex p-3 items-center">
            <img src={Image4} className="h-[75px] w-[80px]" alt="" />
            <div className="flex flex-col">
              <h1 className="text-primary font-bold text-2xl ml-5">Python</h1>
              <span className="ml-5 flex flex-row ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px]">
              I only have 1 month of learning in Python, long enough to know the
              basic syntax and OOP. My main goal in life was to study machine
              learning and robotics but it stopped because of financial problems
              so I'm studying Django instead.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" bg-slate-900/50 h-[350px] w-[300px] rounded-xl mb-5"
        >
          <div className="flex p-3 items-center">
            <img src={Image1} className="h-[75px] w-[80px]" alt="" />
            <div className="flex flex-col">
              <h1 className="text-primary font-bold text-2xl ml-5">Django</h1>
              <span className="ml-5 flex flex-row ">
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px]">
              Learning Django is easy for me since I have a small background in
              Python and other programming languages that helped me in this
              path. With barely a month of studying Django, I'll be able to
              applied it in my solo Capstone Project.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" bg-slate-900/50 h-[350px] w-[300px] rounded-xl mb-5"
        >
          <div className="flex p-3 items-center">
            <img src={Image2} className="h-[75px] w-[80px]" alt="" />
            <div className="flex flex-col">
              <h1 className="text-primary font-bold text-2xl ml-5">React</h1>
              <span className="ml-5 flex flex-row ">
                <FaStar />
              </span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px]">
              I LOVE REACT. That's why I'm going to learn it, right now I'm
              studying react to develop more of my front-end skills. Having
              html, css, and javaScript knowledge already, I'm learning react
              easily. This portfolio website is made by React.js too!
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" bg-slate-900/50 h-[350px] w-[300px] rounded-xl mb-5"
        >
          <div className="flex p-3 items-center">
            <img src={Image3} className="h-[70px] w-[80px]" alt="" />
            <div className="flex flex-col">
              <h1 className="text-primary font-bold text-2xl ml-5">MySQL</h1>
              <span className="ml-5 flex flex-row ">
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px]">
              I have basic knowledge on mySQL. I studied mySQL to bring more
              functionality to my boring plain text websites that I created.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" bg-slate-900/50 h-[350px] w-[300px] rounded-xl mb-5"
        >
          <div className="flex p-3 items-center">
            <img src={Image9} className="h-[70px] w-[80px]" alt="" />
            <div className="flex flex-col">
              <h1 className="text-primary font-bold text-2xl ml-5">
                javaScript
              </h1>
              <span className="ml-5 flex flex-row ">
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px]">
              I only have decent amount of time exploring javaScript, long
              enough to know the basic syntax and how it use, DOM manipulation,
              OOP and have basic knowledge on modern ES6.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" bg-slate-900/50 h-[350px] w-[300px] rounded-xl mb-5"
        >
          <div className="flex p-3 items-center">
            <img src={Image6} className="h-[70px] w-[80px]" alt="" />
            <div className="flex flex-col">
              <h1 className="text-primary font-bold text-2xl ml-5">HTML</h1>
              <span className="ml-5 flex flex-row ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px]">
              For Having a 2+ year of experience as a Freelance Web Developer, I
              can say that I know mostly HTML tags and tricks how to edit when
              and where it goes wrong in the code.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" bg-slate-900/50 h-[350px] w-[300px] rounded-xl mb-5"
        >
          <div className="flex p-3 items-center">
            <img src={Image7} className="h-[70px] w-[50px]" alt="" />
            <div className="flex flex-col">
              <h1 className="text-primary font-bold text-2xl ml-5">CSS</h1>
              <span className="ml-5 flex flex-row ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px]">
              I learned CSS right after I mastered HTML, HTML is ugly without
              this. I have strong understanding in styling as well as Flexbox
              and responsive designs.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" bg-slate-900/50 h-[350px] w-[300px] rounded-xl mb-5"
        >
          <div className="flex p-3 items-center">
            <img src={Image8} className="h-[60px] w-[60px]" alt="" />
            <div className="flex flex-col">
              <h1 className="text-primary font-bold text-2xl ml-5">Flutter</h1>
              <span className="ml-5 flex flex-row ">
                <FaStar />
              </span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px]">
              I only only study flutter because of school projects, I'd say it's
              only a week of studying I able to make basic widgets designs.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" bg-slate-900/50 h-[350px] w-[300px] rounded-xl mb-5"
        >
          <div className="flex p-3 items-center">
            <img src={Image5} className="h-[70px] w-[60px]" alt="" />
            <div className="flex flex-col">
              <h1 className="text-primary font-bold text-2xl ml-5">PHP</h1>
              <span className="ml-5 flex flex-row ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              quaerat alias nostrum ea explicabo officiis voluptatem odit vero
              reiciendis numquam, commodi repudiandae omnis laborum expedita.
              Mollitia quisquam pariatur laborum impedit?
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
