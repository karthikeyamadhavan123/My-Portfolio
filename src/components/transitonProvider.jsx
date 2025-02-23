"use client";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  /* eslint-disable-next-line no-unused-vars */
  const [isFirstMount, setIsFirstMount] = useState(true);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      setIsFirstMount(false);
    }
    prevPathnameRef.current = pathname;
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        {!isHomePage && (
          <>
            {/* Black background slides down first */}
            <motion.div
              className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40 top-0" // Starts above the screen
              animate={{ height: "0vh" }} // Slides down to cover the screen
              exit={{ height: "140vh" }} // Slides down and exits
              transition={{ duration: 0.5, ease: "easeOut" }} // 2-second animation
            />
             <motion.div
              className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default  z-50 w-fit h-fit" // Starts above the screen
              initial={{opacity:1}}
              animate={{ opacity:0 }} // Slides down to cover the screen
              exit={{ opacity:0 }} // Slides down and exits
              transition={{ duration: 0.8, ease: "easeOut" }} // 2-second animation
            >
                {pathname.substring(1)}
            </motion.div>
            {/* Red background slides up after black completes */}
            <motion.div
              className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
              initial={{ height: "140vh" }} // Starts below the screen
              animate={{ height: "0vh" }} // Slides up to cover the screen
              exit={{ height: "140vh" }} // Slides down and exits
              transition={{ delay: 0.5, ease: "easeOut" }} // Starts after black completes (2-second delay)
            />
          </>
        )}
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;