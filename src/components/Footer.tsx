import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import {
  LEGAL_ENTITY_NAME,
  SITE_ADDRESS_LINES,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_TEL,
} from '../constants/site';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-white">IIECM</h3>
                <p className="text-sm text-gray-400">Foundation</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Building Future-Ready Professionals in Technology, Business & Artificial Intelligence
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/17VDwwy9d4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/iiecmacademy1?igsh=MTNuc2oxaHY4c3FyZw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@iiecm7882?si=sCgZr1h0p6ib9ARo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/international-institute-of-e-commerce-and-management/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About IIECM</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition">Courses</Link></li>
              <li><Link to="/internships" className="hover:text-blue-400 transition">Internships</Link></li>
              <li><Link to="/partnerships" className="hover:text-blue-400 transition">Partnerships</Link></li>
              <li><Link to="/partners" className="hover:text-blue-400 transition">Partners</Link></li>
              <li><Link to="/blogs" className="hover:text-blue-400 transition">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-blue-400 transition">Refund Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-blue-400 transition">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <span className="text-sm">
                  {SITE_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href={`tel:${SITE_PHONE_TEL}`} className="hover:text-blue-400 transition">
                  {SITE_PHONE}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-blue-400 transition">
                  {SITE_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2024 {LEGAL_ENTITY_NAME}. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Founded by Patlola Prashanth Kumar</p>
        </div>
      </div>
    </footer>
  );
}
