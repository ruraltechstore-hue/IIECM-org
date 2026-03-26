import type { ReactNode } from 'react';

type Props = {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
};

export default function PolicyPageLayout({ title, lastUpdated = 'December 2024', children }: Props) {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-blue-100">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">{children}</div>
      </section>
    </div>
  );
}
