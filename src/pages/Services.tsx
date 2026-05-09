import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  BoltIcon,
  CogIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  DocumentTextIcon,
  FunnelIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const threeRef = useRef(null);

  useEffect(() => {
    // Simple CSS-based animation for now
    const elements = threeRef.current?.children;
    if (elements) {
      Array.from(elements).forEach((element, index) => {
        element.style.animation = `float ${2 + index * 0.5}s ease-in-out infinite alternate`;
      });
    }
  }, []);

  const services = [
    {
      title: '🔹 SOCIAL MEDIA GROWTH & CONTENT',
      description: 'Strategic growth systems, branded templates, and performance-optimized content',
      icon: <BoltIcon className="w-8 h-8" />,
      features: [
        'Instagram Growth Automation',
        'Branded Content Templates + Auto Posting',
        '30-Day Content Creation & Execution',
        'Reels & Shorts Editing'
      ]
    },
    {
      title: '🔹 VIDEO CREATION',
      description: 'Professional video content for business and influencers',
      icon: <CogIcon className="w-8 h-8" />,
      features: [
        'Promo videos and service explainers',
        'Influencer clips and ads',
        'Business intro videos',
        'Hook-based editing',
        'Multi-platform optimization'
      ]
    },
    {
      title: '🔹 PAID ADVERTISING SERVICES',
      description: 'Meta, TikTok, and Google Ads with full campaign management',
      icon: <MegaphoneIcon className="w-8 h-8" />,
      features: [
        'Meta Ads (Facebook & Instagram)',
        'TikTok Ads with viral planning',
        'Google Ads (Search, Display, YouTube)',
        'Campaign strategy and optimization',
        'Retargeting and analytics'
      ]
    },
    {
      title: '🔹 CUSTOM SYSTEMS & AUTOMATION',
      description: 'Bespoke digital infrastructure, workflow automation, and business intelligence tools',
      icon: <BoltIcon className="w-8 h-8" />,
      features: [
        'Custom Website Development & Setup',
        'Business Process Automation',
        'Intelligent Marketing Workflows',
        'Smart Business Automation Systems',
        'Enterprise Integrations'
      ]
    },
    {
      title: '🔹 SEO & ORGANIC GROWTH',
      description: 'Search optimization and content strategy for better rankings',
      icon: <DocumentTextIcon className="w-8 h-8" />,
      features: [
        'Search Engine Optimization (SEO)',
        'Blog Content Writing for SEO',
        'Keyword research and optimization',
        'Technical SEO audits',
        'Monthly content strategy'
      ]
    },
    {
      title: '🔹 INFLUENCER MARKETING',
      description: 'Full influencer campaign management and deal coordination',
      icon: <PaintBrushIcon className="w-8 h-8" />,
      features: [
        'Influencer Campaign Setup',
        'Research and outreach',
        'Negotiation and planning',
        'Deal management',
        'Performance tracking'
      ]
    },
    {
      title: '🔹 SHOPIFY STORE DEVELOPMENT',
      description: 'End-to-end e-commerce solutions with automation and conversion optimization',
      icon: <ShoppingBagIcon className="w-8 h-8" />,
      features: [
        'Premium Shopify Store Setup & Customization',
        'Theme customization and UX optimization',
        'E-commerce Automation (cart recovery, inventory sync)',
        'Conversion Rate Optimization (CRO)',
        'Payment & shipping app integration',
        'Product description AI optimization',
        'Store performance analytics'
      ]
    },
    {
      title: '🔹 ADD-ONS & SPECIAL SERVICES',
      description: 'Additional tools and services to enhance your business',
      icon: <FunnelIcon className="w-8 h-8" />,
      features: [
        'WhatsApp Chatbot Integration',
        'Email Marketing Automations',
        'Analytics Dashboard Setup',
        'Custom Hosting + Domain Setup',
        'Advanced integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Services | Digital Marketing, Automation &amp; Web Development — Drazed &amp; Co</title>
        <meta name="description" content="Explore Drazed &amp; Co's full service catalog: social media growth, video creation, paid ads (Meta, TikTok, Google), custom automation, SEO, Shopify development, and influencer marketing." />
        <link rel="canonical" href="https://drazed.co/services" />
        <meta property="og:title" content="Services | Digital Marketing & Automation — Drazed & Co" />
        <meta property="og:description" content="Social media growth, paid ads, business automation, website development, SEO, Shopify, and influencer marketing — all under one roof." />
        <meta property="og:url" content="https://drazed.co/services" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a1a] min-h-[70vh] flex items-center relative overflow-hidden">
        <div 
          ref={threeRef} 
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/80 via-transparent to-[#1a1a1a]/80" style={{ zIndex: 2 }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 3 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-['Orbitron'] leading-tight">
              Drazed &amp; Co — Full{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
                Service Catalog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E5E5E5] mb-8 max-w-4xl mx-auto font-['Lato'] font-light">
              Creative • Automation • Marketing • AI
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-[#E5E5E5] relative">
        {/* Subtle tech pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-105 border border-[#E5E5E5]/50 group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFF7]/5 to-[#3D9DFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="text-[#3D9DFF] mb-8 transform group-hover:scale-110 transition-transform duration-300 relative">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6 font-['Montserrat'] leading-tight relative">
                  {service.title}
                </h3>
                <p className="text-lg text-[#0A0A0A]/70 mb-8 font-['Open Sans'] leading-relaxed relative">
                  {service.description}
                </p>
                <ul className="space-y-3 relative">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-base text-[#0A0A0A]/70">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] rounded-full mr-4 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
        {/* Futuristic grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,247,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,247,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 relative"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-['Montserrat'] leading-tight">
              Our Process
            </h2>
            <p className="text-xl md:text-2xl text-[#E5E5E5] max-w-3xl mx-auto font-light">
              Streamlined Excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and goals' },
              { step: '02', title: 'Strategy', description: 'Developing a customized solution plan' },
              { step: '03', title: 'Implementation', description: 'Building and deploying your solution' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and support' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/5 to-[#3D9DFF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-6xl md:text-7xl font-bold text-[#00FFF7] mb-6 font-['Orbitron'] relative group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Montserrat'] relative">
                  {item.title}
                </h3>
                <p className="text-lg text-[#E5E5E5] font-['Open Sans'] leading-relaxed relative">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[#0A0A0A]/80 mb-8 max-w-2xl mx-auto">
              Let's discuss which services would work best for your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start-project"
                className="bg-[#0A0A0A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0A0A0A]/90 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 rounded-lg font-semibold hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;