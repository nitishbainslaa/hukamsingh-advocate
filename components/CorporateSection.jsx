import { FaUserTie, FaChartLine, FaTh } from "react-icons/fa";

export default function CorporateSection() {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center">
          Your Legal Partner in <br />
          <span className="text-blue-600">Corporate Excellence</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">

          <div className="text-center">
            <FaUserTie className="text-5xl text-gray-700 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6">Corporate Solutions</h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We deliver tailored legal strategies to protect, grow, and
              efficiently streamline corporate operations efficiently.
            </p>
            <a href="#" className="text-blue-500 text-xl mt-4 inline-block">→</a>
          </div>

          <div className="text-center">
            <FaChartLine className="text-5xl text-gray-700 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6">Quick Resolutions</h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Timely legal intervention ensures your disputes are resolved
              with minimal delay and operational disruption.
            </p>
            <a href="#" className="text-blue-500 text-xl mt-4 inline-block">→</a>
          </div>

          <div className="text-center">
            <FaTh className="text-5xl text-gray-700 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6">Strategic Support</h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our legal experts deliver strategic guidance across critical
              regulatory, compliance, and corporate matters.
            </p>
            <a href="#" className="text-blue-500 text-xl mt-4 inline-block">→</a>
          </div>

        </div>
      </div>
    </section>
  );
}
