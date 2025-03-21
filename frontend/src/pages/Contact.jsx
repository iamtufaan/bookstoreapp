import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4 py-10">
      {/* Heading */}
      <motion.h1 
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Left Section: Contact Details */}
        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-6"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700">Get In Touch</h2>
          <div className="flex items-center space-x-4">
            <FiMail className="text-blue-600 text-xl" />
            <p className="text-gray-600">contact@bookstore.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FiPhone className="text-green-600 text-xl" />
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="flex items-center space-x-4">
            <FiMapPin className="text-red-600 text-xl" />
            <p className="text-gray-600">Surat, India</p>
          </div>
        </motion.div>

        {/* Right Section: Contact Form */}
        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send a Message</h2>
          <form className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex space-x-6">
        <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">Facebook</a>
        <a href="#" className="text-blue-400 hover:text-blue-600 text-xl">Twitter</a>
        <a href="#" className="text-pink-500 hover:text-pink-700 text-xl">Instagram</a>
      </div>
    </div>
  );
};

export default Contact;
