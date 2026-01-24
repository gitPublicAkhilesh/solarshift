import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const existingLeads = JSON.parse(localStorage.getItem('solarLeads') || '[]');
    const newLead = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    existingLeads.push(newLead);
    localStorage.setItem('solarLeads', JSON.stringify(existingLeads));
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      city: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="heading-1">Contact Us</h1>
          <p className="body-large">
            Get in touch for a free site survey and customized solar solution
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="heading-2">Get In Touch</h2>
              <p className="body-medium">
                We're here to help you make the switch to solar energy. Reach out to us through any of these channels.
              </p>

              <div className="contact-methods">
                <a href="tel:+918591411591" className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-content">
                    <h4 className="body-small">Phone</h4>
                    <p className="body-medium">+91 8591411591</p>
                  </div>
                </a>

                <a href="https://wa.me/918591411591" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="method-icon whatsapp">
                    <MessageCircle size={24} />
                  </div>
                  <div className="method-content">
                    <h4 className="body-small">WhatsApp</h4>
                    <p className="body-medium">Chat with us</p>
                  </div>
                </a>

                <a href="mailto:agrisolarsolution.in@gmail.com" className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-content">
                    <h4 className="body-small">Email</h4>
                    <p className="body-medium">agrisolarsolution.in@gmail.com</p>
                  </div>
                </a>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="method-content">
                    <h4 className="body-small">Address</h4>
                    <p className="body-medium">Police Chowki Jharna Tola, Nena Thapa Road, Near Jai Mata Di Marriage Hall, Gorakhpur, Uttar Pradesh - 273008</p>
                  </div>
                </div>
              </div>

              <div className="service-area-info">
                <h3 className="heading-3">Service Area</h3>
                <p className="body-medium">
                  We serve Gorakhpur city and all areas within a 50KM radius, including rural villages and nearby towns.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="heading-2">Send Us a Message</h2>
              <p className="body-medium mb-2">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted && (
                <div className="success-message">
                  <CheckCircle size={24} />
                  <div>
                    <h4 className="body-medium">Thank you for your inquiry!</h4>
                    <p className="body-small">We'll contact you soon to discuss your solar needs.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your contact number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city" className="form-label">City/Village *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your location"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="form-textarea"
                    placeholder="Tell us about your solar requirements..."
                  />
                </div>

                <button type="submit" className="btn-primary form-submit">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-section">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.5823456789!2d83.4212083!3d26.7567787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ1JzI0LjQiTiA4M8KwMjUnMTYuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Agri Solar Solution - Police Chowki Jharna Tola, Nena Thapa Road, Gorakhpur"
            />
            <div className="map-address-note">
              <p className="body-small">
                <strong>Address:</strong> Police Chowki Jharna Tola, Nena Thapa Road, Near Jai Mata Di Marriage Hall, Gorakhpur, UP - 273008
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
