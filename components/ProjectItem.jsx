import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ title, backgroundImage, projectUrl }) => {
  return (
    <div className="bg-flame-950 relative flex items-center justify-center h-auto w-full shadow-lg shadow-richBlack-300 rounded-xl p-4 group hover:bg-gradient-to-r from-flame-900 to-flame-700">
      <Image
        className="rounded-lg group-hover:opacity-10"
        src={backgroundImage}
        alt="Property"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-ghostWhite tracking-wider font-bold text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-ghostWhite text-center">
          ReactJS
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-flame-950 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
