import { cn } from "@/lib/utils"

/**
 * Hub mark: a rounded badge holding a 2×2 grid of tiles — a collection of
 * tools — with one tile in the emerald accent the tools share.
 */
export function JHLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      role="img"
      aria-label="Jeffrey Hamilton — privacy-first web tools"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="8"
        className="fill-foreground"
      />
      <rect x="7.25" y="7.25" width="7.5" height="7.5" rx="2" className="fill-background" />
      <rect x="17.25" y="7.25" width="7.5" height="7.5" rx="2" className="fill-background" />
      <rect x="7.25" y="17.25" width="7.5" height="7.5" rx="2" className="fill-background" />
      <rect x="17.25" y="17.25" width="7.5" height="7.5" rx="2" className="fill-emerald-500" />
    </svg>
  )
}
