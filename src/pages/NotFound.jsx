import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="container-px max-shell flex min-h-[70vh] flex-col items-center justify-center gap-5 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-brand-700">
        <Leaf size={22} />
      </span>
      <h1 className="heading-display text-5xl">404</h1>
      <p className="max-w-md text-ink-600">
        This page seems to have wandered off into the woods. Let's get you back to
        the path.
      </p>
      <Link to="/" className="btn-primary">
        <ArrowLeft size={16} />
        Back home
      </Link>
    </section>
  );
}
