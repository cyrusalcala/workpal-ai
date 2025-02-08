import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  image?: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title = "AI Image Generator",
  description = "A deep learning model that generates unique images from text descriptions using stable diffusion.",
  image = "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  technologies = ["Python", "PyTorch", "React"],
  githubUrl = "https://github.com",
  liveUrl = "https://example.com",
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-[350px] h-[400px] relative group"
    >
      <Card className="w-full h-full overflow-hidden bg-[#121212] border-[#2a2a2a] backdrop-blur-lg bg-opacity-80 hover:border-[#00A3FF] transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-[#2a2a2a] text-[#00A3FF] hover:bg-[#3a3a3a]"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00A3FF] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00A3FF] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
