import { ReactNode, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import AIChatWidget from './AIChatWidget';
import { ArrowUp, Sun } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-400 selection:text-stone-950">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <AIChatWidget />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 z-40 border border-amber-500/50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" />
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-slate-900 text-slate-100 px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow">
            Back to Top
          </span>
        </button>
      )}
    </div>
  );
}
