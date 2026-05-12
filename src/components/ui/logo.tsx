import { cn } from "@/lib/utils";

export function Logo({
  className,
  theme = "dark",
}: {
  className?: string;
  theme?: "dark" | "light";
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-display text-[17px] font-semibold tracking-[-0.02em]",
          theme === "light" ? "text-[#0B1735]" : "text-white"
        )}
      >
        Auxilio
      </span>
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id="auxilio-mark-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5560" />
          <stop offset="0.55" stopColor="#FF2233" />
          <stop offset="1" stopColor="#7A0810" />
        </linearGradient>
        <linearGradient id="auxilio-mark-grad2" x1="0" y1="28" x2="28" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3866E6" />
          <stop offset="1" stopColor="#1F3C8C" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="26" height="26" rx="8" stroke="url(#auxilio-mark-grad)" strokeWidth="1.4" />
      <path
        d="M14 6 L20 18 L14 14 L8 18 L14 6 Z"
        fill="url(#auxilio-mark-grad)"
      />
      <circle cx="14" cy="14" r="1.6" fill="#fff" />
      <path
        d="M14 21.5 L14 24"
        stroke="url(#auxilio-mark-grad2)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
