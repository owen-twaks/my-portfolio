import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdExpandMore } from "react-icons/md";



const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            <strong>About</strong>
          </p>
          <h2 className='py-4'>Who I Am</h2>
           <p className='py-2 text-gray-600'>
           <strong>I am Junior <span className='text-[#5651e5]'>Fullstack web developer</span></strong>
          </p>
          <p className='py-2 text-gray-600'>
            I recently graduated from a Hyperiondev Software development
            Bootcamp and aspire to master my skills in HTML, CSS, JavaScript, MongoDB, Express, React, Node.js
            Next.js as well as build my career into a leadership role. I am a family-oriented person who enjoys
            creative arts and arranging events in my spare time. I have a strong working background in fast-paced
            environments and have worked in Operations, Sales, and Marketing, where I developed strong
            organization, communication, and problem-solving skills
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning development and was even more
            enthused with making websites interactive. I am
            now spending my time building projects with React JS, Api ect, and
            learning new technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
          </div>
          
       

        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <img
            className='rounded-xl'
            src="/owen.png"
            alt='/'
          />
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link href="/OwenCV.pdf" target="_blank" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
