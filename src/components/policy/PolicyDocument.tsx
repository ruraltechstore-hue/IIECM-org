import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function PolicyDocument({ children }: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm ring-1 ring-gray-900/5 overflow-hidden divide-y divide-gray-100">
      {children}
    </div>
  );
}
