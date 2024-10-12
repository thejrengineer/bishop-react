import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import backgroundImage from "../assets/bg.jpg"; 

const ScrollTextReveal = () => {
  const textLines = [
    "Nurturing Future Leaders with",
    "Excellence in Academics",
  ];

  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center space-y-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {textLines.map((line, index) => (
        <RevealOnScroll key={index} text={line} delay={index * 0.2} />
      ))}
    </div>
  );
};

const RevealOnScroll = ({ text, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false, 
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textVariants}
      className="text-white text-5xl md:text-7xl font-bold" 
    >
      {text.includes("Academics") ? (
       
        <span>
          {text.split(" ").map((word, i) => (
            <span
              key={i}
              className={word === "Academics" ? "text-yellow-400" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </span>
      ) : (
        text
      )}
    </motion.div>
  );
};

export default ScrollTextReveal;
