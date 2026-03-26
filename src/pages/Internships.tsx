import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Award, CheckCircle, Sparkles, BookOpen, IndianRupee } from 'lucide-react';

export default function Internships() {
  const [formData, setFormData] = useState({
    institution_name: '',
    contact_person: '',
    email: '',
    mobile: '',
    number_of_students: '',
    preferred_stage: 'stage1' as 'stage1' | 'stage2' | 'stage3',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');

    try {
      const { error } = await supabase
        .from('internship_inquiries')
        .insert([{
          ...formData,
          number_of_students: parseInt(formData.number_of_students)
        }]);

      if (error) throw error;

      setSubmitMessage('Thank you! Our team will contact you within 24-48 working hours with pricing & onboarding details.');
      setFormData({
        institution_name: '',
        contact_person: '',
        email: '',
        mobile: '',
        number_of_students: '',
        preferred_stage: 'stage1',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IIECM Internship Programs</h1>
            <p className="text-xl text-blue-100 mb-4">
              3 Stage Model
            </p>
            <p className="text-lg text-blue-100">
              Career-Focused Internship Programs Designed for Students & Institutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              At <strong>IIECM</strong>, we offer structured <strong>internship programs in three flexible stages</strong>, allowing students, colleges, and institutions to choose the level of learning, certification, and exposure they need.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Our internships are <strong>LMS-based</strong>, <strong>industry-aligned</strong>, and suitable for:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>College students</li>
              <li>Fresh graduates</li>
              <li>Working professionals</li>
              <li>Bulk institutional enrollments</li>
            </ul>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-300 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Internship Stage 1</h2>
                  <p className="text-blue-700 font-semibold">Basic Internship Program (Certificate Only)</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <IndianRupee className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold text-blue-600">1,000</span>
                  <span className="text-gray-600 ml-2">per student</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Internship participation certificate from IIECM</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Internship duration proof</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>LMS access (limited)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Suitable for academic submission & credit requirements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2 text-gray-900">Best For:</h4>
                <p className="text-gray-700">Students needing mandatory internship certificate, Colleges requiring short-term internships</p>
              </div>

              <p className="text-sm text-gray-600 italic mb-6">
                Note: This option does not include foundation training or certifications.
              </p>

              <button
                onClick={() => {
                  setFormData({ ...formData, preferred_stage: 'stage1' });
                  document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Enroll Now
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-300 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Internship Stage 2</h2>
                  <p className="text-green-700 font-semibold">Internship Program with AI Certification</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <IndianRupee className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-3xl font-bold text-green-600">2,500</span>
                  <span className="text-gray-600 ml-2">per student</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Internship Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>AI Foundation Certification</strong></span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>LMS access to AI learning modules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Practical assignments & assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Project submission support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2 text-gray-900">AI Coverage:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>AI fundamentals</li>
                  <li>Generative AI basics</li>
                  <li>AI tools for productivity & business</li>
                  <li>ChatGPT & AI automation basics</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2 text-gray-900">Best For:</h4>
                <p className="text-gray-700">Students interested in AI exposure, Beginners entering future-tech domains</p>
              </div>

              <button
                onClick={() => {
                  setFormData({ ...formData, preferred_stage: 'stage2' });
                  document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Enroll Now
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-300 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Internship Stage 3</h2>
                  <p className="text-purple-700 font-semibold">Advanced Internship Program (All Courses Except AI)</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="font-semibold text-yellow-800">Custom Pricing</p>
                  <p className="text-yellow-700 text-sm">Price depends on student category and college base. Special discounts available for colleges, universities, and bulk enrollments.</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Program Coverage:</h3>
                <p className="text-gray-700 mb-3">Internship + access to <strong>ALL Technical & Non-Technical courses</strong>, excluding AI programs.</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Internship Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>LMS access to Technical courses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Non-technical & professional skills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>E-commerce & digital marketing programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Assignments & practical learning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Career guidance support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2 text-gray-900">Special Discounts Available For:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Colleges & universities</li>
                  <li>Training institutes</li>
                  <li>Skill development centers</li>
                  <li>CSR & government programs</li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setFormData({ ...formData, preferred_stage: 'stage3' });
                  document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Request Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="enrollment-form">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Bulk Enrollment / Institutional Inquiry</h2>
              <p className="text-lg text-gray-600">
                Our team will contact you within 24-48 working hours with pricing & onboarding details.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution / College Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institution_name}
                    onChange={(e) => setFormData({ ...formData, institution_name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact_person}
                    onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email ID
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Students
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.number_of_students}
                      onChange={(e) => setFormData({ ...formData, number_of_students: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Internship Stage
                    </label>
                    <select
                      required
                      value={formData.preferred_stage}
                      onChange={(e) => setFormData({ ...formData, preferred_stage: e.target.value as 'stage1' | 'stage2' | 'stage3' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="stage1">Stage 1 - Basic (₹1,000)</option>
                      <option value="stage2">Stage 2 - With AI (₹2,500)</option>
                      <option value="stage3">Stage 3 - Advanced (Custom Pricing)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message / Requirements
                  </label>
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
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 text-lg"
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose IIECM Internships?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Industry-Aligned Structure</h3>
                  <p className="text-gray-600">Programs designed to meet current industry requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">LMS-Based Learning</h3>
                  <p className="text-gray-600">24/7 access to comprehensive learning platform</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Affordable & Scalable</h3>
                  <p className="text-gray-600">Competitive pricing with bulk enrollment discounts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Academic Compliance</h3>
                  <p className="text-gray-600">Suitable for institutional credit requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">IIECM Certificates</h3>
                  <p className="text-gray-600">Industry-recognized certification upon completion</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Bulk Enrollment Support</h3>
                  <p className="text-gray-600">Dedicated support for colleges and institutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
