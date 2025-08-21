"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="bg-[#121618] text-white flex justify-end items-end md:h-[100px] md:pr-30 md:pb-2">

      <ul className="hidden md:flex space-x-8 text-[16px] uppercase font-Oswald">
        <li>
          <Link href="/" className="hover:text-[#C5A059] active:text-[#C5A059] transition-colors duration-200">Home</Link>
        </li>
        <li>
          <Link href="/" className="hover:text-[#C5A059] active:text-[#C5A059] transition-colors duration-200">Menu</Link>
        </li>
        <li>
          <Link href="/" className="hover:text-[#C5A059] active:text-[#C5A059] transition-colors duration-200">Make a Reservation</Link>
        </li>
        <li>
          <Link href="/" className="hover:text-[#C5A059] active:text-[#C5A059] transition-colors duration-200">Contact Us</Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-white"><IoMdMenu /></span>
      </div>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center md:hidden">
          <li className="py-2"><Link href="/">Home</Link></li>
          <li className="py-2"><Link href="/menu">Menu</Link></li>
          <li className="py-2"><Link href="/reservation">Make a Reservation</Link></li>
          <li className="py-2"><Link href="/contact">Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
