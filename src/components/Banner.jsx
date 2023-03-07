/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaClipboard, FaPaypal } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import PdfResume from "../assets/pdf/Resume.pdf";

function Banner() {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center mx-auto"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-[25px] font-bold leading-[0.8] lg:text-[50px] mb-3"
            >
              I'm <span className="text-primary">JAY</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-6 text-[20px] lg:text-[25px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white">A Freelance </span>
              <span className=" text-primary">Software</span>
              <span className="mr-4 text-white "> Developer</span>
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-8 max-w-[60rem] text-[20px] mx-auto lg:mx-0"
            >
              “Programming today is a race between software engineers striving
              to build bigger and better idiot-proof programs, and the Universe
              trying to produce bigger and better idiots. So far, the Universe
              is winning.”
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex max-w-max gap-x-6 flex-col md:flex-row items-center mb-[15rem] mx-auto"
            >
              <a
                href="https://www.paypal.com/paypalme/my/settings?flow=cmV0dXJuVXJsPS9teWFjY291bnQvdHJhbnNmZXIvaG9tZXBhZ2UvcmVxdWVzdCZjYW5jZWxVcmw9L215YWNjb3VudC90cmFuc2Zlci9ob21lcGFnZS9yZXF1ZXN0"
                target="_blank"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="bg-primary p-4 mb-3 rounded-full items-center hover:bg-transparent md:mb-0"
              >
                <span className="flex text-center items-center font-secondary">
                  <FaPaypal className="mr-1" /> 1 Cup Coffee
                </span>
              </a>

              <a
                href={PdfResume}
                target="_blank"
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                className="bg-primary p-4 rounded-full items-center hover:bg-transparent"
              >
                <span className="flex text-center items-center font-secondary">
                  <FaClipboard className="mr-1" /> My Resume
                </span>
              </a>
            </motion.div>
            {/*  <div className="flex flex-col md:flex-row max-w-max gap-x-6 items-center mb-12 mx-auto ">
              <p className="font-semibold">+63 9665616586</p>
              <p className="font-semibold">+63 9562059570</p>
              <a href="#" className="text-primary font-semibold">
                jaywrsnp6@gmail.com
              </a>
  </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
