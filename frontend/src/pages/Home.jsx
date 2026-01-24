import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Zap, Shield, TrendingDown, Sun, CheckCircle, Award, Users, Leaf } from 'lucide-react';
import './Home.css';

const Home = () => {
  const benefits = [
    { icon: <TrendingDown size={32} />, title: 'Save up to 90%', description: 'Reduce electricity bills dramatically' },
    { icon: <Shield size={32} />, title: 'Low Maintenance', description: 'Minimal upkeep, maximum efficiency' },
    { icon: <Sun size={32} />, title: '25+ Years Life', description: 'Long-lasting, reliable panels' },
    { icon: <Leaf size={32} />, title: 'Eco-Friendly', description: 'Clean, renewable energy' }
  ];

  const services = [
    {
      title: 'Residential Solar',
      description: 'Rooftop solar panels for homes and apartments with government subsidy support',
      image: 'https://images.unsplash.com/photo-1691421740425-48ff22b6d442?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHxyb29mdG9wJTIwc29sYXJ8ZW58MHx8fHwxNzY5Mjc2MDg1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Commercial Solar',
      description: 'High-capacity systems for offices, factories, and schools',
      image: 'https://images.unsplash.com/photo-1617269778723-73a40cf299bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwzfHxyb29mdG9wJTIwc29sYXJ8ZW58MHx8fHwxNzY5Mjc2MDg1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Rural Solar Systems',
      description: 'Off-grid solutions for villages, farms, and rural areas',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjkyNzYwNzl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Maintenance & AMC',
      description: 'Annual maintenance contracts, panel cleaning, and inverter checkups',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg'
    }
  ];

  const whyChooseUs = [
    { icon: <Award size={24} />, text: 'Certified Solar Experts' },
    { icon: <TrendingDown size={24} />, text: 'Affordable Pricing' },
    { icon: <CheckCircle size={24} />, text: 'Government Subsidy Support' },
    { icon: <Users size={24} />, text: 'Installation in Villages & Cities' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Affordable Solar Panel Installation for Rural & Urban India
          </h1>
          <p className="hero-subtitle">
            Save electricity bills with clean, reliable solar energy. Serving Gorakhpur and surrounding areas with certified installation and maintenance.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">
              <Zap size={20} />
              Get Free Site Survey
            </Link>
            <a href="tel:+918591411591" className="btn-secondary">
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">Why Choose Agri Solar Solution</h2>
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
          <h2 className="heading-2 text-center mb-3">Our Services</h2>
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
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">Benefits of Solar Energy</h2>
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
            <h2 className="heading-2 text-white">Switch to Solar Today</h2>
            <p className="body-large text-white-80">
              Join thousands of satisfied customers in Gorakhpur and surrounding areas who have made the switch to clean, affordable solar energy.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/918591411591?text=Hello!%20I%20am%20interested%20in%20solar%20panel%20installation." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <a href="tel:+918591411591" className="btn-secondary btn-secondary-white">
                <Phone size={20} />
                Call: 8591411591
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
