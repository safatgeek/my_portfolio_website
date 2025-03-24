"use client"

import { useSectionInView } from '@/hooks/hooks';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Express.js", "MongoDB", "Firebase",
  "HTML", "CSS", "Tailwind CSS", "Framer Motion",
  "Prisma", "Zustand", "DaisyUI", "Resend", "Cloudinary",
  "TanStack Query"

];

const Skills = () => {
  const { ref } = useSectionInView("skills", 0.75);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-8 items-center justify-between py-24 px-6 md:px-16 md:py-8"
      id="skills"
    >
      <motion.h2

        initial={{
          opacity: 0
        }}

        whileInView={{
          opacity: 1
        }}
        transition={{
          duration: .3
        }}
        className="text-2xl md:text-3xl font-bold text-primary">
        Skills
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 w-full max-w-4xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="badge backdrop-brightness-95 badge-outline border-primary badge-lg  px-4 py-4 text-lg font-semibold shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  );
};

export default Skills;
