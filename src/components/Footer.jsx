import React from "react";
import { FiGithub, FiYoutube, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-brandCream py-10 text-center border-t border-brandBlue/20">
      <p className="text-brandBlue/60">
        Built with ❤️ by Eli. Cozy vibes only.
      </p>

      <div className="flex justify-center mt-4 gap-6">
        <a href="https://youtube.com" className="text-brandBlue hover:text-brandGold transition">
          <FiYoutube size={24} />
        </a>
        <a href="https://github.com/elahe-fakour" className="text-brandBlue hover:text-brandGold transition">
          <FiGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/elahe-fakour" className="text-brandBlue hover:text-brandGold transition">
          <FiLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
