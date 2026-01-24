import React from 'react';
import { DollarSign, FileText, TrendingDown, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import './Subsidy.css';

const Subsidy = () => {
  const subsidyInfo = [
    { capacity: '1 kW', centerSubsidy: '₹30,000', stateSubsidy: '₹15,000', total: '₹45,000' },
    { capacity: '2 kW', centerSubsidy: '₹60,000', stateSubsidy: '₹30,000', total: '₹90,000' },
    { capacity: '3 kW and above', centerSubsidy: '₹78,000', stateSubsidy: '₹30,000', total: '₹1,08,000' }
  ];

  const benefits = [
    { icon: <TrendingDown size={32} />, title: 'Lower Initial Cost', description: 'Government subsidy reduces upfront installation cost significantly' },
    { icon: <Zap size={32} />, title: 'Faster ROI', description: 'Recover your investment in 3-5 years instead of 7-8 years' },
    { icon: <DollarSign size={32} />, title: 'Monthly Savings', description: 'Save up to 90% on electricity bills every month' },
    { icon: <FileText size={32} />, title: 'Net Metering', description: 'Sell excess power back to the grid and earn credits' }
  ];

  const documents = [
    'Aadhaar Card',
    'Electricity Bill (recent)',
    'Property ownership proof',
    'Bank account details',
    'Passport size photographs',
    'Address proof'
  ];

  return (
    <div className="subsidy-page">
      {/* Hero Section */}
      <section className="subsidy-hero">
        <div className="container">
          <h1 className="heading-1">Solar Subsidy & Benefits</h1>
          <p className="body-large">
            Take advantage of government subsidies and financial incentives to make solar energy even more affordable.
          </p>
        </div>
      </section>

      {/* MNRE Subsidy Info */}
      <section className="section">
        <div className="container">
          <div className="subsidy-intro">
            <div className="subsidy-intro-content">
              <h2 className="heading-2">Government Rooftop Solar Subsidy</h2>
              <p className="body-large">
                The Ministry of New and Renewable Energy (MNRE) offers subsidies for residential rooftop solar installations across India, including Uttar Pradesh.
              </p>
              <div className="info-box">
                <AlertCircle size={24} />
                <p className="body-medium">
                  We assist you with complete documentation and subsidy application process at no extra cost.
                </p>
              </div>
            </div>
          </div>

          <h3 className="heading-3 text-center mb-2">Subsidy Structure</h3>
          <div className="subsidy-table">
            <table>
              <thead>
                <tr>
                  <th>System Capacity</th>
                  <th>Central Government Subsidy</th>
                  <th>State Government Subsidy</th>
                  <th>Total Subsidy</th>
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
          <h2 className="heading-2 text-center mb-3">Financial Benefits</h2>
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
            <h2 className="heading-2 text-center mb-3">Estimated Savings</h2>
            <div className="calculator-grid">
              <div className="calculator-card">
                <h3 className="heading-3">Without Solar</h3>
                <div className="calc-value">₹3,000 - ₹5,000</div>
                <p className="body-small">Average monthly electricity bill</p>
              </div>
              <div className="calculator-arrow">→</div>
              <div className="calculator-card highlight-card">
                <h3 className="heading-3">With Solar</h3>
                <div className="calc-value green">₹300 - ₹500</div>
                <p className="body-small">Reduced to minimal grid charges</p>
              </div>
            </div>
            <div className="text-center mt-2">
              <div className="savings-highlight">
                <h3 className="heading-3">Annual Savings: ₹30,000 - ₹50,000+</h3>
                <p className="body-medium">Over 25 years, save ₹7,50,000 - ₹12,50,000 or more!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section bg-section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">Required Documents for Subsidy</h2>
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
              We help you prepare and submit all documentation for hassle-free subsidy approval.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subsidy;
