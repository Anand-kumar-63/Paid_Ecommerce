import { Link } from "react-router-dom"
import { products } from "../../../libs/Data/productsdata.js"
export default function Products() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          We specialize in custom fabrication work, offering high-quality solutions for:
        </h2>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <Link to={`/products/${item.id}`}>
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-700">
                  📞 Phone:{" "}
                  <a href={`tel:${item.phone}`} className="text-blue-600 hover:underline">
                    {item.phone}
                  </a>
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
