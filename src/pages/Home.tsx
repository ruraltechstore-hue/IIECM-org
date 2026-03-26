import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Briefcase, Sparkles, Code, TrendingUp, ShoppingCart } from 'lucide-react';

export default function Home() {
  const categories = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Artificial Intelligence & Future Skills',
      description: '9 courses covering AI, ML, and emerging technologies',
      link: '/courses?category=ai'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Technical & IT Programs',
      description: '12 courses in programming, data science, and cloud',
      link: '/courses?category=technical'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Commerce & Management',
      description: 'Professional skills for business growth',
      link: '/courses?category=professional'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-Commerce & Digital Marketing',
      description: '12 courses in online business and marketing',
      link: '/courses?category=ecommerce'
    }
  ];

  const partners = [
    'Amazon', 'Flipkart', 'Myntra', 'AJIO', 'Reliance Retail', 'Croma',
    'Google', 'Paytm', 'PhonePe', 'Ecom Express', 'Rapido', 'Porter',
    'Swiggy', 'Zomato', 'Swiggy Instamart'
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              International Institute of <span className="whitespace-nowrap">E-Commerce</span> and Management Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Building Future-Ready Professionals in Technology, Business & Artificial Intelligence
            </p>
            <p className="text-lg md:text-xl mb-10 text-blue-100">
              Learn industry-aligned skills through globally structured programs in AI, Technology, Commerce, Management, and Professional Careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg shadow-lg">
                Explore Courses
              </Link>
              <Link to="/internships" className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition text-lg border-2 border-white shadow-lg">
                Apply Now
              </Link>
              <Link to="/partners" className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-lg border-2 border-white shadow-lg">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why IIECM</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                IIECM is a next-generation learning foundation focused on career-driven education. Our programs are designed for students, working professionals, entrepreneurs, and institutions seeking practical, outcome-based learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Industry-Relevant Curriculum</h3>
                <p className="text-gray-600">Courses designed with real-world applications and current industry standards</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <Code className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">LMS-Based Learning Platform</h3>
                <p className="text-gray-600">24/7 access to comprehensive learning management system</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Certification & Career Pathways</h3>
                <p className="text-gray-600">Industry-recognized certificates to boost your career</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Internship & Placement Guidance</h3>
                <p className="text-gray-600">Real-world experience and career support</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Partner & Franchise Opportunities</h3>
                <p className="text-gray-600">Grow with us as a counsellor, franchisee, or affiliate</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Future-Ready Skills</h3>
                <p className="text-gray-600">Learn AI, automation, and emerging technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600">Choose from 63+ courses across multiple disciplines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {categories.map((category, idx) => (
              <Link
                key={idx}
                to={category.link}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-200"
              >
                <div className="text-blue-600 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnered With</h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Official / Industry-Aligned Learning & Ecosystem Partners
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition"
                >
                  <span className="text-gray-700 font-semibold text-center">{partner}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 text-center mt-8">
              Logos used for educational, training, and ecosystem representation purposes only.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of students and professionals building their future with IIECM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg">
              Browse Courses
            </Link>
            <Link to="/contact" className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg border-2 border-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
