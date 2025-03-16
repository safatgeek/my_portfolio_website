"use client"

import { motion } from "framer-motion";

const Divider = () => {
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
            <motion.div
                className='bg-violet-900 my-12 h-16 w-1 rounded-full hidden md:block'

                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}>

            </motion.div>
        </>
    );
};

export default Divider;
