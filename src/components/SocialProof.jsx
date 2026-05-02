import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { SectionHeader } from './Section';

const testimonials = [
  {
    quote:
      'We moved our entire dine-in takeaway to Verdara bagasse plates and bowls in a week. Curries, gravies, hot rice — they handle it all without bending or leaking.',
    name: 'Aanya Mehta',
    role: 'Co-founder, Lila Café',
  },
  {
    quote:
      'The meal trays are a quiet upgrade. Customers actually comment on the look, and we’ve cut our styrofoam spend to zero — without raising our packaging bill.',
    name: 'Rohan Shetty',
    role: 'Operations, Saffron & Sage Cloud Kitchen',
  },
  {
    quote:
      'Bulk supply on time, every time. For a 200-cover catering operation that matters more than any sustainability claim — and with Verdara we get both.',
    name: 'Priya Nair',
    role: 'GM, The Garden Table Catering',
  },
];

const logos = ['Lila Café', 'Saffron & Sage', 'Garden Table', 'Wildflower Co.', 'Kindred Kitchen', 'North Roastery'];

export default function SocialProof() {
  return (
    <section className="container-px max-shell py-20 sm:py-28">
      <SectionHeader
        eyebrow="Social proof"
        title="Trusted by Growing Businesses"
        description="From neighbourhood cafés to multi-location kitchens, teams across the country are quietly making the switch."
        align="center"
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-surface flex h-full flex-col p-7"
          >
            <Quote size={20} className="text-brand-600" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
              “{t.quote}”
            </blockquote>
            <div className="mt-6 flex items-center justify-between border-t border-ink-200/60 pt-5">
              <div>
                <figcaption className="text-sm font-semibold text-ink-900">
                  {t.name}
                </figcaption>
                <p className="text-xs text-ink-500">{t.role}</p>
              </div>
              <div className="flex items-center gap-0.5 text-brand-600">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
          </motion.figure>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-3xl border border-ink-200/60 bg-white/60 px-6 py-7 backdrop-blur"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
          Trusted by
        </p>
        {logos.map((logo) => (
          <span
            key={logo}
            className="font-display text-base font-bold tracking-tight text-ink-400 transition hover:text-ink-700"
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
