import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About IIECM</h1>
            <p className="text-xl text-blue-100">
              Building the Future of Professional Education
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About IIECM</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                The <strong>International Institute of <span className="whitespace-nowrap">E-Commerce</span> and Management Foundation (IIECM)</strong> is a professional education and skill-development institution focused on bridging the gap between academics and industry requirements.
              </p>
              <p className="text-lg leading-relaxed">
                We provide comprehensive learning programs that equip students, professionals, and entrepreneurs with the practical skills needed to succeed in today's competitive landscape. Our curriculum spans across Artificial Intelligence, Technology, Commerce, E-Commerce, and Management disciplines.
              </p>
              <p className="text-lg leading-relaxed">
                Through our advanced Learning Management System (LMS), we deliver world-class education that is accessible, affordable, and outcome-driven. Our programs are designed to create career opportunities and foster leadership in various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Founder's Message</h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                "Education must be practical, accessible, and globally relevant. IIECM is built to empower learners with real-world skills that create income, careers, and leadership."
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-lg text-gray-900">Patlola Prashanth Kumar</p>
                  <p className="text-gray-600">Founder, IIECM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <div className="flex items-center mb-6">
                  <Eye className="w-12 h-12 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become a globally recognized institution delivering future-ready education that empowers individuals and organizations to thrive in the digital age.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-green-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To train learners in technology, AI, commerce, and management through structured, affordable, and scalable education models that bridge the gap between academic knowledge and industry requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Makes Us Different</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Award className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Industry-Aligned Curriculum</h3>
                <p className="text-gray-600">
                  Our courses are designed in consultation with industry experts to ensure relevance and practical applicability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Flexible Learning</h3>
                <p className="text-gray-600">
                  Learn at your own pace with our advanced LMS platform, accessible 24/7 from anywhere in the world.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Award className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional Certifications</h3>
                <p className="text-gray-600">
                  Earn industry-recognized certificates that add value to your resume and career prospects.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Practical Learning</h3>
                <p className="text-gray-600">
                  Focus on hands-on projects, real-world case studies, and practical applications of concepts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Career Support</h3>
                <p className="text-gray-600">
                  Access internship opportunities, placement guidance, and career development resources.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Award className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Affordable Education</h3>
                <p className="text-gray-600">
                  Quality education at competitive prices with flexible payment options and institutional discounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the IIECM Community</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Be part of a growing network of learners, educators, and industry professionals committed to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/courses" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg">
              Explore Courses
            </a>
            <a href="/contact" className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg border-2 border-white">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
