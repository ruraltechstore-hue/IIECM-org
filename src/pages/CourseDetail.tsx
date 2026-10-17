import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sendInquiryNotification } from '../lib/emailjs';
import {
  inquiryInputClass,
  validateInquiryForm,
  type InquiryFieldErrors,
} from '../lib/validateInquiryForm';
import { getCourseBySlug } from '../data/courses';
import { courseCoverPath } from '../types/course';
import {
  Clock,
  IndianRupee,
  Award,
  Star,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Users,
  Zap,
  Terminal,
  Layers,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Sun,
} from 'lucide-react';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = useMemo(() => getCourseBySlug(slug), [slug]);
  const reviews = course?.reviews ?? [];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'syllabus' | 'ai-edge' | 'capstone' | 'career'>('syllabus');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<InquiryFieldErrors>({});

  const clearFieldError = (key: 'name' | 'email' | 'mobile' | 'message') => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const faqs = [
    {
      question: 'Is this course beginner-friendly or do I need prior experience?',
      answer:
        course?.prerequisites ||
        'This course is structured with a progressive learning curve. We start with fundamental foundations before stepping into hands-on projects and advanced AI workflows.',
    },
    {
      question: 'How is Artificial Intelligence integrated into this curriculum?',
      answer:
        'Rather than generic theory, every module incorporates modern AI tooling, automated workflows, and practical applications specific to the course discipline (from LLMs and autonomous agents to predictive analytics and algorithmic tools).',
    },
    {
      question: 'Will I receive an industry-recognized certificate?',
      answer:
        'Yes. Upon passing the practical project milestones, you will receive an official IIECM Professional Certificate with a verifiable digital credential, LMS verification ID, and LinkedIn certification badge.',
    },
    {
      question: 'How will this course help me in my career or job search?',
      answer:
        'You graduate with an end-to-end Capstone Project that you can demonstrate in interviews or portfolio reviews. Additionally, you receive career coaching, resume optimization, and placement assistance through IIECM hiring partners.',
    },
    {
      question: 'Is 24/7 LMS access provided?',
      answer:
        'Yes! You get 24×7 lifetime access to all learning management modules, code repositories, prompt libraries, recorded sessions, and supplementary study resources.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;
    setSubmitMessage('');

    const { valid, errors, sanitized } = validateInquiryForm(formData, { requireMessage: false });
    if (!valid || !sanitized) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});

    setSubmitting(true);

    try {
      try {
        const courseLine = `Course: ${course.title} (${course.category})`;
        const body =
          sanitized.message !== ''
            ? `${courseLine}\n\n${sanitized.message}`
            : courseLine;
        await sendInquiryNotification({
          title: 'Course Enrollment Inquiry',
          name: sanitized.name,
          email: sanitized.email,
          mobile: sanitized.mobile,
          message: body,
        });
      } catch (emailErr: unknown) {
        const err = emailErr as { status?: number; text?: string };
        console.error(
          'EmailJS notification failed:',
          err?.status ?? 'unknown status',
          err?.text ?? emailErr
        );
      }

      setSubmitMessage('Thank you! Our academic counsellor will get in touch with you shortly.');
      setFormData({ name: '', email: '', mobile: '', message: '' });
      setFieldErrors({});
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitMessage('Something went wrong. Please try again or reach out directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-950 text-white px-4">
        <div className="text-center max-w-md bg-stone-900 p-8 rounded-3xl shadow-2xl border border-amber-500/20">
          <Sun className="w-12 h-12 text-amber-400 mx-auto mb-4 animate-spin" style={{ animationDuration: '10s' }} />
          <h1 className="text-3xl font-black text-white mb-3">Course Not Found</h1>
          <p className="text-stone-400 mb-6">
            The course you are looking for may have been updated or moved.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  const coverSrc = courseCoverPath(course.slug);
  const averageRating = course.rating || (reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 4.8);

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen">
      {/* ========================================================= */}
      {/* SUNSHINE HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-amber-500/20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
        {/* Glow ambient effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-stone-400 mb-6">
              <Link to="/" className="hover:text-amber-400 transition">Home</Link>
              <span>/</span>
              <Link to="/courses" className="hover:text-amber-400 transition">Courses</Link>
              <span>/</span>
              <span className="text-amber-400 font-semibold">{course.category}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Course Main Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    {course.badge || 'Professional Program'}
                  </span>
                  {course.level && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-900 text-stone-300 border border-stone-800">
                      Level: {course.level}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                    Academic Year 2026
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
                  {course.title}
                </h1>

                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-6 font-normal">
                  {course.short_description}
                </p>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-stone-900 border border-amber-500/20 backdrop-blur-sm mb-8">
                  <div className="flex flex-col">
                    <span className="text-xs text-stone-400 flex items-center gap-1 mb-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Rating
                    </span>
                    <span className="text-lg font-black text-white">
                      {averageRating.toFixed(1)} <span className="text-xs text-stone-400 font-normal">({course.reviewsCount || 100}+)</span>
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-stone-400 flex items-center gap-1 mb-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> Duration
                    </span>
                    <span className="text-lg font-black text-white">{course.duration || 'Self-Paced'}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-stone-400 flex items-center gap-1 mb-1">
                      <Award className="w-3.5 h-3.5 text-yellow-400" /> Mode
                    </span>
                    <span className="text-lg font-black text-white">{course.mode}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-stone-400 flex items-center gap-1 mb-1">
                      <Users className="w-3.5 h-3.5 text-orange-400" /> Enrolled
                    </span>
                    <span className="text-lg font-black text-white">{course.enrolledCount?.toLocaleString() || '2,400'}+</span>
                  </div>
                </div>

                {/* Quick Highlight Points */}
                {course.keyTakeaways && (
                  <div className="space-y-2.5">
                    {course.keyTakeaways.slice(0, 3).map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-stone-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Visual Preview & Enrollment Box */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border border-amber-500/30 bg-stone-900 shadow-2xl backdrop-blur-md">
                  {/* High Quality Course Image with Title-Fitting Visual */}
                  <div className="relative aspect-video overflow-hidden group">
                    <img
                      src={coverSrc}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="bg-amber-500 text-stone-950 px-3 py-1 rounded-full font-black">
                        {course.category}
                      </span>
                      <span className="bg-stone-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 text-amber-300 font-semibold">
                        ⚡ Live Projects
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Price and Guarantee */}
                    <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-stone-800">
                      <div>
                        <div className="text-xs text-stone-400 uppercase tracking-wider mb-1 font-bold">
                          Course Tuition Fee
                        </div>
                        <div className="flex items-center text-3xl font-black text-white">
                          <IndianRupee className="w-6 h-6 mr-1 text-amber-400" />
                          {course.price.toLocaleString()}
                          <span className="text-xs text-stone-400 font-normal ml-2">All-Inclusive</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                        EMI from ₹{Math.round(course.price / 6).toLocaleString()}/mo
                      </span>
                    </div>

                    <div className="space-y-3 mb-6 text-xs text-stone-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>24/7 Access to IIECM Learning Management System</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>Hands-On Capstone Project with Mentor Code Reviews</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>Verifiable IIECM Certificate & Career Placement Assistance</span>
                      </div>
                    </div>

                    <a
                      href="#inquiry-section"
                      className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-3.5 px-6 rounded-lg font-semibold shadow-sm transition-all text-center text-sm"
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                      <span>Enroll in Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SUNSHINE AI ADVANTAGE BANNER */}
      {/* ========================================================= */}
      {course.aiHighlights && (
        <section className="py-12 bg-gradient-to-r from-amber-950/40 via-stone-900 to-stone-950 border-b border-amber-500/20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-stone-900 rounded-3xl p-8 border border-amber-500/30 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                  <Sun className="w-7 h-7 text-stone-950" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-amber-400">
                      The AI Advantage in 2026
                    </span>
                    {course.aiHighlights.aiImpactFactor && (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                        ⚡ {course.aiHighlights.aiImpactFactor}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                    {course.aiHighlights.headline}
                  </h2>

                  <p className="text-stone-300 leading-relaxed text-sm md:text-base mb-6">
                    {course.aiHighlights.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.aiHighlights.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-stone-850 border border-amber-500/20 text-xs font-semibold text-stone-200"
                      >
                        <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* MAIN CONTENT AREA WITH NAVIGATION TABS */}
      {/* ========================================================= */}
      <section className="py-16 bg-stone-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2.5 border-b border-stone-800 pb-4 mb-10">
              <button
                type="button"
                onClick={() => setActiveTab('syllabus')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-150 ${
                  activeTab === 'syllabus'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-400 hover:text-white hover:bg-stone-900 border border-stone-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Comprehensive Curriculum ({course.modules.length} Modules)
              </button>

              {course.capstoneProject && (
                <button
                  type="button"
                  onClick={() => setActiveTab('capstone')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-150 ${
                    activeTab === 'capstone'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white hover:bg-stone-900 border border-stone-800'
                  }`}
                >
                  <Terminal className="w-4 h-4" />
                  Capstone Project
                </button>
              )}

              {course.careerOutcomes && (
                <button
                  type="button"
                  onClick={() => setActiveTab('career')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-150 ${
                    activeTab === 'career'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white hover:bg-stone-900 border border-stone-800'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  Career &amp; Industry Impact
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Tabbed Content */}
              <div className="lg:col-span-8 space-y-12">
                {/* TAB 1: SYLLABUS */}
                {activeTab === 'syllabus' && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-white mb-2">
                        Detailed Industry-Grade Curriculum
                      </h3>
                      <p className="text-stone-400 text-sm">
                        Carefully constructed modules designed to take you from foundational intuition to production-ready mastery.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {course.modules.map((mod, idx) => (
                        <div
                          key={idx}
                          className="bg-stone-900 rounded-2xl border border-amber-500/20 p-6 hover:border-amber-400/60 transition"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-xs font-black">
                                {idx + 1}
                              </span>
                              <h4 className="font-bold text-lg text-white">{mod.title}</h4>
                            </div>
                            {mod.durationWeeks && (
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-stone-800 text-amber-300 border border-stone-700">
                                {mod.durationWeeks}
                              </span>
                            )}
                          </div>

                          <p className="text-stone-300 text-sm mb-4 leading-relaxed pl-11">
                            {mod.summary}
                          </p>

                          {mod.topics && mod.topics.length > 0 && (
                            <div className="pl-11 mb-4">
                              <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-2">
                                Key Topics Covered:
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {mod.topics.map((topic, topicIdx) => (
                                  <span
                                    key={topicIdx}
                                    className="px-2.5 py-1 rounded-lg text-xs bg-stone-800 text-stone-300 border border-stone-700/60"
                                  >
                                    • {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {mod.projectMilestone && (
                            <div className="ml-11 flex items-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                              <Terminal className="w-4 h-4 text-amber-400 flex-shrink-0" />
                              <span>{mod.projectMilestone}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 2: CAPSTONE */}
                {activeTab === 'capstone' && course.capstoneProject && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-white mb-2">
                        Real-World Portfolio Capstone Project
                      </h3>
                      <p className="text-stone-400 text-sm">
                        Prove your mastery by building and deploying an end-to-end project that showcases your capabilities to recruiters and clients.
                      </p>
                    </div>

                    <div className="bg-stone-900 rounded-3xl border border-amber-500/30 p-8 shadow-xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 mb-4 border border-amber-400/30">
                        <Terminal className="w-3.5 h-3.5" />
                        Signature Capstone Deliverable
                      </div>

                      <h4 className="text-2xl font-black text-white mb-4">
                        {course.capstoneProject.title}
                      </h4>

                      <p className="text-stone-300 leading-relaxed mb-6">
                        {course.capstoneProject.description}
                      </p>

                      <div className="space-y-3">
                        <div className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-2">
                          Core Project Deliverables:
                        </div>
                        {course.capstoneProject.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-850 border border-stone-700/60 text-sm text-stone-200">
                            <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: CAREER & SALARY */}
                {activeTab === 'career' && course.careerOutcomes && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-white mb-2">
                        Career Pathways & Market Demand
                      </h3>
                      <p className="text-stone-400 text-sm">
                        Gain skills actively sought by fast-scaling startups, multinational corporations, and global tech agencies.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-stone-900 p-6 rounded-2xl border border-amber-500/20">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                          <TrendingUp className="w-4 h-4" /> Target Roles
                        </div>
                        <div className="space-y-2">
                          {course.careerOutcomes.roles.map((role, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-white font-medium text-sm">
                              <span className="w-2 h-2 rounded-full bg-amber-400" />
                              <span>{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-stone-900 p-6 rounded-2xl border border-amber-500/20">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                          <IndianRupee className="w-4 h-4" /> Typical Compensation
                        </div>
                        <div className="text-2xl font-black text-amber-300 mb-2">
                          {course.careerOutcomes.salaryRange || '₹8,00,000 - ₹24,00,000 / yr'}
                        </div>
                        <p className="text-xs text-stone-400">
                          Based on industry compensation benchmarks for certified professionals with hands-on AI portfolio projects.
                        </p>
                      </div>
                    </div>

                    <div className="bg-stone-900 p-6 rounded-2xl border border-amber-500/20">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                        Key Hiring Sectors:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {course.careerOutcomes.keyHiringSectors.map((sector, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 text-amber-200 border border-amber-500/20"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TOOLS & TECHNOLOGIES SECTION */}
                {course.toolsAndTech && course.toolsAndTech.length > 0 && (
                  <div className="bg-stone-900 rounded-3xl p-6 border border-amber-500/20">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                      <Layers className="w-4 h-4" /> Tools & Technology Stack You’ll Master
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {course.toolsAndTech.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-400 hover:text-amber-300 transition"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* WHO SHOULD ENROLL */}
                <div className="bg-stone-900 rounded-3xl p-6 border border-amber-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-400" />
                    Who Should Pursue This Course
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {course.target_audience.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-850 border border-stone-800 text-xs text-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {course.prerequisites && (
                    <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-500/20 text-xs text-stone-400">
                      <span className="font-bold text-amber-400">Prerequisites: </span>
                      {course.prerequisites}
                    </div>
                  )}
                </div>

                {/* CERTIFICATION PREVIEW */}
                <div className="bg-gradient-to-br from-amber-950/30 via-stone-900 to-stone-950 rounded-3xl p-6 border border-amber-500/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        Official IIECM Professional Credential
                      </h4>
                      <p className="text-stone-300 text-sm mb-3">
                        Industry-aligned, verifiable digital credential backed by project milestones. Showcase directly on your LinkedIn profile, CV, and professional portfolios.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs text-stone-400">
                        <span className="flex items-center gap-1 text-amber-300">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> LMS Verified ID
                        </span>
                        <span>•</span>
                        <span>Shareable LinkedIn Badge</span>
                        <span>•</span>
                        <span>Career Recommendation Letter upon Distinction</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* REVIEWS SECTION */}
                {reviews.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                      <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                      Student Experiences & Outcomes
                    </h3>
                    <div className="space-y-4">
                      {reviews.map((review, idx) => (
                        <div
                          key={idx}
                          className="bg-stone-900 p-6 rounded-2xl border border-amber-500/20"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div>
                              <span className="font-bold text-white text-base">
                                {review.student_name}
                              </span>
                              {review.role && (
                                <span className="block text-xs text-amber-400">
                                  {review.role}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, starIdx) => (
                                <Star
                                  key={starIdx}
                                  className={`w-4 h-4 ${
                                    starIdx < review.rating
                                      ? 'text-amber-400 fill-amber-400'
                                      : 'text-stone-700'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-stone-300 text-sm leading-relaxed">
                            "{review.review_text}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FAQS */}
                <div>
                  <h3 className="text-2xl font-black text-white mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="border border-stone-800 rounded-2xl overflow-hidden bg-stone-900"
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-stone-850 transition"
                        >
                          <span className="font-bold text-white text-sm md:text-base">
                            {faq.question}
                          </span>
                          {expandedFaq === idx ? (
                            <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0 ml-2" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-stone-500 flex-shrink-0 ml-2" />
                          )}
                        </button>
                        {expandedFaq === idx && (
                          <div className="px-5 pb-5 text-stone-300 text-sm leading-relaxed border-t border-stone-800/80 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry & Fast Enrollment Card */}
              <div id="inquiry-section" className="lg:col-span-4 sticky top-6">
                <div className="bg-stone-900 rounded-3xl border border-amber-500/30 p-6 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-amber-400" />
                    <h3 className="text-xl font-bold text-white">Enroll or Speak to Advisor</h3>
                  </div>
                  <p className="text-xs text-stone-400 mb-6">
                    Get detailed syllabus, admission criteria, and scholarship eligibility assistance.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1" htmlFor="course-name">
                        Your Full Name *
                      </label>
                      <input
                        id="course-name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          clearFieldError('name');
                        }}
                        aria-invalid={Boolean(fieldErrors.name)}
                        className={`w-full px-4 py-2.5 rounded-xl bg-stone-950 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          fieldErrors.name ? 'border-red-500' : 'border-stone-800'
                        }`}
                        placeholder="John Doe"
                      />
                      {fieldErrors.name && (
                        <p className="mt-1 text-xs text-red-400">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1" htmlFor="course-email">
                        Email Address *
                      </label>
                      <input
                        id="course-email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          clearFieldError('email');
                        }}
                        aria-invalid={Boolean(fieldErrors.email)}
                        className={`w-full px-4 py-2.5 rounded-xl bg-stone-950 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          fieldErrors.email ? 'border-red-500' : 'border-stone-800'
                        }`}
                        placeholder="john@example.com"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs text-red-400">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1" htmlFor="course-mobile">
                        Mobile Number *
                      </label>
                      <input
                        id="course-mobile"
                        type="tel"
                        autoComplete="tel"
                        value={formData.mobile}
                        onChange={(e) => {
                          setFormData({ ...formData, mobile: e.target.value });
                          clearFieldError('mobile');
                        }}
                        aria-invalid={Boolean(fieldErrors.mobile)}
                        className={`w-full px-4 py-2.5 rounded-xl bg-stone-950 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          fieldErrors.mobile ? 'border-red-500' : 'border-stone-800'
                        }`}
                        placeholder="+91 98765 43210"
                      />
                      {fieldErrors.mobile && (
                        <p className="mt-1 text-xs text-red-400">{fieldErrors.mobile}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1" htmlFor="course-msg">
                        Questions / Career Aspirations <span className="text-stone-500">(Optional)</span>
                      </label>
                      <textarea
                        id="course-msg"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          clearFieldError('message');
                        }}
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="Tell us about your learning goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-semibold shadow-sm transition disabled:opacity-50 text-sm"
                    >
                      {submitting ? 'Submitting Application...' : 'Submit Enrollment Inquiry'}
                    </button>

                    {submitMessage && (
                      <p
                        className={`text-center text-xs p-3 rounded-lg ${
                          submitMessage.includes('Thank')
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                        }`}
                      >
                        {submitMessage}
                      </p>
                    )}
                  </form>

                  <div className="mt-6 pt-4 border-t border-stone-800 text-center">
                    <p className="text-xs text-stone-500">
                      🔒 Your details are confidential and never shared.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM CTA BANNER */}
      {/* ========================================================= */}
      <section className="py-16 bg-slate-900 border-t border-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
            Advance Your Professional Roadmap
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
            Acquire practical, career-oriented credentials through structured curricula, project milestones, and recognized academic pathways.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <a
              href="#inquiry-section"
              className="bg-amber-600 hover:bg-amber-700 text-white px-7 py-3 rounded-lg font-semibold transition shadow-sm text-sm"
            >
              Enroll Now
            </a>
            <Link
              to="/courses"
              className="bg-slate-800 hover:bg-slate-750 text-slate-200 px-7 py-3 rounded-lg font-semibold transition border border-slate-700 text-sm"
            >
              Explore Other Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
