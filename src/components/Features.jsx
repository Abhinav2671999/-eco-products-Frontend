import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Boxes, LayoutGrid } from 'lucide-react';
import { SectionHeader } from './Section';

const features = [
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    text: 'Moulded from sugarcane bagasse — a fast-renewing crop residue that returns to the earth in 90 days.',
  },
  {
    icon: ShieldCheck,
    title: 'Premium Quality',
    text: 'Strong, oil-resistant and microwave-safe — plates, bowls and trays built for real service, not just photos.',
  },
  {
    icon: Boxes,
    title: 'Bulk Ready',
    text: 'Reliable wholesale supply for cafés, cloud kitchens, caterers and events, with consistent stock and fair lead times.',
  },
  {
    icon: LayoutGrid,
    title: 'Modern Design',
    text: 'Clean, minimal forms in natural fibre tones that elevate every plate the moment it hits the table.',
  },
];

export default function Features() {
  return (
    <section className="container-px max-shell relative py-20 sm:py-28">
      <SectionHeader
        eyebrow="Why choose us"
        title="Designed with intention. Built for business."
        description="Every detail — from the fibre to the finish — is engineered to leave the lightest possible footprint, without compromising on the way it performs in your hands."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-3xl border border-white bg-white/80 p-6 shadow-soft backdrop-blur-md transition-shadow hover:shadow-glow"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/60 transition-transform duration-500 group-hover:scale-125" />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                <f.icon size={20} strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{f.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
