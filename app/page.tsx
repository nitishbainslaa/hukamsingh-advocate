import Image from "next/image";
import CorporateSection from "../components/CorporateSection";


export default function Home() {
  return (
    <div className="w-full">

      {/* ------------------ TOP BAR ------------------ */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <span>Have any questions?</span>
            <span className="flex items-center gap-1">
            📞 <a href="tel:+919027540711" className="text-blue-400">+91 9027-540-711</a>
            </span>
            <span className="flex items-center gap-1">
              ✉️ <a href="mailto:contact@hsbainsla.com" className="text-blue-400">contact@hsbainsla.com</a>
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-blue-400">f</a>
            <a href="#" className="hover:text-blue-400">x</a>
            <a href="#" className="hover:text-blue-400">in</a>
            <a href="#" className="hover:text-blue-400">📷</a>
          </div>
        </div>
      </div>

      {/* ------------------ HEADER ------------------ */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={240} height={70} alt="Logo" />
          </div>

          {/* NAVBAR */}
          <nav className="flex items-center gap-10 text-gray-700 font-medium">
            <a href="#" className="text-blue-500 border-b-2 border-blue-500 pb-1">Home</a>
            <a href="#">About us</a>
            <a href="#">Practice Areas</a>
            <a href="#">Service Location</a>
            <a href="#">Law Resource</a>
            <a href="#" className="bg-blue-500 text-white px-5 py-2 rounded-md">Contact</a>
          </nav>
        </div>
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
        <div className="absolute inset-0 flex flex-col justify-center px-8 max-w-4xl">
          <h1 className="text-white text-6xl font-bold leading-tight">
            FIR under 498A IPC<br />
            Cruelty against women
          </h1>
          <p className="text-white text-xl mt-6">
            Top Rated 498A Case Lawyer in New Delhi, Noida and Ghaziabad
          </p>

          <button className="bg-blue-600 text-white mt-8 px-8 py-4 rounded-full font-semibold text-lg w-fit">
            READ MORE →
          </button>
        </div>
      </section>
      <div>
      {/* YOUR HERO SECTION */}

      <CorporateSection />

      {/* MORE SECTIONS */}
    </div>
    </div>
  );
}
