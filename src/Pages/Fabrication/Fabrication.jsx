import React from 'react'

const Fabrication = () => {
  return (
    <div> <section id="fabrication" className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">🏗 Fabrication Works</h2>
            <div className="max-w-5xl mx-auto text-lg leading-relaxed">
              <p className="text-center mb-6">We specialize in custom fabrication projects, offering high-quality solutions for:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-sky-600">Playground Equipment</h3>
                  <p className="text-sm text-slate-600 mt-1">Slides, chain swings, sea-saws, merry-go-rounds</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-sky-600">Government & Contractor Works</h3>
                  <p className="text-sm text-slate-600 mt-1">Trolleys, custom industrial fabrication</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-sky-600">Schools & Hospitals</h3>
                  <p className="text-sm text-slate-600 mt-1">Durable and safe structures</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-sky-600">Public & Society Parks</h3>
                  <p className="text-sm text-slate-600 mt-1">Benches, canopies, play structures</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-sky-600">Gates, Grills & Railings</h3>
                  <p className="text-sm text-slate-600 mt-1">Modern and long-lasting designs</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-sky-600">SS 304 Steel Work</h3>
                  <p className="text-sm text-slate-600 mt-1">Professional quality assurance in stainless steel</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
                  <h3 className="font-semibold text-sky-600">Industrial Sheds</h3>
                  <p className="text-sm text-slate-600 mt-1">Design and fabrication with structural strength</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="container mx-auto px-6 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">🖼 Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="https://placehold.co/600x400/94a3b8/fff?text=Machinery" alt="Machinery" className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform transform hover:scale-105" />
            <img src="https://placehold.co/600x400/94a3b8/fff?text=Playground+Equipment" alt="Playground Equipment" className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform transform hover:scale-105" />
            <img src="https://placehold.co/600x400/94a3b8/fff?text=Fabrication+Work" alt="Fabrication Work" className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform transform hover:scale-105" />
          </div>
        </section>
</div>
  )
}

export default Fabrication