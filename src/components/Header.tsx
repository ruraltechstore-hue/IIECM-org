import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">IIECM</h1>
              <p className="text-xs text-gray-600">Building Future-Ready Professionals</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition">Courses</Link>
            <Link to="/internships" className="text-gray-700 hover:text-blue-600 transition">Internships</Link>
            <Link to="/partnerships" className="text-gray-700 hover:text-blue-600 transition">Partnerships</Link>
            <Link to="/partners" className="text-gray-700 hover:text-blue-600 transition">Partners</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600 transition">Blogs</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </nav>

          <button
            className="lg:hidden text-gray-700"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition" onClick={closeMenu}>About</Link>
              <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition" onClick={closeMenu}>Courses</Link>
              <Link to="/internships" className="text-gray-700 hover:text-blue-600 transition" onClick={closeMenu}>Internships</Link>
              <Link to="/partnerships" className="text-gray-700 hover:text-blue-600 transition" onClick={closeMenu}>Partnerships</Link>
              <Link to="/partners" className="text-gray-700 hover:text-blue-600 transition" onClick={closeMenu}>Partners</Link>
              <Link to="/blogs" className="text-gray-700 hover:text-blue-600 transition" onClick={closeMenu}>Blogs</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition" onClick={closeMenu}>Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
