"use client"

import { motion, useScroll } from "framer-motion"

const ScroolScaler = () => {

    const { scrollYProgress } = useScroll()
  return (
    <motion.div className=" bg-primary w-full h-3 fixed md:top-0 left-0 origin-left z-50"
    style={{
        scaleX: scrollYProgress
    }}
    >

    </motion.div>
  )
}

export default ScroolScaler