import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-brandCream z-50 border-b border-brandBlue/10 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

         
          <Link
            to="/"
            className="
              group flex items-center gap-2 font-bold text-xl text-brandBlue
              transition-transform duration-300
              hover:scale-110
              relative
            "
          >
            
            <span className="
              absolute -inset-3 rounded-full blur-xl opacity-0 
              group-hover:opacity-40 transition duration-500
              bg-brandGold/50
            "></span>

          
            <GiAirplaneDeparture
              className="
                relative z-10 text-brandGold text-3xl
                transition-all duration-300
                group-hover:text-brandBlue
                group-hover:animate-planeFly
              "
            />

         
            <span className="relative z-10">
              <span
                className="
                  inline-block bg-gradient-to-r from-brandBlue via-brandGold to-brandBlue
                  bg-clip-text text-transparent animate-shimmer
                "
              >
                Eli Travel
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-brandBlue font-medium">
            <Link to="/">Home</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">

            <Link
              to="/signup"
              className="
                relative px-5 py-2.5 font-semibold text-brandBlue rounded-xl
                bg-gradient-to-r from-brandGold to-yellow-400
                shadow-[0_4px_12px_rgba(255,199,0,0.45)]
                hover:shadow-[0_6px_18px_rgba(255,199,0,0.6)]
                transition-all duration-300
                hover:scale-[1.07]
                active:scale-95
              "
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              className="
                relative px-5 py-2.5 font-semibold rounded-xl
                text-brandCream bg-brandBlue
                shadow-[0_4px_12px_rgba(10,60,150,0.4)]
                hover:shadow-[0_6px_18px_rgba(10,60,150,0.6)]
                transition-all duration-300
                hover:scale-[1.07]
                active:scale-95
              "
            >
              Login
            </Link>
          </div>

          <button
            className="lg:hidden text-brandBlue text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-brandCream border-t border-brandBlue/10 px-6 py-6 flex flex-col gap-5 text-lg text-brandBlue">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/videos" onClick={() => setOpen(false)}>Videos</Link>
            <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/signup"
                className="
                  px-4 py-2 font-semibold text-brandBlue rounded-xl text-center
                  bg-gradient-to-r from-brandGold to-yellow-400
                  transition-all duration-300 hover:opacity-90
                "
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>

              <Link
                to="/login"
                className="
                  px-4 py-2 font-semibold rounded-xl text-center
                  text-brandCream bg-brandBlue
                  transition-all duration-300 hover:bg-brandBlue/90
                "
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>

      <style>
        {`
          @keyframes planeFly {
            0% { transform: translate(0, 0) rotate(0deg); }
            30% { transform: translate(6px, -8px) rotate(12deg); }
            60% { transform: translate(14px, -4px) rotate(-8deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }

          .animate-planeFly {
            animation: planeFly 0.7s ease-in-out;
          }

          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

          .animate-shimmer {
            background-size: 200% auto;
            animation: shimmer 2.5s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;