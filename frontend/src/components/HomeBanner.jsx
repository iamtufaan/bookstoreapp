import React from "react";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const HomeBanner = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:mt-20 mt-10 gap-8   items-center mb-30">
      {/* Left Content */}
      <motion.div
        className="w-full sm:w-1/2 text-center sm:text-start flex flex-col gap-6 order-2 sm:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900">
          Welcome to our <span className="text-pink-500">Book Store!</span>
        </h1>
        <p className="text-lg font-semibold text-gray-700 leading-relaxed">
          Discover the world of literature, explore new authors, and find your
          perfect book.
        </p>

        
        {/* <div className="mt-3 border rounded-lg px-3 py-2 flex items-center border-gray-400 bg-white shadow-md">
          <MdEmail fontSize={24} className="text-gray-600" />
          <input
            type="email"
            placeholder="Enter email for login"
            className="outline-none border-none px-3 py-2 w-full text-gray-700"
          />
        </div>

       
        <motion.button
          className="bg-pink-500 text-white px-6 py-3 rounded-lg cursor-pointer active:scale-90 transition duration-300 hover:bg-pink-600 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </motion.button> */}
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-full sm:w-1/2 flex justify-center order-1 sm:order-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/6920933.jpg"
          alt="Book Store"
          className="w-full max-w-md sm:max-w-lg object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default HomeBanner;
