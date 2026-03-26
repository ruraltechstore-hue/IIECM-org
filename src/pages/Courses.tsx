import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getCoursesByCategory } from '../data/courses';
import { courseCoverPath } from '../types/course';
import { Clock, IndianRupee } from 'lucide-react';

export default function Courses() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'Artificial Intelligence & Future Skills', label: 'AI & Future Skills' },
    { value: 'Technical & IT Programs', label: 'Technical & IT' },
    { value: 'Professional Skills', label: 'Professional Skills' },
    { value: 'E-Commerce & Digital Marketing', label: 'E-Commerce & Marketing' },
    { value: 'Diploma Programs', label: 'Diploma Programs' },
    { value: 'Degree Programs', label: 'Degree Programs' },
    { value: 'Postgraduate Programs', label: 'Postgraduate Programs' },
    { value: 'Certification Programs', label: 'Certification Programs' }
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

  const courses = useMemo(
    () => getCoursesByCategory(selectedCategory),
    [selectedCategory]
  );

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-blue-100">
              Choose from 63+ industry-aligned programs designed for career growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    selectedCategory === category.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {courses.map((course) => (
              <Link
                key={course.slug}
                to={`/courses/${course.slug}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-40 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 flex-shrink-0">
                  <img
                    src={courseCoverPath(course.slug)}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                    {course.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.short_description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration || 'Self-paced'}
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold">
                      <IndianRupee className="w-4 h-4" />
                      {course.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {courses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No courses found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Not Sure Which Course to Choose?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the perfect course for your career goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
          >
            Get Free Counseling
          </Link>
        </div>
      </section>
    </div>
  );
}
