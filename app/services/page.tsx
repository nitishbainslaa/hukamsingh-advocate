"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* ================= HERO SECTION ================= */}
        <section className="w-full `bg-gradient-to-r` from-slate-50 via-white to-blue-50 py-20 border-b">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT : TEXT CONTENT */}
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-blue-600 uppercase mb-3">
                Legal Services
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Professional Legal Support for{" "}
                <span className="text-blue-700">Criminal, Civil, Consumer & RERA Matters</span>
              </h1>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Get trusted legal guidance from an experienced trial court advocate.
                From bail and FIR quashing to property disputes and builder matters,
                we provide clear advice, strong representation, and complete support
                at every stage of your case.
              </p>

              {/* QUICK SERVICE TAGS */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white border text-sm text-gray-700 shadow-sm">
                  Bail & FIR Quashing
                </span>
                <span className="px-4 py-2 rounded-full bg-white border text-sm text-gray-700 shadow-sm">
                  Property & Civil Disputes
                </span>
                <span className="px-4 py-2 rounded-full bg-white border text-sm text-gray-700 shadow-sm">
                  Consumer & RERA Cases
                </span>
              </div>
            </div>

            {/* RIGHT : CONTACT FORM CARD */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Book a Consultation
              </h2>
              <p className="text-gray-500 text-sm mb-8 text-center">
                Share your case details and we will get back to you with the best possible legal options.
              </p>

              <form className="space-y-5">
                {/* NAME */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>

                {/* PHONE */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Email (optional)</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>

                {/* CASE TYPE */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Type of Case</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
                  >
                    <option value="">Select...</option>
                    <option>Criminal Case</option>
                    <option>Civil Case</option>
                    <option>Consumer Case</option>
                    <option>RERA / Real Estate</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Brief About Your Matter *</label>
                  <textarea
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm h-28 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                             text-sm tracking-wide shadow-md transition transform hover:translate-y-1px"
                >
                  Submit Inquiry
                </button>
              </form>

              <p className="mt-4 text-[11px] text-gray-500 text-center">
                By submitting this form, you agree to be contacted regarding your legal query.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SERVICES GRID SECTION ================= */}
        <section className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Areas of Practice
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We handle a wide range of cases with focused preparation, in-depth legal research,
              and disciplined courtroom advocacy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* CRIMINAL */}
              <div className="group p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Criminal Cases</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  Regular & anticipatory bail, FIR quashing, 498A / dowry harassment,
                  domestic violence (criminal side), cheating & fraud, cybercrime,
                  assault, threat and other IPC offences.
                </p>
                <span className="text-blue-600 text-sm font-semibold group-hover:underline cursor-pointer">
                  Learn more →
                </span>
              </div>

              {/* CIVIL */}
              <div className="group p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Civil Cases</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  Property disputes, partition and possession suits, money recovery,
                  agreements & contract disputes, injunction suits and other civil litigation.
                </p>
                <span className="text-blue-600 text-sm font-semibold group-hover:underline cursor-pointer">
                  Learn more →
                </span>
              </div>

              {/* CONSUMER */}
              <div className="group p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Consumer Cases</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  Complaints before Consumer Commission regarding deficiency in service,
                  fraud, unfair trade practices, delay in possession and defective products.
                </p>
                <span className="text-blue-600 text-sm font-semibold group-hover:underline cursor-pointer">
                  Learn more →
                </span>
              </div>

              {/* RERA */}
              <div className="group p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">RERA Cases</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  Builder disputes, delayed possession, refund & compensation claims,
                  non-execution of builder-buyer agreements, and other RERA-related issues.
                </p>
                <span className="text-blue-600 text-sm font-semibold group-hover:underline cursor-pointer">
                  Learn more →
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
