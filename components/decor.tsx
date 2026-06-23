import { cn } from "@/lib/utils";

/** A single botanical sprig used as a recurring brand motif. */
export function Leaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      fill="none"
      className={cn("text-sage", className)}
      aria-hidden="true"
    >
      <path
        d="M50 158V40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[...Array(6)].map((_, i) => {
        const y = 40 + i * 18;
        return (
          <g key={i}>
            <path
              d={`M50 ${y} C30 ${y - 6} 18 ${y - 18} 14 ${y - 30} C34 ${y - 24} 46 ${y - 12} 50 ${y}`}
              fill="currentColor"
              opacity={0.85 - i * 0.07}
            />
            <path
              d={`M50 ${y} C70 ${y - 6} 82 ${y - 18} 86 ${y - 30} C66 ${y - 24} 54 ${y - 12} 50 ${y}`}
              fill="currentColor"
              opacity={0.85 - i * 0.07}
            />
          </g>
        );
      })}
      <path
        d="M50 40 C44 22 50 6 50 2 C50 6 56 22 50 40Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Thin divider with a centred leaf - separates sections elegantly. */
export function LeafDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-sage/50" />
      <Leaf className="h-6 w-6 rotate-0 opacity-70" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-sage/50" />
    </div>
  );
}
