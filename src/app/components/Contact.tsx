"use client"

import { useSectionInView } from '@/hooks/hooks';
import React from 'react'

const Contact = () => {
   const { ref } = useSectionInView("contact", 0.5);
    return (
      <div
        id="contact"
        ref={ref} className=" h-52 w-full">
        Contact
      </div>
    )
}

export default Contact