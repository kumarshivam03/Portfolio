import React, { useRef } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6iihpy3", "template_e4c8i5d", formRef.current, {
        publicKey: "OEJkm5ttZwpR_Rbrh",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textConatiner" variants={variants}>
        <motion.h1 variants={variants}>Let's connect together</motion.h1>
        <motion.div className="item">
          <h2>Mail</h2>
          <span>kumarshivam3127@gmail.com</span>
        </motion.div>
        <motion.div className="item">
          <h2>Phone</h2>
          <span>9304905392</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>RR Nagara Bengaluru India</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" required name="name" />
          <input type="email" placeholder="Email" required name="email" />
          <textarea row={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
