import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { SITE_PHONE, SITE_PHONE_TEL } from '../constants/site';
import SkillEcomLogo from './SkillEcomLogo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Internships', path: '/internships' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Partners', path: '/partners' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const quickTracks = [
    { title: 'Artificial Intelligence & Future Tech', slug: '/courses?category=ai', icon: '🤖' },
    { title: 'Technical & Software Engineering', slug: '/courses?category=technical', icon: '💻' },
    { title: 'E-Commerce & Digital Marketing', slug: '/courses?category=ecommerce', icon: '🛍️' },
    { title: 'Degree & Postgraduate Programs', slug: '/courses?category=professional', icon: '🎓' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ========================================================= */}
      {/* REFINED INSTITUTIONAL ANNOUNCEMENT BAR */}
      {/* ========================================================= */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2.5 mx-auto sm:mx-0">
            <span className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Admissions 2026</span>
            </span>
            <span className="text-xs md:text-sm font-medium text-slate-200">
              Applications open for Industry-Aligned Degrees &amp; Professional Certifications.
            </span>
            <Link
              to="/courses"
              className="hidden md:inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 ml-1 font-semibold text-xs transition"
            >
              <span>View Curriculum</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-xs font-medium text-slate-300">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>{SITE_PHONE}</span>
            </a>
            <span className="text-slate-600">•</span>
            <Link to="/contact" className="hover:text-amber-400 transition">
              Academic Counseling
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN NAVIGATION BAR WITH SKILL ECOM BRAND */}
      {/* ========================================================= */}
      <header className="bg-white/98 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200/90 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Skill Ecom Large Brand Logo */}
            <Link to="/" className="flex items-center group py-2" onClick={closeMenu}>
              <SkillEcomLogo size="md" className="group-hover:opacity-95 transition-opacity" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);

                if (link.name === 'Courses') {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all ${
                          active
                            ? 'text-amber-700 bg-amber-50'
                            : 'text-slate-700 hover:text-amber-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </Link>

                      {/* Course Mega Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-3 mt-1 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1.5 border-b border-slate-100 mb-1">
                            Academic Tracks
                          </div>
                          <div className="space-y-1">
                            {quickTracks.map((track) => (
                              <Link
                                key={track.title}
                                to={track.slug}
                                onClick={() => setIsDropdownOpen(false)}
                                className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-amber-50/70 text-slate-800 hover:text-amber-800 font-medium text-xs transition"
                              >
                                <span className="text-base">{track.icon}</span>
                                <span>{track.title}</span>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1">
                            <Link
                              to="/courses"
                              onClick={() => setIsDropdownOpen(false)}
                              className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center justify-between"
                            >
                              <span>Explore All 24+ Programs</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                      active
                        ? 'text-amber-700 bg-amber-50/80'
                        : 'text-slate-700 hover:text-amber-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/courses"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-amber-700 hover:bg-slate-100 transition"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-amber-700" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-slate-200 animate-in fade-in slide-in-from-top-3 duration-150 bg-white rounded-b-xl shadow-lg">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-2.5 rounded-lg text-base font-semibold transition ${
                      isActive(link.path)
                        ? 'bg-amber-50 text-amber-800'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-amber-700'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 px-2">
                  <Link
                    to="/courses"
                    onClick={closeMenu}
                    className="w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 rounded-lg shadow-sm text-sm"
                  >
                    Explore All Programs
                  </Link>
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 rounded-lg text-sm transition"
                  >
                    Academic Counseling
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
