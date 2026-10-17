import { Building2, GraduationCap, Users, CheckCircle } from 'lucide-react';

export default function Partnerships() {
  const industryPartners = [
    'Amazon', 'Flipkart', 'Meesho', 'AJIO', 'Myntra',
    'Reliance Retail', 'Croma', 'Google', 'Paytm', 'PhonePe',
    'Ecom Express', 'Rapido', 'Porter', 'Swiggy', 'Zomato', 'Swiggy Instamart'
  ];

  return (
    <div>
      <section className="relative bg-slate-900 text-white py-16 md:py-20 border-b border-slate-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-300 font-semibold text-xs mb-6 border border-slate-700">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Academic &amp; Corporate Collaborations</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">Our Partnerships &amp; Collaborations</h1>
            <p className="text-base md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Fostering synergistic ties between higher education, corporate enterprises, and student career outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                International Institute of <span className="whitespace-nowrap">E-Commerce</span> and Management Foundation (IIECM)
              </h2>
              <p className="text-lg text-gray-600">
                Committed to delivering quality education through strategic partnerships and industry collaboration
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-100/70 p-8 rounded-3xl border-2 border-amber-300 shadow-lg">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-12 h-12 text-amber-600 mr-4" />
                  <h2 className="text-3xl font-black text-stone-900">Government & Educational Partnerships</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Andhra Pradesh State Council for Higher Education (APSCHE)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      The <strong>International Institute of <span className="whitespace-nowrap">E-Commerce</span> and Management Foundation (IIECM)</strong> is partnered with the <strong>Andhra Pradesh State Council for Higher Education (APSCHE)</strong> for the purpose of:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Providing <strong>internship opportunities</strong> to students</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Supporting <strong>academic internship requirements</strong></span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Enhancing <strong>industry exposure</strong> for higher education students</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      This collaboration helps students gain <strong>practical, skill-based learning</strong> aligned with academic frameworks.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      AICTE – Internship Enablement Partner
                    </h3>
                    <p className="text-gray-700 mb-4">
                      IIECM works as an <strong>internship facilitation and training partner</strong> aligned with <strong>AICTE internship guidelines</strong>, supporting students across India by offering:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Internship programs for technical & non-technical students</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Skill-based training and certification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>LMS-based internship tracking and completion support</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-4 italic">
                      Internships are provided in accordance with applicable academic and institutional norms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-300 shadow-lg">
                <div className="flex items-center mb-6">
                  <Users className="w-12 h-12 text-green-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Telangana – Student Hiring & Skill Enablement</h2>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <p className="text-gray-700 mb-4">
                    IIECM actively supports <strong>student hiring and skill enablement in Telangana</strong> by:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Training students in <strong>industry-relevant skills</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Preparing candidates for <strong>employment and gig opportunities</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Facilitating internships that enhance employability</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Our focus is to bridge the gap between <strong>education and industry hiring needs</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-300 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building2 className="w-12 h-12 text-purple-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Industry & Corporate Ecosystem Exposure</h2>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                  <p className="text-gray-700 mb-4">
                    IIECM provides <strong>industry-oriented training and internship exposure</strong> aligned with leading companies across <strong>e-commerce, logistics, technology, and digital platforms</strong>, including:
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {industryPartners.map((partner, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center text-center"
                    >
                      <span className="text-gray-700 font-semibold">{partner}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 text-sm mt-6 italic">
                  Training content, case studies, tools, and internship exposure are aligned with industry practices followed by these organizations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Purpose of These Partnerships</h2>
                <p className="text-gray-700 mb-6">
                  Through these collaborations and ecosystem associations, IIECM aims to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Practical Internships</h3>
                      <p className="text-gray-600">Deliver hands-on learning experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Student Employability</h3>
                      <p className="text-gray-600">Enhance career readiness and skills</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Academic Compliance</h3>
                      <p className="text-gray-600">Support institutional requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Real-World Skills</h3>
                      <p className="text-gray-600">Enable practical skill development</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Career-Ready Professionals</h3>
                      <p className="text-gray-600">Create industry-ready graduates</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Industry Alignment</h3>
                      <p className="text-gray-600">Bridge education and employment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Disclaimer</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                IIECM provides training, internships, and skill development programs aligned with industry practices and academic frameworks. Company names and logos are used for educational and ecosystem reference purposes only and do not imply direct employment guarantees unless explicitly stated in a written agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in Partnering With Us?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our network of educational institutions and industry partners committed to student success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-7 py-3 rounded-lg font-semibold transition shadow-sm text-sm"
            >
              Get in Touch
            </a>
            <a
              href="/partners"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 px-7 py-3 rounded-lg font-semibold transition text-sm"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
