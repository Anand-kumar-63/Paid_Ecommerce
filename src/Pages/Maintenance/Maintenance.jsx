import {Link} from "react-router-dom";
import {works} from "../../../libs/Data/productsdata"
export default function Services() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          We specialize in custom fabrication work, delivering high-quality solutions for every need:
        </h2>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((item, index) => (
            <Link to={`/maintenance/${item.id}`} >
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-64">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <Maintenance />
    </section>
  );}

function Maintenance() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 mt-16 shadow-inner">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Maintenance & Repair Services
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          We don’t just build — we ensure your equipment stays in{" "}
          <span className="font-semibold text-blue-600">peak condition</span>.
          Our dedicated maintenance team provides{" "}
          <span className="font-semibold">end-to-end support</span> across
          government, corporate, and private sectors. With{" "}
          <span className="font-semibold">minimal downtime</span> and{" "}
          <span className="font-semibold">maximum efficiency</span>, we help
          extend the life of your machines.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">✔ Regular Checkups</h3>
            <p className="text-gray-600">
              Scheduled inspections and servicing to prevent unexpected
              breakdowns and keep operations smooth.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">✔ Emergency Repairs</h3>
            <p className="text-gray-600">
              Quick-response repair service available 24/7 to reduce production
              downtime and restore operations.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">✔ AMC Packages</h3>
            <p className="text-gray-600">
              Cost-effective annual maintenance contracts with priority service
              and full equipment coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
