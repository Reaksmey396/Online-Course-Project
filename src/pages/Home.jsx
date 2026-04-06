// src/pages/Home.jsx

import React from "react";
import { FaFeather, FaBook } from "react-icons/fa";
import CourseCard from "../components/CourseCard";
import { GrFormNext } from "react-icons/gr";
import { motion } from "framer-motion";

import { Globe, GraduationCap, BookOpen, Shield } from "lucide-react";
import '../style/Home.css'

const features = [
  {
    id: 1,
    title: "Experienced Teacher",
    description:
      "Learn from qualified professionals across Cambodia and beyond.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    color: "text-orange-500",
  },
  {
    id: 2,
    title: "Flexible Learning",
    description:
      "Study at your own pace, anytime, anywhere on any device.",
    image: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
    color: "text-pink-500",
  },
  {
    id: 3,
    title: "Easy Bakong Payments",
    description:
      "Pay securely with Cambodia's Bakong payment system.",
    image: "https://khdemy.vercel.app/learn.jpg",
    color: "text-blue-500",
  },
];

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the basics of React and build apps.",
    price: "$49",
    image: "https://i.pinimg.com/736x/ea/ba/39/eaba39fa95402a2227b5383d1a68bc55.jpg",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master JS concepts and modern ES6+ features.",
    price: "$59",
    image: "https://i.pinimg.com/736x/ea/ba/39/eaba39fa95402a2227b5383d1a68bc55.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Design beautiful and user-friendly interfaces.",
    price: "$39",
    image: "https://i.pinimg.com/736x/ea/ba/39/eaba39fa95402a2227b5383d1a68bc55.jpg",
  },
];

const container1 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item1 = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };



