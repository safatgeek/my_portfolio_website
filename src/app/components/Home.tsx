"use client"

import { useSectionInView } from '@/hooks/hooks';
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const titles = ["Full Stack Web Developer", "Competitive Programmer"];
    const [index, setIndex] = useState(0);

    const { ref } = useSectionInView("home", 0.75)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2200); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={ref}>
            <div className='flex flex-col gap-4'>
                <span className=' text-4xl'>Hello! I'm</span>
                <span className=' text-7xl'>TANJIM SAFAT</span>
                <div className="h-10 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={titles[index]}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl block"
                        >
                            {titles[index]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Home