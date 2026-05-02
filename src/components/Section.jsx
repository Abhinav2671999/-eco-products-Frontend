import { motion } from 'framer-motion';

export function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
