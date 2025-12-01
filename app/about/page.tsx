import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />

    <section className="w-full bg-white">

      {/* ===== TOP TITLE BAR ===== */}
      <div className="bg-[#1E3A5F] py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white">ABOUT US</h1>

          {/* Breadcrumb */}
          <p className="text-gray-200 text-sm mt-2">
            Home / About Us
          </p>
        </div>
      </div>

      {/* ===== MAIN CONTENT SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A5F] leading-snug mb-6">
            A TRUSTED LEGAL PROFESSIONAL PROVIDING CLEAR AND STRATEGIC GUIDANCE
            ON YOUR LEGAL MATTERS
          </h2>

          <p className="text-gray-700 text-justify leading-relaxed mb-2">
            Advocate Hukam Singh Bainsla has been practicing law since 2007 and 
            has built a strong reputation for providing reliable, result-oriented, 
            and ethical legal services. With years of experience in Surajpur District 
            Court, Greater Noida, and Ghaziabad Courts, he has successfully represented 
            clients in criminal, civil, consumer, and property-related matters.
          </p>

          <p className="text-gray-700 text-justify leading-relaxed mb-2">
            Known for his practical approach and deep understanding of court 
            procedures, Advocate Bainsla ensures that every client receives 
            honest advice, strategic planning, and strong representation. 
            His transparent style of communication helps clients feel confident 
            and informed throughout the legal journey.
          </p>

          <p className="text-gray-700 text-justify leading-relaxed">
            We focus on building trust, offering clarity, and delivering justice 
            with a disciplined and professional approach. Every case is handled 
            with dedication, preparation, and a strong commitment to the truth.
          </p>
        </div>

        {/* RIGHT COLUMN – IMAGE/LOGO + TEXT */}
        <div className="text-center lg:text-left">

          <img
            src="/logo.png"
            alt="HS Bainsla Advocate Logo"
            className="w-64 mx-auto lg:mx-0 mb-10"
          />

          <p className="text-gray-700 text-justify leading-relaxed mb-6">
            Our practice combines extensive experience with a modern legal approach, 
            helping us understand the concerns and objectives of every client. 
            What sets our services apart is the ability to combine strong courtroom 
            advocacy with clear communication and practical strategies.
          </p>

          <p className="text-gray-700 text-justify leading-relaxed">
            We work toward building long-term client relationships based on trust, 
            professionalism, and results. Whether handling criminal defence, 
            property disputes, or consumer complaints, we aim to provide solutions 
            that are effective, fair, and fully aligned with the client’s goals.
          </p>
        </div>
      </div>

      {/* ===== OUR MISSION / VISION / VALUES ===== */}
      <div className="bg-gray-50 py-5 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Our Mission</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              To provide honest advice, strong representation, and clear legal 
              guidance that protects client rights and ensures justice.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Our Vision</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              To be recognized as a trusted and dependable legal professional in 
              Greater Noida and Ghaziabad, known for integrity and client-focused service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Our Values</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              Integrity, Confidentiality, Hard Work, Client Satisfaction, and 
              Professional Excellence.
            </p>
          </div>
        </div>
      </div>
      <section className="w-full bg-[#F7F7F7] py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE — TEXT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3557] mb-8">
        A WORD FROM OUR CHAIRMAN
      </h2>

      <p className="text-xl italic text-gray-700 leading-relaxed mb-8">
        “The duty of a lawyer is to fight for the rights of the clients 
        every inch of the way, & at every step of their legal struggle. 
        Our team lives by this principle & would continue to do so.”
      </p>

      <h3 className="text-2xl font-bold text-[#1E3557]">
        Hukam Singh Bainsla
      </h3>
      <p className="text-lg font-semibold">
        Advocate
      </p>
    </div>

    {/* RIGHT SIDE — IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        <img
          src="/Hukam-singh-bainsla.jpg"
          alt="Chairman"
          className="w-[380px] h-[380px] object-cover rounded-full shadow-xl border-4 border-white"
        />

        {/* CALL BUTTON */}
        <a
          href="tel:+919027540711"
          className="absolute -right-5 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#0D274D] text-white 
                     px-4 py-2 rounded-full shadow-lg hover:bg-[#143861] transition"
        >
          <span className="bg-white text-[#0D274D] w-10 h-10 flex items-center justify-center rounded-full shadow">
            📞
          </span>
          <span className="font-semibold">CALL US</span>
        </a>
      </div>
    </div>

  </div>
</section>


      {/* ===== WHY CHOOSE US SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-extrabold text-[#1E3A5F] text-center mb-10">
          WHY CLIENTS CHOOSE US
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="bg-white shadow-lg p-8 rounded-xl border">
            <h4 className="text-lg font-bold mb-2">17+ Years Experience</h4>
            <p className="text-gray-700">
              Strong courtroom understanding with years of professional practice.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 rounded-xl border">
            <h4 className="text-lg font-bold mb-2">Honest Legal Guidance</h4>
            <p className="text-gray-700">
              Clear, transparent advice without false promises.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 rounded-xl border">
            <h4 className="text-lg font-bold mb-2">Strong Representation</h4>
            <p className="text-gray-700">
              Focused on strategic planning and effective advocacy.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 rounded-xl border">
            <h4 className="text-lg font-bold mb-2">Regular Updates</h4>
            <p className="text-gray-700">
              Clients always stay informed about every step of the case.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 rounded-xl border">
            <h4 className="text-lg font-bold mb-2">Complete Privacy</h4>
            <p className="text-gray-700">
              Your discussions and documents remain fully confidential.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 rounded-xl border">
            <h4 className="text-lg font-bold mb-2">Affordable Fees</h4>
            <p className="text-gray-700">
              Fair, transparent, and client-friendly pricing.
            </p>
          </div>

        </div>
      </div>

      {/* ===== CONTACT CTA SECTION ===== */}
      <div className="bg-[#1E3A5F] py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Need Legal Help?</h3>
        <p className="text-gray-200 mb-6">
          Get strong, honest, and reliable legal support today.
        </p>

        <a
          href="tel:+919027540711"
          className="inline-block bg-white text-[#1E3A5F] font-semibold px-10 py-3 
                     rounded-full text-lg shadow hover:bg-gray-200 transition"
        >
          Call: +91 9027-540-711
        </a>
      </div>

    </section>
    <Footer />
    </>
  );
}
