import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, BoltIcon, CogIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
// Remove Typed.js import for now - will implement with vanilla JS

const Home = () => {
  const typedRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Simple typing animation with vanilla JS
    const strings = [
      'Strategic Growth...',
      'Smart Automation...',
      'Digital Excellence...',
      'Business Transformation...'
    ];
    
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
      const currentString = strings[stringIndex];
      
      if (isDeleting) {
        typedRef.current.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedRef.current.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let typeSpeed = isDeleting ? 30 : 50;
      
      if (!isDeleting && charIndex === currentString.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
      }
      
      setTimeout(typeWriter, typeSpeed);
    };
    
    typeWriter();

    // Particle animation
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 247, ${particle.opacity})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const services = [
    {
      title: 'Business Process Optimization',
      description: 'Integrated workflow automation with custom systems for seamless operations',
      icon: <BoltIcon className="w-8 h-8" />,
    },
    {
      title: 'Custom Website Development',
      description: 'Bespoke, high-performance websites tailored to your brand and business goals',
      icon: <CogIcon className="w-8 h-8" />,
    },
    {
      title: 'Strategic Brand Design',
      description: 'Complete brand identity, logo, style guides, and digital asset suites',
      icon: <PaintBrushIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a1a] py-32 lg:py-48 min-h-screen flex items-center">
        <canvas
          ref={particlesRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
            style={{ zIndex: 2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 font-['Orbitron'] leading-tight">
              Simplify. Automate.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
                Scale.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E5E5E5] mb-4 max-w-4xl mx-auto font-['Lato'] font-light leading-relaxed">
              <span ref={typedRef}></span>
            </p>
            <p className="text-lg md:text-xl text-[#E5E5E5]/80 mb-12 max-w-4xl mx-auto font-['Open Sans']">
              Strategic Business Transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/start-project"
                className="bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] text-[#0A0A0A] px-12 py-6 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#00FFF7]/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-[#00FFF7] text-[#00FFF7] px-12 py-6 rounded-xl font-bold text-lg hover:bg-[#00FFF7] hover:text-[#0A0A0A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#00FFF7]/20"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-[#E5E5E5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tech pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 relative"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-[#0A0A0A] mb-8 font-['Montserrat'] leading-tight">
              What We Do Best
            </h2>
            <p className="text-xl md:text-2xl text-[#0A0A0A]/70 max-w-3xl mx-auto font-light">
              Comprehensive Business Solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-105 border border-[#E5E5E5]/50 group"
              >
                <div className="text-[#3D9DFF] mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6 font-['Montserrat'] leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-[#0A0A0A]/70 font-['Open Sans'] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] text-[#0A0A0A] px-12 py-6 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#00FFF7]/40 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
        {/* Futuristic grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,247,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,247,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/10 to-transparent rounded-2xl blur-xl"></div>
              <div className="text-6xl md:text-8xl font-bold text-[#00FFF7] mb-4 font-['Orbitron'] relative">
                50+
              </div>
              <p className="text-[#E5E5E5] text-xl md:text-2xl font-['Lato'] relative">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3D9DFF]/10 to-transparent rounded-2xl blur-xl"></div>
              <div className="text-6xl md:text-8xl font-bold text-[#3D9DFF] mb-4 font-['Orbitron'] relative">
                100%
              </div>
              <p className="text-[#E5E5E5] text-xl md:text-2xl font-['Lato'] relative">Client Satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/10 to-transparent rounded-2xl blur-xl"></div>
              <div className="text-6xl md:text-8xl font-bold text-[#00FFF7] mb-4 font-['Orbitron'] relative">
                24/7
              </div>
              <p className="text-[#E5E5E5] text-xl md:text-2xl font-['Lato'] relative">Support Available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] relative overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#0A0A0A]/20 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#0A0A0A]/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-[#0A0A0A]/20 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-[#0A0A0A] mb-8 font-['Montserrat'] leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-[#0A0A0A]/70 mb-12 max-w-3xl mx-auto font-light">
              Start Your Digital Transformation Today
            </p>
            <Link
              to="/contact"
              className="bg-[#0A0A0A] text-white px-12 py-6 rounded-xl font-bold text-lg hover:bg-[#0A0A0A]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;