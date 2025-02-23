"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const Homepage = () => {
  const [hasMounted, setHasMounted] = useState(false);


  useEffect(() => {
      setHasMounted(true);
  },[]);

  
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y:"0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:h-full">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" className="object-contain" fill priority />
        </div>

        {/* Text and Buttons Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-start justify-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>

          {/* Paragraph */}
          <p className="md:text-xl text-gray-700">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded ring-1 ring-black bg-black text-white hover:bg-gray-800 transition-colors">
              View My Work
            </button>
            <button className="p-4 rounded ring-1 ring-black hover:bg-gray-100 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
