import React from "react";
import { motion } from "framer-motion";
import NeuralNetwork3D from "./NeuralNetwork3D";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title = "Future of AI-Enhanced Work",
  subtitle = "Exploring planned AI solutions to revolutionize technical writing and customer support workflows",
  ctaText = "View Projects",
  ctaLink = "#projects",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[800px] bg-[#121212] overflow-hidden">
      {/* Background Neural Network */}
      <div className="absolute inset-0 opacity-50">
        <NeuralNetwork3D />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00A3FF]">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <motion.a
            href={ctaLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-[#00A3FF] rounded-full hover:bg-opacity-90 transition-colors duration-300 shadow-lg shadow-[#00A3FF]/20"
          >
            {ctaText}
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-white rounded-full p-2"
          >
            <div className="w-2 h-2 bg-white rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
