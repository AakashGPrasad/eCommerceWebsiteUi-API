import React from "react";
import "./Modal.css"; // Ensure to import your CSS styles

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null; // Return null if modal is not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{title}</h2>
        <div>{content}</div> {/* Render dynamic content here */}
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
