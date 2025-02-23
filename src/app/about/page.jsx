"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const DownloadIcon = ({ className = "" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      className={`transition-transform hover:scale-110 ${className}`}
    >
      <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth={1} fill="none" />
      <path
        d="M12 6V16M12 16L8 12M12 16L16 12"
        stroke="#000000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const skills = [
    "MongoDB", "Express Js", "React Js", "Node Js", "Next.js", "TypeScript",
    "Figma", "AWS", "Java", "Python", "C", "Rust", "Haskell", "SQL", "Prisma"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-blue-100 to-red-100"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12">
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-48">
          {/* Biography Section - Left aligned */}
          <div className="flex flex-col gap-12 justify-center md:flex-row md:items-start">
            <div className="md:w-3/4 md:pr-8">
              <motion.h1 
                className="font-bold text-2xl mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                BIOGRAPHY
              </motion.h1>
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I am Karthikeya Madhavan, a full-stack developer specializing in
                the MERN stack and Next.js. Passionate about building scalable and
                efficient web applications, I have experience in React, Node.js,
                Express, and MongoDB, along with server-side rendering and
                performance optimization using Next.js. My projects range from
                AI-powered applications to cloud storage platforms and real-time
                chat integrations. I am also exploring AI/ML, app development with
                React Native, and UI/UX design using Figma. Constantly innovating
                and learning, I strive to create impactful digital solutions.
              </motion.p>
              <motion.span 
                className="italic block mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Let us build something amazing together!
              </motion.span>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <a 
                href="/resume.pdf" 
                download="Karthikeya_Madhavan_Resume.pdf"
                className="group relative cursor-pointer"
                title="Download Resume"
              >
                <DownloadIcon className="group-hover:opacity-80" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Resume
                </span>
              </a>
            </div>
          </div>

          {/* Skills Section - Right aligned */}
          <div className="flex flex-col gap-12 justify-center md:flex-row-reverse md:items-start">
            <div className="md:w-3/4 md:pl-8">
              <motion.h1 
                className="font-bold text-2xl mb-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                SKILLS
              </motion.h1>
              <motion.div 
                className="flex gap-4 flex-wrap"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-colors"
                    variants={skillVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <a 
                href="/path-to-your-resume.pdf" 
                download="Karthikeya_Madhavan_Resume.pdf"
                className="group relative cursor-pointer"
                title="Download Resume"
              >
                <DownloadIcon className="group-hover:opacity-80" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Resume
                </span>
              </a>
            </div>
          </div>

          {/* Experience Section - Left aligned */}
          <div className="flex flex-col gap-12 justify-center md:flex-row md:items-start pb-12">
            <div className="md:w-3/4 md:pr-8">
              <motion.h1 
                className="font-bold text-2xl mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                EXPERIENCE
              </motion.h1>
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {[
                  {
                    title: "Full Stack Web Developer",
                    description: "Interned at Unified Mentor as a full-stack developer, working with MERN stack and Next.js to develop scalable web applications and optimize performance.",
                    date: "Sep 2024 - Nov 2024",
                    company: "Unified Mentor"
                  },
                  {
                    title: "Techkriya Web Development Team",
                    description: "We developed the Vulcanzy website using the MERN stack, implementing authentication, dynamic content management, responsive design, performance optimization, and scalability.",
                    date: "Oct 2024",
                    company: "Techkriya 2024"
                  },
                  {
                    title: "Freelancer",
                    description: "I am a freelance MERN stack developer, building scalable websites, APIs, AI integrations, real-time apps, and high-performance full-stack solutions.",
                    date: "Dec 2024 - Present",
                    company: ""
                  }
                ].map((exp, index) => (
                  <div key={index} className="border-l-2 border-black pl-4">
                    <div className="font-semibold text-lg">{exp.title}</div>
                    <div className="text-gray-600 mt-2">{exp.description}</div>
                    <div className="text-sm text-gray-500 mt-2">{exp.date}</div>
                    {exp.company && <div className="text-sm font-medium mt-1">{exp.company}</div>}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;