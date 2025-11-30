"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">

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
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={240} height={70} alt="Logo" />
          </div>

          {/* NAVBAR DESKTOP */}
          <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
            <a href="#" className="text-blue-500 border-b-2 border-blue-500 pb-1">Home</a>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Service Location</a>
            <a href="#">Testimonial</a>
            <a href="#">Blog</a>
            <a href="#" className="bg-blue-500 text-white px-5 py-2 rounded-md">Contact</a>
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
            <a href="#" className="text-blue-500">Home</a>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Service Location</a>
            <a href="#">Testimonial</a>
            <a href="#">Blog</a>
            <a href="#" className="bg-blue-500 text-white px-5 py-2 rounded-md w-fit">Contact</a>
          </div>
        )}
      </header>

      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative w-full h-[600px]">

        {/* Background Image */}
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
        />

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 py-20">
          <h3 className="text-white text-4xl sm:text-4xl font-bold leading-tight">
            Justice, Guidance & Legal Protection
          </h3>
          <p className="text-white text-lg  mt-6 max-w-3xl">
            Professional and reliable legal support for Matrimonial, Criminal, Civil, and other disputes — 
            delivered with honesty, clarity, and strong representation.
          </p>

          <button className="bg-blue-600 text-white mt-8 px-8 py-4 rounded-full font-semibold text-lg w-fit">
            READ MORE →
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">

            {/* MAIN HEADING */}
            <h3 className="text-center md:text-5xl font-bold text-blue-700">
              Hukam Singh Bainsla – Advocate
            </h3>

            {/* SEPARATOR */}
            <hr className="mt-8 mb-12 border-gray-300" />

            {/* SMALL TOP LINE */}
            <p className="text-lg font-medium text-gray-700 mb-6">
              We provide experienced and trusted legal services to our clients.
            </p>

            {/* MAIN PARAGRAPH */}
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              I have been practicing law since 2007, representing clients before the Surajpur District Court, 
              Greater Noida, as well as Ghaziabad District Court. Over the years, I have gained extensive 
              practical experience handling Criminal Cases including bail matters, FIR quashing, domestic 
              violence cases, property disputes, financial fraud, and various IPC offences. Along with criminal 
              litigation, I also deal with Civil Cases, Consumer Forum matters, and RERA cases with strong command 
              over documentation, procedures, and courtroom strategy. My approach focuses on providing honest 
              guidance, clear legal advice, and fearless representation to ensure the best possible outcome 
              for every client.
            </p>

            <p className="text-gray-700 text-justify leading-relaxed">
              With nearly two decades of experience in trial court practice, I understand how sensitive and 
              stressful legal matters can be. Whether it is a criminal allegation, civil dispute, consumer complaint, 
              or a RERA-related issue, I work tirelessly to protect your rights, reduce your legal worries, and 
              fight for justice with determination and professionalism.
            </p>

           

          </section>
          <section className="w-full bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* 1. CRIMINAL CASES */}
    <div className="bg-white shadow-md rounded-xl overflow-hidden text-center p-6">
      <img
        src="/Criminal-Cases-Hsbainsla.png"
        alt="Criminal-Cases-Hsbainsla"
        className="w-full h-44 object-cover rounded-md"
      />

      <h3 className="text-2xl font-bold text-gray-800 mt-6">Criminal Cases</h3>

      <p className="text-gray-600 mt-4 text-base leading-relaxed">
        Expert representation for bail matters, FIR quashing, domestic violence, 498A, fraud, 
        cybercrime, and all IPC-related offences with strong defence strategy.
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
        See More
      </button>
    </div>

    {/* 2. CIVIL CASES */}
    <div className="bg-white shadow-md rounded-xl overflow-hidden text-center p-6">
      <img
        src="/civil-Cases-Hsbainsla.png"
        alt="civil-Cases-Hsbainsla"
        className="w-full h-44 object-cover rounded-md"
      />

      <h3 className="text-2xl font-bold text-gray-800 mt-6">Civil Cases</h3>

      <p className="text-gray-600 mt-4 text-base leading-relaxed">
        Solutions for property disputes, recovery suits, injunction matters,
        contract disputes, and all types of civil litigation with fair guidance.
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
        See More
      </button>
    </div>

    {/* 3. CONSUMER CASES */}
    <div className="bg-white shadow-md rounded-xl overflow-hidden text-center p-6">
      <img
        src="/Consumer-Cases-Hsbainsla.png"
        alt="Consumer-Cases-Hsbainsla"
        className="w-full h-44 object-cover rounded-md"
      />

      <h3 className="text-2xl font-bold text-gray-800 mt-6">Consumer Cases</h3>

      <p className="text-gray-600 mt-4 text-base leading-relaxed">
        Representation for consumer disputes related to fraud, defective goods/services, 
        builder delays, unfair trade practices, and all consumer rights matters.
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
        See More
      </button>
    </div>

    {/* 4. RERA CASES */}
    <div className="bg-white shadow-md rounded-xl overflow-hidden text-center p-6">
      <img
        src="/RERA-Cases-hsbiansla.png"
        alt="RERA-Cases-hsbiansla"
        className="w-full h-44 object-cover rounded-md"
      />

      <h3 className="text-2xl font-bold text-gray-800 mt-6">RERA Cases</h3>

      <p className="text-gray-600 mt-4 text-base leading-relaxed">
        Strong legal support for builder disputes, delayed possession, refund claims, 
        compensation matters, and all real estate cases under RERA.
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
        See More
      </button>
    </div>

  </div>
</section>



    </div>
  );
}
