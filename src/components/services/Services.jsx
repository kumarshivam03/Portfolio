import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInview = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInview && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 id="services" whileHover={{ color: "rgb(255, 165, 0)" }}>
          Services...
        </motion.h1>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "rgb(255, 165, 0)" }}>
              Unique{" "}
            </motion.b>
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(255, 165, 0)" }}>
              For Your{" "}
            </motion.b>
            Organisation
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {["Problem Solver", "Frontend Development", "Backend Development"].map(
          (service, index) => (
            <motion.div
              className="box"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(120, 205, 71, 0.5)", // Blue shadow on hover
              }}
              key={service}
            >
              <h2>{service}</h2>
              <p>
                {index === 0
                  ? "An adept problem solver leverages analytical thinking and creativity to tackle complex issues effectively. By breaking down problems into manageable components and utilizing a structured approach."
                  : index === 1
                  ? "Frontend development focuses on creating the visual and interactive aspects of a website or application. It involves using HTML, CSS, and JavaScript to build responsive and user-friendly interfaces."
                  : "Backend development involves managing the server-side logic and database interactions of a web application. It encompasses server setup, API development, and data handling to support the frontend."}
              </p>
              <button
                className="goButton"
                onClick={() =>
                  window.open(
                    index === 0
                      ? "https://leetcode.com/u/Kshivam3127/"
                      : "https://github.com/kumarshivam03?tab=repositories",
                    "_blank"
                  )
                }
              >
                Check My Work
              </button>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
