"use client"

import { useActiveSection, useTimeOfLastClick } from "@/store/store"
import { motion } from "framer-motion"

const sections = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Sidebar = () => {
  const { setActiveSectionName, activeSectionName } = useActiveSection();
  const { setTimeOfLastClick } = useTimeOfLastClick();

  return (
    <>
      {/* Desktop Sidebar (Hidden on mobile) */}
      <div className="hidden md:flex flex-col h-full p-4 w-44 lg:w-48 bg-base-content text-base-100 text-2xl items-center gap-10 fixed top-0 left-0">
        {sections.map((section) => (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            whileTap={{ scale: 0.85, rotate: 15 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              setActiveSectionName(section.id);
              setTimeOfLastClick(Date.now());
            }}
            className={`hover:bg-slate-400 px-4 py-2 rounded-full cursor-pointer ${
              activeSectionName === section.id ? "bg-slate-500 rounded-full px-4" : ""
            }`}
          >
            {section.name}
          </motion.a>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="navbar md:hidden bg-base-content text-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content w-36 bg-base-content rounded-box z-[1] mt-3 p-2 shadow"
            >
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">SAFAT</a>
        </div>
        <div className=" navbar-end"></div>
      </div>
    </>
  );
};




export default Sidebar;
