import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import memoryImg from '../public/assets/projects/memory.jpg';
import countryImg from '../public/assets/projects/country.jpg'
import shoppieImg from '../public/assets/projects/shoppie.png'
import weatherImg from '../public/assets/projects/weather.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => { 
  return (
    <div id ='projects'className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        <strong>Projects</strong>
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Memory Game'
            backgroundImg={memoryImg}
            projectUrl='/memory'
            tech='React JS'
          />
          <ProjectItem
            title='Country API'
            backgroundImg={countryImg}
            projectUrl='/country'
            tech='React JS'

          />
          <ProjectItem
            title='SHOP-PIE APP'
            backgroundImg={shoppieImg}
            projectUrl='/shoppie'
            tech='React JS'

          />
          <ProjectItem
            title='WEATHER APP'
            backgroundImg={weatherImg}
            projectUrl='/weather'
            tech='React/API JS'

          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
