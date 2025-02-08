import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface NeuralNetwork3DProps {
  width?: number;
  height?: number;
  nodeCount?: number;
  connectionCount?: number;
  rotationSpeed?: number;
}

const NeuralNetwork3D: React.FC<NeuralNetwork3DProps> = ({
  width = 800,
  height = 600,
  nodeCount = 50,
  connectionCount = 75,
  rotationSpeed = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate random nodes
  const nodes = Array.from({ length: nodeCount }, () => ({
    x: Math.random() * width - width / 2,
    y: Math.random() * height - height / 2,
    z: Math.random() * 400 - 200,
    size: Math.random() * 4 + 2,
  }));

  // Generate random connections between nodes
  const connections = Array.from({ length: connectionCount }, () => ({
    from: Math.floor(Math.random() * nodeCount),
    to: Math.floor(Math.random() * nodeCount),
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-full bg-[#121212] overflow-hidden"
      style={{ perspective: 1000 }}
      animate={{
        rotateY: 360,
      }}
      transition={{
        duration: 20 / rotationSpeed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Render connections */}
        {connections.map((connection, idx) => {
          const fromNode = nodes[connection.from];
          const toNode = nodes[connection.to];
          return (
            <motion.div
              key={`connection-${idx}`}
              className="absolute bg-[#00A3FF]"
              style={{
                width: "1px",
                height: Math.sqrt(
                  Math.pow(toNode.x - fromNode.x, 2) +
                    Math.pow(toNode.y - fromNode.y, 2),
                ),
                left: fromNode.x + width / 2,
                top: fromNode.y + height / 2,
                opacity: connection.opacity,
                transformOrigin: "0 0",
                transform: `rotate(${Math.atan2(
                  toNode.y - fromNode.y,
                  toNode.x - fromNode.x,
                )}rad)`,
              }}
              whileHover={{ opacity: 0.8 }}
            />
          );
        })}

        {/* Render nodes */}
        {nodes.map((node, idx) => (
          <motion.div
            key={`node-${idx}`}
            className="absolute rounded-full bg-[#00A3FF]"
            style={{
              width: node.size,
              height: node.size,
              left: node.x + width / 2 - node.size / 2,
              top: node.y + height / 2 - node.size / 2,
              transform: `translateZ(${node.z}px)`,
              boxShadow: "0 0 10px rgba(0, 163, 255, 0.5)",
            }}
            whileHover={{
              scale: 2,
              boxShadow: "0 0 20px rgba(0, 163, 255, 0.8)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default NeuralNetwork3D;
