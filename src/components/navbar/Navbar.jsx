import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/kumar-shivam-204409307/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.webp" alt="" />
          </a>
          <a
            href="http://localhost:5173/KShivamResume.pdf"
            download="Kumar_Shivam_Resume.pdf"
          >
            <img src="/cv3.jpeg" id="cv" alt="CV" />
          </a>
          <a
            href="https://github.com/kumarshivam03/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.webp" alt="" />
          </a>

          <a
            href="https://x.com/Kumarsh29102688"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