const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };



  const roles = [
  {
    title: "PUBLIC USER",
    icon: <Globe size={24} />,
    color: "bg-blue-500",
    textColor: "text-blue-500",
    desc: "Browse all available courses, read blog posts, and explore learning materials — no account needed.",
    features: [
      "Browse courses & books",
      "Read blog articles",
      "View instructor profiles",
      "Register for an account",
    ],
  },
  {
    title: "STUDENT",
    icon: <GraduationCap size={24} />,
    color: "bg-green-500",
    textColor: "text-green-500",
    desc: "Enroll in courses, watch video lessons, complete quizzes, track your progress, and earn your certificate.",
    features: [
      "Enroll & access courses",
      "Watch HD video lessons",
      "Take quizzes & assessments",
      "Download certificate",
    ],
  },
  {
    title: "TEACHER",
    icon: <BookOpen size={24} />,
    color: "bg-orange-500",
    textColor: "text-orange-500",
    desc: "Create and publish courses, upload videos and materials, manage enrolled students and monitor progress.",
    features: [
      "Create & publish courses",
      "Upload videos & PDFs",
      "Manage students",
      "View course analytics",
    ],
  },
  {
    title: "ADMIN",
    icon: <Shield size={24} />,
    color: "bg-purple-500",
    textColor: "text-purple-500",
    desc: "Oversee the entire platform — manage users, approve courses, monitor activity, and control settings.",
    features: [
      "Manage all users",
      "Approve & remove courses",
      "Access platform analytics",
      "Control site settings",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-indigo-300 py-20 px-2 md:px-20 flex flex-col items-center text-center overflow-hidden">

          {/* Hero Text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-bold mb-3 text-yellow-200 animate-fadeInUp">
            Welcome to <span className="text-red-500">KL.Learn</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 text-fuchsia-600 animate-fadeInUp delay-100">
            The Best Place To Learn And Teach
          </p>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-xl text-white mb-10 max-w-2xl leading-relaxed animate-fadeInUp delay-200">
            Discover hundreds of courses taught by expert instructors. Start learning today and unlock your potential with KL.Learn.
          </p>

          <button className="flex items-center gap-2 bg-indigo-600 text-white px-7 py-3 rounded-full hover:bg-indigo-700 transition transform hover:scale-105 hover:shadow-xl animate-fadeInUp delay-100 cursor-pointer">
            <FaBook />
            Explore Courses
          </button>

          {/* Teacher Avatars */}
          <div className="flex flex-wrap justify-center items-end gap-10 mt-5">
            {[
              "https://i.pravatar.cc/150?img=1",
              "https://i.pravatar.cc/150?img=2",
              "https://i.pravatar.cc/150?img=3",
            ].map((src, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={src}
                  alt={`Teacher ${index + 1}`}
                  className={`
                    object-cover
                    w-40 h-72 md:w-48 md:h-80
                    rounded-[40px]
                    shadow-xl
                    transform transition duration-500
                    group-hover:-translate-y-6 group-hover:scale-105
                    animate-avatarEntry
                    ${index === 0 || index === 3 ? "mt-10" : "mt-0"}
                  `}
                />
              </div>
            ))}
          </div>
        </section>
        <motion.section
              className="py-32 px-3 md:px-20 bg-gray-100 text-center"
              variants={container1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={item1}
                className="text-3xl md:text-4xl font-bold text-indigo-900 mb-14"
              >
                Why should you choose KL.learn?
              </motion.h2>

              <motion.div
                variants={container1}
                className="grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                {features.map((itemData) => (
                  <motion.div
                    key={itemData.id}
                    variants={item1}
                    whileHover={{ y: -12, scale: 1.03 }}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                  >
            <motion.img
              src={itemData.image}
              alt={itemData.title}
              className="w-28 h-28 mx-auto mb-4 rounded-xl object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />

            <h3 className={`${itemData.color} font-semibold text-lg mb-2`}>
              {itemData.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {itemData.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
        {/* Courses Section */}
        <motion.section
          className="py-12 px-4 md:px-16 bg-gray-100"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
      {/* Header */}
      <motion.div
        variants={item}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 md:gap-0"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600">
            Our Course Popular
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Start learning new courses with us.
          </p>
        </div>

        <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-md 
              hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
            >
              <span>More Courses</span>
              <GrFormNext className="text-lg" />
            </motion.button>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={container}
            className="grid gap-6
                      grid-cols-1       
                      sm:grid-cols-2    
                      md:grid-cols-3    
                      lg:grid-cols-3"
          >
            {courses.map((course) => (
              <motion.div key={course.id} variants={item}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
            {/* section1 */}
        <section className="bg-gray-100 py-16 px-6 md:px-12 ">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-10">
            
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full md:w-1/2 flex justify-center"
            >
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden lg:w-[400px] lg:h-[250px] shadow-lg w-[300px] sm:w-[350px] md:w-[420px]">
                <img
                  src="https://media.greatbigphotographyworld.com/wp-content/uploads/2020/08/finding-inspiration-scaled.jpg"
                  alt="main"
                  className="w-full h-full object-cover transition duration-300 hover:scale-110 cursor-pointer"
                />
              </div>

              {/* Circle Image */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 right-[-5px] w-32 h-32 lg:w-52 lg:h-48 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                  alt="overlay"
                  className="w-full h-full object-cover transition duration-300 hover:scale-110 cursor-pointer"
                />
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-indigo-600 mb-4">
                Engaging Video Lessons
              </h2>

              <p className="text-gray-600 text-lg text-black-50 mb-6 max-w-md mx-auto md:mx-0">
                Connect with expert instructors through live sessions. Ask
                questions to support your learning journey.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition cursor-pointer"
              >
                Explore Courses
              </motion.button>
            </motion.div>
          </div>
      </section> 
      {/* section2 */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 ">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 mt-10">
            
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full md:w-1/2 flex justify-center"
            >
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden lg:w-[400px] lg:h-[250px] shadow-lg w-[300px] sm:w-[350px] md:w-[420px]">
                <img
                  src="https://media.greatbigphotographyworld.com/wp-content/uploads/2020/08/finding-inspiration-scaled.jpg"
                  alt="main"
                  className="w-full h-full object-cover transition duration-300 hover:scale-110 cursor-pointer"
                />
              </div>

              {/* Circle Image */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 right-[-5px] w-32 h-32 lg:w-52 lg:h-48 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                  alt="overlay"
                  className="w-full h-full object-cover transition duration-300 hover:scale-110 cursor-pointer"
                />
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-indigo-600 mb-4">
                Go Live and Learn
              </h2>

              <p className="text-gray-600 text-lg text-black-50 mb-6 max-w-md mx-auto md:mx-0">
               Access thousands of high-quality video lessons taught by top instructors.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition cursor-pointer"
              >
                Explore Courses
              </motion.button>
            </motion.div>
          </div>
      </section> 
      {/* One Platform, Four Roles */}
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl md:text-4xl font-bold text-indigo-600 mb-4"
          >
            One Platform, Four Roles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-xl mx-auto mb-12"
          >
            Whether you are exploring, learning, teaching, or managing — KhDemy has a dedicated experience built just for you.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-md p-6 text-left"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl text-white mb-4 ${role.color}`}
                >
                  {role.icon}
                </div>

                {/* Title */}
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full bg-opacity-10 ${role.textColor}`}
                >
                  {role.title}
                </span>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-3 mb-4">
                  {role.desc}
                </p>

                {/* Divider */}
                <hr className="my-4" />

                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-600">
                  {role.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${role.color}`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}