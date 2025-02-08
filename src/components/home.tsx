import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";
import { motion } from "framer-motion";

interface HomeProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Home = ({
  title = "AI & Machine Learning Portfolio",
  subtitle = "Exploring the frontiers of artificial intelligence through innovative projects and creative solutions",
  ctaText = "View Projects",
  ctaLink = "#projects",
}: HomeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#121212] text-white overflow-x-hidden"
    >
      <Navigation />

      <main>
        <HeroSection
          title={title}
          subtitle={subtitle}
          ctaText={ctaText}
          ctaLink={ctaLink}
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="projects"
        >
          <ProjectsGrid />
        </motion.div>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] py-8 text-center text-gray-400"
      >
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} WorkPal AI. All rights reserved.</p>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Home;
