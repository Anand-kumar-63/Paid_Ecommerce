const data = [
  {
    name: "Anand Mahindra",
    img: "https://media.istockphoto.com/id/2063799507/photo/business-portrait-and-black-man-in-city-outdoor-for-career-or-job-of-businessman-face.jpg?s=612x612&w=0&k=20&c=DB5oXy7_aasPbpr7zfpfV92ZYsPIQfFWLyweKEz_UVs=",
    review: "Very professional service, reliable and efficient!"
  },
  {
    name: "Anand Mahindra",
    img: "https://media.istockphoto.com/id/2063799507/photo/business-portrait-and-black-man-in-city-outdoor-for-career-or-job-of-businessman-face.jpg?s=612x612&w=0&k=20&c=DB5oXy7_aasPbpr7zfpfV92ZYsPIQfFWLyweKEz_UVs=",
    review: "Great experience, I highly recommend them!"
  }
];

export default function Review() {
  return (
    <div className="w-3/4 mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Customer Reviews
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={d.img}
              alt={d.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />

            {/* Name & Review */}
            <p className="text-lg font-semibold text-gray-800">{d.name}</p>
            <p className="text-gray-600 mt-2 text-center">{d.review}</p>

            {/* Button */}
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
