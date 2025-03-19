"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

const About = () => {
    const { ref } = useSectionInView("about", 0.75);

    return (
        <motion.div
            id="about"
            ref={ref}
            className="flex flex-col md:flex-row items-center justify-between gap-12 mt-12 px-6 md:px-16 py-8 min-h-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1 }}
        >
            {/* Text Section */}
            <motion.div
                className="text-lg md:w-2/3 text-gray-800 dark:text-gray-300"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">About Me</h2>
                <p className="leading-relaxed text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis saepe deserunt ex sapiente in beatae
                    reprehenderit qui eaque? Unde magni recusandae voluptatibus distinctio consequatur nihil quaerat optio delectus nemo.
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
                <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                    <Image
                        src="/images/aboutImage.jpeg"
                        alt="About Image"
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default About;