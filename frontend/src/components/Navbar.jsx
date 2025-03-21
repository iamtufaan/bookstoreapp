import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { MdClear } from "react-icons/md";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  const navlinks = ["About", "Courses", "Contact"];
  const [authUser, setAuthUser] = useContext(AuthContext);



  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [authUser]);

  const handleLogout = () => {
    setAuthUser(null); // ✅ Clear auth state
    localStorage.removeItem("user"); // ✅ Correct key to remove
    toast.success("Logout successfully");
    navigate("/login"); // Redirect to login page
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full sm:px-4 sm:py-3 px-3 py-2 fixed top-0 left-0 z-50 transition-all ${
        sticky ? "shadow-lg bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            Book Store
          </Link>
        </motion.div>

       

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {navlinks.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, color: "#fbbf24" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link to={`/${item.toLowerCase()}`} className="transition">
                {item}
              </Link>
            </motion.div>
          ))}

          {/* Login/Logout Button */}
          {authUser ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`md:hidden ${sticky ? "text-white" : "text-black"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClear size={28} /> : <FiMenu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden flex flex-col items-center bg-gray-900 text-white py-4 absolute w-full left-0 transition-all ${
          menuOpen ? "block" : "hidden"
        }`}
      >
      

        {/* Mobile Navigation Links */}
        <div className="w-full flex flex-col items-center space-y-4 mt-4">
          {navlinks.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, color: "#fbbf24" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Login/Logout Button */}
        {authUser ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 transition mt-4 cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
          >
            Logout
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition mt-4 cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
          >
            Login
          </motion.button>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
