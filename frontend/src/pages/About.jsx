import React from 'react';
import { Target, Eye, Award, Users, Zap, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const mission = [
    { icon: <Target size={28} />, title: 'Our Mission', text: 'Making affordable solar energy accessible to every home, farm, and business in rural and urban India' },
    { icon: <Eye size={28} />, title: 'Our Vision', text: 'Achieving energy independence for India through widespread adoption of clean, renewable solar power' }
  ];

  const values = [
    { icon: <Award size={28} />, title: 'Quality', description: 'Premium solar panels with 25+ years warranty' },
    { icon: <Users size={28} />, title: 'Community Focus', description: 'Empowering villages and cities with clean energy' },
    { icon: <Zap size={28} />, title: 'Expertise', description: 'Certified professionals with years of experience' },
    { icon: <Heart size={28} />, title: 'Customer Care', description: 'Dedicated support throughout your solar journey' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="heading-1">About Agri Solar Solution</h1>
          <p className="body-large">
            Leading solar panel installation company serving Gorakhpur and surrounding areas with a commitment to clean, affordable energy for all.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <img 
                src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg" 
                alt="Solar panel installation"
              />
            </div>
            <div className="story-text">
              <h2 className="heading-2">Our Story</h2>
              <p className="body-medium">
                Agri Solar Solution was founded with a clear purpose: to bring the benefits of solar energy to every corner of India, from bustling urban centers to remote rural villages.
              </p>
              <p className="body-medium">
                We understand the unique challenges faced by communities in Uttar Pradesh and surrounding regions. High electricity bills, frequent power cuts, and limited access to reliable energy sources inspired us to create solutions that work for everyone.
              </p>
              <p className="body-medium">
                With years of experience in solar installation and a deep commitment to customer satisfaction, we've helped hundreds of families, farmers, and businesses transition to clean, cost-effective solar power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-section">
        <div className="container">
          <div className="mission-grid">
            {mission.map((item, index) => (
              <div key={index} className="mission-card">
                <div className="mission-icon">{item.icon}</div>
                <h3 className="heading-3">{item.title}</h3>
                <p className="body-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rural Focus */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">Why We Focus on Rural Areas</h2>
          <div className="rural-content">
            <div className="rural-text">
              <div className="rural-point">
                <h3 className="heading-3">Power Access</h3>
                <p className="body-medium">
                  Many rural areas face irregular power supply. Solar provides reliable, independent energy access 24/7.
                </p>
              </div>
              <div className="rural-point">
                <h3 className="heading-3">Farmer Empowerment</h3>
                <p className="body-medium">
                  Solar water pumps and farm equipment powered by solar help increase agricultural productivity and reduce costs.
                </p>
              </div>
              <div className="rural-point">
                <h3 className="heading-3">Government Support</h3>
                <p className="body-medium">
                  We help rural communities access government subsidies and schemes designed to promote renewable energy adoption.
                </p>
              </div>
            </div>
            <div className="rural-image">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjkyNzYwNzl8MA&ixlib=rb-4.1.0&q=85" 
                alt="Rural solar installation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="heading-3">{value.title}</h3>
                <p className="body-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
