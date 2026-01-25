import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Zap, Shield, TrendingDown, Sun, CheckCircle, Award, Users, Leaf } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import './Home.css';

const Home = () => {
  const { language } = useLanguage();

  const benefits = [
    { icon: <TrendingDown size={32} />, title: t(language, 'home.save90'), description: t(language, 'home.save90Desc') },
    { icon: <Shield size={32} />, title: t(language, 'home.lowMaintenance'), description: t(language, 'home.lowMaintenanceDesc') },
    { icon: <Sun size={32} />, title: t(language, 'home.longLife'), description: t(language, 'home.longLifeDesc') },
    { icon: <Leaf size={32} />, title: t(language, 'home.ecoFriendly'), description: t(language, 'home.ecoFriendlyDesc') }
  ];

  const services = [
    {
      title: t(language, 'services.residential'),
      description: t(language, 'services.residentialDesc'),
      image: 'https://images.unsplash.com/photo-1691421740425-48ff22b6d442?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHxyb29mdG9wJTIwc29sYXJ8ZW58MHx8fHwxNzY5Mjc2MDg1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: t(language, 'services.commercial'),
      description: t(language, 'services.commercialDesc'),
      image: 'https://images.unsplash.com/photo-1617269778723-73a40cf299bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwzfHxyb29mdG9wJTIwc29sYXJ8ZW58MHx8fHwxNzY5Mjc2MDg1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: t(language, 'services.rural'),
      description: t(language, 'services.ruralDesc'),
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjkyNzYwNzl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: t(language, 'services.maintenance'),
      description: t(language, 'services.maintenanceDesc'),
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg'
    }
  ];

  const whyChooseUs = [
    { icon: <Award size={24} />, text: t(language, 'home.certified') },
    { icon: <TrendingDown size={24} />, text: t(language, 'home.affordable') },
    { icon: <CheckCircle size={24} />, text: t(language, 'home.subsidy') },
    { icon: <Users size={24} />, text: t(language, 'home.installation') }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            {t(language, 'home.heroTitle')}
          </h1>
          <p className="hero-subtitle">
            {t(language, 'home.heroSubtitle')}
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">
              <Zap size={20} />
              {t(language, 'home.freeSurvey')}
            </Link>
            <a href="tel:+918591411591" className="btn-secondary">
              <Phone size={20} />
              {t(language, 'nav.callNow')}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">{t(language, 'home.whyChooseTitle')}</h2>
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <p className="body-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">{t(language, 'home.servicesTitle')}</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3 className="heading-3">{service.title}</h3>
                  <p className="body-medium">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-2">
            <Link to="/services" className="btn-primary">
              {t(language, 'home.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">{t(language, 'home.benefitsTitle')}</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="heading-3">{benefit.title}</h3>
                <p className="body-medium">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2 text-white">{t(language, 'home.ctaTitle')}</h2>
            <p className="body-large text-white-80">
              {t(language, 'home.ctaSubtitle')}
            </p>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/918591411591?text=Hello!%20I%20am%20interested%20in%20solar%20panel%20installation." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={20} />
                {t(language, 'home.whatsappUs')}
              </a>
              <a href="tel:+918591411591" className="btn-secondary btn-secondary-white">
                <Phone size={20} />
                {t(language, 'home.call')}: 8591411591
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
