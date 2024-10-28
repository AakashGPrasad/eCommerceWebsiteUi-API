import React, { useState } from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0" id="About">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Course to Start your Journey
            </h1>
            <p className="text-dark2">
              We provide Online coaching institute for UPSC/KPSC (IAS/KAS) & other competitive examinations.
              Delhi model of Teaching by Experts (English/Kannada). Twice a month zoom discussion. Regular 
              mock test & Solution (Prelims/Mains). Exam centric preparation.
            </p>
            <button
              onClick={toggleModal}
              className="primary-btn !mt-8 bg-[#454545] text-white hover:bg-red-600 focus:bg-[#454545] active:bg-[#454545] border-none"
              style={{ outline: 'none', boxShadow: 'none' }} // Inline styles to override any defaults
            >
              Join Now
            </button>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>

      {/* Modal for Course Selection */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-2xl text-[#454545] hover:text-red-600" // Increased size for the cross mark
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center">Choose Your Course</h2>
            <div className="mt-4 flex flex-col md:flex-row justify-center">
              {/* Course Option 1 */}
              <div className="mt-4 text-center flex-1 mx-2 flex flex-col">
                <h3 className="text-lg font-semibold">IAS/IPS Course</h3>
                <p className="flex-grow">Details about IAS/IPS course.</p>
                <button className="bg-[#454545] text-white rounded px-4 py-1 text-sm hover:bg-red-600 mt-2 mx-auto block">
                  Select
                </button>
              </div>
              {/* Course Option 2 */}
              <div className="mt-4 text-center flex-1 mx-2 flex flex-col">
                <h3 className="text-lg font-semibold">KAS Course</h3>
                <p className="flex-grow">Details about KAS course.</p>
                <button className="bg-[#454545] text-white rounded px-4 py-1 text-sm hover:bg-red-600 mt-2 mx-auto block">
                  Select
                </button>
              </div>
              {/* Course Option 3 */}
              <div className="mt-4 text-center flex-1 mx-2 flex flex-col">
                <h3 className="text-lg font-semibold">NCERT & Other Competitive Exams</h3>
                <p className="flex-grow">Details about NCERT & other competitive examinations.</p>
                <button className="bg-[#454545] text-white rounded px-4 py-1 text-sm hover:bg-red-600 mt-2 mx-auto block">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner2;
