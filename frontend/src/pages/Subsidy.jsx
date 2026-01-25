import React from 'react';
import { DollarSign, FileText, TrendingDown, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import './Subsidy.css';

const Subsidy = () => {
  const { language } = useLanguage();

  const subsidyInfo = [
    { capacity: '1 kW', centerSubsidy: '₹30,000', stateSubsidy: '₹15,000', total: '₹45,000' },
    { capacity: '2 kW', centerSubsidy: '₹60,000', stateSubsidy: '₹30,000', total: '₹90,000' },
    { capacity: '3 kW', centerSubsidy: '₹78,000', stateSubsidy: '₹30,000', total: '₹1,08,000' },
    { capacity: t(language, 'subsidy.above3kw'), centerSubsidy: '₹78,000', stateSubsidy: '₹30,000', total: '₹1,08,000' }
  ];

  const benefits = [
    { icon: <TrendingDown size={32} />, title: t(language, 'subsidy.lowerCost'), description: t(language, 'subsidy.lowerCostDesc') },
    { icon: <Zap size={32} />, title: t(language, 'subsidy.fasterROI'), description: t(language, 'subsidy.fasterROIDesc') },
    { icon: <DollarSign size={32} />, title: t(language, 'subsidy.monthlySavings'), description: t(language, 'subsidy.monthlySavingsDesc') },
    { icon: <FileText size={32} />, title: t(language, 'subsidy.netMetering'), description: t(language, 'subsidy.netMeteringDesc') }
  ];

  const documents = [
    t(language, 'subsidy.aadhaar'),
    t(language, 'subsidy.electricityBill'),
    t(language, 'subsidy.propertyProof'),
    t(language, 'subsidy.bankDetails'),
    t(language, 'subsidy.photos'),
    t(language, 'subsidy.addressProof')
  ];

  return (
    <div className="subsidy-page">
      {/* Hero Section */}
      <section className="subsidy-hero">
        <div className="container">
          <h1 className="heading-1">{t(language, 'subsidy.title')}</h1>
          <p className="body-large">
            {t(language, 'subsidy.subtitle')}
          </p>
        </div>
      </section>

      {/* MNRE Subsidy Info */}
      <section className="section">
        <div className="container">
          <div className="subsidy-intro">
            <div className="subsidy-intro-content">
              <h2 className="heading-2">{t(language, 'subsidy.govSubsidyTitle')}</h2>
              <p className="body-large">
                {t(language, 'subsidy.govSubsidyDesc')}
              </p>
              <div className="info-box">
                <AlertCircle size={24} />
                <p className="body-medium">
                  {t(language, 'subsidy.assistanceNote')}
                </p>
              </div>
            </div>
          </div>

          <h3 className="heading-3 text-center mb-2">{t(language, 'subsidy.subsidyStructure')}</h3>
          <div className="subsidy-table">
            <table>
              <thead>
                <tr>
                  <th>{t(language, 'subsidy.systemCapacity')}</th>
                  <th>{t(language, 'subsidy.centerSubsidy')}</th>
                  <th>{t(language, 'subsidy.stateSubsidy')}</th>
                  <th>{t(language, 'subsidy.totalSubsidy')}</th>
                </tr>
              </thead>
              <tbody>
                {subsidyInfo.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.capacity}</strong></td>
                    <td>{item.centerSubsidy}</td>
                    <td>{item.stateSubsidy}</td>
                    <td className="highlight">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Financial Benefits */}
      <section className="section bg-section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">{t(language, 'subsidy.financialBenefits')}</h2>
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

      {/* Savings Calculator */}
      <section className="section">
        <div className="container">
          <div className="calculator-section">
            <h2 className="heading-2 text-center mb-3">{t(language, 'subsidy.estimatedSavings')}</h2>
            <div className="calculator-grid">
              <div className="calculator-card">
                <h3 className="heading-3">{t(language, 'subsidy.withoutSolar')}</h3>
                <div className="calc-value">₹3,000 - ₹5,000</div>
                <p className="body-small">{t(language, 'subsidy.avgBill')}</p>
              </div>
              <div className="calculator-arrow">→</div>
              <div className="calculator-card highlight-card">
                <h3 className="heading-3">{t(language, 'subsidy.withSolar')}</h3>
                <div className="calc-value green">₹300 - ₹500</div>
                <p className="body-small">{t(language, 'subsidy.reducedCharges')}</p>
              </div>
            </div>
            <div className="text-center mt-2">
              <div className="savings-highlight">
                <h3 className="heading-3">{t(language, 'subsidy.annualSavings')}</h3>
                <p className="body-medium">{t(language, 'subsidy.yearsSavings')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section bg-section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">{t(language, 'subsidy.docsRequired')}</h2>
          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="document-item">
                <CheckCircle size={20} className="doc-icon" />
                <span className="body-medium">{doc}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-2">
            <p className="body-large">
              {t(language, 'subsidy.docsHelp')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subsidy;
