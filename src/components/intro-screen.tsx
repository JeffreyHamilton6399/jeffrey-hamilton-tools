"use client"

import * as React from "react"
import { JHLogo } from "@/components/jh-logo"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "jh_intro_seen_v1"
const HOLD_MS = 1500
const FADE_MS = 700

export function IntroScreen() {
  const [phase, setPhase] = React.useState<"show" | "fade" | "done">("show")

  React.useEffect(() => {
    // The inline script in <head> already hides this via CSS for returning
    // visitors (html.intro-done). Here we honour that + run the animation
    // only for first-time visitors.
    let seen = false
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "1"
    } catch {
      seen = false
    }

    if (seen) {
      setPhase("done")
      return
    }

    const fadeTimer = window.setTimeout(() => setPhase("fade"), HOLD_MS)
    const doneTimer = window.setTimeout(() => {
      setPhase("done")
      try {
        localStorage.setItem(STORAGE_KEY, "1")
      } catch {
        /* ignore */
      }
    }, HOLD_MS + FADE_MS)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(doneTimer)
    }
  }, [])

  if (phase === "done") return null

  return (
    <div
      aria-hidden={phase === "fade"}
      className={cn(
        "intro-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background px-6 text-center",
        "transition-opacity ease-out",
        phase === "fade" ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <JHLogo className="size-14" />
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg font-semibold tracking-tight">
          Free <span className="text-muted-foreground">·</span> Open Source{" "}
          <span className="text-muted-foreground">·</span> Private
        </p>
        <p className="text-sm text-muted-foreground">
          Privacy-first web tools by Jeffrey Hamilton
        </p>
      </div>
    </div>
  )
}
