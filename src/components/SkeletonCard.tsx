// components/SkeletonCard.tsx
export default function SkeletonCard() {
  return (
    <div className="p-4 rounded-2xl shadow animate-pulse bg-black/20">
      {/* Image placeholder */}
      <div className="w-full h-40 sm:h-48 md:h-40 bg-amber-200/20 rounded-xl mb-2"></div>

      {/* Common name placeholder */}
      <div className="h-5 bg-amber-200/30 rounded w-3/4 mb-2"></div>

      {/* Scientific name placeholder */}
      <div className="h-4 bg-amber-200/20 rounded w-1/2 mb-2"></div>

      {/* "Learn more" placeholder */}
      <div className="h-3 bg-amber-200/20 rounded w-1/3"></div>
    </div>
  );
}
