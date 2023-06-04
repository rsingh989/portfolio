import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Importing Images and Icons
import myImage from '../public/assets/rags.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-4 md:px-12 lg:px-2 py-16 flex flex-col items-center justify-center h-full">
        <div className="flex flex-col m-auto w-full items-center justify-center lg:items-start">
          <p className="text-xl font-bold tracking-widest uppercase text-flame-950">
            Contact Me
          </p>
          <h2 className="py-4">Get In Touch</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-richBlack-300 rounded-xl p-2 bg-flame-950">
            <div className="lg:p-4 h-full rounded-lg bg-ghostWhite">
              <div className="p-4 flex items-center justify-center">
                <Image
                  className="w-80 lg:w-64 rounded-lg hover-scale-105 ease-in duration-300"
                  src={myImage}
                  alt="Raghavendra Singh"
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-center">
                <h2 className="py-2 text-flame-950">
                  Raghavendra Singh
                </h2>
                <p className="py-2 text-center text-sm md:text-lg">
                  Product Designer and Frontend Developer
                </p>
                <p className="py-4 text-center text-sm md:text-lg">
                  I am available for freelance or full-time positions.
                  Contact me and let&apos;s talk.
                </p>
              </div>
              <div className="py-4 px-8">
                <p className="uppercase pt-8 text-flame-950 font-bold text-center tracking-widest">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-4">
                  <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedin
                      size={32}
                      className="fill-ghostWhite"
                    />
                  </div>
                  <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub size={32} className="fill-ghostWhite" />
                  </div>
                  <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail
                      size={32}
                      className="fill-ghostWhite"
                    />
                  </div>
                  <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonFill
                      size={32}
                      className="fill-ghostWhite"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-3 p-2 w-full bg-flame-950 h-auto shadow-lg shadow-richBlack-300 rounded-xl">
            <div className="p-4 bg-ghostWhite rounded-lg h-full">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-ubuntu">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-richBlack-300 focus:border-flame-950 focus:outline-none transition-all duration-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-ubuntu">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-richBlack-300 focus:border-flame-950 focus:outline-none transition-all duration-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-ubuntu">
                    Email Address
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-richBlack-300 focus:border-flame-950 focus:outline-none transition-all duration-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-ubuntu">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-richBlack-300 focus:border-flame-950 focus:outline-none transition-all duration-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-ubuntu">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-richBlack-300 focus:border-flame-950 focus:outline-none transition-all duration-300"
                    rows="4"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-ghostWhite mt-4 mb-2 font-bold font-ubuntu">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                size={24}
                className="text-ghostWhite"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
