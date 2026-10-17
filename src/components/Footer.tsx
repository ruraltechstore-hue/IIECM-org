import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import SkillEcomLogo from './SkillEcomLogo';
import {
  LEGAL_ENTITY_NAME,
  SITE_ADDRESS_LINES,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_TEL,
} from '../constants/site';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle warm amber top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <SkillEcomLogo size="md" theme="dark" />
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              International Institute of E-Commerce and Management (IIECM Foundation) — Delivering accredited degree pathways, practical internships, and professional certifications aligned with national educational standards.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/17VDwwy9d4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-amber-500/20 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/iiecmacademy1?igsh=MTNuc2oxaHY4c3FyZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-amber-500/20 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@iiecm7882?si=sCgZr1h0p6ib9ARo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-amber-500/20 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/international-institute-of-e-commerce-and-management/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-amber-500/20 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-stone-400 hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-500/60">•</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-500/60">•</span> About IIECM
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-stone-400 hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-500/60">•</span> All Courses
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-stone-400 hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-500/60">•</span> Internships
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-stone-400 hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-500/60">•</span> Institutional Partnerships
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-stone-400 hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-500/60">•</span> Hiring & Industry Partners
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-stone-400 hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-500/60">•</span> Blogs & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Programs & Policies */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">
              Programs &amp; Governance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/courses?category=ai" className="text-stone-400 hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-500/60">•</span> AI & Future Skills
                </Link>
              </li>
              <li>
                <Link to="/courses?category=technical" className="text-stone-400 hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-500/60">•</span> Full Stack & Cloud
                </Link>
              </li>
              <li>
                <Link to="/courses?category=ecommerce" className="text-stone-400 hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-500/60">•</span> E-Commerce & SEO
                </Link>
              </li>
              <li className="pt-2 border-t border-stone-800">
                <Link to="/privacy-policy" className="text-stone-400 hover:text-amber-300 transition block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-stone-400 hover:text-amber-300 transition block">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-stone-400 hover:text-amber-300 transition block">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-stone-400 hover:text-amber-300 transition block">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-amber-400" />
                <span className="text-stone-400 text-xs leading-relaxed">
                  {SITE_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-amber-400" />
                <a href={`tel:${SITE_PHONE_TEL}`} className="text-stone-300 hover:text-amber-300 transition font-semibold">
                  {SITE_PHONE}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-amber-400" />
                <a href={`mailto:${SITE_EMAIL}`} className="text-stone-300 hover:text-amber-300 transition text-xs break-all">
                  {SITE_EMAIL}
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
              💡 Need guidance? Speak directly with our admissions desk.
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2024 {LEGAL_ENTITY_NAME}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Founded by Patlola Prashanth Kumar</span>
            <span className="text-amber-500">•</span>
            <span className="text-amber-400/90 font-medium">Empowering Careers Nationwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
