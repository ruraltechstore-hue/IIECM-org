import type { ReactNode } from 'react';

/** Shared list styling for policy bullet lists */
export const policyListClass = 'list-disc pl-5 space-y-2 text-gray-600 leading-relaxed';

type Props = {
  title: string;
  id?: string;
  children: ReactNode;
};

export default function PolicySection({ title, id, children }: Props) {
  return (
    <section id={id} className="px-6 py-8 md:px-10 md:py-9">
      <h2 className="text-lg font-semibold text-gray-900 tracking-tight mb-4">{title}</h2>
      <div className="space-y-3 text-gray-600 leading-relaxed [&_strong]:text-gray-800">{children}</div>
    </section>
  );
}
