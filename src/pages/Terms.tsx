import React from 'react';
import { motion } from 'framer-motion';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

const Terms = () => {
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
            <DocumentTextIcon className="w-16 h-16 text-[#00FFF7] mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Orbitron']">
              Terms of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
                Service
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#E5E5E5] mb-8 max-w-3xl mx-auto font-['Lato']">
              Please read these terms carefully before using our services. By working with us, you agree to these terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                    1. Service Agreement
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    By engaging Drazed & Co for any services, you agree to these terms of service. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>AI Business Automation</li>
                    <li>Website Development</li>
                    <li>Creative Branding</li>
                    <li>Meta Ads Management</li>
                    <li>SaaS Systems Development</li>
                    <li>Notion Dashboards</li>
                    <li>Funnel Creation</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    2. Project Process
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2 font-['Montserrat']">
                        Project Initiation
                      </h3>
                      <p className="text-[#0A0A0A]/80 font-['Open Sans']">
                        Projects begin after confirmation and completion of the onboarding process. This includes project scope agreement, timeline confirmation, and initial payment.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2 font-['Montserrat']">
                        Timeline
                      </h3>
                      <p className="text-[#0A0A0A]/80 font-['Open Sans']">
                        Project timelines are estimates based on project scope and complexity. While we strive to meet all deadlines, unforeseen circumstances may affect delivery dates.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    3. Revisions and Changes
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    We want you to be completely satisfied with our work:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>Minor revisions are accepted within 3 days of delivery</li>
                    <li>Major scope changes may require additional time and cost</li>
                    <li>Changes requested after the 3-day period may incur additional fees</li>
                    <li>All revision requests must be submitted in writing</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    4. Intellectual Property
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2 font-['Montserrat']">
                        Client Ownership
                      </h3>
                      <p className="text-[#0A0A0A]/80 font-['Open Sans']">
                        You own all delivered work upon final payment. This includes all files, designs, code, and creative assets created specifically for your project.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2 font-['Montserrat']">
                        Portfolio Usage
                      </h3>
                      <p className="text-[#0A0A0A]/80 font-['Open Sans']">
                        We may showcase completed work in our portfolio unless you explicitly opt out. We will always respect confidentiality agreements and sensitive information.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    5. Payment Terms
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>Payment terms are outlined in individual project proposals</li>
                    <li>Most projects require 50% upfront payment to begin work</li>
                    <li>Final payment is due upon project completion</li>
                    <li>Late payments may result in project suspension</li>
                    <li>All payments are non-refundable once work has commenced</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    6. Client Responsibilities
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    To ensure successful project completion, clients are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>Providing accurate project requirements and feedback</li>
                    <li>Timely responses to requests for information</li>
                    <li>Providing necessary access to systems and accounts</li>
                    <li>Reviewing and approving deliverables within specified timeframes</li>
                    <li>Making payments according to agreed terms</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    7. Confidentiality
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    We respect the confidentiality of your business information. We will not disclose any confidential information without your explicit consent, except as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    8. Limitation of Liability
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    Our liability is limited to the amount paid for the specific service in question. We are not responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits or business interruption</li>
                    <li>Third-party service failures</li>
                    <li>Data loss not caused by our negligence</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    9. Termination
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    Either party may terminate the agreement with written notice. In case of termination:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#0A0A0A]/80 font-['Open Sans']">
                    <li>Client pays for all work completed up to termination date</li>
                    <li>All work in progress will be delivered in current state</li>
                    <li>Confidentiality obligations remain in effect</li>
                    <li>No refunds for completed work</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    10. Governing Law
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    These terms are governed by the laws of Pakistan. Any disputes will be resolved through good faith negotiation or, if necessary, through appropriate legal channels.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    11. Changes to Terms
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    We reserve the right to update these terms. Changes will be posted on our website and will apply to future projects. Existing projects will continue under the terms agreed upon at project initiation.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
                    12. Contact Information
                  </h2>
                  <p className="text-[#0A0A0A]/80 mb-4 font-['Open Sans']">
                    For questions about these terms or any of our services, please contact us:
                  </p>
                  <div className="bg-[#00FFF7]/10 p-6 rounded-lg">
                    <p className="text-[#0A0A0A] font-['Open Sans']">
                      <strong>Drazed & Co</strong><br />
                      <strong>Email:</strong> business@drazed.co<br />
                      <strong>Phone:</strong> +92 320 1837828<br />
                      <strong>Address:</strong> 179 B-III GECHS Link Road, Block B3, GECHS, Lahore, Punjab 54700, Pakistan<br />
                      <strong>Hours:</strong> Monday-Saturday, 10:00 AM - 5:00 PM PKT
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;