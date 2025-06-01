import * as React from 'react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      type: 'Email',
      value: 'oscar.lavolet@example.com',
      link: 'mailto:oscar.lavolet@example.com',
      icon: '📧'
    },
    {
      type: 'Phone',
      value: '+1 (514) 123-4567',
      link: 'tel:+15141234567',
      icon: '📱'
    },
    {
      type: 'Location',
      value: 'Montreal, Quebec, Canada',
      link: 'https://maps.google.com/?q=Montreal,QC',
      icon: '📍'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/oscarlavolet',
      link: 'https://linkedin.com/in/oscarlavolet',
      icon: '💼'
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-header">
          <h1>Get In Touch</h1>
          <p className="lead">
            I'm always interested in discussing new opportunities, 
            collaborations, or just having a chat about technology.
          </p>
        </section>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h3>{item.type}</h3>
                    <a href={item.link} target={item.type === 'Email' || item.type === 'Phone' ? '_self' : '_blank'} rel="noopener noreferrer">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="availability">
              <h3>Availability</h3>
              <p>
                I'm currently <span className="status available">available</span> for new projects 
                and opportunities. Feel free to reach out!
              </p>
            </div>

            <div className="social-links">
              <h3>Connect on Social</h3>
              <div className="social-buttons">
                <a href="https://github.com/oscar" target="_blank" rel="noopener noreferrer" className="social-btn github">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/oscarlavolet" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                  LinkedIn
                </a>
                <a href="https://twitter.com/oscarlavolet" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="project-inquiry">Project Inquiry</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="consultation">Consultation</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, question, or how I can help you..."
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What's your typical response time?</h3>
              <p>I usually respond to messages within 24-48 hours during business days.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work on freelance projects?</h3>
              <p>Yes, I'm open to freelance opportunities that align with my skills and schedule.</p>
            </div>
            <div className="faq-item">
              <h3>What technologies do you specialize in?</h3>
              <p>I specialize in React, TypeScript, Node.js, Python, and modern web development technologies.</p>
            </div>
            <div className="faq-item">
              <h3>Are you available for remote work?</h3>
              <p>Absolutely! I'm experienced with remote collaboration and have worked with distributed teams.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;