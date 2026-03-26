import { MessageCircle } from 'lucide-react';
import { SITE_WHATSAPP_NUMBER } from '../constants/site';

export default function WhatsAppButton() {
  const message = encodeURIComponent('Hi, I would like to know more about IIECM courses and programs.');

  return (
    <a
      href={`https://wa.me/${SITE_WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with IIECM Support
      </span>
    </a>
  );
}
