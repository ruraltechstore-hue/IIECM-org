import { Target, Eye, Award, Users, Sun, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-stone-50">
      <section className="relative bg-slate-900 text-white py-16 md:py-20 border-b border-slate-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-300 font-semibold text-xs mb-6 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>About Our Institution</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">About IIECM</h1>
            <p className="text-base md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Empowering Careers Through Applied Professional &amp; Technology Education
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-stone-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-500" />
              Who We Are
            </h2>
            <div className="prose prose-lg text-stone-700 space-y-4">
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

      <section className="py-20 bg-amber-50/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-stone-900 mb-8 text-center">Founder's Message</h2>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-l-8 border-amber-400">
              <blockquote className="text-xl md:text-2xl text-stone-800 italic leading-relaxed mb-6 font-medium">
                "Education must be practical, accessible, and globally relevant. IIECM is built to empower learners with real-world skills that create income, careers, and leadership."
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-extrabold text-lg text-stone-900">Patlola Prashanth Kumar</p>
                  <p className="text-amber-600 font-bold text-sm">Founder, IIECM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-100/70 p-8 md:p-10 rounded-3xl border border-amber-200 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-stone-950 flex items-center justify-center mr-4 shadow-md">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-stone-900">Vision</h2>
                </div>
                <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                  To become a globally recognized institution delivering future-ready education that empowers individuals and organizations to thrive in the digital age.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-100/70 p-8 md:p-10 rounded-3xl border border-orange-200 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-400 text-stone-950 flex items-center justify-center mr-4 shadow-md">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-stone-900">Mission</h2>
                </div>
                <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                  To train learners in technology, AI, commerce, and management through structured, affordable, and scalable education models that bridge the gap between academic knowledge and industry requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-12 text-center">
              What Sets IIECM Apart
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-200/60 hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Award className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-stone-900">Industry-Aligned Curriculum</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Our courses are designed in consultation with industry experts to ensure relevance and practical applicability.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-200/60 hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Users className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-stone-900">Flexible Learning</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Learn at your own pace with our advanced LMS platform, accessible 24/7 from anywhere in the world.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-200/60 hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Award className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-stone-900">Professional Certifications</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Earn industry-recognized certificates that add value to your resume and career prospects.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-200/60 hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Target className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-stone-900">Practical Learning</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Focus on hands-on projects, real-world case studies, and practical applications of concepts.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-200/60 hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Users className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-stone-900">Career Support</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Access internship opportunities, placement guidance, and career development resources.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-200/60 hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Award className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-stone-900">Affordable Education</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Quality education at competitive prices with flexible payment options and institutional discounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">Join the IIECM Educational Community</h2>
          <p className="text-sm sm:text-base mb-8 max-w-xl mx-auto font-normal text-slate-300 leading-relaxed">
            Connect with a nationwide network of students, alumni, faculty, and corporate hiring partners committed to educational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/courses" className="bg-amber-600 hover:bg-amber-700 text-white px-7 py-3 rounded-lg font-semibold transition shadow-sm text-sm">
              Explore Programs
            </Link>
            <Link to="/contact" className="bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 px-7 py-3 rounded-lg font-semibold transition text-sm">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
