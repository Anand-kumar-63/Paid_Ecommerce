// import BackgroundCarousel from "../Corousel/BackGround";
const product = [
  {
    title: "Pouch Packaging Machines",
    description: "Reliable and efficient for food & consumer products. These machines ensure airtight sealing, extended shelf life, and precise portion control, making them ideal for snacks, powders, and other consumables.",
    priceRange: "₹2,50,000 – ₹5,00,000",
    location: "Industrial Area, Delhi",
    phone: "+91 98765 43210",
    image: "https://www.spackmachine.com/wp-content/uploads/2022/05/Things-to-Know-Before-Choosing-Filling-Machine-6.png",
  },
  {
    title: "Liquid Packaging Machines",
    description: "Specially designed for water & milk packaging. They maintain hygiene standards, reduce spillage, and deliver consistent volumes with every fill, ensuring safety and efficiency.",
    priceRange: "₹3,00,000 – ₹6,50,000",
    location: "Sector 22, Noida",
    phone: "+91 91234 56789",
    image: "https://assetpackaging.com.au/wp-content/uploads/2021/06/image-1.png",
  },
  {
    title: "Mixtures & Conveyers",
    description: "Smooth operations for industrial needs. Engineered to handle bulk materials with ease, these systems improve workflow efficiency, reduce manual effort, and support continuous production lines.",
    priceRange: "₹1,50,000 – ₹4,00,000",
    location: "MIDC Area, Pune",
    phone: "+91 99887 77665",
    image: "https://dphengg.com/wp-content/uploads/2022/10/1753806836-1080x675.jpg",
  },
  {
    title: "AHU Drums & Fans",
    description: "Designed for durability and performance. These components ensure optimal air handling, energy efficiency, and reduced noise, making them suitable for industrial HVAC systems.",
    priceRange: "₹80,000 – ₹2,50,000",
    location: "Peenya Industrial Hub, Bengaluru",
    phone: "+91 90123 45678",
    image: "https://moduflow.co.uk/wp-content/uploads/2019/12/hall-roof-2560454_640.jpg",
  },
  {
    title: "Transformers",
    description: "Built with precision and quality assurance. Our transformers are designed for safe power distribution, voltage regulation, and long-term reliability across various industries.",
    priceRange: "₹5,00,000 – ₹15,00,000",
    location: "Bhiwandi, Maharashtra",
    phone: "+91 93456 78901",
    image: "https://ncetest.com/wp-content/uploads/2024/05/shutterstock_1971671024-scaled.jpg",
  },
  {
    title: "Vacuum Pumps",
    description: "High-performance solutions for various industries. These pumps deliver consistent suction power, low maintenance, and energy efficiency, ideal for laboratories, manufacturing, and processing plants.",
    priceRange: "₹1,00,000 – ₹3,50,000",
    location: "Vatva GIDC, Ahmedabad",
    phone: "+91 94567 89012",
    image: "https://cpimg.tistatic.com/04478093/b/8/Dry-Vacuum-Pumps.jpg",
  },
  {
    title: "Printing Machines",
    description: "Robust machinery for printing industries. Built for precision and durability, they support high-speed printing, superior ink transfer, and long operational life for commercial printing businesses.",
    priceRange: "₹4,00,000 – ₹12,00,000",
    location: "Chandni Chowk, Delhi",
    phone: "+91 95678 12345",
    image: "https://i0.wp.com/printersparts.com/wp-content/uploads/2023/10/Heidelberg-Offset-Printers.jpg?resize=1080%2C675&ssl=1",
  },
  {
    title: "Spare Parts",
    description: "Complete spare part solutions for all our machines. From belts and motors to electronic controls, we provide high-quality replacements to minimize downtime and maximize efficiency.",
    priceRange: "₹5,000 – ₹50,000",
    location: "Rajajinagar, Bengaluru",
    phone: "+91 98765 11122",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVx0KFxpVWMha2ci8YBfpDFHILgCtlQTOhg&s",
  },
];
export default function Products() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          We specialize in custom fabrication work, offering high-quality solutions for:
        </h2>

        {/* Grid Layout for Better Look */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Product Image */}
              <div className="w-full h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-700 font-medium">💰 Price Range: {item.priceRange}</p>
                <p className="text-gray-700">📍 Location: {item.location}</p>
                <p className="text-gray-700">
                  📞 Phone:{" "}
                  <a href={`tel:${item.phone}`} className="text-blue-600 hover:underline">
                    {item.phone}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
