const works = [
  {
    title: "Playground Equipment",
    description: "Slides, chain swings, sea-saws, merry-go-rounds for schools and public parks with strong, child-safe designs.",
    imageUrl: "https://www.playlsi.com/globalassets/1440x560-hero/challenging-play-02_1440x560.jpg",
  },
  {
    title: "Government & Contractor Works",
    description: "Trolleys, custom industrial fabrication, and heavy-duty solutions trusted by contractors and government projects.",
    imageUrl: "https://media.biltrax.com/wp-content/uploads/2022/07/iStock-1028568006.jpg",
  },
  {
    title: "Schools & Hospitals",
    description: "Durable, safe, and long-lasting structures designed for educational and healthcare institutions.",
    imageUrl: "https://cdn.prod.website-files.com/66009083978d59646ab59be1/6799cdab67f89ea7bf001207_tmppy6c_h5b.jpeg",
  },
  {
    title: "Public & Society Parks",
    description: "Benches, canopies, play structures, and urban furniture for modern community parks and green spaces.",
    imageUrl: "https://d34c09ztlk5mrb.cloudfront.net/cunningham-recreation/d2sacxxyngi6cb_cloudfront_net/Hoover_183d17ce614a305ef7e14498bef98c4b.jpg",
  },
  {
    title: "Gates, Grills & Railings",
    description: "Modern, stylish, and long-lasting designs in iron and steel for homes, offices, and industrial spaces.",
    imageUrl: "https://i0.wp.com/laitoncrafts.com/wp-content/uploads/2023/04/grills-Image-copy.webp?fit=1920%2C1080&ssl=1",
  },
  {
    title: "SS 304 Steel Work",
    description: "Professional stainless steel work with SS 304 grade – corrosion resistant and quality assured.",
    imageUrl: "https://www.azom.com/images/Article_Thumbs/ThumbForArticle_2867_16010306047694886.png",
  },
  {
    title: "Industrial Sheds",
    description: "Fabrication and design of industrial sheds with maximum strength, durability, and cost efficiency.",
    imageUrl: "https://assets.jswonemsme.com/medium_peb_industrial_28c55e9222/medium_peb_industrial_28c55e9222.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          We specialize in custom fabrication work, delivering high-quality solutions for every need:
        </h2>

        {/* Responsive Grid for Works */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((item, index) => (
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
          ))}
        </div>
      </div>

      {/* Maintenance Section */}
      <Maintenance />
    </section>
  );
}

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
