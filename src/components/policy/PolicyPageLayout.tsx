import type { ReactNode } from 'react';
import { Sun } from 'lucide-react';

type Props = {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
};

export default function PolicyPageLayout({ title, lastUpdated = 'December 2024', children }: Props) {
  return (
    <div>
      <section className="relative bg-slate-900 text-white py-14 md:py-18 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-300 font-semibold text-xs mb-4 border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>IIECM Governance</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold mb-3 tracking-tight text-white">{title}</h1>
            <p className="text-slate-400 font-medium text-xs sm:text-sm">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4">{children}</div>
      </section>
    </div>
  );
}
