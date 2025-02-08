import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid = ({ projects = defaultProjects }: ProjectsGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-[#121212] p-8 md:p-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
        >
          Planned AI Solutions
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const defaultProjects: Project[] = [
  {
    title: "[Planned] AI Documentation Assistant",
    description:
      "Envisioned smart tool that will help generate and maintain technical documentation using GPT-4, with automatic updates based on code changes.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    technologies: ["OpenAI API", "Node.js", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[Planned] Smart Support Chatbot",
    description:
      "Future AI-powered customer service chatbot that will handle technical queries and automatically generate support tickets.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e",
    technologies: ["GPT-4", "Next.js", "TailwindCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[Concept] API Documentation Generator",
    description:
      "Proposed automated tool that will create comprehensive API documentation from code comments and usage patterns.",
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011",
    technologies: ["Python", "OpenAPI", "Markdown"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[In Planning] Knowledge Base Analyzer",
    description:
      "Upcoming AI system that will analyze support tickets and documentation to identify gaps and suggest improvements.",
    image: "https://images.unsplash.com/photo-1518976024611-28bf4b48222e",
    technologies: ["NLP", "Python", "ElasticSearch"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[Future] Style Guide Enforcer",
    description:
      "Planned AI tool that will ensure consistency in technical writing by checking against style guides and company standards.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
    technologies: ["Machine Learning", "React", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[Upcoming] Support Ticket Classifier",
    description:
      "Future ML model that will automatically categorize and route customer support tickets to appropriate teams.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    technologies: ["TensorFlow", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default ProjectsGrid;
