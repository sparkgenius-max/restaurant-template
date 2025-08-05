import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="text-2xl font-light text-[#1a1a1a] tracking-wider">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-light text-sm tracking-wide transition-all duration-300 hover:text-[#8b7355] ${
                  isActive(item.href) ? 'text-[#8b7355]' : 'text-[#1a1a1a]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact & Booking */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center text-sm text-[#1a1a1a] hover:text-[#8b7355] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              {siteConfig.phone}
            </a>
            <Link
              to="/contact"
              className="bg-[#1a1a1a] text-white px-6 py-3 text-sm tracking-wide hover:bg-[#8b7355] transition-colors duration-300"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-[#1a1a1a] hover:text-[#8b7355] transition-colors p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 space-y-4 bg-white rounded-lg shadow-lg mt-2 p-6">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={toggleMenu}
                className={`block py-3 font-light text-sm tracking-wide transition-all duration-300 ${
                  isActive(item.href) ? 'text-[#8b7355]' : 'text-[#1a1a1a] hover:text-[#8b7355]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center text-sm text-[#1a1a1a] hover:text-[#8b7355] transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {siteConfig.phone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;