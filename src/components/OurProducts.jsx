import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PlateIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="32" cy="32" r="26" />
    <circle cx="32" cy="32" r="18" />
    <path d="M44 22.5c2 1.7 3.5 3.8 4.5 6.2" />
  </svg>
);

const BowlIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 26h48" />
    <path d="M10 26c0 12.7 9.85 23 22 23s22-10.3 22-23" />
    <path d="M44 38c2.5-2.4 4.2-5.5 4.8-9" />
  </svg>
);

const TrayIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="12" width="52" height="40" rx="3" />
    <rect x="11" y="17" width="22" height="14" rx="2" />
    <rect x="37" y="17" width="16" height="14" rx="2" />
    <rect x="11" y="35" width="16" height="12" rx="2" />
    <rect x="31" y="35" width="22" height="12" rx="2" />
  </svg>
);

const categories = [
  {
    icon: PlateIcon,
    title: 'Plates',
    text: 'Sturdy, eco-friendly plates made from bagasse. Available in various sizes, perfect for any meal and event.',
  },
  {
    icon: BowlIcon,
    title: 'Bowls',
    text: 'Biodegradable bowls ideal for soups, salads, and desserts. Strong and durable for a safe dining experience.',
  },
  {
    icon: TrayIcon,
    title: 'Meal Trays',
    text: 'Made from bagasse, they provide a sturdy and sustainable alternative to traditional disposable trays.',
  },
];

export default function OurProducts() {
  return (
    <section className="container-px max-shell py-20 sm:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="heading-display text-center text-4xl sm:text-5xl lg:text-6xl"
      >
        Our Products
      </motion.h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {categories.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col rounded-3xl bg-brand-100/60 p-8 transition-shadow duration-300 hover:shadow-card sm:p-10"
          >
            <div className="text-ink-900">
              <c.icon className="h-32 w-32 sm:h-36 sm:w-36" />
            </div>

            <h3 className="mt-8 font-display text-2xl font-extrabold uppercase tracking-wide text-ink-900">
              {c.title}
            </h3>

            <p className="mt-4 flex-1 text-base leading-relaxed text-ink-600">
              {c.text}
            </p>

            <Link
              to="/products"
              aria-label={`View ${c.title}`}
              className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft transition-all duration-300 hover:bg-brand-700 hover:shadow-glow group-hover:translate-x-1"
            >
              <ArrowRight size={22} strokeWidth={2.4} />
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
