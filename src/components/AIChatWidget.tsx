import { Bot, X, Send } from 'lucide-react';
import { useState } from 'react';
import { LEGAL_ENTITY_NAME, SITE_PHONE } from '../constants/site';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: `Hi! I'm ${LEGAL_ENTITY_NAME} AI Support. Ask me about courses, internships, pricing, certifications, or partners.`
    }
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    'What courses do you offer?',
    'Tell me about internship programs',
    'How can I become a partner?',
    'What are the certification programs?'
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { type: 'user', text: input }]);

    setTimeout(() => {
      let response = `I'd be happy to help! For detailed information about ${LEGAL_ENTITY_NAME}, please contact us at ${SITE_PHONE} or visit our contact page.`;

      if (input.toLowerCase().includes('course')) {
        response = "We offer 63+ courses across AI, Technical, Commerce, E-Commerce, and Professional Skills. Visit our Courses page to explore all programs!";
      } else if (input.toLowerCase().includes('internship')) {
        response = "We have 3-stage internship programs starting from ₹1,000. Visit our Internship page for complete details!";
      } else if (input.toLowerCase().includes('partner')) {
        response = "You can join as an Admission Counsellor, Franchisee, or Affiliate Partner. Check our Partners page for more information!";
      } else if (input.toLowerCase().includes('certification') || input.toLowerCase().includes('certificate')) {
        response = `All our courses include professional certificates issued by ${LEGAL_ENTITY_NAME}. We also offer specialized certification programs in AI, Digital Marketing, and E-Commerce!`;
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 500);

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
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-50 group"
          aria-label="Open AI Chat"
        >
          <Bot className="w-6 h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            IIECM AI Support
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px]">
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">IIECM AI Support</h3>
                <p className="text-xs text-blue-100">Always here to help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  msg.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    className="block w-full text-left text-sm p-3 bg-white hover:bg-blue-50 rounded-lg border border-gray-200 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-600"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
