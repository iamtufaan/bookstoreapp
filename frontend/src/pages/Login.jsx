import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

 
const Login = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post("https://bookstoreapp-o0ql.onrender.com/api/v1/user/login", formData);
      toast.success("Login Successful!");
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/"); 
      window.location.reload()
     
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Invalid email or password.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center py-24">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-2xl p-8 sm:w-96 w-80">
        <h2 className="text-3xl font-bold text-center mb-5">Welcome Back! 👋</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {[{ name: "email", icon: FaUser, placeholder: "Email", type: "email" },
            { name: "password", icon: FaLock, placeholder: "Password", type: "password" }].map(({ name, icon: Icon, placeholder, type }) => (
            <div key={name} className="relative">
              <Icon className="absolute left-3 top-3 text-gray-600" />
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full px-10 py-3 rounded-md bg-white bg-opacity-20 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 rounded-md text-lg font-semibold transition active:scale-95 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-5 text-sm">
          <p>
            Don't have an account? <Link to="/register" className="text-blue-300 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
