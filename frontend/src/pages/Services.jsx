import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Tractor, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: 'Residential Solar',
      description: 'Transform your home with rooftop solar panels designed for Indian households',
      features: [
        'Rooftop solar panel installation',
        'On-grid and hybrid systems',
        'Ideal for homes and apartments',
        'Government subsidy assistance',
        'Net metering setup'
      ],
      image: 'https://images.unsplash.com/photo-1691421740425-48ff22b6d442?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHxyb29mdG9wJTIwc29sYXJ8ZW58MHx8fHwxNzY5Mjc2MDg1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: <Building2 size={40} />,
      title: 'Commercial Solar',
      description: 'High-capacity solar solutions for businesses, offices, and institutions',
      features: [
        'Large-scale installations',
        'Perfect for offices, factories, schools',
        'Significant cost savings',
        'Custom capacity design',
        'Professional monitoring systems'
      ],
      image: 'https://images.unsplash.com/photo-1617269778723-73a40cf299bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwzfHxyb29mdG9wJTIwc29sYXJ8ZW58MHx8fHwxNzY5Mjc2MDg1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: <Tractor size={40} />,
      title: 'Rural Solar Solutions',
      description: 'Empowering villages and farms with reliable, off-grid solar power',
      features: [
        'Off-grid solar systems',
        'Solar water pumps for agriculture',
        'Village home installations',
        'No dependency on grid power',
        'Special rural packages'
      ],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjkyNzYwNzl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Solar Maintenance & AMC',
      description: 'Keep your solar system running at peak performance',
      features: [
        'Annual maintenance contracts',
        'Regular panel cleaning',
        'Inverter checkups and repairs',
        'Performance monitoring',
        '24/7 support hotline'
      ],
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="heading-1">Our Solar Services</h1>
          <p className="body-large">
            Comprehensive solar solutions for homes, businesses, and farms across Gorakhpur and surrounding areas.
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
            <h2 className="heading-2 text-center">Ready to Go Solar?</h2>
            <p className="body-large text-center">
              Get a free site survey and customized solar solution for your needs
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation
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
