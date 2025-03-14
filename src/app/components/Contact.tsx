"use client";

import { useSectionInView } from "@/hooks/hooks";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebook, link: "https://www.facebook.com/tanjim.safat.2024?rdid=dodmSfN0WUhtU8Fb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19y85BuBvh", color: "#1877F2" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/tanjim-alam-524526296/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwY2xjawJBRAVleHRuA2FlbQIxMAABHdoSqCkUNYnqd_zKFW4ceN1rFyu-kxqbH7a2ceg35vUCo3u4YlnQmHHRoQ_aem_H_8LoIWjmsZsOztjQtPCiA", color: "#0077B5" },
  { icon: FaWhatsapp, link: "https://wa.me/8801910618300", color: "#25D366" },
];

const Contact = () => {
  const { ref } = useSectionInView("contact", 0.5);

  return (
    <div
      id="contact"
      ref={ref}
      className="flex flex-col w-full items-center gap-8 mt-8 px-6 md:px-12"
    >
      <motion.h2 className="text-2xl md:text-3xl font-bold text-primary">
        Contact
      </motion.h2>

      <motion.div className="flex gap-6">
        {socialLinks.map(({ icon: Icon, link, color }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
            style={{ backgroundColor: color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="text-white text-2xl" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
