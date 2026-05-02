import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const groups = [
  {
    title: 'Shop',
    items: [
      { label: 'All products', to: '/products' },
      { label: 'Featured', to: '/' },
      { label: 'New arrivals', to: '/products?sort=newest' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'Our story', to: '/about' },
      { label: 'Mission', to: '/about#mission' },
      { label: 'Press', to: '/about' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'FAQs', to: '/about' },
      { label: 'Shipping', to: '/about' },
      { label: 'Returns', to: '/about' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-ink-200/60 bg-gradient-to-b from-white to-brand-50/40">
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />

      <div className="max-shell container-px relative grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-600">
            Premium, planet-friendly goods designed with intention. Built to last,
            chosen with care, kind to the world we share.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white/70 text-ink-600 transition hover:border-brand-300 hover:text-brand-700"
                aria-label="social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              {g.title}
            </p>
            <ul className="mt-5 space-y-3">
              {g.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-ink-700 transition hover:text-brand-700"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-200/60">
        <div className="max-shell container-px flex flex-col items-start justify-between gap-3 py-6 text-xs text-ink-500 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Verdara. Crafted with care.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            Made by <span className='text-brand-500'>techAN</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
