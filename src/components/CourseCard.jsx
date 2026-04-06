export default function CourseCard({ course }) {
  const isFree = course.price === 0 || course.price === "Free";

  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col
            transition transform duration-300
            hover:shadow-xl hover:-translate-y-1 hover:scale-105
            animate-fadeInUp"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-60 object-cover"
        />

        {/* Auto Tag */}
        <span
          className={`absolute top-3 left-3 text-white text-xs px-3 py-1 rounded-full 
          ${isFree ? "bg-green-500" : "bg-blue-500"}`}
        >
          {isFree ? "Free" : "Paid"}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 h-56 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="font-semibold text-indigo-600 text-2xl mb-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-black-500 text-[18px] mb-3 line-clamp-2">
          {course.description}
        </p>

        {/* Price */}
        <span className="text-2xl font-bold text-gray-900 mb-3">
          {isFree ? "Free" : course.price}
        </span>

        {/* Button */}
        <button className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white hover:text-white text-sm py-2 rounded-lg transition transform hover:scale-105 cursor-pointer">
          ចូលរៀន
        </button>
      </div>
    </div>
  );
}