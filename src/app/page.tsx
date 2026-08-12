import { JHLogo } from "@/components/jh-logo"
import { HeaderMenu } from "@/components/header-menu"
import { ToolCard } from "@/components/tool-card"
import { SiteFooter } from "@/components/site-footer"
import { tools } from "@/lib/tools"

export default function Home() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <header className="flex h-12 shrink-0 items-center justify-between border-b px-3 sm:px-4">
        <div className="flex items-center gap-2">
          <JHLogo />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">
              Jeffrey Hamilton
            </span>
            <span className="hidden text-[10px] text-muted-foreground sm:block">
              Privacy-first web tools
            </span>
          </div>
        </div>
        <HeaderMenu />
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-4">
          <div className="my-auto grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
