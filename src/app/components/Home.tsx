"use client"

import { useSectionInView } from '@/hooks/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Home = () => {
    const titles = ["Full Stack Web Developer", "Competitive Programmer", "Continuous learner"];
    const [index, setIndex] = useState(0);
    const { ref } = useSectionInView("home", 0.75);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2200);
        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <motion.div
            id='home'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay:.3 }}
            ref={ref}
            className=" py-24 px-6 md:px-16 md:py-8 flex flex-col items-center gap-12"
        >
            {/* Text Section */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay:.5 }}
                className="text-center md:text-left flex-1"
            >
                <span className="text-4xl font-semibold ">Hello! I&apos;m</span>
                <h1 className="text-7xl font-bold text-base-content mt-4">TANJIM SAFAT</h1>
                <div className="h-10 overflow-hidden mt-4">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={titles[index]}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl block text-base-content text-opacity-60"
                        >
                            {titles[index]}
                        </motion.span>
                    </AnimatePresence>
                </div>

            </motion.div>

            <div className='flex gap-4'>
               
                <a
                    className='transition-transform duration-300 hover:scale-110'
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/safatgeek">
                    <FaGithub className=' h-[3.25rem] w-[3.25rem] bg-white rounded-full p-1 text-black' />

                </a>

                <a
                    className='transition-transform duration-300 hover:scale-110'
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/tanjim-alam-524526296/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwY2xjawJBRAVleHRuA2FlbQIxMAABHdoSqCkUNYnqd_zKFW4ceN1rFyu-kxqbH7a2ceg35vUCo3u4YlnQmHHRoQ_aem_H_8LoIWjmsZsOztjQtPCiA">
                    <FaLinkedin className='text-sky-600 h-12 w-12 bg-white rounded' />

                </a>
                
                <a
                    className='transition-transform duration-300 hover:scale-110'
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/tanjim.safat.2024?rdid=dodmSfN0WUhtU8Fb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19y85BuBvh">
                    <FaFacebook className=' h-[3.25rem] w-[3.25rem] bg-white rounded-full p-1 text-blue-700' />

                </a>
            </div>

            {/* Image Section */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay:.5 }}
                className="flex-1 flex justify-center"
            >
                <Image
                    className="rounded-full shadow-xl shadow-teal-100 border-4 border-base-content hover:scale-105 transition-transform duration-300
                    w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
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
