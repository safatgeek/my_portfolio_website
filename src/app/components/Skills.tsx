"use client"

import { useSectionInView } from '@/hooks/hooks';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "Express.js", "MongoDB", "Firebase",
  "Tailwind CSS", "Framer Motion", "Prisma", "Zustand"
];

const Skills = () => {
  const { ref } = useSectionInView("skills", 0.75);

  return (
    <motion.div
      id="skills"
      ref={ref}
      className="flex flex-col gap-8 mt-8 px-6 items-center justify-between"
    >
      <motion.h2 className="text-2xl md:text-3xl font-bold text-primary">
        Skills
      </motion.h2>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-3xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl text-center text-sm font-semibold shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
