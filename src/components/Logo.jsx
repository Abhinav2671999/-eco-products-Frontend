import { Leaf } from 'lucide-react';

export default function Logo({ className = '', tone = 'dark' }) {
  const text = tone === 'light' ? 'text-white' : 'text-ink-900';
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
        <Leaf size={18} strokeWidth={2.4} />
      </span>
      <span className={`font-display text-xl font-extrabold tracking-tight ${text}`}>
        Verdara
      </span>
    </div>
  );
}
