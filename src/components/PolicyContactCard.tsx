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
    <section className="px-6 py-8 md:px-10 md:py-9 bg-gradient-to-b from-amber-50/90 to-stone-50 border-t-4 border-amber-500 rounded-2xl shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="rounded-xl bg-amber-100 p-2 text-amber-700 shrink-0">
          <MapPin className="w-5 h-5" aria-hidden />
        </div>
        <div>
          <h2 className="text-lg font-bold text-stone-900 tracking-tight">Contact Us</h2>
          <p className="text-xs text-stone-500 mt-0.5">Registered office & correspondence</p>
        </div>
      </div>

      {preamble && <div className="mb-6 text-stone-600 leading-relaxed space-y-2 text-sm">{preamble}</div>}

      <p className="font-bold text-stone-900">{LEGAL_ENTITY_NAME}</p>
      <address className="not-italic text-stone-600 mt-3 space-y-0.5 text-sm">
        {SITE_ADDRESS_LINES.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>

      <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4 text-stone-700">
        <a
          href={`mailto:${SITE_EMAIL}`}
          className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 shadow-sm hover:border-amber-400 hover:bg-amber-50/50 transition"
        >
          <Mail className="w-4 h-4 text-amber-600 shrink-0" aria-hidden />
          {SITE_EMAIL}
        </a>
        <a
          href={`tel:${SITE_PHONE_TEL}`}
          className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 shadow-sm hover:border-amber-400 hover:bg-amber-50/50 transition"
        >
          <Phone className="w-4 h-4 text-amber-600 shrink-0" aria-hidden />
          {SITE_PHONE}
        </a>
      </div>
    </section>
  );
}
