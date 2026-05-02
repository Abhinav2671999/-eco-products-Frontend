import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, X, AlertCircle, SlidersHorizontal } from 'lucide-react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { CardGridSkeleton } from '../components/Loader';

const sortOptions = [
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
  { value: 'price-asc', label: 'Price · low → high' },
  { value: 'price-desc', label: 'Price · high → low' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const search = searchParams.get('search') || '';
  const sort = searchParams.get('sort') || 'newest';
  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    const t = setTimeout(() => {
      const next = new URLSearchParams(searchParams);
      if (searchInput) next.set('search', searchInput);
      else next.delete('search');
      setSearchParams(next, { replace: true });
    }, 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts({ search, sort });
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
  }, [search, sort]);

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return ['all', ...Array.from(set)];
  }, [products]);

  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? products
        : products.filter((p) => p.category === activeCategory),
    [products, activeCategory]
  );

  const categoryOrder = ['plates', 'bowls', 'meal trays'];
  const categoryTitles = {
    plates: 'Round Plates',
    bowls: 'Bowls',
    'meal trays': 'Round Meal Tray',
    general: 'More Products',
  };
  const grouped = useMemo(() => {
    const map = new Map();
    filtered.forEach((p) => {
      const key = (p.category || 'general').toLowerCase();
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(p);
    });
    const ordered = [];
    categoryOrder.forEach((k) => {
      if (map.has(k)) {
        ordered.push([k, map.get(k)]);
        map.delete(k);
      }
    });
    Array.from(map.entries()).forEach((e) => ordered.push(e));
    return ordered;
  }, [filtered]);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div className="container-px max-shell py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="eyebrow">The catalogue</span>
            <h1 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Bagasse tableware,{' '}
              <span className="bg-gradient-to-tr from-brand-700 to-brand-300 bg-clip-text text-transparent">
                ready for service.
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
              Search, filter and find the plates, bowls and meal trays that fit the
              way your kitchen runs. Every SKU on this page is made from sugarcane
              bagasse, food-safe, and fully compostable.
            </p>
          </motion.div>

          {/* Toolbar */}
          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-xl">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"
              />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search products, materials, ideas…"
                className="h-12 w-full rounded-full border border-ink-200/80 bg-white/80 pl-11 pr-12 text-sm shadow-soft backdrop-blur placeholder:text-ink-400 focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
              />
              {searchInput && (
                <button
                  onClick={() => setSearchInput('')}
                  className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-ink-100 text-ink-600 hover:bg-ink-200"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-500 sm:flex">
                <SlidersHorizontal size={14} />
                Sort
              </span>
              <select
                value={sort}
                onChange={(e) => {
                  const next = new URLSearchParams(searchParams);
                  next.set('sort', e.target.value);
                  setSearchParams(next, { replace: true });
                }}
                className="h-11 rounded-full border border-ink-200/80 bg-white/80 px-4 text-sm font-medium shadow-soft backdrop-blur focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category chips */}
          {categories.length > 1 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    activeCategory === c
                      ? 'bg-brand-600 text-white shadow-soft'
                      : 'border border-ink-200/80 bg-white/70 text-ink-600 hover:border-brand-300 hover:text-brand-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="container-px max-shell pb-20">
        {loading ? (
          <CardGridSkeleton count={8} />
        ) : error ? (
          <ErrorState details={error} />
        ) : filtered.length === 0 ? (
          <EmptyState search={search} />
        ) : (
          <>
            <p className="mb-10 text-sm text-ink-500">
              Showing <span className="font-semibold text-ink-800">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'product' : 'products'}
              {search && (
                <>
                  {' '}for <span className="font-semibold text-brand-700">"{search}"</span>
                </>
              )}
            </p>

            {grouped.map(([cat, items]) => (
              <section key={cat} className="mb-16 last:mb-0">
                <div className="mb-8 text-center">
                  <span className="font-display text-sm italic text-brand-600">
                    Bagasse
                  </span>
                  <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                    {categoryTitles[cat] ||
                      cat.replace(/\b\w/g, (c) => c.toUpperCase())}
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p, i) => (
                    <ProductCard key={p._id} product={p} index={i} />
                  ))}
                </div>
              </section>
            ))}
          </>
        )}
      </section>
    </>
  );
}

function ErrorState({ details }) {
  return (
    <div className="card-surface mt-10 flex flex-col items-center gap-3 px-6 py-16 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-red-100 text-red-600">
        <AlertCircle size={20} />
      </span>
      <p className="font-display text-lg font-semibold text-ink-900">
        We couldn't load the catalogue.
      </p>
      <p className="max-w-md text-sm text-ink-500">{details}</p>
      <p className="text-xs text-ink-400">
        Make sure the backend is running on{' '}
        <code className="rounded bg-ink-100 px-1.5 py-0.5">http://localhost:5000</code>
      </p>
    </div>
  );
}

function EmptyState({ search }) {
  return (
    <div className="card-surface mt-10 flex flex-col items-center gap-3 px-6 py-16 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-100 text-brand-700">
        <Search size={20} />
      </span>
      <p className="font-display text-lg font-semibold text-ink-900">
        {search ? 'No matches yet.' : 'The shelf is empty.'}
      </p>
      <p className="max-w-md text-sm text-ink-500">
        {search
          ? 'Try a different keyword or clear the search to see everything we make.'
          : 'Add your first product through Postman (POST /api/products with form-data) and it will appear here instantly.'}
      </p>
    </div>
  );
}
