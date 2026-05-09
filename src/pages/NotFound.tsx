import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] pt-16">
    <Helmet>
      <title>404 — Page Not Found | Drazed & Co</title>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center px-4"
    >
      <div className="text-8xl md:text-9xl font-bold text-[#00FFF7] mb-6 font-['Orbitron']">404</div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Montserrat']">Page Not Found</h1>
      <p className="text-[#E5E5E5] mb-10 max-w-md mx-auto font-['Open Sans']">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] text-[#0A0A0A] px-10 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-[#00FFF7]/40 transition-all duration-300 transform hover:scale-105"
      >
        Back to Home
      </Link>
    </motion.div>
  </div>
);

export default NotFound;
