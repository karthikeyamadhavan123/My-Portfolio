"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)",
  },
};
const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
    backgroundColor: "rgb(255,255,255)",
  },
};
const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255,255,255)",
  },
};

const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition:{
      when:"beforeChildren",
      staggerChildren:0.2
    }
  },
};
const listItemsVariants={
  closed: {
    x: -10,
    opacity:0
  },
  opened: {
    x: 0,
    opacity:1
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick=()=>{
    setOpen((prev)=>!prev)
  }
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, index) => (
          <NavLink link={link} key={index} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white  mr-1">Madhavan</span>
          <span className="w-12 h-8 bg-white rounded-md text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="md:flex hidden gap-4 w-1/3 justify-center">
        <Link href="https://github.com/karthikeyamadhavan123">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/karthikeya-madhavan-95895b295/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={handleClick}
        >
          <motion.div
            variants={topVariants}
            className="w-10 h-1 bg-black origin-left"
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            className="w-10 h-1 bg-black"
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            className="w-10 h-1 bg-black origin-left"
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </button>
        {open && (
          <motion.div variants={listVariants} className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40" initial="closed" animate="opened">
            {links.map((link, index) => (
              <motion.div key={index} variants={listItemsVariants}>
                <Link href={link.url}>
                {link.title}
              </Link>
              </motion.div>
              
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
