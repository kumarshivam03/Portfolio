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
          <a href="https://www.linkedin.com/in/kumar-shivam-204409307/">
            <img src="/linkedin.webp" alt="" />
          </a>
          <a href="https://github.com/kumarshivam03/">
            <img src="/github.webp" alt="" />
          </a>

          <a href="https://x.com/Kumarsh29102688">
            <img src="/twitter.webp" alt="" />
          </a>

          <a href="www.instagram.com">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
