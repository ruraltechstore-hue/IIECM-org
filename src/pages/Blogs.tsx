import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogsByCategory } from '../data/blogs';
import { Calendar, User, ArrowRight, Sun, Sparkles } from 'lucide-react';

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
    <div className="bg-stone-50">
      <section className="relative bg-slate-900 text-white py-16 md:py-20 border-b border-slate-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-300 font-semibold text-xs mb-6 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>IIECM Academic &amp; Industry Insights</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">Articles &amp; Perspectives</h1>
            <p className="text-base md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Thought leadership, curriculum updates, and industry frameworks across technology, digital commerce, and modern management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="flex flex-wrap gap-2.5 justify-center">
              {categories.map((category) => {
                const isSelected = selectedCategory === (category === 'All' ? 'all' : category);
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === 'All' ? 'all' : category)}
                    className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${isSelected
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 shadow-md shadow-amber-500/25 scale-105'
                        : 'bg-white text-stone-700 hover:bg-amber-50 hover:text-amber-700 border border-amber-200/60 shadow-sm'
                      }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden border border-amber-200/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="bg-gradient-to-br from-slate-900 to-slate-800 h-44 flex items-center justify-center p-6 text-center border-b border-slate-700/50">
                        <div className="text-xs font-semibold tracking-wider uppercase bg-slate-800 text-amber-300 border border-slate-700 px-3.5 py-1.5 rounded-full shadow-xs">
                          {blog.category}
                        </div>
                      </div>

                      <div className="p-6">
                        <h2 className="text-xl font-bold text-stone-900 mb-3 line-clamp-2 hover:text-amber-600 transition-colors">
                          <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                        </h2>

                        <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">{blog.excerpt}</p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2">
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-4 pt-3 border-t border-amber-100">
                        <div className="flex items-center">
                          <User className="w-3.5 h-3.5 mr-1 text-amber-500" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1 text-amber-500" />
                          <span>{formatDate(blog.published_at)}</span>
                        </div>
                      </div>

                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="inline-flex items-center text-amber-600 font-extrabold text-sm hover:text-amber-700 transition"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-amber-200 max-w-lg mx-auto">
                <Sun className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                <p className="text-stone-700 font-bold text-lg mb-2">No blogs found in this category.</p>
                <p className="text-stone-500 text-sm">Please check back soon or browse all insights.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-amber-200/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-stone-900 mb-4">Stay Ahead in Tech & Business</h2>
            <p className="text-stone-600 mb-8 text-sm md:text-base">
              Get the latest insights on frontier AI, e-commerce playbooks, and high-impact career frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your corporate or personal email"
                className="flex-1 px-5 py-3.5 rounded-2xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-stone-900 text-sm"
              />
              <button className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-orange-500 text-stone-950 font-black px-8 py-3.5 rounded-2xl shadow-lg shadow-amber-500/20 hover:scale-105 transition text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
