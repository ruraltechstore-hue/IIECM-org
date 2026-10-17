import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from '../data/blogs';
import { Calendar, User, ArrowLeft, Share2, Sun } from 'lucide-react';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = useMemo(() => getBlogBySlug(slug), [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-950 text-white">
        <Sun className="w-12 h-12 text-amber-400 mx-auto mb-4" />
        <h1 className="text-3xl font-black text-white mb-4">Blog Post Not Found</h1>
        <Link to="/blogs" className="text-amber-400 hover:underline flex items-center font-bold">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50">
      <section className="relative bg-slate-900 text-white py-14 md:py-20 border-b border-slate-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blogs"
              className="inline-flex items-center text-slate-300 font-semibold hover:text-white mb-6 transition text-xs sm:text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Articles
            </Link>

            <div className="inline-block bg-slate-800 text-amber-300 border border-slate-700 px-3.5 py-1 rounded-full text-xs font-semibold mb-4">
              {blog.category}
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight tracking-tight text-white">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-xs sm:text-sm font-medium">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-amber-400" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-amber-400" />
                <span>{formatDate(blog.published_at)}</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center hover:text-white transition font-semibold text-amber-400 hover:text-amber-300"
              >
                <Share2 className="w-4 h-4 mr-1.5" />
                <span>Share Article</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-stone-800">
              <p className="text-xl text-stone-700 leading-relaxed mb-8 font-medium border-l-4 border-amber-400 pl-4 py-1 italic">
                {blog.excerpt}
              </p>
              <div className="text-stone-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
                {blog.content}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-amber-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-1">Author</p>
                  <p className="font-extrabold text-stone-900 text-lg">{blog.author}</p>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg transition shadow-xs text-xs"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Article</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Continue Your Educational Roadmap</h2>
          <p className="text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Explore our accredited degree programs and practical skill development courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/courses"
              className="bg-amber-600 hover:bg-amber-700 text-white px-7 py-3 rounded-lg font-semibold transition shadow-xs text-sm"
            >
              Browse All Programs
            </Link>
            <Link
              to="/blogs"
              className="bg-white text-slate-800 px-7 py-3 rounded-lg font-semibold hover:bg-slate-50 transition text-sm border border-slate-300 shadow-2xs"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
