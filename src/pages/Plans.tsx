import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const Plans = () => {
  React.useEffect(() => {
    // Simple CSS animations for floating elements
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float1 {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes float2 {
        0%, 100% { transform: translateX(0px) rotate(0deg); }
        50% { transform: translateX(15px) rotate(45deg); }
      }
      @keyframes float3 {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
      }
      @keyframes cardHover {
        0% { transform: translateY(0px); }
        100% { transform: translateY(-8px); }
      }
      @keyframes popularGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(0,255,247,0.3); }
        50% { box-shadow: 0 0 30px rgba(0,255,247,0.5), 0 0 60px rgba(0,255,247,0.3); }
      }
      .floating-element-1 { animation: float1 2s ease-in-out infinite; }
      .floating-element-2 { animation: float2 3s ease-in-out infinite; }
      .floating-element-3 { animation: float3 2.5s ease-in-out infinite; }
      .plan-card:hover { animation: cardHover 0.3s ease-out forwards; }
      .popular-glow { animation: popularGlow 2s ease-in-out infinite; }
      .automation-glow {
        box-shadow: 0 0 0 1px rgba(61,157,255,0.25), 0 0 28px rgba(61,157,255,0.14);
      }
      .automation-glow:hover {
        box-shadow: 0 0 0 1px rgba(61,157,255,0.45), 0 0 34px rgba(61,157,255,0.22), 0 0 60px rgba(0,255,247,0.08);
      }
      
      /* Responsive grid improvements */
      @media (max-width: 768px) {
        .plans-grid {
          gap: 2rem !important;
        }
        .plan-card {
          margin-bottom: 1rem;
        }
      }
      
      @media (min-width: 769px) and (max-width: 1024px) {
        .plans-grid {
          gap: 1.5rem !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const plans = [
    {
      name: '🌱 Starter',
      price: '$149/mo',
      label: 'Foundation Tier',
      subtitle: 'Manual Delivery',
      description: 'No automation. High-quality manual content for brands that want a clean, reliable launchpad.',
      features: [
        'Manual content creation and publishing',
        'Brand-aligned creative direction',
        'High-touch revisions and support',
        'Clean setup for future scaling'
      ],
      highlight: false,
      automation: false,
      buttonStyle: 'outline'
    },
    {
      name: '🚀 Growth',
      price: '$299/mo',
      label: 'Scaling Tier',
      subtitle: 'Manual Delivery',
      description: 'Everything in Starter plus paid ads and content systems for brands ready to scale with momentum.',
      features: [
        'Everything in Starter',
        'Paid ads strategy and launch support',
        '30-day content creation system',
        'Reels & shorts editing',
        'Content direction for IG + Threads',
        'Influencer campaign coordination'
      ],
      highlight: false,
      automation: false,
      buttonStyle: 'outline'
    },
    {
      name: '⚡ Smart Scale',
      price: '$599/mo',
      label: 'Growth Acceleration Tier',
      subtitle: 'Advanced Optimization',
      description: 'Strategic automation, advanced lead systems, and custom digital infrastructure for businesses ready to scale smartly.',
      features: [
        'Everything in Growth',
        'Website generation (3-page site)',
        '1 workflow automation system',
        'AI lead flow setup for DMs or email',
        'Google Ads management',
        'Basic SEO optimization'
      ],
      highlight: true,
      automation: true,
      buttonStyle: 'solid',
      badge: 'Most Popular'
    },
    {
      name: '👑 Dominate AI',
      price: '$1,499/mo',
      label: 'Enterprise Suite',
      subtitle: 'Custom Automation',
      description: 'Full-stack automation, custom business systems, and integrated dashboards for brands that operate at enterprise scale.',
      features: [
        'Everything in Smart Scale',
        'Advanced website (multi-page CMS site)',
        '3+ AI-powered automations',
        'Custom dashboard and reporting layer',
        'Meta + TikTok + Google Ads combo',
        'Advanced SEO and content support',
        'Priority support and strategy access'
      ],
      highlight: false,
      automation: true,
      buttonStyle: 'outline'
    }
  ];

  React.useEffect(() => {
    // Dynamic Plan Slider Animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes planPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes slideIn {
        0% { transform: translateX(100px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      .plan-selected { animation: planPulse 1s ease-in-out; }
      .recommendation-bubble { animation: slideIn 0.5s ease-out; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a1a]">
        {/* Floating geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="floating-element-1 absolute top-20 left-20 w-16 h-16 border-2 border-[#00FFF7] rounded-full"></div>
          <div className="floating-element-2 absolute top-40 right-32 w-12 h-12 bg-[#3D9DFF]/30 rotate-45"></div>
          <div className="floating-element-3 absolute bottom-32 left-1/3 w-20 h-20 border border-[#00FFF7] rounded-lg"></div>
          <div className="floating-element-1 absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-r from-[#00FFF7]/20 to-[#3D9DFF]/20 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              💼 Drazed & Co — Growth & Automation{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
                Plans
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#E5E5E5] mb-8 max-w-3xl mx-auto font-['Lato']">
              Designed for creators, brands, and businesses at every level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-24 bg-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="plans-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`plan-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  plan.highlight ? 'ring-2 ring-[#00FFF7] transform scale-105 shadow-2xl popular-glow mt-8' : ''
                } ${
                  plan.automation ? 'border border-[#3D9DFF]/35 automation-glow' : 'border border-transparent'
                }`}
                style={{ 
                  minHeight: '600px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {plan.badge && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      {/* Main Badge */}
                      <div className="bg-gradient-to-r from-[#00FFF7] via-[#00D4FF] to-[#3D9DFF] text-[#0A0A0A] px-10 py-4 rounded-full shadow-2xl border-2 border-white">
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          <span className="text-sm font-bold tracking-wide">{plan.badge}</span>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Glow Effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] rounded-full blur-lg opacity-50 scale-110 animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] rounded-full blur-xl opacity-30 scale-125"></div>
                      
                      {/* Sparkle Effects */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-80 animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#00FFF7] rounded-full opacity-60 animate-ping" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-1 -left-2 w-1.5 h-1.5 bg-[#3D9DFF] rounded-full opacity-70 animate-ping" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8 flex-shrink-0">
                  <p className="text-sm text-[#3D9DFF] font-semibold mb-2 font-['Space Grotesk'] tracking-[0.2em] uppercase">
                    {plan.label}
                  </p>
                  <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2 font-['Orbitron']">
                    {plan.name}
                  </h3>
                  <p className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-3 font-['Orbitron']">
                    {plan.price}
                  </p>
                  <p className="text-sm text-[#00AFA8] font-semibold mb-3 font-['Space Grotesk'] tracking-[0.18em] uppercase">
                    {plan.subtitle}
                  </p>
                  <p className="text-[#0A0A0A]/80 mb-2 font-['Open Sans'] text-sm">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="w-4 h-4 text-[#00FFF7] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#0A0A0A]/80 font-['Open Sans'] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mt-auto pt-4">
                  <a
                    href="/start-project"
                    className={`block w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 font-['Montserrat'] ${
                      plan.buttonStyle === 'solid'
                        ? 'bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] text-[#0A0A0A] hover:shadow-lg hover:shadow-[#00FFF7]/30'
                        : 'border border-[#3D9DFF]/40 bg-[#0A0A0A] text-white hover:border-[#00FFF7]/70 hover:bg-[#0A0A0A]/90'
                    }`}
                  >
                    Choose {plan.name}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Orbitron']">
              Service Menu
            </h2>
            <p className="text-lg text-[#E5E5E5] max-w-2xl mx-auto font-['Lato']">
              For clients who want custom quotes, advanced scopes, or a tailored delivery mix.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '🔹 SOCIAL MEDIA GROWTH & CONTENT',
                services: [
                  'Instagram Growth Automation - AI-managed real follower growth with 24/7 optimization',
                  'Branded Content Templates + Auto Posting - Canva templates for feeds, stories, reels — auto-scheduled',
                  '30-Day Content Creation & Execution',
                  'Reels & Shorts Editing - Hook-based editing for short-form content'
                ]
              },
              {
                title: '🔹 VIDEO CREATION',
                services: [
                  'Video Creation for Business & Influencers - Promo videos, service explainers, intros, influencer clips, ads'
                ]
              },
              {
                title: '🔹 PAID ADVERTISING SERVICES',
                services: [
                  'Meta Ads (Facebook & Instagram) - Campaign strategy, ad creatives, retargeting, and analytics',
                  'TikTok Ads - Viral campaign planning with short video creative and precise targeting',
                  'Google Ads - Search, Display & YouTube ads with keyword research and optimization'
                ]
              },
              {
                title: '� E-COMMERCE, AI & TECH',
                services: [
                  'Premium Shopify Store Development ⭐ - End-to-end setup, theme customization, and UX optimization',
                  'E-commerce Automation - Automated order tracking, abandoned cart recovery, and inventory sync',
                  'Conversion Rate Optimization (CRO) - High-speed landing pages and AI-driven product descriptions',
                  'App & Payment Integration - Seamless setup for global payments, shipping, and marketing apps',
                  'Website Generation (AI-Powered) - Complete responsive website setup using Bolt, Notion CMS, and GitHub',
                  'Business Automation Setup - Custom workflow automation using N8N, Zapier, Make, or APIs',
                  'ChatGPT for Marketing Automation - Smart flows for auto-replies, lead generation, landing pages, emails',
                  'AI Agents for Business - GPT-powered assistants for customer support, sales, and content'
                ]
              },
              {
                title: '🔹 SEO & ORGANIC GROWTH',
                services: [
                  'Search Engine Optimization (SEO) - On-page, technical, and backlink SEO for better Google ranking',
                  'Blog Content Writing for SEO - High-quality keyword-optimized blogs (monthly)'
                ]
              },
              {
                title: '🔹 INFLUENCER MARKETING',
                services: [
                  'Influencer Campaign Setup - Research, outreach, negotiation, and full campaign planning',
                  'Influencer Deal Management - Communication, tracking deliverables, reporting, and results'
                ]
              },
              {
                title: '🔹 ADD-ONS & SPECIAL SERVICES',
                services: [
                  'WhatsApp Chatbot Integration - Smart chatbot trained on your services for automated lead capture',
                  'Email Marketing Automations - Newsletters, onboarding, and funnel sequences',
                  'Analytics Dashboard Setup - Custom KPI dashboards via Notion, Google Data Studio, or Sheets',
                  'Custom Hosting + Domain Setup - Includes domain, DNS, and site deployment using Bolt or Cloudflare'
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#1a1a1a] p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-[#00FFF7] mb-4 font-['Montserrat']">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-[#E5E5E5] text-sm font-['Open Sans']">
                      • {service}
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6 font-['Orbitron']">
              Ready to Dominate Your Industry?
            </h2>
            <p className="text-lg text-[#0A0A0A]/80 mb-8 max-w-2xl mx-auto font-['Open Sans']">
              Choose the plan that fits your growth stage or schedule a call for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/start-project"
                className="bg-[#0A0A0A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0A0A0A]/90 transition-all duration-300 transform hover:scale-105 font-['Montserrat'] shadow-xl shadow-[#0A0A0A]/20"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="border-2 border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 rounded-lg font-semibold hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 font-['Montserrat'] shadow-xl shadow-[#0A0A0A]/15"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Plans;