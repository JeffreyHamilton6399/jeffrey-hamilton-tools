"use client"

import * as React from "react"
import { Github, Heart, Moon, Settings, Shield, Sun, FileText } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const GITHUB_URL = "https://github.com/JeffreyHamilton6399"
const DONATE_URL = "https://buymeacoffee.com/jeffreyscof"

export function HeaderMenu() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [legalOpen, setLegalOpen] = React.useState<"privacy" | "terms" | null>(
    null
  )

  React.useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <div className="flex items-center gap-1">
      <Button
        asChild
        size="sm"
        className="rounded-full bg-rose-500 text-white shadow-xs hover:bg-rose-600 dark:bg-rose-500 dark:hover:bg-rose-600"
      >
        <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
          <Heart className="size-4" />
          Donate
        </a>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Settings menu"
          >
            <Settings className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault()
              setTheme(isDark ? "light" : "dark")
            }}
          >
            {mounted && isDark ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
            <span>{mounted && isDark ? "Light mode" : "Dark mode"}</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            Legal
          </DropdownMenuLabel>

          <DropdownMenuItem onSelect={() => setLegalOpen("privacy")}>
            <Shield className="size-4" />
            <span>Privacy Policy</span>
          </DropdownMenuItem>

          <DropdownMenuItem onSelect={() => setLegalOpen("terms")}>
            <FileText className="size-4" />
            <span>Terms of Service</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Github className="size-4" />
              <span>GitHub</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Privacy Policy dialog */}
      <Dialog
        open={legalOpen === "privacy"}
        onOpenChange={(open) => !open && setLegalOpen(null)}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription>
              Last updated: June 2025
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm leading-relaxed text-muted-foreground space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            <p>
              This site and every tool it links to are built privacy-first. Your
              data stays on your device.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>No accounts, sign-ups, or logins.</li>
              <li>No cookies, analytics, or tracking scripts.</li>
              <li>No file uploads. Everything runs in your browser.</li>
              <li>Nothing you process is ever transmitted or stored remotely.</li>
            </ul>
            <p>
              Each tool operates entirely client-side. What you put in stays on
              your machine.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Service dialog */}
      <Dialog
        open={legalOpen === "terms"}
        onOpenChange={(open) => !open && setLegalOpen(null)}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription>
              Last updated: June 2025
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm leading-relaxed text-muted-foreground space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            <p>
              These tools are provided free of charge, as-is, with no warranty.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Use them at your own risk.</li>
              <li>
                No guarantee of availability or fitness for a particular purpose.
              </li>
              <li>
                You retain all rights to your files—they are processed locally
                and never transmitted.
              </li>
            </ul>
            <p>
              By using these tools you agree that Jeffrey Hamilton is not liable
              for any data loss or damages arising from their use.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
