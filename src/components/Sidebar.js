import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';
import FeedbackModal from './FeedbackModal';

const Sidebar = ({ setView }) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [activeView, setActiveView] = useState('grid');

  const openFeedback = () => setIsFeedbackOpen(true);
  const closeFeedback = () => setIsFeedbackOpen(false);

  const handleToggle = (view) => {
    setActiveView(view);
    setView(view);
  };

  return (
    <div className="sidebar">
      <div className="user-info">
        <img src="path/to/user-image.jpg" alt="User" className="user-image" />
        <p>Hi Reader,</p>
        <span>Here's your News!</span>
      </div>
      <div className="view-toggle">
        <p>View Toggle</p>
        <div className="view-buttons">
          <button
            onClick={() => handleToggle('list')}
            className={`toggle-button ${activeView === 'list' ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faList} className="icon" />
          </button>
          <button
            onClick={() => handleToggle('grid')}
            className={`toggle-button ${activeView === 'grid' ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faTh} className="icon" />
          </button>
        </div>
      </div>
      <div className="feedback">
        <p>Have a Feedback?</p>
        <button className="feedback-button" onClick={openFeedback}>
          We’re Listening!
        </button>
      </div>
      <FeedbackModal isOpen={isFeedbackOpen} onClose={closeFeedback} />
    </div>
  );
};

export default Sidebar;
