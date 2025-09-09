const works = [
  "Playground Equipment: Slides, chain swings, sea-saws, merry-go-rounds",
  "Government & Contractor Works: Trolleys, custom industrial fabrication",
  "Schools & Hospitals: Durable and safe structures",
  "Public & Society Parks: Benches, canopies, play structures",
  "Gates, Grills & Railings: Modern and long-lasting designs",
  "SS 304 Steel Work: Professional quality assurance in stainless steel",
  "Industrial Sheds: Design and fabrication with structural strength",
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 lg:px-40">
      {/* Main Heading */}
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        We specialize in fabrication custom work,
        <br /> offering high-quality solutions for:
      </h2>

      {/* Works List */}
      <ul className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-16">
        {works.map((item, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100 
                       hover:shadow-lg hover:border-gray-200 transition"
          >
            <span className="text-lg text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      {/* Maintenance Section */}
      <Maintenance />
    </section>
  );
}

function Maintenance() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-32 rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Maintenance & Repair
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
        We provide end-to-end maintenance and repair services for machines across
        government and private companies. Our trained team ensures minimum
        downtime and maximum efficiency for your equipment.
      </p>
    </section>
  );
}
