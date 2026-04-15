import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Thermometer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-accent rounded-lg">
            <Thermometer className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-primary'}`}>
            Elite<span className="text-accent">HVAC</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-primary/80">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#reviews" className="hover:text-accent transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:5551234567" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
          <button className="btn-primary">Schedule Now</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-4 flex flex-col gap-4"
          >
            <a href="#services" className="text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#reviews" className="text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <hr className="border-slate-100" />
            <a href="tel:5551234567" className="btn-emergency justify-center">
              <Phone className="w-5 h-5" /> Emergency Dispatch
            </a>
            <button className="btn-primary w-full">Schedule Online</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
