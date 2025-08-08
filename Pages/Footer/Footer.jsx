import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 py-6 mt-10 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side - Name & Year */}
        <p className="text-lg">
          © {new Date().getFullYear()} Mahmoud Nagi. All Rights Reserved.
        </p>
        {/* Right side - Social Links */}
        <div className="flex gap-4 text-lg">
          <a 
            href="https://github.com/MohamedNagy465" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/mahmoud-saleh-74bb43220/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:0xmahmoudnagy@gmail.com"
            className="hover:text-purple-400 dark:hover:text-purple-500 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
