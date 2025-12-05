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
            <a href="./about">About us</a>
            <a href="./services">Services</a>
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
            <a href="/" className="text-blue-500">Home</a>
            <a href="./about">About us</a>
            <a href="./services">Services</a>
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
          <section className="w-full bg-gray-200 py-20">
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

     <section className="max-w-7xl mx-auto px-4 py-20">

            {/* MAIN HEADING */}
            <h3 className="text-left md:text-3xl font-bold">
             Trusted Criminal Lawyer in Greater Noida – Dedicated to Protecting Your Rights 
            </h3>

            {/* SEPARATOR */}
            <hr className="mt-8 mb-12 border-gray-300" />

            
            {/* MAIN PARAGRAPH */}
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              As one of the <strong>leading criminal lawyers in Greater Noida</strong>, I provide strong, 
              focused, and strategic defence in complex criminal matters. My practice is built on deep 
              courtroom experience and a clear understanding of the criminal justice system, allowing me 
              to represent clients effectively in sensitive and high-risk cases. I have successfully handled 
              bail applications, anticipatory bail, FIR quashing, 498A allegations, domestic violence matters, 
              criminal intimidation, assault cases, cheating and fraud offences, cybercrime investigations, 
              and various IPC-related charges.
            </p>

            <p className="text-gray-700 text-justify leading-relaxed">
              Criminal accusations can damage a person’s reputation, freedom, and professional life. That is 
              why I work with precision, strong legal research, and powerful arguments to protect my clients 
              at every stage — from police investigation to trial. My defence strategy focuses on facts, 
              evidence, cross-examination, and absolute commitment to safeguarding your rights. Whether you are 
              falsely implicated or facing a serious criminal allegation, my priority is to ensure a fair trial, 
              reduce your legal stress, and fight relentlessly for justice.
            </p>

          </section>
          <hr className="max-w-7xl mx-auto mb-10 border-gray-300" />

          <section className="max-w-7xl mx-auto px-0 py-15">

              <div className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGE */}
                <div>
                  <img
                    src="/office-image.jpg"
                    alt="Office Interior"
                    className="w-full h-[400px] object-cover rounded-xl shadow-md"
                  />
                </div>

                {/* RIGHT PARAGRAPH */}
                <div>
                  <p className="text-gray-700 text-justify leading-relaxed ">
                    With over 17 years of dedicated legal practice, I am committed to providing reliable, 
                    honest, and result-driven legal assistance to clients in Greater Noida and Ghaziabad. 
                    My office is designed to offer a professional and comfortable environment where clients 
                    can openly discuss their cases with complete confidentiality and trust. From the moment 
                    you enter, my aim is to make the legal process simpler, clearer, and stress-free for you. 
                    Whether you are dealing with criminal matters, bail issues, FIR quashing, 498A allegations, 
                    cybercrime investigations, or any IPC-related offences, my priority is to guide you with 
                    transparency and provide strong representation at every stage of your case. You can always 
                    expect honest advice, thorough case preparation, and a legal strategy focused entirely on 
                    protecting your rights and securing justice.
                  </p>

                  {/* BUTTON */}
                  <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition">
                    Read more
                  </button>
                </div>

              </div>
          </section>
          <section className="w-full bg-gray-200 py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

    {/* LEFT SIDE – 1/3 WIDTH (IMAGE + PARAGRAPH) */}
    <div className="col-span-1">
      <img
        src="/Contact-image.png"
        alt="Office Inside"
        className="w-full h-72 object-cover rounded-xl shadow-lg"
      />

      <p className="text-gray-700 text-justify leading-relaxed mt-6">
        My office provides a calm and professional environment where clients can
        comfortably discuss their legal matters with complete privacy and trust.
        With years of experience in handling criminal matters including bail,
        FIR quashing, 498A, cyber offences, and various IPC-related cases, my
        focus is to offer strong representation, strategic guidance, and complete
        transparency throughout the legal process. Every client receives personal
        attention, honest advice, and a defence strategy tailored specifically to
        their case needs.
      </p>
    </div>

    {/* RIGHT SIDE – 2/3 WIDTH (CONTACT FORM) */}
    <div className="col-span-2 bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
      <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Contact Us
      </h3>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* FULL NAME */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                       outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600"
          />
        </div>

        {/* MOBILE NUMBER */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Mobile Number *
          </label>
          <input
            type="tel"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                       outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600"
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Email (optional)
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                       outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600"
          />
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Your Message *
          </label>
          <textarea
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl h-32 
                       outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600"
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold
                       rounded-xl shadow-lg transition transform hover:scale-[1.02]"
          >
            Submit Inquiry
          </button>
        </div>

      </form>
    </div>
  </div>
</section>
<footer className="w-full bg-white py-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

    {/* LEFT SIDE — LOGO + TEXT */}
    <div className="flex flex-col">
      <img
        src="/Footer-Logo.png"
        alt="Footer Logo"
        className="w-78 mb-5"
      />

      <p className="text-gray-600 text-justify leading-relaxed max-w-lg">
        HS Bainsla Advocate provides reliable and result-driven legal services focused on Criminal Law, Bail Matters, FIR Quashing, 498A, Fraud, Cyber Offences, Civil and Property Disputes, and Consumer Litigation. 
      </p>
    </div>

    {/* RIGHT SIDE — MENU LINKS + SOCIAL ICONS */}
    <div className="flex flex-col items-start lg:items-end">

      {/* TOP MENU */}
      <div className="flex flex-wrap gap-8 text-gray-700 text-sm font-semibold mb-8">
        <a href="#" className="hover:text-blue-600">SITEMAP</a>
        <a href="#" className="hover:text-blue-600">ACCESSIBILITY</a>
        <a href="#" className="hover:text-blue-600">PRIVACY POLICY</a>
        <a href="#" className="hover:text-blue-600">COOKIE</a>
        <a href="#" className="hover:text-blue-600">TERMS OF USE</a>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex items-center gap-5 mb-8">
        <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center w-full border-t pt-4">
        <p className="text-gray-800 font-semibold">Copyright Protected 2025</p>
        <p className="text-gray-800 font-semibold">Hukam singh Bainsla - Advocate | All Rights Reserved</p>
      </div>

    </div>
  </div>
</footer>

    </div>
  );
}
