import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <Logo size="medium" showText={true} />
            <p className="footer-text">
              Affordable solar panel installation for rural & urban India. 
              Empowering communities with clean, reliable energy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/subsidy" className="footer-link">Subsidy</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subheading">Our Services</h4>
            <div className="footer-links">
              <span className="footer-link">Residential Solar</span>
              <span className="footer-link">Commercial Solar</span>
              <span className="footer-link">Rural Solar Systems</span>
              <span className="footer-link">Maintenance & AMC</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subheading">Contact Us</h4>
            <div className="footer-contact">
              <a href="tel:+918591411591" className="contact-item">
                <Phone size={18} />
                <span>+91 8591411591</span>
              </a>
              <a href="mailto:agrisolarsolution.in@gmail.com" className="contact-item">
                <Mail size={18} />
                <span>agrisolarsolution.in@gmail.com</span>
              </a>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Police Chowki Jharna Tola, Nena Thapa Road, Near Jai Mata Di Marriage Hall, Gorakhpur, UP - 273008</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Agri Solar Solution. All rights reserved.
          </p>
          <p className="footer-service-area">
            Serving Gorakhpur and surrounding areas (50KM radius)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
