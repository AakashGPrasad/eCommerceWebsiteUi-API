import React from 'react';
import './Modal.css';

const Modal = ({ isSignIn, switchToSignIn, switchToSignUp, toggleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button 
          onClick={toggleModal} 
          className="close-button"
        >
          &times;
        </button>

        {/* Centered Header */}
        <h2 className="modal-header text-lg font-bold mb-4">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>
        
        <form className="modal-form w-full">
          {isSignIn ? (
            <>
              <div className="mb-4">
                <input 
                  type="email" 
                  id="loginEmail" 
                  className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                  placeholder="Email" 
                  required 
                />
              </div>
              <div className="mb-4">
                <input 
                  type="password" 
                  id="loginPassword" 
                  className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                  placeholder="Password" 
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="flex items-center justify-center bg-[#454545] text-white rounded px-4 py-2 w-full hover:bg-red-600"
              >
                Login
              </button>
            </>
          ) : (
            <>
              <div className="mb-4">
                <input 
                  type="text" 
                  id="fullName" 
                  className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                  placeholder="Full Name" 
                  required 
                />
              </div>
              <div className="mb-4">
                <input 
                  type="text" 
                  id="number" 
                  className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                  placeholder="Number" 
                  required 
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  id="email" 
                  className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                  placeholder="Email" 
                  required 
                />
              </div>
              <div className="mb-4">
                <input 
                  type="password" 
                  id="password" 
                  className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                  placeholder="Password" 
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="flex items-center justify-center bg-[#454545] text-white rounded px-4 py-2 w-full hover:bg-red-600"
              >
                Sign Up
              </button>
            </>
          )}
        </form>

        {/* Centered Footer Text */}
        <div className="modal-footer mt-4 text-center">
          {isSignIn ? (
            <p>
              Don't have an account? 
              <button onClick={switchToSignUp} className="text-blue-500 ml-1">Sign Up</button>
            </p>
          ) : (
            <p>
              Already have an account? 
              <button onClick={switchToSignIn} className="text-blue-500 ml-1">Sign In</button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
