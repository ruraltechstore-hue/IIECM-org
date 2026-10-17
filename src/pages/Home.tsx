import { Link } from 'react-router-dom';
import {
  BookOpen,
  Users,
  Award,
  Briefcase,
  Code,
  TrendingUp,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
} from 'lucide-react';
import SkillEcomLogo from '../components/SkillEcomLogo';

export default function Home() {
  const categories = [
    {
      icon: <GraduationCap className="w-7 h-7 text-amber-600" />,
      title: 'Commerce & Management Degrees',
      description: 'University-recognized BBA, B.Com, and MBA programs with e-commerce and analytics specializations.',
      link: '/courses?category=professional',
      badge: 'Degree Track',
    },
    {
      icon: <Code className="w-7 h-7 text-amber-600" />,
      title: 'Information Technology & Computer Applications',
      description: 'Industry-integrated BCA and MCA programs focusing on modern software engineering and cloud systems.',
      link: '/courses?category=technical',
      badge: 'Technical Track',
    },
    {
      icon: <ShoppingCart className="w-7 h-7 text-amber-600" />,
      title: 'E-Commerce Operations & Marketing',
      description: 'Hands-on training in catalog management, supply chain logistics, marketplace setup, and digital marketing.',
      link: '/courses?category=ecommerce',
      badge: 'Certification',
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-amber-600" />,
      title: 'Applied AI & Data Analytics',
      description: 'Practical, industry-focused courses in machine learning fundamentals, prompt workflows, and business intelligence.',
      link: '/courses?category=ai',
      badge: 'Specialization',
    },
  ];

  const institutionalStrengths = [
    {
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      title: 'Structured Academic Curriculum',
      description: 'Curricula developed in consultation with academic boards and industry advisors to ensure market relevance.',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-amber-600" />,
      title: 'AICTE & APSCHE Aligned Internships',
      description: 'Structured internship enablement programs complying with national regulatory frameworks and skill standards.',
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: 'Industry-Recognized Certifications',
      description: 'Verifiable program credentials backed by practical assessments and real-world project portfolios.',
    },
    {
      icon: <Code className="w-6 h-6 text-amber-600" />,
      title: 'Centralized LMS Platform',
      description: '24/7 access to digital course materials, masterclass recordings, assignments, and academic tracking.',
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: 'Faculty & Practitioner Mentorship',
      description: 'Instruction led by experienced faculty members, corporate trainers, and e-commerce entrepreneurs.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: 'Career Readiness & Counseling',
      description: 'Resume building, mock interviews, corporate networking, and placement assistance for active students.',
    },
  ];

  const partners = [
    'Amazon', 'Flipkart', 'Myntra', 'AJIO', 'Reliance Retail', 'Croma',
    'Google', 'Paytm', 'PhonePe', 'Ecom Express', 'Rapido', 'Porter',
    'Swiggy', 'Zomato', 'Instamart'
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* ========================================================= */}
      {/* REFINED PROFESSIONAL HERO WITH VERTICAL EDUCATION & LOGO   */}
      {/* ========================================================= */}
      <section className="relative bg-slate-900 text-white py-14 md:py-20 border-b border-slate-800 overflow-hidden">
        {/* Subtle warm accent ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-600/5 rounded-full blur-2xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
            {/* Signature Vertical "Education" Pillar directly in Home Page */}
            <div className="hidden lg:flex flex-col items-center justify-between bg-white rounded-2xl shadow-xl border border-slate-200/90 w-20 flex-shrink-0 overflow-hidden select-none">
              {/* Top Maroon / Burgundy Bar from user reference */}
              <div className="w-full h-3 bg-[#800020]" />

              {/* Large Vertical Title: EDUCATION / Education */}
              <div className="flex-1 flex items-center justify-center py-10">
                <span
                  className="text-slate-900 font-extrabold text-4xl tracking-wider select-none uppercase"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'sideways',
                  }}
                >
                  Education
                </span>
              </div>

              {/* Bottom accent dot */}
              <div className="pb-6 flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block" />
              </div>
            </div>

            {/* Main Hero Card Content */}
            <div className="flex-1 bg-slate-800/60 rounded-3xl border border-slate-700/60 p-6 sm:p-10 lg:p-12 shadow-xl backdrop-blur-md flex flex-col items-center text-center">
              {/* Mobile Education Badge */}
              <div className="lg:hidden inline-flex items-center gap-2 px-3 py-1 bg-white text-slate-900 rounded-md border border-slate-200 shadow-xs mb-6">
                <span className="w-2.5 h-2.5 bg-[#800020] rounded-xs" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Education</span>
                <span className="text-slate-400">•</span>
                <span className="text-xs font-semibold text-slate-600">IIECM Foundation</span>
              </div>

              {/* LARGE SKILL ECOM LOGO */}
              <div className="flex justify-center mb-6">
                <div className="p-4 sm:p-5 bg-slate-800/90 rounded-2xl border border-slate-700 shadow-lg">
                  <SkillEcomLogo size="xl" theme="dark" />
                </div>
              </div>

              {/* Institutional Accreditation Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800 text-amber-300 border border-slate-700 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Academic &amp; Professional Programs</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-200 font-semibold">2026 Admissions Open</span>
              </div>

              {/* Clean, Non-AI Professional Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
                International Institute of <br className="hidden sm:inline" />
                <span className="text-amber-400">E-Commerce &amp; Management</span>
              </h1>

              {/* Authoritative, Dignified Subtitle */}
              <p className="text-base sm:text-lg md:text-xl mb-8 text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
                Empowering students and working professionals with industry-accredited degree pathways, university-aligned diplomas, and practical internship training in technology, management, and modern commerce.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
                <Link
                  to="/courses"
                  className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Explore Academic Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/internships"
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-750 text-slate-200 px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
                >
                  <span>Internship Opportunities</span>
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-slate-300 hover:text-white px-5 py-3.5 rounded-lg font-medium text-sm sm:text-base hover:bg-slate-800/60 transition flex items-center justify-center"
                >
                  <span>Advisory &amp; Counseling</span>
                </Link>
              </div>

              {/* Institutional Metrics */}
              <div className="mt-12 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-left">
                <div className="border-r border-slate-700/60 pr-2">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">24+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Accredited Programs</div>
                </div>
                <div className="border-r border-slate-700/60 pr-2">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">10,000+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Students Trained</div>
                </div>
                <div className="border-r border-slate-700/60 pr-2">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">50+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Ecosystem Partners</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Curriculum Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* ========================================================= */}
        {/* 3. ACADEMIC HIGHLIGHTS / WHY CHOOSE IIECM                 */}
        {/* Clean white cards with subtle slate & amber accents       */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-700 mb-2 block">
                  Institutional Excellence
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Why Students &amp; Partners Choose IIECM
                </h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Combining formal degree education with practical, industry-aligned skill building to prepare graduates for long-term career growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {institutionalStrengths.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/70 p-7 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-lg bg-amber-100/80 border border-amber-200 flex items-center justify-center mb-5">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. CURATED PROGRAM TRACKS                                 */}
        {/* Professional slate-900 background with elegant warm amber */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2 block">
                  Curriculum &amp; Specializations
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  Academic &amp; Professional Tracks
                </h2>
                <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
                  Explore programs spanning university degrees, technical applications, digital commerce, and practical AI implementations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {categories.map((category, idx) => (
                  <Link
                    key={idx}
                    to={category.link}
                    className="group bg-slate-800/90 rounded-xl p-6 border border-slate-700/80 hover:border-amber-500/80 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-2.5 rounded-lg bg-slate-700/60 border border-slate-600 group-hover:bg-amber-500/10 transition">
                          {category.icon}
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          {category.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-2.5 text-white group-hover:text-amber-400 transition-colors">
                        {category.title}
                      </h3>

                      <p className="text-slate-400 text-xs leading-relaxed mb-6">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex items-center text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors pt-3 border-t border-slate-700/60">
                      <span>View Programs</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3 rounded-lg text-sm shadow-sm hover:shadow transition-all"
                >
                  <span>View All 24+ Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. ECOSYSTEM & CORPORATE ALIGNMENT                        */}
        {/* Subdued warm ivory background                             */}
        {/* ========================================================= */}
        <section className="py-16 bg-slate-100/70 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Industry &amp; Practical Training Ecosystem
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Curricula and internships incorporate frameworks, tools, and practices aligned with industry standards across modern commerce and enterprise technology.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-lg shadow-2xs border border-slate-200 flex items-center justify-center hover:border-slate-300 transition-colors"
                  >
                    <span className="text-slate-700 font-semibold text-xs sm:text-sm text-center">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 text-center mt-6">
                Names referenced for educational, internship enablement, and training context.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. PROFESSIONAL BOTTOM CTA                                */}
        {/* Refined slate-900 banner with warm gold action button      */}
        {/* ========================================================= */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-300 text-xs font-semibold mb-4 border border-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Admissions Open for Academic Year 2026</span>
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 tracking-tight text-white">
              Begin Your Educational Journey with IIECM
            </h2>

            <p className="text-sm sm:text-base mb-8 text-slate-300 max-w-xl mx-auto leading-relaxed">
              Explore degree pathways, certificate courses, and verified internship opportunities tailored for future career success.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/courses"
                className="bg-amber-600 hover:bg-amber-700 text-white px-7 py-3 rounded-lg font-semibold text-sm shadow-sm transition-all"
              >
                Browse All Programs
              </Link>
              <Link
                to="/contact"
                className="bg-slate-800 hover:bg-slate-750 text-slate-200 px-7 py-3 rounded-lg font-semibold text-sm border border-slate-700 transition-all"
              >
                Contact Admissions Desk
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
