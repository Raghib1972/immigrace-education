
import React, { useState } from "react";
import {
    FaArrowRight,
    FaBook,
    FaCalendar,
    FaClock,
    FaGlobe,
    FaGraduationCap,
    FaLightbulb,
    FaSearch,
    FaUser,
} from "react-icons/fa";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Universities in Canada for International Students 2026",
      excerpt:
        "Discover the best Canadian universities offering world-class education, diverse programs, and excellent post-study work opportunities for international students.",
      image: "🇨🇦",
      category: "study-abroad",
      author: "Dr. Amit Kumar",
      date: "Jan 10, 2026",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "How to Choose the Right Career Path After 12th",
      excerpt:
        "A comprehensive guide to help students make informed decisions about their career choices based on interests, skills, and market trends.",
      image: "🎯",
      category: "career-counselling",
      author: "Priya Sharma",
      date: "Jan 8, 2026",
      readTime: "6 min read",
      featured: true,
    },
    {
      id: 3,
      title: "IELTS vs TOEFL: Which Test Should You Take?",
      excerpt:
        "Compare IELTS and TOEFL exams to understand which English proficiency test is right for your study abroad goals and university requirements.",
      image: "📝",
      category: "test-prep",
      author: "Rahul Verma",
      date: "Jan 5, 2026",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 4,
      title: "Complete Guide to Student Visa Process for USA",
      excerpt:
        "Step-by-step guide covering F-1 visa requirements, documentation, interview tips, and common mistakes to avoid when applying for US student visa.",
      image: "🇺🇸",
      category: "study-abroad",
      author: "Anjali Patel",
      date: "Jan 3, 2026",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Scholarship Opportunities for Indian Students in 2026",
      excerpt:
        "Explore various scholarship programs available for Indian students planning to study abroad, including eligibility criteria and application tips.",
      image: "💰",
      category: "study-abroad",
      author: "Dr. Amit Kumar",
      date: "Dec 28, 2025",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Top Engineering Branches with Best Career Prospects",
      excerpt:
        "Analyze emerging engineering fields with high demand, salary prospects, and growth opportunities in India and abroad.",
      image: "⚙️",
      category: "career-counselling",
      author: "Vikram Singh",
      date: "Dec 25, 2025",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 7,
      title: "GRE Preparation Strategy: Score 320+ in 3 Months",
      excerpt:
        "Proven study plan and strategies to achieve a high GRE score, including section-wise tips, resources, and practice schedules.",
      image: "🎓",
      category: "test-prep",
      author: "Sneha Reddy",
      date: "Dec 22, 2025",
      readTime: "9 min read",
      featured: false,
    },
    {
      id: 8,
      title: "Study in Germany: Free Education and Work Opportunities",
      excerpt:
        "Learn about Germany's tuition-free education system, top universities, living costs, and post-study work visa options.",
      image: "🇩🇪",
      category: "study-abroad",
      author: "Priya Sharma",
      date: "Dec 20, 2025",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 9,
      title: "MBA vs MS: Which is Better for Your Career?",
      excerpt:
        "Comprehensive comparison of MBA and MS programs covering curriculum, career outcomes, ROI, and ideal candidate profiles.",
      image: "💼",
      category: "career-counselling",
      author: "Rahul Verma",
      date: "Dec 18, 2025",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 10,
      title: "SAT Exam Guide: Everything You Need to Know",
      excerpt:
        "Complete overview of SAT exam pattern, scoring system, preparation timeline, and tips to maximize your score.",
      image: "📚",
      category: "test-prep",
      author: "Anjali Patel",
      date: "Dec 15, 2025",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 11,
      title: "Post-Study Work Rights: Country-wise Comparison",
      excerpt:
        "Compare post-study work visa options across popular study destinations including USA, UK, Canada, Australia, and Germany.",
      image: "🌍",
      category: "study-abroad",
      author: "Dr. Amit Kumar",
      date: "Dec 12, 2025",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: 12,
      title: "How to Write a Winning Statement of Purpose (SOP)",
      excerpt:
        "Expert tips on crafting compelling SOPs that stand out, including structure, content guidelines, and common mistakes to avoid.",
      image: "✍️",
      category: "study-abroad",
      author: "Vikram Singh",
      date: "Dec 10, 2025",
      readTime: "8 min read",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Posts", icon: <FaBook />, color: "blue" },
    { id: "study-abroad", name: "Study Abroad", icon: <FaGlobe />, color: "green" },
    {
      id: "career-counselling",
      name: "Career Guidance",
      icon: <FaLightbulb />,
      color: "purple",
    },
    {
      id: "test-prep",
      name: "Test Preparation",
      icon: <FaGraduationCap />,
      color: "orange",
    },
  ];

  const filteredPosts = blogPosts
    .filter(
      (post) => activeCategory === "all" || post.category === activeCategory
    )
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const getCategoryColor = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category?.color || "blue";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* ================= HERO SECTION (IMAGE ADDED) ================= */}
      <div
        className="relative text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/blog/EducationBlog.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Education Blog</h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert insights, guides, and tips for students aspiring to study
              abroad and build successful careers
            </p>

            <div className="relative max-w-2xl mx-auto">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-lg" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= BLOG CONTENT (UNCHANGED) ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-${category.color}-600 text-white shadow-lg scale-105`
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* FEATURED POSTS */}
        {activeCategory === "all" && searchQuery === "" && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded"></span>
              Featured Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-7xl">
                    {post.image}
                  </div>

                  <div className="p-6">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-${getCategoryColor(
                        post.category
                      )}-100 text-${getCategoryColor(post.category)}-700`}
                    >
                      {
                        categories.find((cat) => cat.id === post.category)
                          ?.name
                      }
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-gray-400" />
                        <span>{post.readTime}</span>
                      </div>
                      <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ALL POSTS */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-600 rounded"></span>
            {activeCategory === "all"
              ? "All Articles"
              : categories.find((cat) => cat.id === activeCategory)?.name}
            <span className="text-gray-400 text-xl ml-2">
              ({filteredPosts.length})
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-2"
              >
                <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl">
                  {post.image}
                </div>

                <div className="p-6">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-${getCategoryColor(
                      post.category
                    )}-100 text-${getCategoryColor(post.category)}-700`}
                  >
                    {
                      categories.find((cat) => cat.id === post.category)
                        ?.name
                    }
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-gray-400" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar className="text-gray-400" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaClock className="text-gray-400" />
                      <span>{post.readTime}</span>
                    </div>
                    <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= NEWSLETTER SECTION (IMAGE ADDED) ================= */}
      <div
        className="relative py-16 bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/images/blog/StayUpdated.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for latest articles, study abroad tips,
            and career guidance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>

          <p className="text-sm text-blue-200 mt-4">
            Join 5,000+ students already subscribed. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
