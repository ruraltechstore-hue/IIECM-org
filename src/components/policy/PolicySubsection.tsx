import type { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export default function PolicySubsection({ title, children }: Props) {
  return (
    <div className="mt-6 first:mt-0 border-l-4 border-blue-600 pl-5">
      <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="space-y-2 text-gray-600 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">{children}</div>
    </div>
  );
}
