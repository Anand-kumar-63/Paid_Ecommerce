import React from 'react';
import { useParams, Link } from 'react-router-dom';
// NOTE: Ensure the path to 'productsdata' is correct in your project structure
import { works } from '../../../libs/Data/productsdata'; 
import { StarIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'; 

// StarRating component remains unchanged
const StarRating = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

export function MaintenancedetailPage() {
  const { maintenanceId } = useParams();
  
  // FIX 1: Convert maintenanceId (string from URL) to a number for comparison
  const item = works.find((p) => p.id === parseInt(maintenanceId));

  if (!item) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">Work Item Not Found 😔</h1>
        <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
          Go back to all products
        </Link>
      </div>
    );
  }
  
  // Safely get gallery and reviews arrays
  const galleryImages = item.gallery || [];
  const customerReviews = item.reviews || [];

  return (
    <div className="min-h-screen bg-gray-50">

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link 
          to="/maintenance" 
          className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors mb-8"
        >
          ← Back to All Products
        </Link>
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12 border-t-4 border-blue-600">
          <div className="lg:flex lg:space-x-12">
            <div className="lg:w-1/2">
              {/* FIX 2: Changed item.image to item.imageUrl */}
              <img
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-auto max-h-[500px] rounded-xl object-contain shadow-lg border border-gray-100"
              />
            </div>
            <div className="lg:w-1/2 space-y-6 mt-8 lg:mt-0">
              <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
                {item.title}
              </h1>
              
              {/* REMOVED: item.priceRange as it's not in the provided object */}
              {/* <p className="text-2xl font-bold text-blue-600">
                💰 {item.priceRange}
              </p> */}
              
              <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-yellow-400 pl-4">
                "{item.description}"
              </p>
              <hr className="my-6" />
              
              {/* REMOVED: The Location/Contact details section as they are not in the provided object */}
              {/* <div className="space-y-3 bg-gray-50 p-4 rounded-lg border">
                ... (Location and Phone Code) ...
              </div> */}
              
              {/* UPDATED: Call to action for general enquiry, since phone is missing */}
              <button 
                // You would typically link this to a contact form or specific action
                onClick={() => alert(`Enquiring about: ${item.title}`)} 
                className="w-full inline-block text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 text-xl"
              >
                Enquire Now for Custom Quote!
              </button>
            </div>
          </div>
        </div>
        
        {/* Full Description Section */}
        {item.fullDescription && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 pb-2 border-gray-200">
              Product Specifications & Details
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg leading-relaxed text-gray-700 text-lg">
              <p>{item.fullDescription}</p>
            </div>
          </div>
        )}
        
        {/* Project Gallery Section */}
        {galleryImages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 pb-2 border-gray-200">
              Project Gallery 📸
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((src, idx) => (
                <div 
                  key={idx} 
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`${item.title} Gallery Image ${idx + 1}`}
                    className="w-full h-40 sm:h-52 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Customer Reviews Section */}
        {customerReviews.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 pb-2 border-gray-200">
              Customer Success Stories ✨
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {customerReviews.map((review, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                  <StarRating rating={review.rating} />
                  <p className="mt-3 text-gray-700 italic">"{review.text}"</p>
                  <p className="mt-4 font-semibold text-gray-800">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>


    </div>
  );
}
export default MaintenancedetailPage;