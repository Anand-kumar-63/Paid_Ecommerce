// import {Data} from "./Data";

const products = [
  "Pouch Packaging Machines – Reliable and efficient for food & consumer products",
  "Liquid Packaging Machines – Specially designed for water & milk packaging",
  "Mixtures & Conveyers – Smooth operations for industrial needs",
  "AHU Drums & Fans – Designed for durability and performance",
  "Transformers – Built with precision and quality assurance",
  "Vacuum Pumps – High-performance solutions for various industries",
  "Printing Machines – Robust machinery for printing industries",
  "Spare Parts – Complete spare part solutions for all our machines",
];

export default function Products() {
  // console.log(Data);
  return (
        <section id="products" className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">⚙ Our Manufacturing Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product Cards */}
              <div className="bg-white p-8 rounded-2xl shadow-md transition-shadow hover:shadow-xl">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Pouch Packaging Machines</h3>
                <p className="text-slate-600">Reliable and efficient for food & consumer products.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md transition-shadow hover:shadow-xl">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Liquid Packaging Machines</h3>
                <p className="text-slate-600">Specially designed for water & milk packaging.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md transition-shadow hover:shadow-xl">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Mixtures & Conveyers</h3>
                <p className="text-slate-600">Smooth operations for industrial needs.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md transition-shadow hover:shadow-xl">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">AHU Drums & Fans</h3>
                <p className="text-slate-600">Designed for durability and performance.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md transition-shadow hover:shadow-xl">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Transformers</h3>
                <p className="text-slate-600">Built with precision and quality assurance.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md transition-shadow hover:shadow-xl">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Vacuum Pumps</h3>
                <p className="text-slate-600">High-performance solutions for various industries.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md transition-shadow hover:shadow-xl">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Printing Machines</h3>
                <p className="text-slate-600">Robust machinery for printing industries.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md transition-shadow hover:shadow-xl">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Spare Parts</h3>
                <p className="text-slate-600">Complete spare part solutions for all our machines.</p>
              </div>
            </div>
          </div>
        </section>  
  );
}
