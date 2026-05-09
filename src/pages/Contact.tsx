import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const avatarRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Simple CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes avatarPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      @keyframes ctaGlow {
        0%, 100% { box-shadow: 0 0 10px rgba(0,255,247,0.3); }
        50% { box-shadow: 0 0 20px rgba(0,255,247,0.5), 0 0 40px rgba(0,255,247,0.3); }
      }
      .avatar-pulse { animation: avatarPulse 1.5s ease-in-out infinite; }
      .cta-glow { animation: ctaGlow 2s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email',
      content: 'business@drazed.co',
      link: 'mailto:business@drazed.co'
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Phone / WhatsApp',
      content: '+92 320 1837828',
      link: 'https://wa.me/923201837828'
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Location',
      content: '179 B-III GECHS Link Road, Block B3, GECHS, Lahore, Punjab 54700, Pakistan',
      link: null
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: 'Business Hours',
      content: 'Mon-Sat: 10:00 AM - 5:00 PM PKT',
      link: null
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Contact Drazed &amp; Co | Get a Free Consultation</title>
        <meta name="description" content="Get in touch with Drazed &amp; Co. Email us at info@drazed.co, call +92 320 1837828, or visit us in Lahore, Pakistan. Mon–Sat, 10 AM–5 PM PKT." />
        <link rel="canonical" href="https://drazed.co/contact" />
        <meta property="og:title" content="Contact Drazed & Co | Get a Free Consultation" />
        <meta property="og:description" content="Reach out to Drazed & Co for business automation, website development, social media growth, and digital marketing services." />
        <meta property="og:url" content="https://drazed.co/contact" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a1a]">
        {/* Network nodes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00FFF7" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#00FFF7" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="20%" cy="30%" r="3" fill="url(#nodeGradient)"/>
            <circle cx="80%" cy="20%" r="2" fill="url(#nodeGradient)"/>
            <circle cx="60%" cy="70%" r="4" fill="url(#nodeGradient)"/>
            <circle cx="30%" cy="80%" r="2.5" fill="url(#nodeGradient)"/>
            <line x1="20%" y1="30%" x2="80%" y2="20%" stroke="#3D9DFF" strokeWidth="1" opacity="0.3"/>
            <line x1="80%" y1="20%" x2="60%" y2="70%" stroke="#00FFF7" strokeWidth="1" opacity="0.3"/>
            <line x1="60%" y1="70%" x2="30%" y2="80%" stroke="#3D9DFF" strokeWidth="1" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            {/* Chatbot Avatar */}
            <div ref={avatarRef} className="avatar-pulse w-16 h-16 bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#0A0A0A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Orbitron']">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
                Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#E5E5E5] mb-8 max-w-3xl mx-auto font-['Lato']">
              Ready to transform your business? Let's discuss your project and see how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6 font-['Montserrat']">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[#0A0A0A]/80">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0A0A0A] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFF7] transition-colors text-black placeholder-gray-600"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0A0A0A] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFF7] transition-colors text-black placeholder-gray-600"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#0A0A0A] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFF7] transition-colors text-black placeholder-gray-600"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0A0A0A] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFF7] transition-colors resize-none text-black placeholder-gray-600"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    ref={ctaRef}
                    className="cta-glow w-full bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] text-[#0A0A0A] py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6 font-['Montserrat']">
                  Contact Information
                </h2>
                <p className="text-[#0A0A0A]/80 mb-8 font-['Open Sans']">
                  We're here to help you succeed. Reach out through any of these channels 
                  and we'll respond as quickly as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div className="text-[#3D9DFF] mb-3">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-[#0A0A0A] mb-2 font-['Montserrat']">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[#0A0A0A]/80 hover:text-[#00FFF7] transition-colors font-['Open Sans']"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-[#0A0A0A]/80 font-['Open Sans']">
                        {info.content}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-[#0A0A0A] mb-4 font-['Montserrat']">
                  Prefer Direct Contact?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/923201837828"
                    className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:business@drazed.co"
                    className="flex-1 bg-[#0A0A0A] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#0A0A0A]/90 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6 font-['Montserrat']">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-[#0A0A0A]/80 mb-8 max-w-2xl mx-auto">
              Don't wait! Let's discuss your project requirements and get started on transforming your business today.
            </p>
            <a
              href="/start-project"
              className="bg-[#0A0A0A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0A0A0A]/90 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;