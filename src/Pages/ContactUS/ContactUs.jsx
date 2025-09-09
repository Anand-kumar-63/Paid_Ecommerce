export default function ContactUs() {
  return (
    <section id="contact" className="bg-slate-800 text-white py-12 md:py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Let’s Build Something Together!</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">Reach out to us for manufacturing, fabrication, or repair requirements.</p>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">[Your Address]</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 8.57a2 2 0 01.763 2.613l-1.95 1.95a12.185 12.185 0 005.122 5.122l1.95-1.95a2 2 0 012.613.763l2.886 2.886a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C7.683 21 4 17.317 4 13V5z" />
                </svg>
                <span className="text-lg">[Your Number]</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">[Your Email]</span>
              </div>
            </div>
          </div>
        </section>
  );
}
