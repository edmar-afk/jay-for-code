import Image1 from "../assets/images/achievements/CSS_certificate.jpg";
import Image2 from "../assets/images/achievements/HTML_certificate.jpg";
import Image3 from "../assets/images/achievements/JavaScript_certificate.jpg";
import Image4 from "../assets/images/achievements/jQuery_certificate.jpg";
import Image5 from "../assets/images/achievements/PHP_certificate.jpg";
import Image6 from "../assets/images/achievements/SQL_certificate.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Achievements() {
  return (
    <>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="font-bold text-center mb-12 text-[25px] text-primary"
      >
        My Achievements
      </motion.h1>
      <div className="grid grid-row gap-4 text-center p-12 md:grid-cols-3">
        <div className="">
          <motion.img
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            src={Image1}
            className="w-full h-full object-cover"
            alt="images"
          />
        </div>
        <motion.img
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          src={Image1}
          className="w-full h-full object-cover"
          alt="images"
        />
        <motion.img
          src={Image2}
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full h-full object-cover"
          alt="images"
        />
        <motion.img
          src={Image3}
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full h-full object-cover"
          alt="images"
        />
        <motion.img
          src={Image4}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full h-full object-cover"
          alt="images"
        />
        <motion.img
          src={Image5}
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full h-full object-cover"
          alt="images"
        />
        <motion.img
          src={Image6}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full h-full object-cover"
          alt="images"
        />
      </div>
    </>
  );
}

export default Achievements;
