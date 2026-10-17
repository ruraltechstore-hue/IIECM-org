import { Link } from 'react-router-dom';
import { Users, Building, TrendingUp, CheckCircle } from 'lucide-react';

export default function Partners() {
  return (
    <div>
      <section className="relative bg-slate-900 text-white py-16 md:py-20 border-b border-slate-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-300 font-semibold text-xs mb-6 border border-slate-700">
              <Building className="w-3.5 h-3.5 text-amber-400" />
              <span>Affiliate &amp; Institutional Network</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">Partner With IIECM</h1>
            <p className="text-base md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Expand education accessibility, collaborate on talent development, and grow with our nationwide network.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="bg-amber-50/60 p-8 rounded-2xl border border-amber-200 shadow-sm">
              <div className="flex items-center mb-6">
                <Users className="w-10 h-10 text-amber-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Admission Counsellor Partner</h2>
                  <p className="text-amber-800 font-semibold text-sm">Guide students, assist admissions, and earn commissions</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg mb-6 border border-amber-200">
                <p className="text-2xl font-bold text-amber-700">Investment: ₹25,000</p>
                <p className="text-xs text-slate-500 mt-0.5">One-time partnership fee</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-base mb-3 text-slate-900">Benefits:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive training provided</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regular lead allocation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Commission-based income opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Marketing materials and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Flexible working hours</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg mb-6 border border-amber-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wide mb-2 text-slate-900">Who Can Apply:</h4>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Students, graduates, working professionals, and educators who are passionate about helping others achieve their educational goals.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition shadow-xs"
              >
                Apply as Counsellor
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-300 shadow-lg">
              <div className="flex items-center mb-6">
                <Building className="w-12 h-12 text-green-600 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Franchisee Partner</h2>
                  <p className="text-green-700">Open an IIECM learning center in your area</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg mb-6 border-2 border-green-400">
                <p className="text-2xl font-bold text-green-600">Investment: ₹50,000</p>
                <p className="text-sm text-gray-600 mt-1">One-time franchise fee</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Benefits:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Exclusive brand rights in your territory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Access to complete course library and LMS</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Marketing and promotional support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Training and operational guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Established brand recognition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ongoing support and updates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3 text-gray-900">Who Can Apply:</h4>
                <p className="text-gray-700 mb-2">
                  Entrepreneurs, educational institutions, training centers, and business owners looking to establish a profitable education business with a trusted brand.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Apply as Franchisee
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-300 shadow-lg">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-12 h-12 text-purple-600 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Affiliate Partner</h2>
                  <p className="text-purple-700">Promote courses online and earn per sale</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg mb-6 border-2 border-purple-400">
                <p className="text-2xl font-bold text-purple-600">Investment: ₹1,00,000</p>
                <p className="text-sm text-gray-600 mt-1">One-time affiliate fee</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Benefits:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dedicated affiliate dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Unique tracking links for all courses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Competitive commission structure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Monthly payouts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Promotional materials and creatives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time performance tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3 text-gray-900">Who Can Apply:</h4>
                <p className="text-gray-700 mb-2">
                  Bloggers, content creators, social media influencers, digital marketers, and anyone with an online presence who wants to monetize their audience by promoting quality education.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Join Affiliate Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner With IIECM?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Growing Network</h3>
                <p className="text-stone-600 text-sm">Join a rapidly expanding network of education partners across India</p>
              </div>
              <div className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Trusted Brand</h3>
                <p className="text-gray-600">Partner with an established institution known for quality education</p>
              </div>
              <div className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Profitable Opportunity</h3>
                <p className="text-gray-600">Earn attractive commissions and build a sustainable business</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
