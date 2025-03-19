"use client"

import { useSectionInView } from '@/hooks/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const titles = ["Full Stack Web Developer", "Competitive Programmer"];
    const [index, setIndex] = useState(0);
    const { ref } = useSectionInView("home", 0.75);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            id='home'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            ref={ref}
            className=" py-24 px-6 md:px-16 md:py-8 flex flex-col items-center gap-12"
        >
            {/* Text Section */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left flex-1"
            >
                <span className="text-4xl font-semibold">Hello! I'm</span>
                <h1 className="text-7xl font-bold text-base-content">TANJIM SAFAT</h1>
                <div className="h-10 overflow-hidden mt-2">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={titles[index]}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl block text-gray-700"
                        >
                            {titles[index]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex justify-center"
            >
                <Image
                    className="rounded-full shadow-xl shadow-teal-100 border-4 border-base-content hover:scale-105 transition-transform duration-300"
                    src="/images/homeImage.png"
                    height={400}
                    width={400}
                    alt="Home Image"
                />
            </motion.div>
        </motion.div>
    );
};

export default Home;
