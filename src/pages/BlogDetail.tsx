import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  published_at: string;
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;
      setBlog(data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <Link to="/blogs" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blogs"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>

            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {blog.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{blog.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{formatDate(blog.published_at)}</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center hover:text-white transition"
              >
                <Share2 className="w-5 h-5 mr-2" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">{blog.excerpt}</p>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Written by</p>
                  <p className="font-semibold text-gray-900">{blog.author}</p>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Continue Learning</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our courses and take the next step in your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
            >
              Browse Courses
            </Link>
            <Link
              to="/blogs"
              className="bg-transparent text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg border-2 border-blue-600"
            >
              Read More Blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
