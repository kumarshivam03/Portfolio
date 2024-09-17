import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable button during submission
  const toastId = useRef(null); // Use ref to avoid toast ID re-creation

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button during submission

    // Show loading toast
    if (!toastId.current) {
      toastId.current = toast.info("Loading...", {
        autoClose: false, // Prevent auto-close during loading
      });
    }

    emailjs
      .sendForm(
        "service_6iihpy3",
        "template_e4c8i5d",
        formRef.current,
        "OEJkm5ttZwpR_Rbrh"
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);

          // Update toast to success
          toast.update(toastId.current, {
            render: "Message sent successfully!",
            type: "success",
            autoClose: 2000,
          });
        },
        (error) => {
          setError(true);
          setSuccess(false);

          // Update toast to error
          toast.update(toastId.current, {
            render: "Failed to send message. Please try again.",
            type: "error",
            autoClose: 2000,
          });
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Re-enable button after submission
        toastId.current = null; // Reset toast ID for future use
      });
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
          <textarea rows={8} placeholder="Message" name="message" />
          <button disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>

          {/* Optional error/success text inside form */}
          {error && (
            <span className="error-message">Error occurred while sending</span>
          )}
          {success && (
            <span className="success-message">Message sent successfully!</span>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
