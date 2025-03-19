"use client"

import { useSectionInView } from '@/hooks/hooks'
import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {

  const { ref } = useSectionInView("experience", 0.75);

  const experiences = [
    {
      year: "2024 - Present",
      title: "Internship - Third Rock Technologies",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },

    {
      year: "2023 - 2024",
      title: "Internship - Third Rock Technologies",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
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
        <motion.div key={index} className='flex gap-6 w-full max-w-3xl justify-between'>
          <div className=' w-1/3'>
            {experience.year}
          </div>

          <div className='flex flex-col w-2/3'>
            <h2>{experience.title}</h2>
            <p>{experience.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Experience