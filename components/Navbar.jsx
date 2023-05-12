import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// React Icons
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="bg-ghostWhite/60 backdrop-blur-md fixed w-full h-24 shadow-md z-10">
        {/* Menu Items Container */}
        <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
          {/* Logo */}
          <Image
            src="/assets/rags.png"
            alt="Rags"
            width="160"
            height="100"
          />
          {/* Menu Options */}
          <div>
            <ul className="hidden lg:flex">
              <Link href="/">
                <li className="ml-10 text-md uppercase hover:border-b-2 hover:border-flame-950 hover:-translate-y-0.5 transition-all duration-200">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-md uppercase hover:border-b-2 hover:border-flame-950 hover:-translate-y-0.5 transition-all duration-200">
                  About Me
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-md uppercase hover:border-b-2 hover:border-flame-950 hover:-translate-y-0.5 transition-all duration-200">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-md uppercase hover:border-b-2 hover:border-flame-950 hover:-translate-y-0.5 transition-all duration-200">
                  Projects
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-md uppercase hover:border-b-2 hover:border-flame-950 hover:-translate-y-0.5 transition-all duration-200">
                  Contact Me
                </li>
              </Link>
            </ul>
          </div>
          {/* Menu Icon - Tablet and Mobile */}
          <div
            onClick={handleNav}
            className="bg-flame-950 rounded-full shadow-xl shadow-gray-300 p-4 cursor-pointer lg:hidden"
          >
            <AiOutlineMenu size={24} className="fill-ghostWhite" />
          </div>
        </div>
      </div>

      {/* Menu Overlay - Tablet and Mobile */}
      <div
        className={
          nav
            ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-richBlack-950/60 z-50'
            : ''
        }
      >
        {/* Menu Container - Tablet and Mobile */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[100%] sm:w-[60%] h-screen bg-ghostWhite p-8 md:p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 w-[100%] sm:w-[60%] h-screen bg-ghostWhite p-8 md:p-10 ease-in duration-500'
          }
        >
          {/* Menu Items Container */}
          <div>
            {/* Logo */}
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/rags.png"
                width="160"
                height="80"
                alt="Logo"
              />
              {/* Menu Close Icon */}
              <div
                onClick={handleNav}
                className="bg-flame-950 rounded-full shadow-xl shadow-gray-300 p-4 cursor-pointer"
              >
                <AiOutlineClose
                  size={24}
                  className="fill-ghostWhite"
                />
              </div>
            </div>
            {/* Tagline */}
            <div className="border-b border-richBlack-300 my-8 py-2">
              <p className="text-md sm:text-lg">
                Let&apos;s build amazing technology together.
              </p>
            </div>
          </div>
          {/* Menu Options */}
          <div className="py-2 md:py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-xl sm:text-2xl">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl sm:text-2xl">About Me</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl sm:text-2xl">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl sm:text-2xl">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl sm:text-2xl">
                  Contact Me
                </li>
              </Link>
            </ul>
            <div className="pt-10 sm:pt-40">
              <p className="uppercase tracking-widest font-ubuntu text-lg text-flame-950 font-bold">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full">
                <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedin size={32} className="fill-ghostWhite" />
                </div>
                <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub size={32} className="fill-ghostWhite" />
                </div>
                <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail
                    size={32}
                    className="fill-ghostWhite"
                  />
                </div>
                <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill
                    size={32}
                    className="fill-ghostWhite"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
