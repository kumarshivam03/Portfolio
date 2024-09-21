import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const items = ["Home", "Service", "Project", "Contact"];
  const [activeLink, setActiveLink] = useState("Home"); // Set initial active link to "Home"

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      items.forEach((item) => {
        const section = document.getElementById(item);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveLink(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const handleLinkClick = (item) => {
    setActiveLink(item);
    setOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          onClick={() => handleLinkClick(item)}
          className={activeLink === item ? "active" : ""}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
