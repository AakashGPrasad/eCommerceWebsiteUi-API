import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import FooterPng from '../../../src/assets/Down2.png';
import { motion } from 'framer-motion';
import emailjs from "emailjs-com";
import { Link } from 'react-router-dom'; // Import Link for routing

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Overview", path: "#Overview" },
  { id: 4, title: "About", path: "#About" },
];

// Updated SuccessModal component
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-lg font-bold text-center">Email Sent!</h2>
        <p className="text-center mt-2">Your message has been sent successfully.</p>
        <div className="text-center mt-4">
          <button
            className="mt-4 bg-[#454545] text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isYoutubeModalOpen, setIsYoutubeModalOpen] = useState(false); // New state for YouTube modal

  emailjs.init('aysfcz4r0y_VmaFkS'); // Your public key here

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: 'aakashgprasad604@gmail.com',
      from_email: emailInput,
      message: 'Test email from IAS Darshana',
    };

    const serviceID = 'service_pr5hfzq'; // Your EmailJS service ID
    const templateID = 'template_5kdm32j'; // Your EmailJS template ID

    emailjs
      .send(serviceID, templateID, templateParams)
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setIsModalOpen(true);
          setEmailInput('');
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert(`Failed to send email. Error: ${error.text}`);
        }
      );
  };

  return (
    <footer className="py-28 bg-[#f7f7f7]" id="getInTouch">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between gap-14 md:gap-4">
          {/* Section for logo and text */}
          <div className="flex flex-col items-center space-y-4 max-w-[300px]">
            {/* Logo Link that redirects to the home page */}
            <Link to="/" className="flex justify-center items-center" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={FooterPng}
                alt="IAS Darshana Logo"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
            </Link>
            <div className="text-center space-y-2 mt-6">
              <p className="text-lg font-medium sliding-colors2">For Any Queries</p>
              <p className="text-lg sliding-colors2">Email us at <a href="mailto:iasdarshana@gmail.com" className="text-blue-600">IasDarshana@gmail.com</a> or Call us at <a href="tel:+919902624818" className="text-blue-600">9902624818</a></p>
            </div>
          </div>

          {/* Section for Courses and Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
            {/* Courses Section */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold sliding-colors2">Courses</h1>
              <ul className="space-y-2 text-lg">
                <li className="cursor-pointer hover:text-red-600 duration-200">
                  <a
                    href="https://www.youtube.com/playlist?list=PLY4subXnJRspo6MgfCOQaLKnACUM2kaPS" // Replace with UPSC playlist link
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security enhancement
                    className="hover:underline sliding-colors2"
                    onClick={() => setIsYoutubeModalOpen(true)}
                  >
                    UPSC Course
                  </a>
                </li>
                <li className="cursor-pointer hover:text-red-600 duration-200">
                <a
                    href="https://www.youtube.com/playlist?list=PLY4subXnJRsopzHVpPFr0lVUIvuLluxmR&si=5I_alxsvAv8v9o1V" // Replace with UPSC playlist link
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security enhancement
                    className="hover:underline sliding-colors2"
                    onClick={() => setIsYoutubeModalOpen(true)}
                  >KPSC Course
                  </a>
                  </li>
                <li className="cursor-pointer hover:text-red-600 duration-200">
                <a
                    href="https://www.youtube.com/playlist?list=NQcFJiuZrf3tUmhsKRiT&si=76fVVdMJwuSOS1y8" // Replace with UPSC playlist link
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security enhancement
                    className="hover:underline sliding-colors2"
                    onClick={() => setIsYoutubeModalOpen(true)}
                  >
                  NCERT Courses</a></li>
                <li className="cursor-pointer hover:text-red-600 duration-200 sliding-colors2">Competitive Exams</li>
              </ul>
            </div>

            {/* Links Section */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold sliding-colors2">Links</h1>
              <ul className="space-y-2 text-lg">
                {/* Dynamically render NavbarMenu items */}
                {NavbarMenu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.path}
                      className="inline-block py-0 px-1 hover:text-red-600 relative group sliding-colors2"
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
                {/* Static Links */}
              </ul>
            </div>
          </div>

          {/* Section for Get in Touch */}
          <div className="flex flex-col items-center space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold sliding-colors2">Get In Touch</h1>
            <form onSubmit={sendEmail} className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2 sliding-colors2"
                required
              />
              <button
                type="submit"
                className="bg-[#454545] text-white font-semibold py-4 px-6 rounded-e-xl hover:bg-red-600"
              >                
                <span className="button-text">Go</span>
              </button>
            </form>
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0" target="_self">
                <FaWhatsapp className="cursor-pointer hover:text-green-500 hover:scale-105 duration-200" />
              </a>
              <a
                href="https://www.youtube.com/@darshangarthikere" // Link directly to the YouTube channel
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="cursor-pointer hover:text-red-600 hover:scale-105 duration-200" />
              </a>
            </div>  
          </div>
        </div>
      </motion.div>

      {/* YouTube Modal */}
      {isYoutubeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-3xl w-full relative flex flex-col items-center">
            {/* Close (Cross) Button in the top-right corner */}
            <button
              onClick={() => setIsYoutubeModalOpen(false)} // Close the YouTube modal
              className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
            >
              ×
            </button>

            {/* YouTube Video */}
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed?listType=playlist&list=PLY4subXnJRspo6MgfCOQaLKnACUM2kaPS"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      
      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
};

export default Footer;
