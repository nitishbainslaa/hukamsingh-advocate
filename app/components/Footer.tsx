"use client";

export default function Footer() {
  return (
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
            HS Bainsla Advocate provides reliable and result-driven legal services focused 
            on Criminal Law, Bail Matters, FIR Quashing, 498A, Fraud, Cyber Offences, 
            Civil and Property Disputes, and Consumer Litigation.
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
            <p className="text-gray-800 font-semibold">
              Hukam Singh Bainsla - Advocate | All Rights Reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
