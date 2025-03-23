"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import Image from "next/image";

const Education = () => {
  const { ref } = useSectionInView("education", 0.75);


  return (
    <div
      id="education"
      className="py-24 px-6 md:px-16 md:py-8"
      ref={ref}>
      <motion.div
        className="hidden lg:flex flex-col items-center justify-between gap-8 px-6 md:px-12"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1, delay:.3}}
        >Education</motion.h2>

        {/* Auto-Scrolling Table */}
        <motion.div

          className="overflow-x-auto rounded-lg border border-base-content/5 bg-base-100 w-full max-w-full scrollbar-hide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1 }}
        >
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-primary text-white">
              <tr>
                <th>S/N</th>
                <th>
                  Name of examination
                </th>
                <th>
                  Subject or Department
                </th>
                <th>
                  Board or Institute
                </th>
                <th>Result</th>
                <th>Passing Year</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr>
                <th>1</th>
                <td>BSc. Engg.</td>
                <td>Electrical and Electronic Engineering</td>
                <td>Begum Rokeya University, Rangpur</td>
                <td>3.10/4.00</td>
                <td>2023 to Present</td>
              </tr>
              <tr>
                <th>2</th>
                <td>HSC</td>
                <td>Science</td>
                <td>Govt. Ashek Mahmud College, Jamalpur</td>
                <td>5.00/5.00</td>
                <td>2021</td>
              </tr>
              <tr>
                <th>3</th>
                <td>SSC</td>
                <td>Science</td>
                <td>Jamalpur Zilla School, Jamalpur</td>
                <td>5.00/5.00</td>
                <td>2019</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-6 lg:hidden mt-8 p-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Education</h2>

        <div className="flex flex-col gap-6">
          {/* BRUR */}
          <div className="flex items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-purple-400">BSc. Engineering</h2>
              <p className="text-lg ">in Electrical and Electronic Engineering</p>
              <p className="">Begum Rokeya University, Rangpur</p>
              <p className=" font-semibold">CGPA: 3.10/4.00</p>
              <p className="">Year: 2023 to Present</p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className="w-32 h-32 md:w-36 md:h-36  object-contain"
                height={128}
                width={128}
                alt="BRUR Logo"
                src="/images/BRUR_Logo.svg.png"
              />
            </motion.div>
          </div>

          
          <div className="flex items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-purple-400">Higher Secondary Certificate</h2>
              <p className="text-lg ">Science</p>
              <p className="">Govt. Ashek Mahmud College, Jamalpur</p>
              <p className=" font-semibold">GPA: 5.00/5.00</p>
              <p className="">Passing Year: 2021</p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.1 }}

            >
              <Image
                className="w-28 h-36 md:w-32 md:h-36 object-contain"
                height={128}
                width={128}
                alt="AMC Logo"
                src="/images/amc.jpeg"
              />
            </motion.div>
          </div>

          
          <div className="flex items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-purple-400">Secondary School Certificate</h2>
              <p className="text-lg ">Science</p>
              <p className="">Jamalpur Zila School, Jamalpur</p>
              <p className=" font-semibold">GPA: 5.00/5.00</p>
              <p className="">Passing Year: 2019</p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}

            >
              <Image
                className="w-32 h-32 md:w-36 md:h-36  object-contain"
                height={128}
                width={128}
                alt="JZS Logo"
                src="/images/jzs.png"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

    </div>

  );
};

export default Education;
