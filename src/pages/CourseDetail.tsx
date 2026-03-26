import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { getCourseBySlug } from '../data/courses';
import { courseCoverPath } from '../types/course';
import { Clock, IndianRupee, Award, Star, ChevronDown, ChevronUp } from 'lucide-react';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = useMemo(() => getCourseBySlug(slug), [slug]);
  const reviews = course?.reviews ?? [];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const faqs = [
    {
      question: 'Is this course beginner friendly?',
      answer: 'Yes, no prior experience required unless specified in the course prerequisites.'
    },
    {
      question: 'Will I get a certificate?',
      answer: 'Yes, you will receive an IIECM Professional Certificate after successful completion of the course.'
    },
    {
      question: 'Is LMS access provided?',
      answer: 'Yes, you get 24×7 access to our Learning Management System throughout the course duration.'
    },
    {
      question: 'Is this course job-oriented?',
      answer: 'Yes, all our courses are designed with industry relevance and practical applications to enhance your career prospects.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([{
          ...formData,
          course_name: course?.title
        }]);

      if (error) throw error;

      setSubmitMessage('Thank you! We will contact you soon.');
      setFormData({ name: '', email: '', mobile: '', message: '' });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
        <Link to="/courses" className="text-blue-600 hover:underline">
          Browse all courses
        </Link>
      </div>
    );
  }

  const coverSrc = courseCoverPath(course.slug);

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <div>
      <section className="relative text-white py-16 overflow-hidden">
        <img
          src={coverSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/92 to-blue-800/92"
          aria-hidden
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-blue-100 mb-4">
              <Link to="/courses" className="hover:underline">Courses</Link> / {course.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
            <p className="text-xl text-blue-100 mb-6">{course.short_description}</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {course.duration || 'Self-paced'}
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                {course.mode}
              </div>
              <div className="flex items-center font-semibold text-2xl">
                <IndianRupee className="w-6 h-6 mr-1" />
                {course.price.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Should Enroll</h2>
              <div className="flex flex-wrap gap-3">
                {course.target_audience && course.target_audience.length > 0 ? (
                  course.target_audience.map((audience, idx) => (
                    <span key={idx} className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium">
                      {audience}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium">Students</span>
                    <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium">Working Professionals</span>
                    <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium">Entrepreneurs</span>
                    <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium">Freelancers</span>
                  </>
                )}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Content</h2>
              <div className="space-y-4">
                {course.modules.map((mod, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{mod.title}</h3>
                    <p className="text-gray-600">{mod.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Certification</h2>
              <div className="flex items-start space-x-4">
                <Award className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 font-semibold mb-2">IIECM Professional Certificate</p>
                  <p className="text-gray-600">
                    Industry-aligned & LMS verified certification that validates your expertise and enhances your professional profile.
                  </p>
                </div>
              </div>
            </div>

            {reviews.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Reviews</h2>
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-6 h-6 ${
                          idx < Math.round(averageRating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">
                    {averageRating.toFixed(1)} out of 5
                  </span>
                </div>
                <div className="space-y-4">
                  {reviews.map((review, idx) => (
                    <div key={`${review.student_name}-${idx}`} className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="flex mr-3">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star
                              key={starIdx}
                              className={`w-4 h-4 ${
                                starIdx < review.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-gray-900">{review.student_name}</span>
                      </div>
                      <p className="text-gray-700">{review.review_text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {expandedFaq === idx ? (
                        <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-5 pb-5">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help or Bulk Enrollment?</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile</label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
                {submitMessage && (
                  <p className={`text-center ${submitMessage.includes('Thank') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enroll?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your learning journey today and advance your career with industry-recognized skills.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}
