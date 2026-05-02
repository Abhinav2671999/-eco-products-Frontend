import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="container-px max-shell py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img
              src="/about.jpeg"
              alt="A team enjoying food served on eco-friendly tableware"
              className="aspect-[5/6] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden max-w-[260px] rounded-2xl border border-white/60 bg-white/90 p-5 shadow-glow backdrop-blur sm:block">
            <Quote size={18} className="text-brand-600" />
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              "Sustainability shouldn't be a compromise — it should be the upgrade."
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink-500">
              Verdara studio
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Our story</span>
          <h2 className="heading-display mt-5 text-3xl sm:text-4xl lg:text-5xl">
            Built for a Greener Future.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            We believe sustainability should be simple, affordable and accessible.
            Our mission is to replace single-use plastic and styrofoam with bagasse
            plates, bowls and meal trays that perform under real kitchen pressure —
            and disappear cleanly when the meal is done.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: '6 yrs', v: 'in the making' },
              { k: '500+', v: 'partner kitchens' },
              { k: '20+', v: 'tableware SKUs' },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-ink-200/60 bg-white/70 p-4 text-center backdrop-blur"
              >
                <p className="font-display text-xl font-extrabold text-brand-700">
                  {s.k}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-ink-500">
                  {s.v}
                </p>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-primary mt-8">
            Read Our Story
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
