import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
// Remove GSAP and Typed.js imports for now

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const countdownRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    // Simple countdown animation with vanilla JS
    const strings = ['3...', '2...', '1...', 'Launch Your Brand!'];
    let index = 0;
    
    const countdown = () => {
      if (countdownRef.current) {
        countdownRef.current.textContent = strings[index];
        index = (index + 1) % strings.length;
      }
    };
    
    countdown();
    const interval = setInterval(countdown, 1000);
    
    // CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ctaGlow {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(0,255,247,0.4);
          transform: scale(1);
        }
        50% { 
          box-shadow: 0 0 30px rgba(0,255,247,0.6), 0 0 60px rgba(0,255,247,0.4);
          transform: scale(1.02);
        }
      }
      @keyframes starTwinkle {
        0%, 100% { opacity: 0.3; transform: scale(0.5); }
        50% { opacity: 1; transform: scale(1); }
      }
      .cta-glow { animation: ctaGlow 2s ease-in-out infinite; }
      .star-twinkle { animation: starTwinkle 2s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
    
    return () => {
      clearInterval(interval);
      document.head.removeChild(style);
    };
  }, []);

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Let\'s discuss'
  ];

  const planTypes = [
    'Starter',
    'Growth', 
    'Smart Scale',
    'Dominate AI',
    'Custom Plan'
  ];

  const timelines = [
    'ASAP (Rush)',
    '1-2 weeks',
    '2-4 weeks',
    '1-2 months',
    '2-3 months',
    'Flexible'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a1a]">
        {/* Stars background */}
        <div ref={starsRef} className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="star-twinkle absolute w-1 h-1 bg-[#00FFF7] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            <RocketLaunchIcon className="w-16 h-16 text-[#00FFF7] mx-auto mb-6" />
            <div className="text-2xl text-[#3D9DFF] mb-4 font-['Orbitron']">
              <span ref={countdownRef}></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Orbitron']">
              Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
                Project
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#E5E5E5] mb-8 max-w-3xl mx-auto font-['Lato']">
              Tell us about your project and we'll get back to you within 24 hours with a customized proposal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Form */}
      <section className="py-20 bg-[#E5E5E5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 lg:p-12 rounded-xl shadow-lg"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                  Project Submitted Successfully!
                </h2>
                <p className="text-lg text-[#0A0A0A]/80 mb-6">
                  Thank you for choosing Drazed & Co. We'll review your project details and get back to you within 24 hours.
                </p>
                <div className="bg-[#00FFF7]/10 p-6 rounded-lg">
                  <p className="text-[#0A0A0A] font-semibold mb-2">Next Steps:</p>
                  <ul className="text-[#0A0A0A]/80 text-left space-y-1">
                    <li>• We'll review your project requirements</li>
                    <li>• Prepare a customized proposal</li>
                    <li>• Schedule a consultation call</li>
                    <li>• Begin work after approval</li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    Project Details
                  </h2>
                  <p className="text-[#0A0A0A]/80 font-['Open Sans']">
                    Fill out the form below to get started. The more details you provide, the better we can tailor our proposal to your needs.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#0A0A0A] mb-2">
                        Full Name *
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
                        Email Address *
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
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#0A0A0A] mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                     className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFF7] transition-colors text-black placeholder-gray-600"
                      placeholder="Enter your company name (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-[#0A0A0A] mb-2">
                      Plan Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFF7] transition-colors text-black"
                    >
                      <option value="">Select a plan</option>
                      {planTypes.map((plan) => (
                        <option key={plan} value={plan}>
                          {plan}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-[#0A0A0A] mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                       className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFF7] transition-colors text-black"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-[#0A0A0A] mb-2">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                       className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFF7] transition-colors text-black"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0A0A0A] mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                     className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFF7] transition-colors resize-none text-black placeholder-gray-600"
                      placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                    />
                  </div>

                  <div className="bg-[#00FFF7]/10 p-4 rounded-lg">
                    <p className="text-[#0A0A0A]/80 text-sm font-['Open Sans']">
                      <strong>Address:</strong> 179 B-III GECHS Link Road, Block B3, GECHS, Lahore, Punjab 54700, Pakistan<br />
                      <strong>Note:</strong> All information is confidential and will only be used to provide you with a customized proposal. We typically respond within 24 hours.
                    </p>
                  </div>

                  <button
                    type="submit"
                   ref={ctaButtonRef}
                   className="cta-glow w-full bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] text-[#0A0A0A] py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Project Request
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Montserrat']">
              What Happens Next?
            </h2>
            <p className="text-lg text-[#E5E5E5] max-w-2xl mx-auto">
              Our streamlined process ensures you get exactly what you need, when you need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Review', description: 'We analyze your project requirements and goals' },
              { step: '02', title: 'Proposal', description: 'Receive a detailed proposal with timeline and pricing' },
              { step: '03', title: 'Kickoff', description: 'Project begins after approval and onboarding' },
              { step: '04', title: 'Delivery', description: 'Your completed project delivered on time' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#00FFF7] mb-4 font-['Orbitron']">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-['Montserrat']">
                  {item.title}
                </h3>
                <p className="text-[#E5E5E5] font-['Open Sans']">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartProject;