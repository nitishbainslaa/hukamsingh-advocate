"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // YAHAN STICKY LAGAYA HAI
    <div className="w-full sticky top-0 z-50 bg-white">

      {/* ------------------ TOP BAR ------------------ */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span>Have any questions?</span>
            <span className="flex items-center gap-1">
              📞 <a href="tel:+919027540711" className="text-blue-400">+91 9027-540-711</a>
            </span>
            <span className="flex items-center gap-1">
              ✉️ <a href="mailto:contact@hsbainsla.com" className="text-blue-400">contact@hsbainsla.com</a>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-blue-400">f</a>
            <a href="#" className="hover:text-blue-400">x</a>
            <a href="#" className="hover:text-blue-400">in</a>
            <a href="#" className="hover:text-blue-400">📷</a>
          </div>
        </div>
      </div>

      {/* ------------------ HEADER ------------------ */}
      {/* YAHAN SE sticky hata diya */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={240} height={70} alt="Logo" />
          </div>

          {/* NAVBAR DESKTOP */}
          <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="/about" className="hover:text-blue-500">About us</a>
            <a href="/services" className="hover:text-blue-500">Services</a>
            <a href="/locations" className="hover:text-blue-500">Service Location</a>
            <a href="/testimonials" className="hover:text-blue-500">Testimonial</a>
            <a href="/blog" className="hover:text-blue-500">Blog</a>
            <a href="/contact" className="bg-blue-500 text-white px-5 py-2 rounded-md">Contact</a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow p-4 flex flex-col gap-4 text-lg font-medium">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="/about" className="hover:text-blue-500">About us</a>
            <a href="/services" className="hover:text-blue-500">Services</a>
            <a href="/locations" className="hover:text-blue-500">Service Location</a>
            <a href="/testimonials" className="hover:text-blue-500">Testimonial</a>
            <a href="/blog" className="hover:text-blue-500">Blog</a>
            <a href="/contact" className="bg-blue-500 text-white px-5 py-2 rounded-md w-fit">
              Contact
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
