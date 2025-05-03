import React from 'react';
import { FiHeart, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
          
          {/* Center - Made with love */}
          <div className="mb-4 md:mb-0 flex items-center">
            <p className="text-white text-sm flex items-center">
              Made with <FiHeart className="mx-1 text-red-500" /> for a better experience
            </p>
          </div>
          
          {/* Right Side - Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-700 transition-colors">
              <FiGithub className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-700 transition-colors">
              <FiTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-700 transition-colors">
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;