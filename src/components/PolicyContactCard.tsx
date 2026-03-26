import type { ReactNode } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import {
  LEGAL_ENTITY_NAME,
  SITE_ADDRESS_LINES,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_TEL,
} from '../constants/site';

type Props = {
  /** Optional intro (e.g. refund subject line) shown above address block */
  preamble?: ReactNode;
};

export default function PolicyContactCard({ preamble }: Props) {
  return (
    <section className="px-6 py-8 md:px-10 md:py-9 bg-gradient-to-b from-blue-50/95 to-slate-50/80 border-t-4 border-blue-600">
      <div className="flex items-start gap-3 mb-4">
        <div className="rounded-lg bg-blue-100 p-2 text-blue-700 shrink-0">
          <MapPin className="w-5 h-5" aria-hidden />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 tracking-tight">Contact Us</h2>
          <p className="text-sm text-gray-500 mt-0.5">Registered office & correspondence</p>
        </div>
      </div>

      {preamble && <div className="mb-6 text-gray-600 leading-relaxed space-y-2">{preamble}</div>}

      <p className="font-semibold text-gray-900">{LEGAL_ENTITY_NAME}</p>
      <address className="not-italic text-gray-600 mt-3 space-y-0.5">
        {SITE_ADDRESS_LINES.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>

      <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4 text-gray-700">
        <a
          href={`mailto:${SITE_EMAIL}`}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:border-blue-200 hover:bg-blue-50/50 transition"
        >
          <Mail className="w-4 h-4 text-blue-600 shrink-0" aria-hidden />
          {SITE_EMAIL}
        </a>
        <a
          href={`tel:${SITE_PHONE_TEL}`}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:border-blue-200 hover:bg-blue-50/50 transition"
        >
          <Phone className="w-4 h-4 text-blue-600 shrink-0" aria-hidden />
          {SITE_PHONE}
        </a>
      </div>
    </section>
  );
}
