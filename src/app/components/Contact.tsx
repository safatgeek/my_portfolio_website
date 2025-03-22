"use client";

import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebook, link: "https://www.facebook.com/tanjim.safat.2024", color: "#1877F2" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/tanjim-alam-524526296", color: "#0077B5" },
  { icon: FaWhatsapp, link: "https://wa.me/8801910618300", color: "#25D366" },
];

const Contact = () => {
  const { ref } = useSectionInView("contact", 0.5);
  const [emailBody, setEmailBody] = useState("Hello! I am ...");

  return (
    <div
      id="contact"
      ref={ref}
      className="flex flex-col w-full items-center gap-14 mt-8 py-24 px-6 md:px-16 md:py-8"
    >
      <motion.h2 className="text-2xl md:text-3xl font-bold text-primary">
        Contact
      </motion.h2>

      {/* Social Links */}
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

      {/* Email Section */}
      <motion.div
        className="flex flex-col items-center w-full gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg font-medium text-base-content text-opacity-75">
          Contact me via email
        </p>

        <div className="flex flex-col items-center gap-2 w-full justify-center">
          <textarea
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
            placeholder="Primary"
            className="textarea textarea-primary rounded-2xl h-40 w-2/3 lg:w-1/4" />

          <motion.a
            href={`mailto:safatd310e@gmail.com?subject=Contacting%20From%20Portfolio&body=${encodeURIComponent(emailBody)}`}
            className="btn btn-primary p-3 w-2/3 lg:w-1/4 text-white rounded-2xl shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <button className="flex gap-4 items-center justify-between">
              <p className=" text-lg font-semibold">Send</p>
              <FaPaperPlane className="text-xl" />
            </button>

          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
