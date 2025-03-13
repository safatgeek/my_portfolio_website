"use client"

import { useSectionInView } from '@/hooks/hooks';
import React from 'react'

const Projects = () => {
  
    const { ref } = useSectionInView("projects", 0.5);
    return (
      <div
        id="projects"
        ref={ref} className=" h-52 w-full">
        Projects
      </div>
    )
}

export default Projects