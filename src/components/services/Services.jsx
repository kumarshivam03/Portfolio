import { useRef } from "react";
import "./services.scss";
import { color, motion, useInView } from "framer-motion";

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
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Problem Solver</h2>
          <p>
            An adept problem solver leverages analytical thinking and creativity
            to tackle complex issues effectively. By breaking down problems into
            manageable components and utilizing a structured approach.
          </p>
          <button
            onClick={() =>
              window.open("https://leetcode.com/u/Kshivam3127/", "_blank")
            }
          >
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
            Frontend development focuses on creating the visual and interactive
            aspects of a website or application. It involves using HTML, CSS,
            and JavaScript to build responsive and user-friendly interfaces.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://github.com/kumarshivam03?tab=repositories",
                "_blank"
              )
            }
          >
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
            Backend development involves managing the server-side logic and
            database interactions of a web application. It encompasses server
            setup, API development, and data handling to support the frontend.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://github.com/kumarshivam03?tab=repositories",
                "_blank"
              )
            }
          >
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
