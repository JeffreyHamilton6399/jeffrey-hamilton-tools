"use client"

import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeedbackButton } from "@/components/feedback-button"
import { SiteSettingsMenu } from "@/components/site-settings-menu"

const DONATE_URL = "https://buymeacoffee.com/jeffreyscof"

export function HeaderMenu() {
  return (
    <div className="flex items-center gap-1.5">
      <FeedbackButton />
      <Button
        asChild
        variant="outline"
        size="sm"
        className="h-7 gap-1.5 px-2 text-xs font-normal text-muted-foreground hover:bg-transparent hover:text-foreground"
      >
        <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
          <Heart className="size-3.5" />
          <span className="hidden sm:inline">Donate</span>
        </a>
      </Button>
      <SiteSettingsMenu />
    </div>
  )
}
