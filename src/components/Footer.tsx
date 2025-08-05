import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { siteConfig } from '../config/site';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <span className="text-3xl font-light tracking-wider text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg font-light max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.social.facebook} className="p-3 bg-[#8b7355] rounded-full hover:bg-[#d4af37] transition-colors duration-300 group">
                <Facebook size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href={siteConfig.social.instagram} className="p-3 bg-[#8b7355] rounded-full hover:bg-[#d4af37] transition-colors duration-300 group">
                <Instagram size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href={siteConfig.social.twitter} className="p-3 bg-[#8b7355] rounded-full hover:bg-[#d4af37] transition-colors duration-300 group">
                <Twitter size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white tracking-wide">Navigation</h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white tracking-wide">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-[#8b7355] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed font-light">
                  {siteConfig.address}
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-[#8b7355] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm font-light">{siteConfig.phone}</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-[#8b7355] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm font-light">{siteConfig.email}</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-[#8b7355] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed font-light">
                  {siteConfig.hours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm font-light">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;