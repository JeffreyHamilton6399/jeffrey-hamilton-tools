import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Tool } from "@/lib/tools"

export function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col gap-3 rounded-lg border bg-card p-4",
        "transition-all duration-150",
        "hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
    >
      <span className="flex size-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
        <Icon className="size-5" />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold leading-none">{tool.name}</h3>
        <p className="text-sm text-muted-foreground leading-snug">
          {tool.desc}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1 pt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
        Open
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  )
}
