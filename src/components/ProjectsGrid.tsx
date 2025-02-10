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
    title: "[Planned] AI Chatbots for Customer Service",
    description:
      "24/7 automated support system using GPT and RAG (Retrieval Augmented Generation) to provide instant, accurate responses to customer queries.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e",
    technologies: ["OpenAI GPT", "RAG", "Next.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[Planned] Automated Knowledge Base Generator",
    description:
      "AI system that automatically extracts frequently asked questions from support tickets to build and maintain a comprehensive knowledge base.",
    image: "https://images.unsplash.com/photo-1518976024611-28bf4b48222e",
    technologies: ["NLP", "Python", "ElasticSearch"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[Concept] AI-Powered SOP & Documentation Assistant",
    description:
      "Smart tool that converts meeting recordings and notes into structured Standard Operating Procedures and documentation.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    technologies: ["OpenAI Whisper", "GPT-4", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[Future] AI Resume & Cover Letter Generator",
    description:
      "Advanced AI tool that generates optimized job applications by analyzing job descriptions and user experience to create tailored resumes and cover letters.",
    image: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906",
    technologies: ["GPT-4", "Next.js", "TailwindCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[In Development] AI Productivity Dashboard",
    description:
      "Comprehensive dashboard for freelancers that uses AI to track tasks, analyze time usage, and forecast income while providing optimization suggestions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["Machine Learning", "React", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[Planned] Sentiment Analysis & Feedback Analyzer",
    description:
      "AI-powered tool that analyzes customer reviews and support tickets to identify trends, sentiment patterns, and areas for improvement.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    technologies: ["TensorFlow", "Python", "FastAPI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "[Upcoming] AI Technical Writing Assistant",
    description:
      "Advanced AI assistant that helps improve the structure, clarity, and consistency of technical documentation while maintaining technical accuracy.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
    technologies: ["GPT-4", "React", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default ProjectsGrid;
