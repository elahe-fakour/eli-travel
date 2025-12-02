import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (login(form)) {
        navigate("/");
    }
  };

  return (
  
    <div className="flex justify-center items-center py-20 min-h-[80vh]"> 
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md p-8 sm:p-10 rounded-3xl
          bg-white/70 backdrop-blur-xl shadow-2xl shadow-brandBlue/10
          border border-brandBlue/10 transition duration-500
          transform hover:shadow-brandGold/15
        "
      >
        <h2 className="text-4xl font-extrabold text-brandBlue mb-8 text-center">
          Welcome Back! 🗝️
        </h2>

        <div className="mb-5">
            <label className="text-brandBlue font-semibold block mb-2">Email Address</label>
            <input
                type="email"
                placeholder="you@example.com"
                className="
                    w-full p-4 rounded-xl border-2 border-brandBlue/10 bg-white/80 
                    focus:border-brandGold focus:ring-4 focus:ring-brandGold/30 
                    text-brandBlue outline-none transition duration-300 shadow-sm
                "
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
        </div>

        <div className="mb-8">
            <label className="text-brandBlue font-semibold block mb-2">Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                className="
                    w-full p-4 rounded-xl border-2 border-brandBlue/10 bg-white/80
                    focus:border-brandGold focus:ring-4 focus:ring-brandGold/30 
                    text-brandBlue outline-none transition duration-300 shadow-sm
                "
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
        </div>

        <button
          type="submit"
          className="
            w-full py-3.5 rounded-xl font-bold text-lg
            bg-brandBlue text-brandCream
            hover:bg-brandGold hover:text-brandBlue
            transition-all duration-300
            shadow-[0_4px_12px_rgba(10,60,150,0.4)]
            hover:shadow-[0_8px_20px_rgba(255,199,0,0.6)]
            transform hover:scale-[1.03] active:scale-95
          "
        >
          Login
        </button>
        
        <p className="text-center text-sm mt-6 text-brandBlue/70">
            Don't have an account? 
            <span 
                onClick={() => navigate('/signup')}
                className="text-brandGold font-bold ml-1 cursor-pointer hover:underline transition"
            >
                Sign Up
            </span>
        </p>

      </form>
    </div>
  );
};

export default Login;