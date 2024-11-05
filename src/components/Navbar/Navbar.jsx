import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal"; // Make sure Modal handles both Sign In and Sign Up

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Overview", path: "#Overview" },
  { id: 3, title: "Services", path: "#Service" },
  { id: 4, title: "About", path: "#About" },
  { id: 5, title: "Contact Us", path: "#getInTouch" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true); // Track Sign In vs Sign Up
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const switchToSignIn = () => {
    setIsSignIn(true);
  };

  const switchToSignUp = () => {
    setIsSignIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login state
    setIsModalOpen(false); // Close modal after login
    navigate("/"); // Redirect to Hero (main) page
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state on logout
    navigate("/"); // Redirect to the home page or any other page as needed
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        <div>
          <h1 className="font-bold text-4xl">IAS Darshana</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-red-600 relative group"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            {isLoggedIn ? (
              <button
                className="primary-btn flex items-center justify-center gap-2 group focus:outline-none bg-[#454545] text-white hover:bg-red-600"
                onClick={handleLogout} // Logout action
              >
                Log Out
              </button>
            ) : (
              <button
                className="primary-btn flex items-center justify-center gap-2 group focus:outline-none bg-[#454545] text-white hover:bg-red-600"
                onClick={toggleModal} // Open modal for Sign In/Sign Up
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            )}
          </ul>
        </div>
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" onClick={toggleMobileMenu} />
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white lg:hidden py-2 mx-auto max-w-xs rounded shadow-md">
          <ul className="flex flex-col gap-2 items-center">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="block py-2 px-4 hover:text-red-600 text-center"
                  onClick={toggleMobileMenu}
                >
                  {menu.title}
                </a>
              </li>
            ))}
            {/* <div className="flex flex-col items-center w-full">
              {isLoggedIn ? (
                <button
                  className="primary-btn flex items-center justify-center gap-2 group focus:outline-none bg-[#454545] text-white hover:bg-red-600"
                  onClick={handleLogout} // Logout action
                >
                  Log Out
                </button>
              ) : (
                <button
                  className="primary-btn flex items-center justify-center gap-2 group focus:outline-none bg-[#454545] text-white hover:bg-red-600"
                  onClick={toggleModal} // Open modal for Sign In/Sign Up
                >
                  {isSignIn ? "Sign In" : "Sign Up"}
                </button>
              )}
            </div> */}
          </ul>
        </div>
      )}

      {/* Modal for Sign In / Sign Up */}
      {isModalOpen && (
        <Modal
          isSignIn={isSignIn}
          toggleModal={toggleModal}
          switchToSignIn={switchToSignIn}
          switchToSignUp={switchToSignUp}
          handleLogin={handleLogin} // Trigger login action
        />
      )}
    </nav>
  );
};

export default Navbar;
