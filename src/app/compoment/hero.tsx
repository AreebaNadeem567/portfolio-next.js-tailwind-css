'use client';

import React from 'react';
import Navbar from './navbar';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
    <div 
      id='hero'
      className='min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white' // Gradient background
    >
      <Navbar />

      <div className="flex justify-center items-center min-h-screen">
        <div className="container grid lg:grid-cols-2 h-[calc(100vh-70px)]">
          <div className='flex flex-col justify-center p-6 space-y-4'> {/* Reduced padding and spacing */}
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold"> {/* Reduced font sizes */}
              <p>Hello, I'm</p>
              <span className="text-yellow-300">Areeba Nadeem</span> {/* Highlighted your name */}
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Digital Entrepreneur'],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <p className="mb-6 leading-relaxed text-base"> {/* Reduced font size */}
              I'm a passionate developer specializing in web development with a focus on creating dynamic and responsive applications. 
              I love bringing ideas to life with code. Let's connect and build something amazing together!
            </p>
            <Link href="#contact">
            <button className="bg-yellow-300 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out"> {/* Reduced button size */}
              Let's Contact
            </button>
            </Link>
          </div>

          <div className="flex justify-center items-center p-6"> {/* Reduced padding */}
            <img
              src="/image.jpg"
              alt="Hero"
              className="w-48 h-50 shadow-2xl transition-transform duration-500 hover:scale-105" // Square image with hover effect
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
