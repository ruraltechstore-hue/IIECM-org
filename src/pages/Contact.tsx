import { useState } from 'react';
import { sendInquiryNotification } from '../lib/emailjs';
import {
  inquiryInputClass,
  validateInquiryForm,
  type InquiryFieldErrors,
} from '../lib/validateInquiryForm';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
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
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              We're here to help. Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-sm font-medium text-gray-800 mb-1">{LEGAL_ENTITY_NAME}</p>
                      <p className="text-gray-600">
                        {SITE_ADDRESS_LINES.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call / WhatsApp</h3>
                      <a href={`tel:${SITE_PHONE_TEL}`} className="text-blue-600 hover:underline">
                        {SITE_PHONE}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href={`mailto:${SITE_EMAIL}`} className="text-blue-600 hover:underline">
                        {SITE_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">WhatsApp Support</h3>
                      <p className="text-gray-600 mb-2">Chat with our team for instant support</p>
                      <a
                        href={`https://wa.me/${SITE_WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="contact-name">
                        Your Name
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
                        aria-describedby={fieldErrors.name ? 'err-contact-name' : undefined}
                        className={inquiryInputClass(Boolean(fieldErrors.name))}
                        placeholder="John Doe"
                      />
                      {fieldErrors.name && (
                        <p id="err-contact-name" className="mt-1 text-sm text-red-600" role="alert">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="contact-email">
                        Email Address
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
                        aria-describedby={fieldErrors.email ? 'err-contact-email' : undefined}
                        className={inquiryInputClass(Boolean(fieldErrors.email))}
                        placeholder="john@example.com"
                      />
                      {fieldErrors.email && (
                        <p id="err-contact-email" className="mt-1 text-sm text-red-600" role="alert">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="contact-mobile">
                        Mobile Number
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
                        aria-describedby={fieldErrors.mobile ? 'err-contact-mobile' : undefined}
                        className={inquiryInputClass(Boolean(fieldErrors.mobile))}
                        placeholder="+91 1234567890"
                      />
                      {fieldErrors.mobile && (
                        <p id="err-contact-mobile" className="mt-1 text-sm text-red-600" role="alert">
                          {fieldErrors.mobile}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="contact-message">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          clearFieldError('message');
                        }}
                        aria-invalid={Boolean(fieldErrors.message)}
                        aria-describedby={fieldErrors.message ? 'err-contact-message' : undefined}
                        className={inquiryInputClass(Boolean(fieldErrors.message))}
                        placeholder="How can we help you?"
                      ></textarea>
                      {fieldErrors.message && (
                        <p id="err-contact-message" className="mt-1 text-sm text-red-600" role="alert">
                          {fieldErrors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
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
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">
              Have a question? Check out our{' '}
              <a href="#" className="text-blue-600 hover:underline">FAQ section</a>{' '}
              or contact us directly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Course Inquiries</h3>
                <p className="text-gray-600 text-sm">Questions about our programs and enrollments</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Technical Support</h3>
                <p className="text-gray-600 text-sm">LMS access and technical assistance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Partnership Opportunities</h3>
                <p className="text-gray-600 text-sm">Become a counsellor, franchisee, or affiliate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
