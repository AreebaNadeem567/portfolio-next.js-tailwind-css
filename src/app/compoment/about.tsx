import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos'; 
import 'aos/dist/aos.css';  

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
          
          {/* Text Section */}
          <div 
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            data-aos="fade-right"  // AOS animation
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed text-lg md:text-base">
              Hi, I'm Areeba Nadeem, a passionate web developer from Karachi, currently studying BS Economics at Karachi University. 
              I specialize in HTML, CSS, TypeScript, and Next.js, building responsive and engaging websites. My focus is on mastering Next.js 
              to deliver high-quality solutions. Let's collaborate and transform your ideas into reality!
            </p>
            <div className="flex justify-center">
              <Link href="#projects">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                  Projects
                </button> 
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div 
            className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center" 
            data-aos="zoom-in-up"  // AOS animation
          >
            <img 
              className="object-cover object-center rounded-full w-3/4 h-auto max-w-xs md:max-w-sm lg:max-w-lg"
              alt="Areeba Nadeem" 
              src="/images.jpeg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
