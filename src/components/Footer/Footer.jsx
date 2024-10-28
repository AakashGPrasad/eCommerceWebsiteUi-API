import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import FooterPng from '../../assets/Down2.png';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

// Updated SuccessModal component
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-center">Email Sent!</h2>
        <p className="text-center mt-2">Your message has been sent successfully.</p>
        <div className="text-center"> {/* Added div for centering the button */}
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
          <div className="flex flex-col items-center space-y-4 max-w-[300px]">
            <img
              src={FooterPng}
              alt="IAS Darshana Logo"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
            />
            <h1 className="text-2xl font-bold">IAS Darshana</h1>
            <p className="text-dark2">Aakash.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <ul className="space-y-2 text-lg">
                <li className="cursor-pointer hover:text-red-600 duration-200">IAS/IPS Course</li>
                <li className="cursor-pointer hover:text-red-600 duration-200">KAS Course</li>
                <li className="cursor-pointer hover:text-red-600 duration-200">NCERT Courses</li>
                <li className="cursor-pointer hover:text-red-600 duration-200">Competitive Exams</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <ul className="space-y-2 text-lg">
                <li className="cursor-pointer hover:text-red-600 duration-200">Home</li>
                <li className="cursor-pointer hover:text-red-600 duration-200">Services</li>
                <li className="cursor-pointer hover:text-red-600 duration-200">About</li>
                <li className="cursor-pointer hover:text-red-600 duration-200">Contact</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <form onSubmit={sendEmail} className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
                required
              />
              <button
                type="submit"
                className="bg-[#454545] text-white font-semibold py-4 px-6 rounded-e-xl hover:bg-red-600"
              >
                Go
              </button>
            </form>
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0">
                <FaWhatsapp className="cursor-pointer hover:text-green-500 hover:scale-105 duration-200" />
              </a>
              <a href="https://youtube.com/@darshangarthikere?si=Knq_-T9ilttjmRuT">
                <FaYoutube className="cursor-pointer hover:text-red-600 hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
};

export default Footer;
