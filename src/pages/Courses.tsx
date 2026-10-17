import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { courses as allCourses, getCoursesByCategory } from '../data/courses';
import { courseCoverPath } from '../types/course';
import {
  Clock,
  IndianRupee,
  Sparkles,
  Search,
  Star,
  Users,
  ArrowRight,
  Zap,
  CheckCircle2,
  Filter,
  BrainCircuit,
  GraduationCap,
  Sun,
} from 'lucide-react';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyAiFirst, setOnlyAiFirst] = useState<boolean>(false);

  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'Artificial Intelligence & Future Skills', label: 'AI & Future Skills' },
    { value: 'Technical & IT Programs', label: 'Technical & IT' },
    { value: 'Professional Skills', label: 'Professional Skills' },
    { value: 'E-Commerce & Digital Marketing', label: 'E-Commerce & Marketing' },
    { value: 'Diploma Programs', label: 'Diploma Programs' },
    { value: 'Degree Programs', label: 'Degree Programs' },
    { value: 'Postgraduate Programs', label: 'Postgraduate Programs' },
    { value: 'Certification Programs', label: 'Certification Programs' },
  ];

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam === 'ai') {
      setSelectedCategory('Artificial Intelligence & Future Skills');
    } else if (categoryParam === 'technical') {
      setSelectedCategory('Technical & IT Programs');
    } else if (categoryParam === 'professional') {
      setSelectedCategory('Professional Skills');
    } else if (categoryParam === 'ecommerce') {
      setSelectedCategory('E-Commerce & Digital Marketing');
    }
  }, [searchParams]);

  const filteredCourses = useMemo(() => {
    let list = getCoursesByCategory(selectedCategory);

    if (onlyAiFirst) {
      list = list.filter(
        (c) =>
          c.category === 'Artificial Intelligence & Future Skills' ||
          (c.badge && c.badge.toLowerCase().includes('ai')) ||
          Boolean(c.aiHighlights)
      );
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.short_description.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          (c.toolsAndTech && c.toolsAndTech.some((t) => t.toLowerCase().includes(q))) ||
          (c.aiHighlights && c.aiHighlights.skills.some((s) => s.toLowerCase().includes(q)))
      );
    }

    return list;
  }, [selectedCategory, searchQuery, onlyAiFirst]);

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen">
      {/* ========================================================= */}
      {/* REFINED ACADEMIC HERO SECTION                             */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-14 pb-18 border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-800 text-amber-300 border border-slate-700 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Academic Year 2026</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Industry-Aligned Curricula</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Academic Degrees &amp; <span className="text-amber-400">Professional Certifications</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            Comprehensive undergraduate degree tracks, university-aligned postgraduate diplomas, and practical skill development programs designed in collaboration with academic advisors and enterprise leaders.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-6">
            <Search className="w-5 h-5 text-amber-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by course title, subject, or technology..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-300 hover:text-white bg-slate-700 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick stats pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500" /> University-Aligned Curricula
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500" /> LMS Verifiable Credentials
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500" /> Internship Enablement Support
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* COURSES CATALOG SECTION */}
      {/* ========================================================= */}
      <section className="py-12 bg-stone-950">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Category Filter Chips */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2.5 justify-center items-center">
              {categories.map((category) => {
                const count =
                  category.value === 'all'
                    ? allCourses.length
                    : allCourses.filter((c) => c.category === category.value).length;
                const isSelected = selectedCategory === category.value;

                return (
                  <button
                    key={category.value}
                    onClick={() => {
                      setSelectedCategory(category.value);
                      setSearchParams({});
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-150 ${
                      isSelected
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-amber-400 border border-slate-800'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                        isSelected
                          ? 'bg-amber-800 text-amber-100'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Search & Filter Indicators */}
          {(searchQuery || selectedCategory !== 'all') && (
            <div className="mb-6 flex flex-wrap items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-3">
              <div>
                Showing <span className="font-bold text-amber-400">{filteredCourses.length}</span> program{filteredCourses.length === 1 ? '' : 's'}
                {searchQuery && (
                  <span>
                    {' '}matching "<span className="text-amber-300">{searchQuery}</span>"
                  </span>
                )}
              </div>
              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-amber-400 hover:underline font-bold"
                >
                  Reset all filters
                </button>
              )}
            </div>
          )}

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Link
                key={course.slug}
                to={`/courses/${course.slug}`}
                className="group flex flex-col bg-stone-900 rounded-3xl border border-amber-500/20 hover:border-amber-400 shadow-xl hover:shadow-2xl hover:shadow-amber-500/15 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Cover Image with Title-Fitting Visual */}
                <div className="relative h-48 overflow-hidden bg-stone-950 flex-shrink-0">
                  <img
                    src={courseCoverPath(course.slug)}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-stone-950/90 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                      {course.badge || '🤖 AI-Accelerated'}
                    </span>
                    {course.level && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-900/90 text-stone-300 border border-stone-800 backdrop-blur-md">
                        {course.level}
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Stats */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-stone-300">
                    <span className="flex items-center gap-1 font-bold text-amber-400 bg-stone-950/80 px-2 py-0.5 rounded-lg backdrop-blur-md">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {course.rating?.toFixed(1) || '4.9'}
                    </span>
                    <span className="bg-stone-950/80 px-2 py-0.5 rounded-lg text-stone-300 backdrop-blur-md font-medium">
                      {course.mode}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider mb-2">
                    {course.category}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-stone-400 text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
                    {course.short_description}
                  </p>

                  {/* Tools & Tech Chips */}
                  {course.toolsAndTech && course.toolsAndTech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {course.toolsAndTech.slice(0, 3).map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-stone-800 text-amber-200/90 border border-amber-500/20"
                        >
                          {tool}
                        </span>
                      ))}
                      {course.toolsAndTech.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] text-stone-500 font-medium">
                          +{course.toolsAndTech.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Card Footer: Duration & Price */}
                  <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                    <div className="flex items-center text-stone-400 text-xs">
                      <Clock className="w-3.5 h-3.5 mr-1 text-amber-400" />
                      {course.duration || 'Self-Paced'}
                    </div>

                    <div className="flex items-center text-white font-extrabold text-lg">
                      <IndianRupee className="w-4 h-4 text-amber-400 mr-0.5" />
                      {course.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-yellow-300">
                    <span>Explore Curriculum & Capstone</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20 bg-stone-900 rounded-3xl border border-amber-500/20 p-8 max-w-xl mx-auto">
              <BrainCircuit className="w-12 h-12 text-amber-500/60 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No matching courses found</h3>
              <p className="text-stone-400 text-sm mb-6">
                Try searching for broader keywords like "AI", "Cloud", "Python", or reset the category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 px-6 py-2.5 rounded-xl font-black text-sm hover:scale-105 transition"
              >
                Show All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY IIECM IN THE AI ERA */}
      {/* ========================================================= */}
      <section className="py-20 bg-stone-900 border-t border-amber-500/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400 mb-2 block">
              ☀️ The IIECM Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Why Our Courses Don't Look Like Regular College Curriculums
            </h2>
            <p className="text-stone-400 text-base leading-relaxed">
              Traditional higher education is slow to update. We build our courses directly with Silicon Valley engineers, modern e-commerce leaders, and frontier AI practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-stone-950 border border-amber-500/20 hover:border-amber-400 transition hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Accelerated Workflows</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Whether studying commerce, programming, or management, you master the cutting-edge AI copilots and autonomous pipelines used by top global companies.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-stone-950 border border-amber-500/20 hover:border-amber-400 transition hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proof-of-Work Capstones</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                No multiple-choice exams. You graduate with deployed, live web applications, production AI pipelines, and audited corporate plans to showcase to recruiters.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-stone-950 border border-amber-500/20 hover:border-amber-400 transition hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Career & Placement Guidance</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Direct access to our 50+ ecosystem hiring partners, mock technical interviews, 1-on-1 resume optimization, and verifiable LinkedIn credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ACADEMIC COUNSELING CTA                                   */}
      {/* ========================================================= */}
      <section className="py-16 bg-slate-900 border-t border-slate-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
            Need Guidance Choosing the Right Program?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
            Our academic counselors are available to review your educational background and help you select the most suitable degree or certification pathway.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-7 py-3 rounded-lg font-semibold transition-all shadow-sm text-sm"
          >
            <span>Speak with an Academic Counselor</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
