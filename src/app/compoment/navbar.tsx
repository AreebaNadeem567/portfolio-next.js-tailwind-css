import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-7 text-2xl font-bold">Portfolio</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#hero" className="mr-8 hover:text-blue-900 font-extrabold text-xl">Home</Link>
          <Link href="#about" className="mr-8 hover:text-blue-600 font-extrabold text-xl">About</Link>
          <Link href="#skills" className="mr-8 hover:text-blue-600 font-extrabold text-xl">Skills</Link>
          <Link href="#projects" className="mr-8 hover:text-blue-600 font-extrabold text-xl">Projects</Link>
          <Link href="#contact" className="mr-8 hover:text-blue-600 font-extrabold text-xl">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;