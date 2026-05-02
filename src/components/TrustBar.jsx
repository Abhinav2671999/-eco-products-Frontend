import { motion } from 'framer-motion';
import { Globe2, Recycle, Truck, MapPin } from 'lucide-react';

const items = [
  { icon: Globe2, label: '100% Biodegradable' },
  { icon: Recycle, label: 'Plastic-Free Materials' },
  { icon: Truck, label: 'Reliable Bulk Supply' },
  { icon: MapPin, label: 'Made for Indian Businesses' },
];

export default function TrustBar() {
  return (
    <section className="container-px max-shell -mt-6 sm:-mt-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-4 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur-md sm:grid-cols-4 sm:p-6"
      >
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-2 ${
              i !== items.length - 1
                ? 'sm:border-r sm:border-ink-200/60'
                : ''
            }`}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
              <item.icon size={18} strokeWidth={1.8} />
            </span>
            <p className="text-sm font-semibold leading-snug text-ink-800">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
