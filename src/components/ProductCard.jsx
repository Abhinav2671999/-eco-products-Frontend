import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { formatPrice, resolveImage } from '../services/api';

export default function ProductCard({ product, index = 0 }) {
  const image = resolveImage(product);
  const detailHref = `/products/${product._id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200/70 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative m-3 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700">
        <Link
          to={detailHref}
          className="absolute right-0 top-3 z-10 inline-flex items-center rounded-l-md bg-amber-500 px-4 py-1.5 text-[12px] font-semibold text-white shadow-soft transition hover:bg-amber-600"
        >
          Quick View
        </Link>

        <Link to={detailHref} className="block aspect-square">
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center px-5 pb-5 pt-2 text-center">
        <h3 className="font-display text-base font-bold text-ink-900 line-clamp-1">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-semibold text-amber-600">
          From {formatPrice(product.price)}
        </p>

        <Link
          to={detailHref}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-ink-300 px-6 py-2 text-[11px] font-bold uppercase tracking-wider text-ink-800 transition-all duration-300 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
        >
          <ShoppingBag size={14} strokeWidth={2.2} />
          Select Options
        </Link>
      </div>
    </motion.article>
  );
}
