import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <Logo size="medium" showText={false} />
            <p className="footer-text">
              {t(language, 'footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subheading">{t(language, 'footer.quickLinks')}</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">{t(language, 'nav.home')}</Link>
              <Link to="/about" className="footer-link">{t(language, 'nav.about')}</Link>
              <Link to="/services" className="footer-link">{t(language, 'nav.services')}</Link>
              <Link to="/subsidy" className="footer-link">{t(language, 'nav.subsidy')}</Link>
              <Link to="/projects" className="footer-link">{t(language, 'nav.projects')}</Link>
              <Link to="/contact" className="footer-link">{t(language, 'nav.contact')}</Link>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subheading">{t(language, 'footer.ourServices')}</h4>
            <div className="footer-links">
              <span className="footer-link">{t(language, 'footer.residentialSolar')}</span>
              <span className="footer-link">{t(language, 'footer.commercialSolar')}</span>
              <span className="footer-link">{t(language, 'footer.ruralSolar')}</span>
              <span className="footer-link">{t(language, 'footer.maintenance')}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subheading">{t(language, 'footer.contactUs')}</h4>
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
                <span>{t(language, 'contact.addressFull')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {t(language, 'footer.copyright')}
          </p>
          <p className="footer-service-area">
            {t(language, 'footer.serviceArea')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
