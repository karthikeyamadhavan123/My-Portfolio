"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    color: "from-blue-300 to-violet-300",
    name: "Store It",
    description:
      "Store IT is a cloud storage platform built with Next.js and Appwrite, similar to Google Drive. It allows users to securely upload, store, and manage files, including images, audio, videos, and documents.",
    githubLink: "https://github.com/karthikeyamadhavan123/store_it.git",
    vercelLink: "https://store-it-three-omega.vercel.app/sign-in",
    imgOrVideoId: "/storeit.png",
  },
  {
    id: 2,
    color: "from-violet-300 to-purple-300",
    name: "Story Craft",
    description:
      "Story Craft is a MERN-based creative writing assistant platform that helps writers draft, edit, and refine their stories with AI-powered suggestions and collaboration features.",
    githubLink: "https://github.com/karthikeyamadhavan123/StoryCraft.git",
    vercelLink: "https://storycraft-frontend.onrender.com/",
    imgOrVideoId: "/storycraft.png",
  },
  {
    id: 3,
    color: "from-red-300 to-blue-300",
    name: "WanderLust",
    description:
      "Wanderlust is a travel exploration platform that helps users discover destinations, plan trips, and share experiences. It provides personalized recommendations and insights to make travel planning seamless and enjoyable.",
    githubLink: "https://github.com/karthikeyamadhavan123/WanderLust",
    vercelLink: "https://wander-lust-neon.vercel.app/",
    imgOrVideoId: "/wander.png",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {projects.map((project) => (
              <div
                className={`h-full w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
                key={project.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-white font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                    {project.name}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[400px]">
                    <Image src={project.imgOrVideoId} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-lg">
                    {project.description}
                  </p>
                  <div className="flex gap-4 justify-end mb-20">
                    <Link
                      href={project.vercelLink}
                      className="flex items-center justify-center w-32 md:w-40 lg:w-48 p-2 text-sm md:text-md lg:text-lg bg-white text-gray-600 font-semibold rounded hover:bg-gray-100 transition-colors"
                    >
                      See Demo
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="flex items-center justify-center w-32 md:w-40 lg:w-48 p-2 text-sm md:text-md lg:text-lg bg-white text-gray-600 font-semibold rounded hover:bg-gray-100 transition-colors"
                    >
                      Github Repo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="sticky top-0 w-screen h-screen flex flex-col gap-16 items-center justify-center text-center pt-20">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
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
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-lg">
                Mern Stack Developer with UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            href="/contact"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
