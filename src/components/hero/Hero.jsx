import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Kumar Shivam,</motion.h2>
          <motion.h1 variants={textVariants}>
            Hello! With skills in C++, I am venturing into Web Development
            Frameworks. I’m always eager to learn new skills and stay updated
            with the latest industry trends. Looking forward to connecting with
            like-minded professionals and collaborating on exciting projects!
          </motion.h1>
          <motion.div className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() =>
                window.open(
                  "/KShivamResume.pdf",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              View Resume
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="scroll.png"
            alt="#"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer AI Enthusiast Problem Solver
      </motion.div>
      <div className="imageContainer">
        <img id="img" src="code1.webp" alt="#" />
      </div>
    </div>
  );
};

export default Hero;
