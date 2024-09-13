import React from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "VerifEye: Fake News Detector",
    img: "https://imgs.search.brave.com/mG-ulttB7eqTr6kHEQVyNofjN0EjqiKtVOMIysUAxoc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzAxLzE2LzA3/LzM2MF9GXzIwMTE2/MDcwNl9YTzNQN2pu/TnMzd2tMU1VOWE1J/U21DUGhVd3R4eFd4/Sy5qcGc",
    desc: "It is an advanced fake news detection system that combines the MERN stack with Flask and Cohere's NLP API. Leveraging state-of-the-art natural language processing, VerifEye analyzes news content to assess its authenticity and flag potential misinformation. The integration of these technologies ensures accurate and reliable detection of fake news, enhancing information integrity in digital media.",
    repoLink: "https://github.com/kumarshivam03/VerifEye",
  },
  {
    id: 2,
    title: "KnoxShop: Ecommerce Application",
    img: "https://imgs.search.brave.com/cFov9vWcek7F-UOk8vRzdRtqpqCbIU9lOApVaQSk55I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzE2LzU1LzAz/LzM2MF9GXzMxNjU1/MDM2Nl82SUV1ZWRB/SnFaOUpZSXFuUXFt/cmFvTFBwZjZxZlBD/Yi5qcGc",
    desc: "It is a fully functional e-commerce platform developed using the MERN stack, which integrates MongoDB, Express.js, React, and Node.js to deliver a seamless shopping experience. The platform is designed to meet the needs of both buyers and sellers with its robust features, including advanced authorization, a payment gateway, and a user-friendly interface.",
    repoLink: "https://github.com/kumarshivam03/KnoxShop",
  },
  {
    id: 3,
    title: "AI-Chat App: Generative Application",
    img: "https://imgs.search.brave.com/6UslSkFxBDxdhpCwgzhOTHKBNNERLKftlKYMDbPp9YQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQ2Lzk2LzY3/LzM2MF9GXzI0Njk2/Njc3OV9sZGJvV1Jz/R2I0aEJXTUFVUFgy/YWpQTWNpaU84NzBw/ai5qcGc",
    desc: "The AI Chat App is an advanced conversational platform built to offer dynamic and interactive chat experiences using the Generative Language Client API. This web application leverages state-of-the-art AI technology to deliver human-like interactions and intelligent responses, making it ideal for a range of applications from customer support to personal assistance.",
    repoLink: "https://github.com/kumarshivam03/AI-Chat-App",
  },
  {
    id: 4,
    title: "Text-Editor: Javascript App",
    img: "https://imgs.search.brave.com/_Ndu0JPyTBsUwV0ZxU_OE6ytZnTAdfmtfvd5qjwO0pU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmVmdW5reS5jb20v/aW1hZ2VzL3ByaXNt/aWMvMDAwNTFjYWYt/ZjA0Yi00ZWUxLWJh/YjgtYjMyZmJlMDBm/N2FkX2hvdy10b190/ZXh0LWVkaXRvci0x/My5zdmc",
    desc: "The Text Editor App is a versatile and feature-rich text editing tool developed with JavaScript. It provides users with a robust platform for creating, editing, and managing text documents with ease. Designed with both simplicity and functionality in mind, the app offers a range of features to enhance the text editing experience.",
    repoLink: "https://github.com/kumarshivam03/Text-Editor",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleClick = () => {
    window.open(item.repoLink, "_blank");
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleClick}>View Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
