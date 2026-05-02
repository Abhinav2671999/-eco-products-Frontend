import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { fetchProducts } from '../services/api';
import ProductCard from './ProductCard';
import { CardGridSkeleton } from './Loader';
import { SectionHeader } from './Section';

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchProducts({ limit: 4, sort: 'newest' });
        if (active) setProducts(data);
      } catch (err) {
        if (active) setError(err.message || 'Could not load products');
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="container-px max-shell py-20 sm:py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow="Featured"
          title="Featured Products"
          description="Discover our most popular eco-friendly solutions — proven in the kitchen, on the counter and at scale."
        />
        <Link
          to="/products"
          className="btn-ghost shrink-0"
        >
          View All Products
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-12">
        {loading ? (
          <CardGridSkeleton count={4} />
        ) : error ? (
          <EmptyOrError
            message="Backend not reachable yet — start the API server to load real products."
            details={error}
          />
        ) : products.length === 0 ? (
          <EmptyOrError
            message="No products yet."
            details="Add your first product via Postman (POST /api/products) to see it appear here."
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p, i) => (
              <ProductCard key={p._id} product={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyOrError({ message, details }) {
  return (
    <div className="card-surface flex flex-col items-center gap-3 px-6 py-14 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-100 text-brand-700">
        <AlertCircle size={20} />
      </span>
      <p className="font-display text-lg font-semibold text-ink-900">{message}</p>
      <p className="max-w-md text-sm text-ink-500">{details}</p>
    </div>
  );
}
