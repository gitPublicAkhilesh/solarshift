import React from 'react';
import { Target, Eye, Award, Users, Zap, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import './About.css';

const About = () => {
  const { language } = useLanguage();

  const mission = [
    { icon: <Target size={28} />, title: t(language, 'about.mission'), text: t(language, 'about.missionText') },
    { icon: <Eye size={28} />, title: t(language, 'about.vision'), text: t(language, 'about.visionText') }
  ];

  const values = [
    { icon: <Award size={28} />, title: t(language, 'about.quality'), description: t(language, 'about.qualityDesc') },
    { icon: <Users size={28} />, title: t(language, 'about.community'), description: t(language, 'about.communityDesc') },
    { icon: <Zap size={28} />, title: t(language, 'about.expertise'), description: t(language, 'about.expertiseDesc') },
    { icon: <Heart size={28} />, title: t(language, 'about.customerCare'), description: t(language, 'about.customerCareDesc') }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="heading-1">{t(language, 'about.title')}</h1>
          <p className="body-large">
            {t(language, 'about.subtitle')}
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
              <h2 className="heading-2">{t(language, 'about.storyTitle')}</h2>
              <p className="body-medium">
                {t(language, 'about.story1')}
              </p>
              <p className="body-medium">
                {t(language, 'about.story2')}
              </p>
              <p className="body-medium">
                {t(language, 'about.story3')}
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
          <h2 className="heading-2 text-center mb-3">{t(language, 'about.whyRuralTitle')}</h2>
          <div className="rural-content">
            <div className="rural-text">
              <div className="rural-point">
                <h3 className="heading-3">{t(language, 'about.powerAccess')}</h3>
                <p className="body-medium">
                  {t(language, 'about.powerAccessDesc')}
                </p>
              </div>
              <div className="rural-point">
                <h3 className="heading-3">{t(language, 'about.farmerEmp')}</h3>
                <p className="body-medium">
                  {t(language, 'about.farmerEmpDesc')}
                </p>
              </div>
              <div className="rural-point">
                <h3 className="heading-3">{t(language, 'about.govSupport')}</h3>
                <p className="body-medium">
                  {t(language, 'about.govSupportDesc')}
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
          <h2 className="heading-2 text-center mb-3">{t(language, 'about.valuesTitle')}</h2>
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
