import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="h-[90vh] bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-10 flex flex-col lg:flex-row gap-10">
        
        {/* Left Side - Contact Info */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg">
            We’d love to hear from you! Reach out to us through any of the following channels or drop us a message.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-blue-600" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-red-500" /> examplecompany@gmail.com
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-6 mt-6">
            <a href="#" className="text-blue-600 text-2xl hover:scale-110 transition-transform">
              <FaFacebook />
            </a>
            <a href="#" className="text-pink-600 text-2xl hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-800 text-2xl hover:scale-110 transition-transform">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side - Query Form */}
        <div className="lg:w-1/2 bg-gray-50 rounded-xl p-6 shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Query</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email or Phone</label>
              <input
                type="text"
                placeholder="Enter your email or phone number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Type your query..."
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
