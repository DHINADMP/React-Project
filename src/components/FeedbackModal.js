import React from 'react';
import './FeedbackModal.css';

const FeedbackModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-left">
          <div className="modal-left-content">
            <img src="path/to/user-image.jpg" alt="User" className="user-image" />
            <h3>Hi Reader,</h3>
            <p>Here's your News!</p>
            <div className="feedback-prompt">
              <p>Have a Feedback?</p>
              <button className="listening-button">We’re Listening!</button>
            </div>
          </div>
        </div>
        <div className="modal-right">
          <h2>Thank you so much for taking the time!</h2>
          <p>Please provide the below details!</p>
          <form className="feedback-form">
            <div className="form-group">
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter Your Full Postal Address" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Enter Your Country Name" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Enter Your State Name" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="email" placeholder="Enter Your Mail Id" />
                <span className="error-message">Please enter a valid email</span>
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Enter Your Mobile Number" />
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder="Write Your Feedback"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
