import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ image, alt, description, link, delay = 0 }) => {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg max-w-xs bg-white dark:bg-[#1b1b1b] text-black dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      <img src={image} alt={alt} className="w-full h-60 object-cover" />

      <div className="p-4">
        <p className="text-sm mb-3">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;