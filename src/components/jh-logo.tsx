import { cn } from "@/lib/utils"

export function JHLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      role="img"
      aria-label="Jeffrey Hamilton"
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
      <text
        x="16"
        y="21.5"
        textAnchor="middle"
        className="fill-background"
        style={{
          fontSize: 13,
          fontWeight: 700,
          fontFamily: "var(--font-geist-sans), sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        JH
      </text>
    </svg>
  )
}
