# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


// import BackgroundCarousel from "../Corousel/BackGround";




const product = [
  {
    title: "Pouch Packaging Machines",
    description: "Reliable and efficient for food & consumer products",
    image: "https://www.spackmachine.com/wp-content/uploads/2022/05/Things-to-Know-Before-Choosing-Filling-Machine-6.png", // Example for pouch packaging
    // More images or specific product details can go here
  },
  {
    title: "Liquid Packaging Machines",
    description: "Specially designed for water & milk packaging",
    image: "https://assetpackaging.com.au/wp-content/uploads/2021/06/image-1.png", // Example for liquid packaging
  },
  {
    title: "Mixtures & Conveyers",
    description: "Smooth operations for industrial needs",
    image: "https://dphengg.com/wp-content/uploads/2022/10/1753806836-1080x675.jpg", // Example for mixtures/conveyers
  },
  {
    title: "AHU Drums & Fans",
    description: "Designed for durability and performance",
    image: "https://moduflow.co.uk/wp-content/uploads/2019/12/hall-roof-2560454_640.jpg", // Example for AHU
  },
  {
    title: "Transformers",
    description: "Built with precision and quality assurance",
    image: "https://ncetest.com/wp-content/uploads/2024/05/shutterstock_1971671024-scaled.jpg", // Example for Transformers
  },
  {
    title: "Vacuum Pumps",
    description: "High-performance solutions for various industries",
    image: "https://cpimg.tistatic.com/04478093/b/8/Dry-Vacuum-Pumps.jpg", // Example for Vacuum Pumps
  },
  {
    title: "Printing Machines",
    description: "Robust machinery for printing industries",
    image: "https://i0.wp.com/printersparts.com/wp-content/uploads/2023/10/Heidelberg-Offset-Printers.jpg?resize=1080%2C675&ssl=1", // Example for Printing Machines
  },
  {
    title: "Spare Parts",
    description: "Complete spare part solutions for all our machines",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVx0KFxpVWMha2ci8YBfpDFHILgCtlQTOhg&s", // Example for Spare Parts
  },
];

