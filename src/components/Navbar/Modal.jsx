import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isSignIn, switchToSignIn, switchToSignUp, toggleModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [number, setNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signupSuccessMessage, setSignupSuccessMessage] = useState('');

  // Handle Login Logic
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
      const users = await response.json();
      if (users.length > 0) {
        setUserName(users[0].fullName);  // Store the user's name
        setIsLoggedIn(true);             // Set logged-in state
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Handle Signup Logic
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const newUser = { fullName, email, password, number };
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
      if (response.ok) {
        setSignupSuccessMessage('Sign-up successful! Please log in.');  // Show success message
        setEmail('');       // Clear the form fields
        setPassword('');
        setFullName('');
        setNumber('');
        switchToSignIn();   // Switch to Sign-In mode after sign-up
      } else {
        alert('Error signing up.');
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  // Render Logged-In Greeting or Modal
  return (
    <div className="modal-overlay">
      {isLoggedIn ? (
        // Greeting Message when Logged In
        <div className="modal-content text-center">
          <h2 className="text-xl font-bold">Hello, {userName}!</h2>
          {/* <button onClick={() => setIsLoggedIn(false)} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">
            Log Out
          </button> */}
        </div>
      ) : (
        // Login/Signup Modal Form
        <div className="modal-content">
          <button onClick={toggleModal} className="close-button">
            &times;
          </button>

          {/* Display Success Message after Sign-Up */}
          {signupSuccessMessage && (
            <p className="text-green-600 text-center font-bold mb-4">{signupSuccessMessage}</p>
          )}

          <h2 className="modal-header text-lg font-bold mb-4">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h2>

          <form onSubmit={isSignIn ? handleLogin : handleSignUp} className="modal-form w-full">
            {isSignIn ? (
              <>
                <div className="mb-4">
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                    placeholder="Email" 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                    placeholder="Password" 
                    required 
                  />
                </div>
                <button type="submit" className="bg-[#454545] text-white rounded px-4 py-2 w-full hover:bg-red-600">
                  Login
                </button>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <input 
                    type="text" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)}
                    className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                    placeholder="Full Name" 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    value={number} 
                    onChange={(e) => setNumber(e.target.value)}
                    className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                    placeholder="Number" 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                    placeholder="Email" 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-bold placeholder-bold border rounded w-full px-2 py-1" 
                    placeholder="Password" 
                    required 
                  />
                </div>
                <button type="submit" className="bg-[#454545] text-white rounded px-4 py-2 w-full hover:bg-red-600 flex justify-center">
                  Sign Up
                </button>
              </>
            )}
          </form>

          <div className="modal-footer mt-4 text-center">
            {isSignIn ? (
              <p>Don't have an account? <button onClick={switchToSignUp} className="text-blue-500 ml-1">Sign Up</button></p>
            ) : (
              <p>Already have an account? <button onClick={switchToSignIn} className="text-blue-500 ml-1">Sign In</button></p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
