import React from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Brain, Github, Menu } from "lucide-react";

interface NavigationProps {
  links?: Array<{ title: string; href: string }>;
  githubUrl?: string;
}

const Navigation = ({
  links = [
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ],
  githubUrl = "https://github.com",
}: NavigationProps) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-20 bg-[#121212] border-b border-[#2a2a2a] z-50 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center space-x-2 text-white"
          whileHover={{ scale: 1.05 }}
        >
          <Brain className="w-8 h-8 text-[#00A3FF]" />
          <span className="text-xl font-bold">WorkPal AI</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <NavigationMenuLink
                    href={link.href}
                    className="px-4 py-2 text-gray-300 hover:text-[#00A3FF] transition-colors"
                  >
                    {link.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-[#00A3FF] transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-[#00A3FF]"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
