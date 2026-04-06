import { useState, useEffect, useRef } from "react";

const courses = [
  {
    id: 1,
    category: "Design",
    title: "UI/UX Mastery: Design Systems at Scale",
    instructor: "Mia Tanaka",
    rating: 4.9,
    students: 12480,
    price: 89,
    duration: "42h",
    level: "Advanced",
    color: "#FF6B35",
    badge: "Bestseller",
    avatar: "MT",
  },
  {
    id: 2,
    category: "Development",
    title: "Full-Stack React & Node.js Bootcamp",
    instructor: "Luca Ferreira",
    rating: 4.8,
    students: 28110,
    price: 119,
    duration: "68h",
    level: "All Levels",
    color: "#00C9A7",
    badge: "Hot",
    avatar: "LF",
  },
  {
    id: 3,
    category: "Data Science",
    title: "Python for Machine Learning & AI",
    instructor: "Anika Sharma",
    rating: 4.9,
    students: 19300,
    price: 99,
    duration: "55h",
    level: "Intermediate",
    color: "#845EF7",
    badge: "New",
    avatar: "AS",
  },
  {
    id: 4,
    category: "Business",
    title: "Growth Hacking & Digital Marketing",
    instructor: "James Obi",
    rating: 4.7,
    students: 8750,
    price: 79,
    duration: "30h",
    level: "Beginner",
    color: "#FFD93D",
    badge: "Trending",
    avatar: "JO",
  },
  {
    id: 5,
    category: "Photography",
    title: "Cinematic Video Editing with DaVinci",
    instructor: "Sara Noel",
    rating: 4.8,
    students: 6200,
    price: 69,
    duration: "28h",
    level: "Intermediate",
    color: "#FF4D6D",
    badge: "Popular",
    avatar: "SN",
  },
  {
    id: 6,
    category: "Music",
    title: "Music Production: From Zero to Pro",
    instructor: "David Kwon",
    rating: 4.9,
    students: 9870,
    price: 94,
    duration: "38h",
    level: "All Levels",
    color: "#4CC9F0",
    badge: "Top Rated",
    avatar: "DK",
  },
];

const categories = ["All", "Design", "Development", "Data Science", "Business", "Photography", "Music"];

const stats = [
  { value: "250K+", label: "Active Learners" },
  { value: "1,800+", label: "Expert Courses" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "150+", label: "Countries Reached" },
];

