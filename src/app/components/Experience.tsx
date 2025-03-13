"use client"

import { useSectionInView } from '@/hooks/hooks'
import React from 'react'

const Experience = () => {

  const { ref } = useSectionInView("experience", 0.5);
  return (
    <div
      id="experience"
      ref={ref} className=" h-52 w-full">
      Experience
    </div>
  )
}

export default Experience