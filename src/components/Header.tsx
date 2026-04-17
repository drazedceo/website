import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Plans', href: '/plans' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#E5E5E5]/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/1000076513.png" 
              alt="Drazed & Co Logo" 
              className="h-24 w-auto hover:opacity-80 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-colors hover:text-[#00FFF7] relative group ${
                  isActive(item.href) ? 'text-[#00FFF7]' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FFF7] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/start-project"
            className="hidden md:block bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] text-[#0A0A0A] px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-[#00FFF7]/40 transition-all duration-300 transform hover:scale-105"
          >
            Start Project
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#E5E5E5]/10 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-[#00FFF7] bg-[#E5E5E5]/10'
                        : 'text-white hover:text-[#00FFF7] hover:bg-[#E5E5E5]/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/start-project"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-4 bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF] text-[#0A0A0A] px-4 py-2 rounded-lg font-semibold text-center"
                >
                  Start Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;