import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DetailsIcon, XIcon } from 'components/icons';

const HeaderWithNavigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  // Handle URL hash changes and scrolling
  const scrollToSection = (sectionId: any) => {
    // Update URL hash
    window.history.pushState(null, '', `#${sectionId}`);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Handle browser back/forward and direct URL access
  const handleHashChange = () => {
    const hash = window.location.hash.slice(1); // Remove the #
    if (hash && navItems.find(item => item.id === hash)) {
      const element = document.getElementById(hash);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    handleHashChange(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection) {
      window.history.pushState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm'
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YourLogo
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}

                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button - Only shows on small screens */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XIcon size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DetailsIcon size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
              >
                <div className="py-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-6 py-3 text-base font-medium transition-all duration-200 ${activeSection === item.id
                        ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    className="px-6 pt-4"
                  >
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      Get Started
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Page Sections */}
      {navItems.map((item, index) => (
        <motion.section
          key={item.id}
          id={item.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`min-h-screen flex items-center justify-center ${index % 2 === 0
            ? 'bg-white'
            : 'bg-gradient-to-br from-gray-50 to-blue-50'
            }`}
          style={{ paddingTop: index === 0 ? '100px' : '0' }} // Offset for first section
        >
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className={`${index % 3 === 0
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                  : index % 3 === 1
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'bg-gradient-to-r from-pink-600 to-red-600'
                  } bg-clip-text text-transparent`}>
                  {item.label}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                This is the {item.label.toLowerCase()} section. Experience seamless navigation
                with smooth scrolling and beautiful animations. Each section is designed to
                provide an engaging user experience.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm text-gray-500"
              >
                Section {index + 1} of {navItems.length}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default HeaderWithNavigation;