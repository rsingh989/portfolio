import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    // <div className="w-full md:h-screen p-2 flex items-center py-16">
    //   <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
    //     <div className="col-span-2">
    //       <p className="uppercase text-xl font-bold tracking-widest text-flame-950">
    //         About Me
    //       </p>
    //       <h2 className="py-4">Who I Am</h2>
    //       <p className="py-2 text-richBlack-700">
    //         I'm Raghavendra, a Product Designer and Frontend Developer
    //         with a passion for crafting exceptional digital
    //         experiences. With over two and a half years of experience
    //         in Product Design and recent expertise in Frontend
    //         Development, I bring a unique blend of skills to every
    //         project.
    //       </p>
    //       <p className="py-2 text-richBlack-700">
    //         I've worked with several startups across various
    //         industries throughout my career, helping them create
    //         amazing digital products which help digital
    //         transformation. Whether it's a mobile app, website or
    //         software product, my keen eye for design and deep
    //         understanding of user-centered design principles enable me
    //         to creeate products that are not only visually appealing
    //         but also intuitive and user-friendly.
    //       </p>
    //     </div>
    //     <div className="bg-flame-950 w-full h-auto m-auto shadow-lg rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
    //       <Image
    //         src="/assets/rags.jpeg"
    //         alt="Raghavendra Singh"
    //         width={0}
    //         height={0}
    //         sizes="100vw"
    //         className="rounded-xl"
    //         style={{
    //           width: '100vw',
    //           height: 'auto',
    //         }}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="w-full md:h-screen p-2 lg:p-16 flex items-center py-16">
      <div className="max-w-[1240px] m-auto flex flex-col-reverse justify-between items-center lg:flex-row">
        <div className="flex flex-col items-center justify-start py-4 lg:items-start">
          <p className="uppercase text-xl font-bold tracking-widest text-flame-950">
            About Me
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-richBlack-700 max-w-[85%] sm:max-w-[80%] text-center lg:text-left">
            I'm Raghavendra, a Product Designer and Frontend Developer
            with a passion for crafting exceptional digital
            experiences. With over two and a half years of experience
            in Product Design and recent expertise in Frontend
            Development, I bring a unique blend of skills to every
            project.
          </p>
          <p className="py-2 text-richBlack-700 max-w-[85%] sm:max-w-[80%] text-center lg:text-left">
            I've worked with several startups across various
            industries throughout my career, helping them create
            amazing digital products which help digital
            transformation. Whether it's a mobile app, website or
            software product, my keen eye for design and deep
            understanding of user-centered design principles enable me
            to create products that are not only visually appealing
            but also intuitive and user-friendly.
          </p>
        </div>
        <div className="bg-flame-950 max-w-[75%] md:max-w-[50%] lg:w-full h-auto m-auto shadow-lg rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/rags.jpeg"
            alt="Raghavendra Singh"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-lg"
            style={{
              width: '100vw',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
