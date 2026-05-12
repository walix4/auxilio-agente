"use client";

import { cn } from "@/lib/utils";

export function AmbientGrid({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "soft" | "intense";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-grid-fine bg-grid-md",
          variant === "soft" && "opacity-50",
          variant === "intense" && "bg-grid-bold"
        )}
      />
      <div className="absolute inset-0 mask-radial">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-60" />
      </div>
    </div>
  );
}

export function AmbientGlow({
  className,
  color = "signal",
}: {
  className?: string;
  color?: "signal" | "steel" | "mixed";
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {color !== "steel" && (
        <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-signal-500/15 blur-[120px]" />
      )}
      {color !== "signal" && (
        <div className="absolute -bottom-40 right-1/4 h-[520px] w-[520px] rounded-full bg-steel-500/12 blur-[120px]" />
      )}
      {color === "mixed" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-signal-700/15 blur-[100px]" />
      )}
    </div>
  );
}

export function NoiseOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.04] bg-noise",
        className
      )}
    />
  );
}

export function CornerCrosses({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {[
        "top-4 left-4",
        "top-4 right-4",
        "bottom-4 left-4",
        "bottom-4 right-4",
      ].map((pos, i) => (
        <span
          key={i}
          className={cn(
            "absolute size-3 text-white/15",
            pos
          )}
          aria-hidden
        >
          <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current" />
          <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
        </span>
      ))}
    </div>
  );
}
