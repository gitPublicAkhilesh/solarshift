import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ size = 'medium', showText = false }) => {
  return (
    <Link to="/" className={`logo-container logo-${size}`}>
      <img 
        src="/agri-solar-logo.jpg" 
        alt="Agri Solar Solution" 
        className="logo-image"
      />
    </Link>
  );
};

export default Logo;
