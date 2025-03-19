"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Divider = () => {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDirection("down"); // Scrolling down
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up"); // Scrolling up
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Horizontal Divider for Small Screens */}
            <motion.div
                className="w-full h-[2px] bg-gray-300 dark:bg-gray-700 my-12 md:hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Vertical Divider for Large Screens */}
            <div className="relative flex flex-col items-center">
              

                {/* Dynamic Arrow based on Scroll Direction */}
                <motion.span
                    className="hidden md:block text-violet-900 text-4xl"
                    key={scrollDirection} // Re-render when direction changes
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 5 }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    {scrollDirection === "down" ? "↓" : "↑"}
                </motion.span>
            </div>
        </>
    );
};

export default Divider;
