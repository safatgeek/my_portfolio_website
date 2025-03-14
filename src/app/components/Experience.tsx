"use client"

import { useSectionInView } from '@/hooks/hooks'
import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {

  const { ref } = useSectionInView("experience", 0.75);
  return (
    <motion.div
      id="experience"
      ref={ref}
      className="flex flex-col items-center justify-between gap-8 mt-8 px-6 md:px-12"
    >
      <motion.h2
      className=' text-2xl md:text-3xl font-bold text-primary'
      >
        Experience
      </motion.h2>
      <motion.div>
        d
      </motion.div>
    </motion.div>
  )
}

export default Experience