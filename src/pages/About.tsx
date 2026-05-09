import React from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { UserIcon, GlobeAltIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const About = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const neuralNetworkRef = useRef(null);

  useEffect(() => {
    // Neural Network Animation
    const canvas = neuralNetworkRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let animationId;
      
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // Neural network nodes and connections
      const nodes = [];
      const connections = [];
      const nodeCount = 50;
      
      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 2,
          glow: Math.random(),
          glowDirection: Math.random() > 0.5 ? 1 : -1
        });
      }
      
      // Create connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[i].x - nodes[j].x, 2) + 
            Math.pow(nodes[i].y - nodes[j].y, 2)
          );
          if (distance < 150) {
            connections.push({
              from: i,
              to: j,
              opacity: Math.max(0, 1 - distance / 150)
            });
          }
        }
      }
      
      const animate = () => {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        connections.forEach(connection => {
          const fromNode = nodes[connection.from];
          const toNode = nodes[connection.to];
          
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.strokeStyle = `rgba(0, 255, 247, ${connection.opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
        
        // Draw and update nodes
        nodes.forEach(node => {
          // Update position
          node.x += node.vx;
          node.y += node.vy;
          
          // Bounce off edges
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
          
          // Update glow
          node.glow += node.glowDirection * 0.02;
          if (node.glow > 1 || node.glow < 0.3) {
            node.glowDirection *= -1;
          }
          
          // Draw node
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.size * 3
          );
          gradient.addColorStop(0, `rgba(0, 255, 247, ${node.glow})`);
          gradient.addColorStop(1, 'rgba(0, 255, 247, 0)');
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        });
        
        animationId = requestAnimationFrame(animate);
      };
      
      animate();
      
      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resizeCanvas);
      };
    }
    
    // Simple scroll-based parallax with vanilla JS
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = heroRef.current;
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const founders = [
    {
      name: 'Anees',
      role: 'Principal Technologist & Creative Director',
      description: 'Expert in advanced systems design and creative execution. Anees bridges the gap between brand vision and technical implementation, architecting the integrated platforms that power Drazed & Co.',
    },
    {
      name: 'Sheikh Abdul Rehman',
      role: 'Head of Operations & Systems Architecture',
      description: 'The backbone of Drazed & Co\'s scalability. Abdul Rehman focuses on business process optimization, financial engineering, and ensuring every automated workflow scales seamlessly for global clients.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and automation.',
      icon: <LightBulbIcon className="w-8 h-8" />,
    },
    {
      title: 'Quality',
      description: 'Every project receives our full attention and commitment to excellence.',
      icon: <RocketLaunchIcon className="w-8 h-8" />,
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team, not just a service provider.',
      icon: <UserIcon className="w-8 h-8" />,
    },
    {
      title: 'Global Impact',
      description: 'Remote-first approach allowing us to serve clients worldwide.',
      icon: <GlobeAltIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>About Drazed &amp; Co | Remote-First AI &amp; Automation Agency</title>
        <meta name="description" content="Learn about Drazed &amp; Co — a remote-first AI innovation agency founded by Anees and Sheikh Abdul Rehman, helping businesses worldwide simplify, automate, and scale." />
        <link rel="canonical" href="https://drazed.co/about" />
        <meta property="og:title" content="About Drazed & Co | Remote-First AI & Automation Agency" />
        <meta property="og:description" content="Remote-first AI innovation agency helping businesses worldwide simplify, automate, and scale through intelligent digital systems." />
        <meta property="og:url" content="https://drazed.co/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a1a] min-h-[70vh] flex items-center relative overflow-hidden">
        <canvas
          ref={neuralNetworkRef}
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{ zIndex: 1 }}
        />
        <div ref={heroRef} className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 right-20 w-32 h-32 border-2 border-[#00FFF7] rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-24 h-24 border border-[#3D9DFF]"
            animate={{ 
              rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
              scale: [1, 0.8, 1.1, 0.9, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 font-['Orbitron'] leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
                Drazed & Co
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E5E5E5] mb-8 max-w-4xl mx-auto font-['Lato'] font-light">
              Remote-First AI Innovation Agency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-[#E5E5E5] relative">
        <div ref={timelineRef} className="absolute inset-0 opacity-5">
          <div className="milestone absolute top-20 left-20 w-4 h-4 bg-[#00FFF7] rounded-full"></div>
          <div className="milestone absolute top-40 right-32 w-6 h-6 bg-[#3D9DFF] rounded-full"></div>
          <div className="milestone absolute bottom-32 left-1/3 w-3 h-3 bg-[#00FFF7] rounded-full"></div>
          <div className="milestone absolute bottom-20 right-20 w-5 h-5 bg-[#3D9DFF] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-[#E5E5E5]/50 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFF7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-8 font-['Montserrat'] leading-tight relative">
                Our Mission
              </h2>
              <p className="text-[#0A0A0A]/70 text-xl font-['Open Sans'] leading-relaxed relative">
                We empower businesses to outpace their competition by replacing manual friction with intelligent AI systems and precision-engineered digital strategies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-[#E5E5E5]/50 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3D9DFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-8 font-['Montserrat'] leading-tight relative">
                Our Vision
              </h2>
              <p className="text-[#0A0A0A]/70 text-xl font-['Open Sans'] leading-relaxed relative">
                Global leader in digital systems, brand automation, and marketing innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Montserrat']">
              Meet Our Founders
            </h2>
            <p className="text-lg text-[#E5E5E5] max-w-2xl mx-auto">
              Two passionate entrepreneurs united by a vision to transform how businesses 
              operate in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#1a1a1a] p-8 rounded-xl text-center border border-[#00FFF7]/20 hover:border-[#00FFF7]/50 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserIcon className="w-12 h-12 text-[#0A0A0A]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Montserrat'] font-semibold">
                  {founder.name}
                </h3>
                <p className="text-[#00FFF7] mb-4 font-['Quicksand'] font-semibold tracking-wider text-sm uppercase">
                  {founder.role}
                </p>
                <p className="text-[#E5E5E5] font-['Open Sans'] leading-relaxed">
                  {founder.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Client Pedigree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-16 pt-12 border-t border-[#E5E5E5]/30 text-center"
          >
            <p className="text-[#00AFA8] font-['Montserrat'] font-semibold tracking-[0.15em] uppercase text-sm mb-4">Trusted Partners</p>
            <p className="text-[#E5E5E5] font-['Open Sans'] text-lg">
              Trusted by industrial leaders and retail innovators, including Bukhat Trading, Climax Hosiery, and Props The Gift Shop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4 font-['Montserrat']">
              Our Values
            </h2>
            <p className="text-lg text-[#0A0A0A]/80 max-w-2xl mx-auto">
              The principles that guide everything we do and every relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-[#3D9DFF] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3 font-['Montserrat']">
                  {value.title}
                </h3>
                <p className="text-[#0A0A0A]/80 font-['Open Sans']">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#00FFF7] mb-4 font-['Montserrat']">
                Location
              </h3>
              <p className="text-[#E5E5E5] font-['Open Sans']">
                179 B-III GECHS Link Road<br />
                Block B3, GECHS<br />
                Lahore, Punjab 54700, Pakistan
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#3D9DFF] mb-4 font-['Montserrat']">
                Team Size
              </h3>
              <p className="text-[#E5E5E5] font-['Open Sans']">
                2 Founders<br />
                Growing team of specialists
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-[#00FFF7] mb-4 font-['Montserrat']">
                Business Hours
              </h3>
              <p className="text-[#E5E5E5] font-['Open Sans']">
                Monday - Saturday<br />
                10:00 AM - 5:00 PM PKT
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;