import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

//Importing Project Images
import propertyImg from '../public/projects/property.jpg';
import cryptoImg from '../public/projects/crypto.jpg';
import netflixImg from '../public/projects/netflix.jpg';
import twitchImg from '../public/projects/twitch.jpg';

const Projects = () => {
  return (
    <div id="projects" className="w-full py-16 px-8 lg:px-2 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-2 py-16 flex flex-col items-center justify-center h-full lg:items-start">
        <p className="text-xl font-bold tracking-widest uppercase text-flame-950">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8 py-4">
          <ProjectItem
            title="Property Finder"
            backgroundImage={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImage={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImage={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Twitch Clone"
            backgroundImage={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
