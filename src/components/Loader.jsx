export function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white bg-white/70 shadow-soft">
      <div className="aspect-[4/5] skeleton" />
      <div className="space-y-3 p-5">
        <div className="h-4 w-3/4 rounded skeleton" />
        <div className="h-3 w-full rounded skeleton" />
        <div className="h-3 w-5/6 rounded skeleton" />
        <div className="h-8 w-1/3 rounded-full skeleton" />
      </div>
    </div>
  );
}

export function CardGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function Spinner({ className = '' }) {
  return (
    <span
      className={`inline-block h-5 w-5 animate-spin rounded-full border-2 border-brand-200 border-t-brand-600 ${className}`}
    />
  );
}
