"use client"

import { useSectionInView } from '@/hooks/hooks'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Experience = () => {

  const { ref } = useSectionInView("experience", 0.75);

  const experiences = [
    {
      year: "2024 - Present",
      title: "Junior Software Engineer - Third Rock Technologies",
      description: "Promoted to Junior Software Engineer after completing an internship at Third Rock Technologies. Currently working on developing web applications, optimizing performance, and collaborating with a team to implement innovative solutions."
    },

    {
      year: "2023 - 2024",
      title: "Internship - Third Rock Technologies",
      description: "Successfully completed an internship focused on web development and basic problem-solving. Gained hands-on experience in building web applications, optimizing performance, and solving real-world coding challenges."
    }
  ]
  return (
    <motion.div
      id="experience"
      ref={ref}
      className="flex flex-col w-full items-center justify-between gap-8 py-24 px-6 md:px-16 md:py-8"
    >
      <motion.h2
        className=' text-2xl md:text-3xl font-bold text-primary'
      >
        Experience
      </motion.h2>
      {experiences.map((experience, index) => (
        <AnimatePresence  key={index}>
          <motion.div
            initial={{
              scale: 0,
              y: 0,
              rotate: "180deg"
            }}

            whileInView={{
              rotate: "0deg",
              scale: 1,
              y: [0, 150,-150, -150, 0]
            }}

            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: "backOut"
            }}
           
            className='flex flex-col md:flex-row gap-6 w-full max-w-3xl justify-between bg-base-300 rounded-2xl p-4'>
            <div className=' w-full md:w-1/3 text-lg text-base-content font-semibold'>
              {experience.year}
            </div>

            <div className='flex flex-col w-full md:w-2/3'>
              <h2 className=' text-lg text-base-content font-semibold'>{experience.title}</h2>
              <p className=' mt-2 text-base-content text-opacity-75'>{experience.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

      ))}
    </motion.div>
  )
}

export default Experience