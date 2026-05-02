import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="container-px max-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-brand-200/60 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-8 py-16 text-white shadow-glow sm:px-14 sm:py-20"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-brand-300/30 blur-3xl" />

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern id="leaves" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M30 8c-12 0-20 10-20 22 0 6 2 10 6 14 4-12 12-20 24-24-1 4-3 8-7 12-4 4-10 6-14 8 3 1 6 1 9 1 12 0 22-10 22-22 0-2 0-7-2-11-2-2-9-0-18-0z"
                fill="white"
              />
            </pattern>
          </defs>
          <rect width="800" height="400" fill="url(#leaves)" />
        </svg>

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
            <Leaf size={12} />
            Make the switch
          </span>
          <h3 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Ready to Make the Switch?
          </h3>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Join the cafés, cloud kitchens and caterers choosing bagasse plates,
            bowls and meal trays that perform as beautifully as they disappear.
            Browse the catalogue and request a sample in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Browse Products
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
