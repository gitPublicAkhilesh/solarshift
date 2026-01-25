import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  const navLinks = [
    { path: '/', label: t(language, 'nav.home') },
    { path: '/about', label: t(language, 'nav.about') },
    { path: '/services', label: t(language, 'nav.services') },
    { path: '/subsidy', label: t(language, 'nav.subsidy') },
    { path: '/projects', label: t(language, 'nav.projects') },
    { path: '/contact', label: t(language, 'nav.contact') }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Logo size="medium" showText={false} />

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="nav-actions-desktop">
          <LanguageSwitcher />
          <a href="tel:+918591411591" className="btn-primary nav-cta-desktop">
            <Phone size={18} />
            {t(language, 'nav.callNow')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="nav-links-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link-mobile ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-actions">
            <LanguageSwitcher />
            <a href="tel:+918591411591" className="btn-primary" style={{ width: '100%' }}>
              <Phone size={18} />
              {t(language, 'nav.callNow')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
