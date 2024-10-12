import React from "react";
import { motion } from "framer-motion";

const News = () => {
  const items = [
    {
      text: "Bishop Cotton Boys School Ranked No.1 in India",
      image: "https://via.placeholder.com/400x200?text=School+Image",
    },
    {
      text: "New Innovations in Education Technology",
      image: "https://via.placeholder.com/400x200?text=Education+Tech",
    },
    {
      text: "Global Education Trends for 2024",
      image: "https://via.placeholder.com/400x200?text=Education+Trends",
    },
    {
      text: "Top 10 Schools in the World",
      image: "https://via.placeholder.com/400x200?text=Top+Schools",
    },
    {
      text: "Revolutionizing Online Learning",
      image: "https://via.placeholder.com/400x200?text=Online+Learning",
    },
  ];

  return (
    <div className="bg-green-900 py-10 overflow-hidden">
      <h2 className="text-white text-2xl font-bold text-center mb-5">
        News and Updates
      </h2>
      <div className="flex space-x-10 w-full relative">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg"
            initial={{ x: "100%", opacity: 0, scale: 0.8 }}
            animate={{ x: "-100%", opacity: 1, scale: 1 }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
              delay: index * 0.5, 
            }}
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-black text-lg font-semibold">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
