import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm sm:text-md lg:text-lg font-bold tracking-widest text-flame-950">
            Let&apos;s Build Something Together
          </p>
          <h1 className="py-4 text-richBlack-800">
            Hey, I&apos;m <span className="text-flame-950">Rags</span>
            .
          </h1>
          <h2 className="py-4 text-richBlack-950">
            Product Designer and Frontend Developer
          </h2>
          <p className="py-4 text-lg text-richBlack-700 max-w-[85%] sm:max-w-[80%] lg:max-w-[60%] m-auto">
            I work with startups to build applications with a strong
            focus on user-centered design and branding. I bring a
            unique blend of skills to the table that allows me to
            create cohesive and effective applications that not only
            look great, but also help to build and strengthen the
            organisation&apos;s brand identity.
          </p>
          <div className="flex items-center justify-between max-w-[320px] sm:max-w-[360px] m-auto py-4">
            <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedin size={32} className="fill-ghostWhite" />
            </div>
            <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub size={32} className="fill-ghostWhite" />
            </div>
            <div className="bg-flame-950 rounded-full shadow-lg shadow-richBlack-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail size={32} className="fill-ghostWhite" />
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
  );
};

export default Hero;