export default function Products() {
  

  return (
     <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          We specialize in custom fabrication work, offering high-quality solutions for:
        </h2>
        <div className="w-full max-w-4xl space-y-8">
          {product.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-auto transform hover:scale-105 transition-transform duration-300">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


<!-- Services -->
const works = [
  {
    title: "Playground Equipment",
    description: "Slides, chain swings, sea-saws, merry-go-rounds",
    imageUrl: "https://www.playlsi.com/globalassets/1440x560-hero/challenging-play-02_1440x560.jpg",
  },
  {
    title: "Government & Contractor Works",
    description: "Trolleys, custom industrial fabrication",
    imageUrl: "https://media.biltrax.com/wp-content/uploads/2022/07/iStock-1028568006.jpg",
  },
  {
    title: "Schools & Hospitals",
    description: "Durable and safe structures",
    imageUrl: "https://cdn.prod.website-files.com/66009083978d59646ab59be1/6799cdab67f89ea7bf001207_tmppy6c_h5b.jpeg",
  },
  {
    title: "Public & Society Parks",
    description: "Benches, canopies, play structures",
    imageUrl: "https://d34c09ztlk5mrb.cloudfront.net/cunningham-recreation/d2sacxxyngi6cb_cloudfront_net/Hoover_183d17ce614a305ef7e14498bef98c4b.jpg",
  },
  {
    title: "Gates, Grills & Railings",
    description: "Modern and long-lasting designs",
    imageUrl: "https://i0.wp.com/laitoncrafts.com/wp-content/uploads/2023/04/grills-Image-copy.webp?fit=1920%2C1080&ssl=1",
  },
  {
    title: "SS 304 Steel Work",
    description: "Professional quality assurance in stainless steel",
    imageUrl: "https://www.azom.com/images/Article_Thumbs/ThumbForArticle_2867_16010306047694886.png",
  },
  {
    title: "Industrial Sheds",
    description: "Design and fabrication with structural strength",
    imageUrl: "https://assets.jswonemsme.com/medium_peb_industrial_28c55e9222/medium_peb_industrial_28c55e9222.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          We specialize in custom fabrication work, offering high-quality solutions for:
        </h2>
        <div className="w-full max-w-4xl space-y-8">
          {works.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-auto transform hover:scale-105 transition-transform duration-300">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Maintenance />
    </section>
  );
}

function Maintenance() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Maintenance & Repair</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We provide end-to-end maintenance and repair services for machines across government and private companies. Our trained team ensures minimum downtime and maximum efficiency for your equipment.
        </p>
      </div>
    </section>
  );
}

<!-- Home -->
import React from 'react';
import Review from '../Corousel/Review';
import { useRef } from 'react';




  const reviews = [
    {
      name: "Ravi Kumar",
      text: "Exceptional quality and incredible service. They delivered our industrial shed on time and the workmanship was outstanding.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b94450371ab?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: "Sneha Sharma",
      text: "We needed custom playground equipment for our school, and their team was a pleasure to work with. The final product is safe and durable!",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1587840171676-47677d24269e?q=80&w=1935&auto=format&fit=crop',
    },
    {
      name: "Ahmed Khan",
      text: "The maintenance service for our packaging machines was seamless. Minimal downtime and our operations are back to full efficiency.",
      rating: 4,
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b89?q=80&w=1994&auto=format&fit=crop',
    },
    {
      name: "Priya Singh",
      text: "Outstanding fabrication work! The railings they installed are modern and look fantastic. Highly recommend their services.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop',
    },
    {
      name: "Michael Chen",
      text: "The new vacuum pump is a game-changer for our process. It performs exactly as promised with high efficiency.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    },
  ];

  const fabricationServices = [
  {
    image: 'https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/iron-outdoor-children-play-equipment-capacity-450-kg20230808104144.png',
    title: 'Playground Equipment',
    description: 'Slides, chain swings, sea-saws, merry-go-rounds. We build safe and durable fun for all ages.',
   
    borderColor: 'border-blue-500',
  },
  {
    image: 'https://a.fluor.com/f/1014770/1079x959/6cbe5cde52/purpose-values.png',
    title: 'Government & Contractor Works',
    description: 'Expert fabrication for trolleys and custom industrial projects, built to meet rigorous standards.',
    
    borderColor: 'border-green-500',
  },
  {
    image: 'https://5.imimg.com/data5/EQ/IB/SX/SELLER-5862332/nursing-equipment-500x500.jpg',
    title: 'Schools & Hospitals',
    description: 'Providing durable and safe structures designed for high-traffic environments and long-term use.',
    
    borderColor: 'border-purple-500',
  },
  {
    image: 'https://placehold.co/400x600/F9A8D4/ffffff?text=Park',
    title: 'Public & Society Parks',
    description: 'Crafting public benches, canopies, and play structures that are both aesthetic and resilient.',
    
    borderColor: 'border-pink-500',
  },
  {
    image: 'https://placehold.co/400x600/99F6E4/ffffff?text=Grill',
    title: 'Gates, Grills & Railings',
    description: 'Modern and long-lasting designs that combine security with elegant craftsmanship.',
    
    borderColor: 'border-teal-500',
  },
  {
    image: 'https://placehold.co/400x600/FDE68A/ffffff?text=Steel',
    title: 'SS 304 Steel Work',
    description: 'Professional quality assurance in stainless steel, guaranteeing strength and corrosion resistance.',
    
    borderColor: 'border-yellow-500',
  },
  {
    image: 'https://placehold.co/400x600/34D399/ffffff?text=Shed',
    title: 'Industrial Sheds',
    description: 'Full-service design and fabrication of industrial sheds with superior structural strength.',
    
    borderColor: 'border-lime-500',
  },
];

const customStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;


const App = () => {

const scrollContainerRef = useRef(null);

const scrollLeft = () => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  }
};


  return (
    <div className="bg-gray-100 text-gray-800 leading-relaxed font-mono">

{/* --- Home Page (Hero) --- */}
  <header className="bg-gray-900 text-white py-24 px-4 text-center font-mono">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 font-mono">
            Your Trusted Partner in Manufacturing, Fabrication & Industrial Solutions
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-8 font-mono">
            From advanced packaging machines to custom fabrication works – we deliver quality, reliability, and innovation.
          </p>
          <a href="#contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 font-mono">
            Get in Touch Today
          </a>
        </div>
      </header>

{/* --- About Us --- */}
  <section id="about" className="py-20 px-4 font-mono relative overflow-hidden">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    {/* Left Side - Image */}
    <div className="md:w-1/2 mb-8 md:mb-0">
      <img 
        src="https://kaizen.com/wp-content/uploads/2024/05/capa-22-scaled.webp" // Replace with your image URL
        alt="Industrial machinery background" 
        className="rounded-lg shadow-lg w-full h-auto"
      />
    </div>

{/* Right Side - About Us Details */}
    <div className="md:w-1/2 text-center md:text-left md:pl-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">About Us</h2>
      <p className="max-w-3xl mx-auto md:mx-0 text-gray-700 mb-10 font-mono">
        We are a **family-run business** with years of experience in manufacturing, fabrication, and industrial solutions. Our mission is to provide high-quality machinery, fabrication services, and maintenance solutions to both government and private sectors. With a strong focus on precision, durability, and customer satisfaction, we stand as a trusted partner for industries, schools, hospitals, parks, and contractors.
      </p>
    </div>
  </div>
</section>

{/* --- Manufacturing Products --- */}
  <section id="products" className="bg-white py-20 px-4 font-mono" style={{backgroundImage:"URL(https://media.istockphoto.com/id/152025595/photo/label-machine.jpg?s=612x612&w=0&k=20&c=7lHPpwf3DkY8k3I95KGpH5i7e9fbt9l2KOEzIe9NoiY=)"}}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 font-mono backdrop-filter backdrop-blur-lg">Our Manufacturing Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ProductCard title="Pouch Packaging Machines" description="Reliable and efficient for food & consumer products." />
            <ProductCard title="Liquid Packaging Machines" description="Specially designed for water & milk packaging." />
            <ProductCard title="Mixtures & Conveyers" description="Smooth operations for industrial needs." />
            <ProductCard title="AHU Drums & Fans" description="Designed for durability and performance." />
            <ProductCard title="Transformers" description="Built with precision and quality assurance." />
            <ProductCard title="Vacuum Pumps" description="High-performance solutions for various industries." />
            <ProductCard title="Printing Machines" description="Robust machinery for printing industries." />
            <ProductCard title="Spare Parts" description="Complete spare part solutions for all our machines." />
          </div>
        </div>
      </section>

      {/* --- Maintenance & Repair --- */}
      <section id="maintenance" className="py-20 px-4 font-mono" style={{backgroundImage:"URL(https://btech.id/media/images/Page/2024/01/18/Poster_Artikel_43.jpg)",backgroundSize: 'cover'}}>
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10"style={{backdropFilter:"blur(10px)"}} >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">Maintenance & Repair</h2>
            <p className="max-w-3xl mx-auto md:mx-0 text-gray-700 font-mono">
              We provide <strong>end-to-end maintenance and repair services</strong> for machines across government and private companies. Our trained team ensures <strong>minimum downtime and maximum efficiency</strong> for your equipment.
            </p>
          </div>
        </div>
      </section>

{/* --- Fabrication Works --- */}
  <section id="fabrication" >
                <div className="min-h-screen font-sans flex items-center justify-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-200">
                   <style>{customStyles}</style>
              <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 lg:space-x-16">

                {/* --- Card Section --- */}
                <div className="relative w-full lg:w-3/5">
                  <div ref={scrollContainerRef} className="flex overflow-x-auto no-scrollbar py-6 space-x-6">
                    {fabricationServices.map((service, index) => (
                      <div
                        key={index}
                        className={`group flex-shrink-0 w-80 p-4 rounded-3xl shadow-lg border border-transparent hover:${service.borderColor} transition-colors duration-300 relative overflow-hidden`}
                      >
                        {/* Card Image */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-auto rounded-2xl mb-4"
                        />
                        
                        {/* Text Content */}
                        <div className="absolute inset-x-4 bottom-4 text-white">
                          <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                          {/* <p className="text-sm font-light leading-snug">{service.description}</p> */}
                        </div>

                        {/* Optional CTA text, faded
                        <div className="absolute inset-x-4 bottom-2 text-sm text-white opacity-70">
                          {service.cta}
                        </div> */}
                      </div>
                    ))}
                  </div>

                  {/* Scroll Buttons */}
                  <button
                    onClick={scrollLeft}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
                    aria-label="Scroll left"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={scrollRight}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
                    aria-label="Scroll right"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* --- Heading and Text Section --- */}
                <div className="w-full lg:w-2/5 text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
                    Fabrication Works<br /><span className="text-blue-600"></span>
                  </h2>
                  <p className="text-lg text-blue-600 lg:text-3xl max-w-prose mx-auto lg:mx-0 ">
                    We specialize in custom fabrication projects, offering high-quality solutions for:
                  </p>
                </div>
              </div>
            </div>
      </section>

      {/* --- Reviews Carousel (New Component) --- */}
      <Review reviews={reviews} />

      {/* --- Contact Us --- */}
  <section id="contact" className="bg-gray-800 text-white py-20 px-4 text-center font-mono">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">Let’s Build Something Together!</h2>
          <p className="max-w-xl mx-auto mb-8 font-mono">
            Reach out to us for manufacturing, fabrication, or repair requirements.
          </p>
          <div className="space-y-4 font-mono">
            <p className="text-lg font-mono">📍 **Location:** [Your Address]</p>
            <p className="text-lg font-mono">📞 **Phone/WhatsApp:** [Your Number]</p>
            <p className="text-lg font-mono">📧 **Email:** [Your Email]</p>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
  <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm font-mono">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Reusable component for product cards
const ProductCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 font-mono">
  <h3 className="text-xl font-semibold text-blue-600 mb-2 font-mono">{title}</h3>
  <p className="text-gray-600 font-mono">{description}</p>
    {/* Placeholder for an image inside the card */}
  </div>
);

export default App;