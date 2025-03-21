import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-gray-900 text-white py-8 px-4 md:px-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Brand & Social Links */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Book Store</h2>
          <p className="text-gray-400 mt-2">Your one-stop destination for books.</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-gray-400 hover:text-white transition">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400 mt-2">📧 support@bookstore.com</p>
          <p className="text-gray-400">📞 +91 9876543210</p>
          <p className="text-gray-400">📍 Surat, India</p>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} Book Store. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
