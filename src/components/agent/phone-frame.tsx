import { cn } from "@/lib/utils";
import Image from "next/image";

export function PhoneFrame({
  src,
  alt,
  className,
  height = 720,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[340px] rounded-[44px] border border-[#0B1735]/15 bg-white p-2 shadow-[0_50px_120px_-30px_rgba(11,23,53,0.35),0_0_0_1px_rgba(11,23,53,0.04)_inset]",
        className
      )}
      style={{ height }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, 340px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
