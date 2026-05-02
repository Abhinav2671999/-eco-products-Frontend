import { motion } from 'framer-motion';
import { TreePine, Droplets, RefreshCcw, Sprout } from 'lucide-react';
import { SectionHeader } from './Section';

const stats = [
  {
    icon: Droplets,
    metric: '12 M+',
    label: 'Plastic plates replaced',
    sub: 'Across cafés, kitchens and events',
  },
  {
    icon: TreePine,
    metric: '0',
    label: 'Trees felled to make this',
    sub: 'Bagasse is a sugarcane crop residue',
  },
  {
    icon: RefreshCcw,
    metric: '90 days',
    label: 'To fully compost',
    sub: 'In standard industrial conditions',
  },
  {
    icon: Sprout,
    metric: '0%',
    label: 'Plastic, wax or PFAS',
    sub: 'Plant fibre, end to end',
  },
];

const lifecycle = [
  { step: '01', title: 'Sugarcane bagasse', text: 'Crop residue left after juicing — abundant, renewable, no trees touched.' },
  { step: '02', title: 'Moulded to perform', text: 'Pressed into plates, bowls and trays. Oil-resistant, microwave-safe.' },
  { step: '03', title: 'Served with confidence', text: 'In cafés, cloud kitchens, caterers and large-format events.' },
  { step: '04', title: 'Returns to earth', text: 'Composts in 90 days — no microplastic, no PFAS legacy.' },
];

export default function Impact() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-1/3 -z-10 h-72 bg-gradient-to-b from-brand-50/0 via-brand-50/70 to-brand-50/0" />

      <div className="container-px max-shell py-20 sm:py-28">
        <SectionHeader
          eyebrow="Our impact"
          title="Small Changes. Big Impact."
          description="Every product you choose helps reduce plastic waste and protect our environment for future generations. Here's what that looks like in numbers."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-surface p-6 text-center"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-100 text-brand-700">
                <s.icon size={20} strokeWidth={1.8} />
              </span>
              <p className="mt-5 font-display text-3xl font-extrabold text-ink-900">
                {s.metric}
              </p>
              <p className="mt-1 text-sm font-semibold text-ink-800">{s.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-500">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-brand-200/50 bg-white/70 p-8 shadow-soft backdrop-blur sm:p-10"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Compostable lifecycle
          </p>

          <div className="relative mt-8 grid gap-6 md:grid-cols-4">
            <div className="absolute left-6 right-6 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent md:block" />
            {lifecycle.map((step) => (
              <div key={step.step} className="relative text-center md:text-left">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-brand-200 bg-white font-display text-sm font-extrabold text-brand-700 shadow-soft md:mx-0">
                  {step.step}
                </div>
                <p className="mt-4 font-display text-base font-bold text-ink-900">
                  {step.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
