import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroPng from "../../assets/Image_3.png";
import { motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[600px] pb-20 md:pb-0">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-10 lg:max-w-[500px] px-4 md:px-0">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-loose animated-text"
              style={{ lineHeight: "3.5rem" }}
            >
              Welcome to IAS Darshana, <br />
              your trusted partner for <br />
              UPSC and KPSC Exam preparation.
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <a
                href="https://www.youtube.com/@darshangarthikere"
                className="no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="primary-btn flex items-center gap-2 group focus:outline-none active:outline-none bg-[#454545] text-white hover:bg-red-600"
                  style={{ outline: "none", boxShadow: "none" }}
                >
                  <span className="button-text">Know Us Better</span>
                  <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
                </button>
              </a>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt="Hero"
            className="w-[300px] sm:w-[400px] md:w-[600px] xl:w-[600px] relative z-10 drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
