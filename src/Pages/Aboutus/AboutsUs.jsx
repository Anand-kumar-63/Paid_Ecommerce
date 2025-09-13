export default function About() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 to-gray-100 py-20 px-6 md:px-20 lg:px-40 flex items-center">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          About <span className="text-blue-600">Us</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
          We are a <span className="font-semibold text-gray-900">family-run business</span> 
          with decades of experience in <span className="text-blue-600">manufacturing, fabrication, 
          and industrial solutions</span>. Our goal is to deliver innovative, durable, and 
          customer-centric products that empower industries, contractors, schools, hospitals, 
          and communities.  
          <br />
          <br />
          With a blend of modern technology and traditional craftsmanship, 
          we ensure that every project we undertake reflects <span className="font-semibold">precision, 
          quality assurance, and long-lasting value</span>. From building playground equipment 
          and industrial sheds to offering <span className="text-blue-600">maintenance & repair services</span>, 
          we stand as a trusted partner for both government and private sectors.  
        </p>

        {/* Stats / Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transform transition">
            <h3 className="text-3xl font-bold text-blue-600">25+</h3>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transform transition">
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 mt-2">Successful Projects</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transform transition">
            <h3 className="text-3xl font-bold text-blue-600">100%</h3>
            <p className="text-gray-600 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
    </section>
  );
}
