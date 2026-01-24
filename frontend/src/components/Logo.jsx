import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Leaf } from 'lucide-react';
import './Logo.css';

const Logo = ({ size = 'medium', showText = true }) => {
  return (
    <Link to="/" className={`logo-container logo-${size}`}>
      <div className="logo-icon-wrapper">
        <Sun className="logo-sun" size={size === 'large' ? 40 : size === 'medium' ? 32 : 24} />
        <Leaf className="logo-leaf" size={size === 'large' ? 24 : size === 'medium' ? 20 : 16} />
      </div>
      {showText && (
        <div className="logo-text">
          <span className="logo-company-name">Agri Solar</span>
          <span className="logo-tagline">Solution</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
