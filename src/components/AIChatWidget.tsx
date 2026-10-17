import { Bot, X, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { LEGAL_ENTITY_NAME, SITE_PHONE } from '../constants/site';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: `☀️ Welcome to ${LEGAL_ENTITY_NAME} AI Advisor! Ask me about AI courses, internships, fee structures, or campus admissions.`
    }
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    'What AI courses do you offer?',
    'Tell me about internship programs',
    'How can I become a partner?',
    'What are the degree & diploma programs?'
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { type: 'user', text: input }]);

    setTimeout(() => {
      let response = `I'd be glad to help! For personalized career counseling at ${LEGAL_ENTITY_NAME}, please call our desk at ${SITE_PHONE} or submit an inquiry on our contact page.`;

      const q = input.toLowerCase();
      if (q.includes('ai') || q.includes('course')) {
        response = "We offer 24+ industry-ready programs across Artificial Intelligence, Machine Learning, Prompt Engineering, Full Stack, and E-Commerce. Visit our Courses page to explore the full curriculum!";
      } else if (q.includes('internship')) {
        response = "We provide real-world internship programs with stipends and live industry projects. Check our Internships section for details!";
      } else if (q.includes('partner') || q.includes('franchise')) {
        response = "Partner with IIECM as an Institutional Affiliate, Franchisee, or Corporate Hiring Partner. Visit our Partnerships page!";
      } else if (q.includes('degree') || q.includes('bba') || q.includes('bca') || q.includes('mca') || q.includes('mba')) {
        response = "We offer industry-integrated degree programs: BBA (Digital Commerce), BCA (Software Integrated), B.Com, MCA (AI & Cloud), and Executive MBA. Check our Degree courses!";
      }

      setMessages((prev) => [...prev, { type: 'bot', text: response }]);
    }, 450);

    setInput('');
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-amber-600 hover:bg-amber-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 group border border-amber-500/50"
          aria-label="Open Admissions Assistant"
        >
          <Bot className="w-5 h-5 text-white" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-slate-100 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Academic Assistant
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-xl z-50 flex flex-col max-h-[580px] border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-150">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 rounded-t-2xl flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                  IIECM Academic Advisor
                </h3>
                <p className="text-[11px] text-slate-400">Available 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-slate-800 p-1 rounded-lg text-slate-400 hover:text-white transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/60">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs md:text-sm leading-relaxed ${
                    msg.type === 'user'
                      ? 'bg-amber-600 text-white font-medium shadow-xs'
                      : 'bg-white text-slate-800 shadow-xs border border-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-1.5 mt-3">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Frequently Asked Questions:
                </p>
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    className="block w-full text-left text-xs p-2.5 bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-800 rounded-lg border border-slate-200 font-medium transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Footer */}
          <div className="p-3 border-t border-slate-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about academic programs, admissions..."
                className="flex-1 px-3.5 py-2 text-xs md:text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900"
              />
              <button
                onClick={handleSend}
                className="bg-amber-600 hover:bg-amber-700 text-white p-2.5 rounded-lg transition shadow-xs"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
