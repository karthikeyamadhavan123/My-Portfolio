"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    color: "from-blue-400 to-violet-500",
    name: "Store It",
    description:
      "Store IT is a cloud storage platform built with Next.js and Appwrite, similar to Google Drive. It allows users to securely upload, store, and manage files, including images, audio, videos, and documents.",
    githubLink: "https://github.com/karthikeyamadhavan123/store_it.git",
    vercelLink: "https://store-it-three-omega.vercel.app/sign-in",
    imgOrVideoId: "/storeit.png",
    tech: ["Next.js", "Appwrite", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    color: "from-purple-500 to-pink-500",
    name: "GymLink",
    description:
      "GymLink is a MERN-based fitness connectivity platform that helps users discover nearby gyms, book workout sessions, connect with certified trainers, and manage their fitness journey with ease.",
    githubLink: "https://github.com/karthikeyamadhavan123/GymLink",
    vercelLink: "https://gym-link.vercel.app/",
    imgOrVideoId: "/gymlink.png",
    tech: ["React", "Node.js", "MongoDB", "Express.js"]
  },
  {
    id: 3,
    color: "from-amber-400 to-orange-500",
    name: "WanderLust",
    description:
      "Wanderlust is a travel exploration platform that helps users discover destinations, plan trips, and share experiences. It provides personalized recommendations and insights to make travel planning seamless and enjoyable.",
    githubLink: "https://github.com/karthikeyamadhavan123/WanderLust",
    vercelLink: "https://wander-lust-neon.vercel.app/",
    imgOrVideoId: "/wander.png",
    tech: ["React", "Node.js", "APIs", "JavaScript"]
  },
];

const PortfolioPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-66%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        {/* Hero Section */}
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-8xl text-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <motion.h1 
            className="relative z-10 font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            My Works
          </motion.h1>
        </div>

        {/* Projects Horizontal Scroll */}
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {projects.map((project, index) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-br ${project.color} relative`}
                key={project.id}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)`,
                    backgroundSize: '30px 30px',
                    animation: 'move 20s linear infinite'
                  }}></div>
                </div>

                <div className="flex flex-col gap-6 text-white p-6 md:p-8 bg-black/20 backdrop-blur-lg rounded-3xl border border-white/20 max-w-4xl mx-4 md:mx-8 w-full max-h-[90vh] overflow-auto shadow-2xl">
                  {/* Project Title */}
                  <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-4">
                    {project.name}
                  </h1>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm md:text-base font-medium border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Image */}
                  <div className="relative w-full h-48 md:h-56 lg:h-64 xl:h-72 rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={project.imgOrVideoId}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Project Description */}
                  <p className="text-sm md:text-base lg:text-lg text-white/90 text-center leading-relaxed px-2">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-center pt-4">
                    <a
                      href={project.vercelLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-white text-gray-800 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      <span className="mr-2 group-hover:animate-bounce">🚀</span>
                      See Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      <span className="mr-2 group-hover:animate-pulse">📱</span>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="top-0 w-screen h-screen flex flex-col gap-16 items-center justify-center text-center pt-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Do you have a project?
        </motion.h1>
        
        <div className="relative z-10">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:h-[500px] md:w-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60,0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#fff" className="text-lg">
              <textPath href="#circlePath">
                MERN Stack Developer • UI/UX Designer • Full Stack Developer •
              </textPath>
            </text>
          </motion.svg>
          <motion.a
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer"
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>

      <style jsx>{`
        @keyframes move {
          0% { transform: translateX(-30px) translateY(-30px); }
          100% { transform: translateX(30px) translateY(30px); }
        }
      `}</style>
    </motion.div>
  );
};

export default PortfolioPage;