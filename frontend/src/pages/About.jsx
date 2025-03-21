import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center px-4 py-24">
      {/* Heading Section */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>

      {/* Description Section */}
      <motion.p
        className="text-gray-600 text-lg sm:text-xl max-w-3xl text-center leading-relaxed"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to <span className="text-blue-600 font-semibold">Book Store</span>, 
        your go-to destination for a vast collection of books across various genres. 
        Our mission is to provide book lovers with a seamless and delightful reading experience.
      </motion.p>

      {/* Image & Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mt-10">
        {/* Left: Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://img.freepik.com/free-vector/mini-people-with-bulb-light-idea_24877-56149.jpg?t=st=1740130868~exp=1740134468~hmac=f1439b1520dd05392f92c2ef7dcc87b0f87ed557073d6b887072aa97c86d95f7&w=740"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right: Details */}
        <motion.div
          className="flex flex-col justify-center space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700">Our Vision</h2>
          <p className="text-gray-600">
            We believe in the power of books to transform lives. 
            Our goal is to make reading accessible and enjoyable for everyone, 
            fostering a love for knowledge and storytelling.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700">Why Choose Us?</h2>
          <ul className="text-gray-600 list-disc pl-5">
            <li>📚 Wide collection of books.</li>
            <li>🚀 Fast and reliable service.</li>
            <li>❤️ Passion for literature and learning.</li>
          </ul>
        </motion.div>
      </div>

    
 

     

      {/* CTA Section */}
      <motion.div
        className="mt-16 bg-blue-600 text-white py-6 px-10 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-center">
          Want to explore more books?
        </h2>
        <p className="text-center mt-2">Join us today and dive into the world of knowledge!</p>
        <div className="flex justify-center mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            <Link to={'/courses'}>
            Explore Now
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
