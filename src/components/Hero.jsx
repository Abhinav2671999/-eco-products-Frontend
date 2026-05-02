import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Leaf, ShieldCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="absolute -left-32 top-32 -z-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute right-0 top-1/2 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl" />

      <div className="max-shell container-px grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
            <span className="eyebrow">
              <Sparkles size={14} className="text-brand-600" />
              Premium · Plastic-free · Plant-based
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="heading-display mt-6 text-5xl leading-[1.04] sm:text-6xl lg:text-[4.4rem]"
          >
            Bagasse Tableware{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-tr from-brand-700 via-brand-500 to-brand-300 bg-clip-text text-transparent">
                That Doesn’t Cost the Earth.
              </span>
              <svg
                viewBox="0 0 220 14"
                className="absolute -bottom-3 left-0 h-3 w-full text-brand-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M3 9 C 60 -2, 160 -2, 217 9" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600"
          >
            Premium biodegradable plates, bowls and meal trays — moulded from
            sugarcane bagasse for cafés, kitchens and events that refuse to choose
            between performance and the planet.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link to="/products" className="btn-primary">
              Explore Products
              <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-ghost">
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-center"
          >
            {[
              { k: '500+', v: 'Businesses served' },
              { k: '0%', v: 'Plastic in our line' },
              { k: '4.9★', v: 'Customer rating' },
            ].map((stat) => (
              <div key={stat.v} className="card-surface px-3 py-4">
                <p className="font-display text-2xl font-extrabold text-ink-900">
                  {stat.k}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-ink-500">
                  {stat.v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="relative aspect-[5/6] overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 shadow-glow backdrop-blur-md">
            <img
              src="/hero.jpeg"
              alt="Bagasse plates, bowls and meal trays on a wooden surface"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-soft backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <ShieldCheck size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">
                    Food-grade certified
                  </p>
                  <p className="text-xs text-ink-500">FDA & FSSAI compliant</p>
                </div>
              </div>
              <span className="rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold text-brand-700">
                B-Corp
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -left-8 top-12 hidden rounded-2xl border border-white/60 bg-white/90 p-4 shadow-card backdrop-blur sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-200 text-brand-700">
                <Leaf size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">100% compostable</p>
                <p className="text-xs text-ink-500">Decomposes in 90 days</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute -right-6 top-1/3 hidden h-24 w-24 animate-floaty rounded-3xl bg-brand-200/70 blur-md sm:block" />
        </motion.div>
      </div>
    </section>
  );
}
