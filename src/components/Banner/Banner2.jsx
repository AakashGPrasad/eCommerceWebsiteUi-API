import React, { useState } from "react";
import BannerPng from "../../../src/assets/bannerImage.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  const [selectedCourse, setSelectedCourse] = useState(null); // Track the selected course
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track if video is loaded
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track if video is currently playing

  // Course data with associated YouTube playlist links
  const courseVideos = {
    UPSC: "https://www.youtube.com/embed/videoseries?list=PLY4subXnJRsrW8unbntQJEk6E0xI5mTZI&si=xisWl3LFeZpPgAT6", // Updated UPSC playlist URL
    KPSC: "https://www.youtube.com/embed/videoseries?list=PLY4subXnJRsopzHVpPFr0lVUIvuLluxmR&si=5I_alxsvAv8v9o1V", // Playlist URL for KPSC
    "NCERT & Other": "https://www.youtube.com/embed/videoseries?list=PLY4subXnJRso-NQcFJiuZrf3tUmhsKRiT&si=76fVVdMJwuSOS1y8", // Playlist URL for NCERT & Other
  };

  // Function to handle course selection
  const handleCourseSelect = (course) => {
    if (isVideoPlaying) return; // Prevent course selection if a video is playing
    setSelectedCourse(course); // Update the selected course
    setIsVideoLoaded(false); // Reset video loading state when a new course is selected
    setIsVideoPlaying(true); // Mark video as playing
    setTimeout(() => {
      setIsVideoLoaded(true); // Simulate video loading after selection
    }, 500); // Allow some time for video to load
  };

  // Function to handle closing the video
  const handleCloseVideo = () => {
    setIsVideoPlaying(false); // Mark video as not playing
    setSelectedCourse(null); // Reset selected course
    setIsVideoLoaded(false); // Reset video loading state
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
            <h1 className="text-4xl font-bold !leading-snug animated-text2">
              Join Our Course to Start your Journey
            </h1>
            <p className="sliding-colors text-dark2 ani">
              We offer comprehensive online coaching for UPSC/KPSC (IAS/KAS) and other competitive exams. Our teaching follows the renowned Delhi model, delivered by expert instructors in both English and Kannada. We conduct bi-monthly Zoom discussions and provide regular mock tests along with detailed solutions for both Prelims and Mains. Our exam-focused approach ensures a targeted and effective preparation strategy.
            </p>
            <div className="relative group">
              {/* Main Button */}
              <button
                className="primary-btn !mt-8 bg-[#454545] text-white hover:bg-red-600 focus:bg-[#454545] active:bg-[#454545] border-none "
                style={{ outline: 'none', boxShadow: 'none' }} // Inline styles to override any defaults
              >
                
                <span className="button-text">Join Now</span>
              </button>

              {/* Course Options (Visible on Hover) */}
              <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 sm:w-full md:w-auto sm:flex sm:flex-col sm:items-center md:flex-col md:items-start md:max-h-48 lg:flex-col lg:items-start lg:max-h-48 overflow-y-auto z-10">
                <div
                  className="py-2 px-4 hover:bg-gray-200 cursor-pointer w-full md:w-auto sm:w-full sliding-colors"
                  onClick={() => handleCourseSelect("UPSC")}
                >
                  UPSC Course
                </div>
                <div
                  className="py-2 px-4 hover:bg-gray-200 cursor-pointer w-full md:w-auto sm:w-full sliding-colors"
                  onClick={() => handleCourseSelect("KPSC")}
                >
                  KPSC Course
                </div>
                <div
                  className="py-2 px-4 hover:bg-gray-200 cursor-pointer w-full md:w-auto sm:w-full sliding-colors"
                  onClick={() => handleCourseSelect("NCERT & Other")}
                >
                  NCERT & Other
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt="Banner Image"
            className="w-full max-w-[450px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] object-cover drop-shadow"
          />
        </div>
      </div>

      {/* Display Playlist Video for Selected Course */}
      {isVideoLoaded && selectedCourse && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 flex flex-col">
            {/* Close Button at the Top */}
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 text-2xl text-[#454545] hover:text-red-600"
              aria-label="Close"
            >
              &times;
            </button>
        
            <h3 className="text-xl font-semibold text-center mb-4">You have selected the {selectedCourse} course</h3>
            
            {/* Video Section */}
            <div className="flex justify-center mb-4">
              <iframe
                width="100%"
                height="315"
                src={courseVideos[selectedCourse]} // Playlist URL based on selected course
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Course Playlist"
              ></iframe>
            </div>
        
            {/* Close Video Button at the Bottom */}
            <div className="mt-auto flex justify-center">
              <button
                onClick={handleCloseVideo}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner2;
