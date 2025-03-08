import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Your Name</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Undergraduate student at [Your University] passionate about [Your Field/Interests].
              Always open to new opportunities and collaborations.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="mailto:your.email@university.edu" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:your.email@university.edu" className="hover:text-white transition-colors duration-300">
                  your.email@university.edu
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Phone:</span>
                <a href="tel:+11234567890" className="hover:text-white transition-colors duration-300">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Location:</span>
                <span>Your University, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-primary text-white p-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;