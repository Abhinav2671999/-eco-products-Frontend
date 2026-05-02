import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Leaf, ShieldCheck, Truck, Sprout } from 'lucide-react';
import { fetchProduct, formatPrice, resolveImage } from '../services/api';
import { Spinner } from '../components/Loader';

const promises = [
  { icon: Leaf, label: 'Plant-based materials' },
  { icon: ShieldCheck, label: 'Lifetime craftsmanship' },
  { icon: Truck, label: 'Carbon-neutral delivery' },
  { icon: Sprout, label: 'A tree planted per order' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProduct(id);
        if (active) setProduct(data);
      } catch (err) {
        if (active)
          setError(
            err?.response?.status === 404
              ? 'This product is no longer available.'
              : err.message || 'Could not load product.'
          );
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <section className="container-px max-shell flex min-h-[60vh] items-center justify-center">
        <Spinner className="h-8 w-8" />
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="container-px max-shell flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <h2 className="heading-display text-3xl">Hmm — we couldn't find that.</h2>
        <p className="max-w-md text-ink-600">{error}</p>
        <button onClick={() => navigate('/products')} className="btn-primary mt-2">
          <ArrowLeft size={16} />
          Back to all products
        </button>
      </section>
    );
  }

  return (
    <section className="container-px max-shell py-12 sm:py-16">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition hover:text-brand-700"
      >
        <ArrowLeft size={16} />
        All products
      </Link>

      <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-white bg-white/70 shadow-card"
        >
          <img
            src={resolveImage(product)}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {product.category && (
            <span className="eyebrow">
              <Leaf size={12} className="text-brand-600" />
              {product.category}
            </span>
          )}
          <h1 className="heading-display mt-5 text-4xl leading-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 inline-flex items-baseline gap-3">
            <span className="font-display text-3xl font-extrabold text-brand-700">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-ink-500">incl. taxes</span>
          </p>

          <div className="mt-6 h-px w-full bg-ink-200/60" />

          <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-ink-700">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="btn-primary">Add to bag</button>
            <button className="btn-ghost">Save for later</button>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3">
            {promises.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-3 rounded-2xl border border-ink-200/60 bg-white/70 p-3 text-sm backdrop-blur"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <p.icon size={16} />
                </span>
                <span className="text-ink-700">{p.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
