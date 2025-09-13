import React from "react";
import products from "../Products/Data"
import CorouselItem from "../../Components/Corousel/CorouselItem";
import Fabrication from "../Fabrication/Fabrication";
// The main App component that contains the entire website
const Hero = () => {
  // console.log(Products);
  return (
    <div className="bg-gray-50 text-slate-800 font-inter">
      <main className="space-y-20">
        {/* Home Section */}
        <section
          id="home"
          className={`bg-[url(Images/HeroSection.jpg)] h-[92vh] bg-center relative py-24 md:py-32 overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-10 text-center relative z-10">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4 leading-12 text-white">
              Your Trusted Partner in <br /> Manufacturing, Fabrication &
              Industrial Solutions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-60 text-white font-medium max-w-4xl mx-auto">
              From advanced packaging machines to custom fabrication works – we
              deliver quality, reliability, and innovation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-sky-800 px-10 py-2 rounded-md text-lg font-semibold shadow-xl transition-all hover:bg-gray-200 transform hover:scale-105"
            >
              <span className="mr-2">👉</span> Get in Touch Today
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about-us"
          className="container mx-auto py-20 md:py-2 flex flex-row space-x-10 justify-center items-center"
        >
          <div className="bg-blue-50 p-18">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              📖 About Us
            </h2>
            <div className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
              <p className="w-140">
                We are a family-run business with years of experience in{" "}
                <i className="text-blue-700">
                  manufacturing, fabrication, and industrial solutions
                </i>{" "}
                . Our mission is to provide high-quality machinery, fabrication
                services, and maintenance solutions to both government and
                private sectors. With a strong focus on precision, durability,
                and customer satisfaction, we stand as a trusted partner for
                industries, schools, hospitals, parks, and contractors.
              </p>
            </div>
          </div>
          <div>
            <img
              src="Images/Aboutus.png"
              alt="Aboutus"
              className="object-cover rounded-sm"
              height={30}
              width={400}
            />
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className=" bg-white py-12 md:py-20">
          <div className="container mx-auto px-26">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              ⚙ Our Manufacturing Products
            </h2>
            <CorouselItem data={products} />
          </div>
        </section>

        {/* Maintenance Section */}
        <div className="flex flex-row justify-around m-20  h-[50vh]">
          <section
            id="maintenance"
            className="container mx-auto px-6 py-14 md:py-24 w-[700px] bg-gray-100 flex flex-col"

          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 mr-10">
              🔧 Maintenance & Repair
            </h2>
            <p className="leading-8">
              We provide end-to-end i
              <i className="font-bold text-blue-900 text-xl"> maintenance and repair services </i>  for machines
              across government and private companies. Our trained team ensures
              minimum downtime and maximum efficiency for your equipment.
            </p>
          </section>
          <div>
            <img
              src="/Images/Maintainance.jpg"
              alt="Maintenance"
              className="object-cover rounded-sm shadow-blue-950"
              height={400}
              width={550}
            />
          </div>
        </div>

        {/* Fabrication Section */}
        <section id="fabrication" className="bg-gray-100 py-12 md:py-20">
          <Fabrication /> 
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="container mx-auto px-6 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            🖼 Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://placehold.co/600x400/94a3b8/fff?text=Machinery"
              alt="Machinery"
              className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform transform hover:scale-105"
            />
            <img
              src="https://placehold.co/600x400/94a3b8/fff?text=Playground+Equipment"
              alt="Playground Equipment"
              className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform transform hover:scale-105"
            />
            <img
              src="https://placehold.co/600x400/94a3b8/fff?text=Fabrication+Work"
              alt="Fabrication Work"
              className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform transform hover:scale-105"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-slate-800 text-white py-12 md:py-20"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📞 Let’s Build Something Together!
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
              Reach out to us for manufacturing, fabrication, or repair
              requirements.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-lg">[Your Address]</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 8.57a2 2 0 01.763 2.613l-1.95 1.95a12.185 12.185 0 005.122 5.122l1.95-1.95a2 2 0 012.613.763l2.886 2.886a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C7.683 21 4 17.317 4 13V5z"
                  />
                </svg>
                <span className="text-lg">[Your Number]</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-lg">[Your Email]</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Hero;