const testimonials = [
  {
    name: "Carlos Mendez",
    role: "Senior Developer @ Stripe",
    quote: "Learnify completely changed my career trajectory. The quality of instruction is unmatched anywhere online.",
    avatar: "CM",
    color: "#00C9A7",
  },
  {
    name: "Priya Kapoor",
    role: "UX Lead @ Airbnb",
    quote: "I went from a complete beginner to leading a design team in 8 months. The structured paths are genius.",
    avatar: "PK",
    color: "#845EF7",
  },
  {
    name: "Olivier Blanc",
    role: "Founder @ DataFlow AI",
    quote: "The machine learning course gave me the foundation to build my startup. Worth every single cent.",
    avatar: "OB",
    color: "#FF6B35",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3.5 h-3.5 ${s <= Math.floor(rating) ? "text-amber-400" : "text-zinc-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-zinc-400 ml-1">{rating}</span>
    </div>
  );
}

function CourseCard({ course, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500"
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${course.color}30` : "0 2px 20px rgba(0,0,0,0.3)",
        animationDelay: `${index * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden" style={{ background: `linear-gradient(135deg, ${course.color}22 0%, ${course.color}44 100%)` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black" style={{ background: `${course.color}33`, color: course.color }}>
            {course.avatar}
          </div>
        </div>
        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: course.color, color: "#0a0a0a" }}>
            {course.badge}
          </span>
        </div>
        {/* Level */}
        <div className="absolute top-3 right-3">
          <span className="text-xs px-2 py-1 rounded-full bg-black/40 text-zinc-300 backdrop-blur-sm">
            {course.level}
          </span>
        </div>
        {/* Hover play */}
        <div className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: course.color }}>{course.category}</span>
        <h3 className="text-white font-bold text-sm mt-1.5 mb-3 leading-snug line-clamp-2">{course.title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-zinc-900" style={{ background: course.color }}>
            {course.avatar[0]}
          </div>
          <span className="text-zinc-400 text-xs">{course.instructor}</span>
        </div>
        <StarRating rating={course.rating} />
        <div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
          <span>{course.students.toLocaleString()} students</span>
          <span>·</span>
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
          <span className="text-white font-black text-lg">${course.price}</span>
          <button
            className="text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200"
            style={{ background: hovered ? course.color : `${course.color}22`, color: hovered ? "#0a0a0a" : course.color }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = activeCategory === "All" ? courses : courses.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-950 text-white" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700;900&family=Syne:wght@700;800&display=swap');
        .hero-font { font-family: 'Syne', sans-serif; }
        .fade-in { animation: fadeIn 0.7s ease both; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .pulse-dot { animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }
        .gradient-text { background: linear-gradient(135deg, #FF6B35, #FF4D6D, #845EF7, #4CC9F0); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .card-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(280px,1fr)); }
        .noise::before { content:''; position:absolute; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E"); pointer-events:none; z-index:1; }
        ::-webkit-scrollbar { width:6px; } ::-webkit-scrollbar-track { background:#09090b; } ::-webkit-scrollbar-thumb { background:#3f3f46; border-radius:99px; }
      `}</style>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#FF6B35,#845EF7)" }}>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <span className="font-black text-white text-lg tracking-tight hero-font">Learnify</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {["Courses", "Paths", "Instructors", "Pricing"].map((l) => (
              <a key={l} href="#" className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">{l}</a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-zinc-300 hover:text-white font-medium px-4 py-2 rounded-xl hover:bg-zinc-800 transition-all">Sign In</button>
            <button className="text-sm font-bold px-5 py-2 rounded-xl text-zinc-950 transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#FF6B35,#FF4D6D)" }}>
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 space-y-2">
            {["Courses", "Paths", "Instructors", "Pricing"].map((l) => (
              <a key={l} href="#" className="block py-2 text-zinc-300 hover:text-white font-medium text-sm">{l}</a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button className="w-full text-sm font-medium py-2.5 rounded-xl border border-zinc-700 text-zinc-300">Sign In</button>
              <button className="w-full text-sm font-bold py-2.5 rounded-xl text-zinc-950" style={{ background: "linear-gradient(135deg,#FF6B35,#FF4D6D)" }}>Get Started Free</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden noise">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "#FF6B35" }} />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ background: "#845EF7" }} />
          <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#4CC9F0" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-700 mb-6">
                <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: "#00C9A7" }} />
                <span className="text-xs font-semibold text-zinc-300">250,000+ learners enrolled this month</span>
              </div>

              <h1 className="hero-font text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
                Learn Without
                <br />
                <span className="gradient-text">Limits.</span>
              </h1>

              <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
                Expert-led courses in design, development, data science, and beyond — built for the way you actually learn.
              </p>

              {/* Search */}
              <div className={`flex items-center gap-3 bg-zinc-900 border rounded-2xl px-4 py-3 mb-8 transition-all duration-300 ${searchFocused ? "border-orange-500 shadow-lg shadow-orange-500/10" : "border-zinc-700"}`}>
                <svg className="w-5 h-5 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                <input
                  className="bg-transparent flex-1 text-white placeholder-zinc-500 text-sm outline-none"
                  placeholder="What do you want to learn today?"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <button className="text-xs font-bold px-4 py-2 rounded-xl flex-shrink-0 text-zinc-950" style={{ background: "linear-gradient(135deg,#FF6B35,#FF4D6D)" }}>
                  Search
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {["React", "Python", "UI/UX", "AI & ML", "Marketing"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 cursor-pointer transition-all">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="font-bold px-8 py-3.5 rounded-2xl text-zinc-950 text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(135deg,#FF6B35,#FF4D6D)" }}>
                  Browse All Courses
                </button>
                <button className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white font-medium group">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-zinc-500 transition-all">
                    <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right — floating cards */}
            <div className="hidden lg:block relative h-[520px]">
              {/* Main card */}
              <div className="absolute top-12 right-0 w-64 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-2xl fade-in" style={{ animationDelay: "200ms" }}>
                <div className="w-full h-28 rounded-xl mb-4 flex items-center justify-center" style={{ background: "linear-gradient(135deg,#FF6B35 0%,#FF4D6D 100%)" }}>
                  <span className="text-4xl">🎨</span>
                </div>
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">Design</span>
                <p className="text-white font-bold text-sm mt-1 mb-3">UI/UX Mastery: Design Systems</p>
                <div className="flex items-center justify-between">
                  <StarRating rating={4.9} />
                  <span className="text-white font-black">$89</span>
                </div>
              </div>

              {/* Progress card */}
              <div className="absolute top-52 left-0 w-56 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-xl fade-in" style={{ animationDelay: "350ms" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-zinc-900" style={{ background: "#00C9A7" }}>LF</div>
                  <div>
                    <p className="text-white text-xs font-bold">Full-Stack Bootcamp</p>
                    <p className="text-zinc-500 text-xs">72% complete</p>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "72%", background: "#00C9A7" }} />
                </div>
              </div>

              {/* Badge card */}
              <div className="absolute bottom-16 right-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-xl fade-in" style={{ animationDelay: "500ms" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl" style={{ background: "#845EF722" }}>🏆</div>
                  <div>
                    <p className="text-white text-xs font-bold">Certificate Earned!</p>
                    <p className="text-zinc-400 text-xs">Python for AI — Advanced</p>
                  </div>
                </div>
              </div>

              {/* Students online */}
              <div className="absolute top-4 left-8 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 shadow-xl fade-in" style={{ animationDelay: "600ms" }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: "#00C9A7" }} />
                  <span className="text-xs text-zinc-300 font-medium">3,240 learning right now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-zinc-800">
            {stats.map((s, i) => (
              <div key={i} className="fade-in text-center" style={{ animationDelay: `${i * 100 + 400}ms` }}>
                <p className="hero-font text-3xl sm:text-4xl font-extrabold gradient-text">{s.value}</p>
                <p className="text-zinc-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Top Picks</span>
            <h2 className="hero-font text-3xl sm:text-4xl font-extrabold text-white mt-2">Featured Courses</h2>
          </div>
          <a href="#" className="text-sm text-zinc-400 hover:text-white font-medium flex items-center gap-1 group">
            View all courses
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: "linear-gradient(135deg,#FF6B35,#FF4D6D)", color: "#0a0a0a" }
                  : { background: "#18181b", color: "#a1a1aa", border: "1px solid #27272a" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="card-grid gap-6">
          {filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-5 blur-3xl rounded-full" style={{ background: "linear-gradient(135deg,#845EF7,#4CC9F0)" }} />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Real Stories</span>
            <h2 className="hero-font text-3xl sm:text-4xl font-extrabold text-white mt-2">Loved by Learners Worldwide</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(s => <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-zinc-900" style={{ background: t.color }}>{t.avatar}</div>
                  <div>
                    <p className="text-white text-sm font-bold">{t.name}</p>
                    <p className="text-zinc-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center" style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FF4D6D 40%, #845EF7 100%)" }}>
          <div className="absolute inset-0 noise pointer-events-none" />
          <div className="relative z-10">
            <h2 className="hero-font text-3xl sm:text-5xl font-extrabold text-white mb-4">Start Learning Today.</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Join 250,000 learners who are already building the skills for tomorrow.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="font-bold px-8 py-3.5 rounded-2xl bg-white text-zinc-900 text-sm hover:bg-zinc-100 transition-all">
                Get Started — It's Free
              </button>
              <button className="font-bold px-8 py-3.5 rounded-2xl text-white border border-white/30 hover:bg-white/10 transition-all text-sm">
                View Pricing Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#FF6B35,#845EF7)" }}>
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <span className="font-black text-white hero-font">Learnify</span>
          </div>
          <p className="text-zinc-600 text-sm">© 2026 Learnify. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map(l => <a key={l} href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">{l}</a>)}
          </div>
        </div>
      </footer>
    </div>
  );
}
