"use client";

import { useSectionInView } from "@/hooks/hooks";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Twitter Clone",
    description: "Built a Twitter clone with custom improvements, overcoming challenges in state management, API integration, and database structuring. Gained hands-on full-stack experience. Now live in my portfolio.",
    image: "/images/twitter-clone.png",
    liveLink: "https://twitter-third-rock.onrender.com",
    use: ["JavaScript", "React", "Tailwind CSS", "DaisyUI", "Express", "MongoDB", "NodeJS", "TanStack Query", "Cloudinary"],
  },
  {
    title: "BD Tuition",
    description: "A personal Next.js-based platform connecting tutors and students by subjects, districts, institutes and more. Built for commercial use with Google AdSense integration. Deployment pending.",
    image: "/images/bd-tuition.png",
    liveLink: "",
    use: ["TypeScript", "Next.JS", "Tailwind CSS", "DaisyUI", "Express", "Firebase", "MongoDB", "NodeJS", "Cloudinary"],
  },
  {
    title: "Nineteen Club",
    description: "This is a personal project I built in early 2023 when I was a beginner in development. It was originally created for a reunion of our SSC 2019 batch in my district. I used React and raw CSS. Live link available.",
    image: "/images/nineteen-club.png",
    liveLink: "https://nineteen-club.web.app",
    use: ["React", "CSS", "Firebase"],
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
      className="flex flex-col items-center gap-8 py-24 px-6 md:px-16 md:py-8"
    >
      <motion.h2 className="text-2xl md:text-3xl font-bold text-primary">
        Projects
      </motion.h2>

      <motion.div className="flex flex-col gap-6 w-full max-w-4xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`card h-[38rem] bg-base-300 md:h-96 shadow-md cursor-pointer overflow-hidden flex 
            ${index % 2 === 0 ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row-reverse"} 
            `}
            variants={isMobile ? mobileVariants : desktopVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            custom={index}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease:  "easeInOut" },
            }}
            viewport={{ once: false }}
            onClick={() => project.liveLink && window.open(project.liveLink, "_blank")}
          >
            {/* Image Container */}
            <figure className="relative w-full h-1/3 md:w-1/3 md:h-full">
              <motion.div
                className="w-full h-full"

                whileHover={isMobile
                  ? { scale: 1.05, opacity: 1 } // Mobile: Scale up
                  : { rotate: index % 2 === 0 ? 5 : -5, opacity: 1 } // Desktop: Rotate
                }
                transition={{ duration: 0.3, ease: "easeIn" }}
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
              <h2 className="card-title text-lg text-base-content font-semibold">{project.title}</h2>
              <p className=" text-base-content text-opacity-75">{project.description}</p>

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
