// Overlay.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Overlay.css';

const Overlay = ({ logoSrc, duration }) => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Hide the overlay after the specified duration
    const timeout = setTimeout(() => {
      setShowOverlay(false);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  return (
    <div className={`overlay ${showOverlay ? 'visible' : ''}`}>
      <img alt="overlay-logo" className="overlay-logo" src={logoSrc} />
    </div>
  );
};

Overlay.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Overlay;
