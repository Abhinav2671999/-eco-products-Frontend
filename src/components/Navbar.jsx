import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/60 bg-white/80 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-shell container-px flex h-16 items-center justify-between md:h-20">
        <Link to="/" aria-label="Verdara home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-700'
                    : 'text-ink-600 hover:text-ink-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand-100/80"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link to="/products" className="btn-primary">
            Shop now
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white/80 text-ink-700 shadow-soft md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/60 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-px max-shell flex flex-col gap-1 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-base font-medium ${
                      isActive
                        ? 'bg-brand-100 text-brand-700'
                        : 'text-ink-700 hover:bg-ink-100'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/products" className="btn-primary mt-2 w-full">
                Shop now
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
