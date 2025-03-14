"use client";

import { useSectionInView } from "@/hooks/hooks";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Twitter Clone",
    description: "A full-stack Twitter clone built with Next.js, Tailwind CSS, and MongoDB. Twitter clone built with Next.js, Tailwind CSS, and MongoDB Twitter clone built with Next.js, Tailwind CSS, and MongoDB Twitter clone built with Next.js, Tailwind CSS, and MongoDB",
    image: "/images/twitter-clone-ss.png",
    liveLink: "https://twitter-clone.example.com",
    use: ["React", "Tailwind CSS", "Express", "MongoDB", "NodeJS", "DaisyUI", "Tanstack Query"],
  },
  {
    title: "E-Commerce Platform",
    description: "A Next.js-based e-commerce platform with Stripe integration.",
    image: "/images/twitter-clone-ss.png",
    liveLink: "https://ecommerce.example.com",
    use: ["React", "Tailwind CSS", "Express", "MongoDB", "NodeJS", "DaisyUI", "Tanstack Query"],
  },
];


const mobileVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
};

const desktopVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: index * 0.2 },
  })
}

const Projects = () => {
  const { ref } = useSectionInView("projects", 0.75);


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This will only run in the browser
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);

    checkScreenSize(); // Check screen size on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.div
      id="projects"
      ref={ref}
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 0.3
      }}
      className="flex flex-col items-center gap-8 mt-8 px-6 md:px-12"
    >
      <motion.h2 className="text-2xl md:text-3xl font-bold text-primary">
        Projects
      </motion.h2>

      <motion.div className="flex flex-col gap-6 w-full max-w-4xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`card bg-base-100 h-[38rem] md:h-96 shadow-md cursor-pointer overflow-hidden flex 
            ${index % 2 === 0 ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row-reverse"} 
            hover:scale-105 hover:shadow-lg transition-transform duration-300`}
            variants={isMobile ? mobileVariants : desktopVariants }
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            custom={index}
            viewport={{ once: false }}
            onClick={() => window.open(project.liveLink, "_blank")}
          >
            {/* Image Container */}
            <figure className="relative w-full h-1/3 md:w-1/3 md:h-full">
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0.5 }}
                whileHover={isMobile
                  ? { scale: 1.05, opacity: 1 } // Mobile: Scale up
                  : { rotate: index % 2 === 0 ? 5 : -5, opacity: 1 } // Desktop: Rotate
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </figure>

            {/* Card Content */}
            <div className="card-body w-full h-2/3 md:w-2/3 md:h-full flex flex-col justify-between">
              <h2 className="card-title text-lg font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>

              {/* What I Use */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.use.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  );
};

export default Projects;
