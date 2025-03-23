"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

const About = () => {
    const { ref } = useSectionInView("about", 0.5);

    return (
        <motion.div
            id="about"
            ref={ref}
            className="flex flex-col items-center justify-between gap-12 py-24 px-6 md:px-16 md:py-8 min-h-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1 }}
        >
            <motion.h2 
            initial={{
                y: 50,
                opacity: 0
            }}
            whileInView={{
                y:0,
                opacity:1
            }}
            transition={{
                duration: 1,
                delay: 0.3
            }}
            className="text-2xl md:text-3xl font-bold text-primary mb-4">About Me</motion.h2>

            {/* Text Section */}
            <motion.div className="flex flex-col md:flex-row items-center justify-between px-4 gap-12">
                <motion.div
                    className="text-lg md:w-2/3 text-gray-800 dark:text-gray-300"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <p className="md:leading-relaxed text-base md:text-lg text-base-content font-semibold">
                        I'm Safat, an engineering student in Electrical and Electronic Engineering (EEE) and a Junior Software Engineer. As a MERN stack developer, I have hands-on experience building scalable applications, including a Twitter clone and a commercial Tuition Media platform. With expertise in Next.js, TypeScript, Firebase authentication, MongoDB, and Cloudinary, I focus on creating efficient and user-friendly web solutions. My work involves state management, real-time features, frontend, backend and monetization strategies like Google AdSense.
                    </p>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="w-full md:w-1/3 flex justify-center"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="relative w-[260px] h-[350px] md:w-[300px] shadow-md shadow-teal-100 md:h-[400px] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/images/aboutImage.jpeg"
                            alt="About Image"
                            fill
                            className="rounded-xl object-cover"
                        />
                    </div>
                </motion.div>

            </motion.div>



        </motion.div>
    );
};

export default About;