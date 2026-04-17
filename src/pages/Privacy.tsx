import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <ShieldCheckIcon className="w-16 h-16 text-[#00FFF7] mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Orbitron']">
              Privacy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
                Policy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#E5E5E5] mb-8 max-w-3xl mx-auto font-['Lato']">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-[#E5E5E5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 lg:p-12 rounded-xl shadow-lg"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-[#0A0A0A]/80 mb-8 font-['Open Sans']">
                <strong>Last updated:</strong> January 1, 2024
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    Information We Collect
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    We collect basic project information to deliver our services effectively:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>Name and email address</li>
                    <li>Company/organization name (optional)</li>
                    <li>Project requirements and goals</li>
                    <li>Communication preferences</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    How We Use Your Information
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    Your information is used solely to provide and improve our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>Project planning and execution</li>
                    <li>Communication about your project</li>
                    <li>Invoicing and payment processing</li>
                    <li>Customer support</li>
                    <li>Service improvement and optimization</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    Data Security
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>Encrypted data transmission (SSL/TLS)</li>
                    <li>Secure data storage</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security audits</li>
                    <li>Compliance with data protection regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    Information Sharing
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    We do not sell, trade, or share your personal information with third parties, except:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>When required by law or legal process</li>
                    <li>With trusted service providers who help us deliver our services</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    Cookies and Tracking
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    We use minimal cookies and tracking technologies to improve your experience:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand website usage</li>
                    <li>Preference cookies to remember your settings</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    Your Rights
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>Access your personal information</li>
                    <li>Update or correct your information</li>
                    <li>Delete your information</li>
                    <li>Object to processing of your information</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    Data Retention
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    We retain your information only as long as necessary to provide our services and comply with legal obligations. Project files and communications are typically retained for 3 years after project completion.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    Contact Us
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    If you have any questions about this Privacy Policy or how we handle your information, please contact us:
                  </p>
                  <div className="bg-[#00FFF7]/10 p-6 rounded-lg">
                    <p className="text-[#0A0A0A] font-['Open Sans']">
                      <strong>Email:</strong> business@drazed.co<br />
                      <strong>Phone:</strong> +92 320 1837828<br />
                      <strong>Address:</strong> 179 B-III GECHS Link Road, Block B3, GECHS, Lahore, Punjab 54700, Pakistan
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    Policy Updates
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "last updated" date.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;