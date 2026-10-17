import { useState } from 'react';
import { sendInquiryNotification } from '../lib/emailjs';
import {
  inquiryInputClass,
  validateInquiryForm,
  type InquiryFieldErrors,
} from '../lib/validateInquiryForm';
import { MapPin, Phone, Mail, MessageCircle, Sun, Sparkles, Send } from 'lucide-react';
import {
  LEGAL_ENTITY_NAME,
  SITE_ADDRESS_LINES,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_NUMBER,
} from '../constants/site';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<InquiryFieldErrors>({});

  const clearFieldError = (key: keyof typeof formData) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage('');

    const { valid, errors, sanitized } = validateInquiryForm(formData, { requireMessage: true });
    if (!valid || !sanitized) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});

    setSubmitting(true);

    try {
      try {
        await sendInquiryNotification({
          title: 'Website contact',
          name: sanitized.name,
          email: sanitized.email,
          mobile: sanitized.mobile,
          message: sanitized.message,
        });
      } catch (emailErr: unknown) {
        const e = emailErr as { status?: number; text?: string };
        console.error(
          'EmailJS notification failed:',
          e?.status ?? 'unknown status',
          e?.text ?? emailErr
        );
      }

      setSubmitMessage('Thank you! We will get back to you soon.');
      setFormData({ name: '', email: '', mobile: '', message: '' });
      setFieldErrors({});
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-stone-50">
      <section className="relative bg-slate-900 text-white py-16 md:py-20 border-b border-slate-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-300 font-semibold text-xs mb-6 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Admissions &amp; Academic Inquiries</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">Contact Us</h1>
            <p className="text-base md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Connect with our academic counseling team for curriculum inquiries, admission guidelines, and institutional partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-black text-stone-900 mb-8 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                  Get In Touch
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3.5 rounded-2xl text-amber-700">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">Address</h3>
                      <p className="text-sm font-semibold text-stone-800 mb-1">{LEGAL_ENTITY_NAME}</p>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {SITE_ADDRESS_LINES.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3.5 rounded-2xl text-amber-700">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">Call Desk</h3>
                      <a href={`tel:${SITE_PHONE_TEL}`} className="text-amber-700 font-bold hover:underline text-sm">
                        {SITE_PHONE}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3.5 rounded-2xl text-amber-700">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">Email Support</h3>
                      <a href={`mailto:${SITE_EMAIL}`} className="text-amber-700 font-bold hover:underline text-sm break-all">
                        {SITE_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3.5 rounded-2xl text-emerald-700">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">WhatsApp Instant Support</h3>
                      <p className="text-stone-600 text-sm mb-2">Chat with our team directly on WhatsApp</p>
                      <a
                        href={`https://wa.me/${SITE_WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-700 transition shadow-md"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-100/50 p-6 rounded-3xl border border-amber-200">
                  <h3 className="font-bold text-stone-900 mb-2">Office & Counseling Hours</h3>
                  <p className="text-stone-700 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-stone-700 text-sm">Sunday: Online Inquiry Desk Active</p>
                </div>
              </div>

              <div>
                <div className="bg-stone-900 text-white p-8 md:p-10 rounded-3xl border border-amber-500/20 shadow-2xl">
                  <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
                    <Sun className="w-5 h-5 text-amber-400" />
                    Send Us an Inquiry
                  </h2>
                  <p className="text-xs text-stone-400 mb-6">
                    Fill out the form below and an admissions counselor will reach out within 2 business hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1" htmlFor="contact-name">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          clearFieldError('name');
                        }}
                        aria-invalid={Boolean(fieldErrors.name)}
                        className={`w-full px-4 py-3 rounded-xl bg-stone-950 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          fieldErrors.name ? 'border-red-500' : 'border-stone-800'
                        }`}
                        placeholder="John Doe"
                      />
                      {fieldErrors.name && (
                        <p className="mt-1 text-xs text-red-400">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1" htmlFor="contact-email">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          clearFieldError('email');
                        }}
                        aria-invalid={Boolean(fieldErrors.email)}
                        className={`w-full px-4 py-3 rounded-xl bg-stone-950 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          fieldErrors.email ? 'border-red-500' : 'border-stone-800'
                        }`}
                        placeholder="john@example.com"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs text-red-400">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1" htmlFor="contact-mobile">
                        Mobile Number *
                      </label>
                      <input
                        id="contact-mobile"
                        type="tel"
                        autoComplete="tel"
                        value={formData.mobile}
                        onChange={(e) => {
                          setFormData({ ...formData, mobile: e.target.value });
                          clearFieldError('mobile');
                        }}
                        aria-invalid={Boolean(fieldErrors.mobile)}
                        className={`w-full px-4 py-3 rounded-xl bg-stone-950 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          fieldErrors.mobile ? 'border-red-500' : 'border-stone-800'
                        }`}
                        placeholder="+91 1234567890"
                      />
                      {fieldErrors.mobile && (
                        <p className="mt-1 text-xs text-red-400">{fieldErrors.mobile}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1" htmlFor="contact-message">
                        Message / Program of Interest *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          clearFieldError('message');
                        }}
                        aria-invalid={Boolean(fieldErrors.message)}
                        className={`w-full px-4 py-3 rounded-xl bg-stone-950 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          fieldErrors.message ? 'border-red-500' : 'border-stone-800'
                        }`}
                        placeholder="Tell us what course or query you have in mind..."
                      ></textarea>
                      {fieldErrors.message && (
                        <p className="mt-1 text-xs text-red-400">{fieldErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold text-sm shadow-sm hover:shadow transition disabled:opacity-50"
                    >
                      {submitting ? 'Sending...' : 'Submit Inquiry'}
                    </button>

                    {submitMessage && (
                      <p className={`text-center text-xs p-3 rounded-xl ${submitMessage.includes('Thank') ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                        {submitMessage}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-stone-900 mb-4">Dedicated Support Desks</h2>
            <p className="text-stone-600 mb-10 text-sm">
              Connect directly with our specialized department heads.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-amber-200/60 hover:border-amber-400 transition hover:-translate-y-1">
                <h3 className="font-bold text-stone-900 mb-2">Course Inquiries</h3>
                <p className="text-stone-600 text-xs">Questions about curriculums, eligibility, and cohorts</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-amber-200/60 hover:border-amber-400 transition hover:-translate-y-1">
                <h3 className="font-bold text-stone-900 mb-2">Technical LMS Support</h3>
                <p className="text-stone-600 text-xs">Student dashboard access and technical assistance</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-amber-200/60 hover:border-amber-400 transition hover:-translate-y-1">
                <h3 className="font-bold text-stone-900 mb-2">Partnership Programs</h3>
                <p className="text-stone-600 text-xs">Counselors, franchisees, and institutional tie-ups</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
