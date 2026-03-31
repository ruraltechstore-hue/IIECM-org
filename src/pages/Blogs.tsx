import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogsByCategory } from '../data/blogs';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'All',
    'E-Commerce & Business',
    'Artificial Intelligence',
    'Career Development',
    'Digital Marketing',
    'Data Science & Analytics',
    'Technology',
    'Education',
  ];

  const blogs = useMemo(
    () => getBlogsByCategory(selectedCategory === 'all' ? 'all' : selectedCategory),
    [selectedCategory]
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IIECM Blog</h1>
            <p className="text-xl text-blue-100">
              Insights, trends, and expert advice on education, technology, and career development
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
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? 'all' : category)}
                  className={`px-6 py-2 rounded-lg font-medium transition ${
                    selectedCategory === (category === 'All' ? 'all' : category)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-48 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="text-sm font-semibold mb-2 bg-white/20 inline-block px-3 py-1 rounded-full">
                          {blog.category}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600">
                        <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{formatDate(blog.published_at)}</span>
                        </div>
                      </div>

                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No blogs found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights on education, technology, and career development delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
