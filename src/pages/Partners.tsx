import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Users, Building, TrendingUp, CheckCircle } from 'lucide-react';

type PartnerType = 'counsellor' | 'franchisee' | 'affiliate';

export default function Partners() {
  const [selectedType, setSelectedType] = useState<PartnerType | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType) return;

    setSubmitting(true);
    setSubmitMessage('');

    try {
      const { error } = await supabase
        .from('partner_applications')
        .insert([{
          partner_type: selectedType,
          ...formData
        }]);

      if (error) throw error;

      setSubmitMessage('Thank you! Your application has been submitted. Our team will contact you soon.');
      setFormData({ name: '', email: '', mobile: '', message: '' });
      setSelectedType(null);
    } catch (error) {
      console.error('Error submitting application:', error);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With IIECM</h1>
            <p className="text-xl text-blue-100">
              Join our education ecosystem and grow with us
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-300 shadow-lg">
              <div className="flex items-center mb-6">
                <Users className="w-12 h-12 text-blue-600 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Admission Counsellor Partner</h2>
                  <p className="text-blue-700">Guide students, assist admissions, and earn commissions</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg mb-6 border-2 border-blue-400">
                <p className="text-2xl font-bold text-blue-600">Investment: ₹10,000</p>
                <p className="text-sm text-gray-600 mt-1">One-time partnership fee</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Benefits:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive training provided</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regular lead allocation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Commission-based income opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Marketing materials and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Flexible working hours</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3 text-gray-900">Who Can Apply:</h4>
                <p className="text-gray-700 mb-2">
                  Students, graduates, working professionals, and educators who are passionate about helping others achieve their educational goals.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedType('counsellor');
                  document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Apply as Counsellor
              </button>
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
                <p className="text-2xl font-bold text-green-600">Investment: ₹25,000</p>
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

              <button
                onClick={() => {
                  setSelectedType('franchisee');
                  document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Apply as Franchisee
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-300 shadow-lg">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-12 h-12 text-purple-600 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Affiliate Partner</h2>
                  <p className="text-purple-700">Promote courses online and earn per sale</p>
                </div>
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

              <button
                onClick={() => {
                  setSelectedType('affiliate');
                  document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Join Affiliate Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedType && (
        <section className="py-16 bg-gray-50" id="partner-form">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Apply as {selectedType === 'counsellor' ? 'Admission Counsellor' : selectedType === 'franchisee' ? 'Franchisee' : 'Affiliate'} Partner
                </h2>
                <p className="text-gray-600">Fill out the form below and our team will get in touch with you.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message / Tell Us About Yourself
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Tell us about your background, experience, and why you want to partner with IIECM..."
                    ></textarea>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                    >
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedType(null)}
                      className="px-8 py-4 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                  </div>

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
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner With IIECM?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Growing Network</h3>
                <p className="text-gray-600">Join a rapidly expanding network of education partners across India</p>
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
