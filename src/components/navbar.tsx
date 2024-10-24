"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle between open and closed
  };

  return (
    <nav className="bg-primary p-3 px-20 text-white font-bold flex justify-between items-center sticky top-0">
      {/* Logo Section */}
      <Link href="#hero"><h1 className="text-2xl font-bold animate-bounce">Web-Dev</h1></Link>

      {/* Desktop Links (Hidden on small screens) */}
      <ul className={`sm:flex space-x-10 hidden`}>
        <li><Link href="/" className="hover:text-accent">Home</Link></li>
        <li><Link href="/about" className="hover:text-accent">About</Link></li>
        <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
        <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
      </ul>

      {/* Hamburger Button (Visible on small screens) */}
      <button 
        className="text-3xl sm:hidden cursor-pointer" 
        onClick={toggleNavbar}
      >
        &#9776;
      </button>

      {/* Mobile Menu (Toggles open/close) */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 absolute top-16 left-0 w-full bg-primary p-6 sm:hidden">
          <li><Link href="/" className="hover:text-accent" onClick={toggleNavbar}>Home</Link></li>
          <li><Link href="/about" className="hover:text-accent" onClick={toggleNavbar}>About</Link></li>
          <li><Link href="/projects" className="hover:text-accent" onClick={toggleNavbar}>Projects</Link></li>
          <li><Link href="/contact" className="hover:text-accent" onClick={toggleNavbar}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar