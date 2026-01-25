import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Tractor, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import './Services.css';

const Services = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: <Home size={40} />,
      title: t(language, 'services.residential'),
      description: t(language, 'services.residentialDesc'),
      features: [
        t(language, 'services.rooftopInstall'),
        t(language, 'services.onGrid'),
        t(language, 'services.idealHomes'),
        t(language, 'services.subsidyAssist'),
        t(language, 'services.netMetering')
      ],
      image: 'https://images.unsplash.com/photo-1691421740425-48ff22b6d442?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHxyb29mdG9wJTIwc29sYXJ8ZW58MHx8fHwxNzY5Mjc2MDg1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: <Building2 size={40} />,
      title: t(language, 'services.commercial'),
      description: t(language, 'services.commercialDesc'),
      features: [
        t(language, 'services.largeScale'),
        t(language, 'services.perfectFor'),
        t(language, 'services.costSavings'),
        t(language, 'services.customDesign'),
        t(language, 'services.monitoring')
      ],
      image: 'https://images.unsplash.com/photo-1617269778723-73a40cf299bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwzfHxyb29mdG9wJTIwc29sYXJ8ZW58MHx8fHwxNzY5Mjc2MDg1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: <Tractor size={40} />,
      title: t(language, 'services.rural'),
      description: t(language, 'services.ruralDesc'),
      features: [
        t(language, 'services.offGrid'),
        t(language, 'services.waterPumps'),
        t(language, 'services.villageHomes'),
        t(language, 'services.noDependency'),
        t(language, 'services.ruralPackages')
      ],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjkyNzYwNzl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: <Wrench size={40} />,
      title: t(language, 'services.maintenance'),
      description: t(language, 'services.maintenanceDesc'),
      features: [
        t(language, 'services.amc'),
        t(language, 'services.panelCleaning'),
        t(language, 'services.inverterCheckup'),
        t(language, 'services.performance'),
        t(language, 'services.support247')
      ],
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="heading-1">{t(language, 'services.title')}</h1>
          <p className="body-large">
            {t(language, 'services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className={`service-detail ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="service-detail-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-detail-content">
                <div className="service-icon">{service.icon}</div>
                <h2 className="heading-2">{service.title}</h2>
                <p className="body-large">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <CheckCircle size={20} className="feature-icon" />
                      <span className="body-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-section">
        <div className="container">
          <div className="services-cta">
            <h2 className="heading-2 text-center">{t(language, 'services.readyTitle')}</h2>
            <p className="body-large text-center">
              {t(language, 'services.readySubtitle')}
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                {t(language, 'services.freeConsult')}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
