# Jeffrey Hamilton — Privacy-first web tools

A single-page portfolio that showcases all of Jeffrey Hamilton's privacy-first web
tools in one place. Every tool runs entirely in your browser — no uploads, no
servers, no tracking. The site itself is the brand: a flat, minimal grid of tool
cards that link out to each live deployment.

## What it is

- Single page, single screen (on desktop).
- A grid of tool cards. Each card has an icon, name, one-line description, and an
  "Open →" link that opens the tool in a new tab.
- Dark mode support (system-aware, with a manual toggle).
- Mobile responsive — the grid collapses to a single column on small screens.
- Flat design. No gradients, no decorative blobs, no sign-up walls, no analytics.

## The tools

`src/lib/tools.ts` is the source of truth for this list — update it there and mirror it here.

| Tool        | What it does                                     | Live                                 |
| ----------- | ------------------------------------------------ | ------------------------------------ |
| ShrinkRay   | Compress files in your browser. No uploads.      | https://shrink-ray.vercel.app        |
| ConvertIt   | Convert file formats without uploading.          | https://convertit-eta.vercel.app     |
| Cutout      | Remove image backgrounds. No $40/month.          | https://cutout-murex.vercel.app      |
| DevToys     | 40 developer tools in one bookmark.              | https://devtoys-nu.vercel.app        |
| ExifErase   | Strip metadata from photos before sharing.       | https://exif-erase.vercel.app        |
| LinkClean   | Strip tracking parameters from URLs.             | https://linkclean-seven.vercel.app   |
| FileBeam    | Transfer files device-to-device. No server.      | https://filebeam-ten.vercel.app      |
| BlurIt      | Blur faces before sharing photos.                | https://blurit-lime.vercel.app       |
| MergePDF    | Merge, split and rearrange PDF pages.            | https://merge-pdf-bice.vercel.app    |
| VoiceRip    | Split songs into vocals, drums and bass.         | https://voicerip.vercel.app          |
| SubtitleLab | Extract, create and fix subtitles.               | https://subtitlelab.vercel.app       |
| QRForge     | Generate custom QR codes. PNG or SVG.            | https://qrforge-tau.vercel.app       |
| Cleansheet  | Clean up a messy CSV. Export to JSON.            | https://cleansheet-seven.vercel.app  |
| IDPhoto     | Passport photos cropped to official specs.       | https://idphoto-six.vercel.app       |
| Unmark      | Find and remove hidden marks in text and files.  | https://unmark-ebon.vercel.app       |

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (New York)
- [lucide-react](https://lucide.dev/) icons
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- Client-side only — static site, no backend
- [bun](https://bun.sh/) as the package manager

## Project structure

```
src/
  app/
    layout.tsx        # Root layout: fonts, metadata, ThemeProvider
    page.tsx          # The portfolio: header + tool grid + footer
    globals.css       # Tailwind theme + design tokens
  components/
    jh-logo.tsx       # "JH" monogram (flat SVG)
    tool-card.tsx     # Tool card (anchor, hover lift, emerald open link)
    theme-provider.tsx
    theme-toggle.tsx
  lib/
    tools.ts          # Tool data (name, desc, icon, url)
public/
    favicon.svg       # JH monogram favicon
```

## Develop

```bash
bun install
bun run dev
```

Then open the preview at http://localhost:3000.

## Deploy

This is a static, client-only Next.js app with no environment variables.

1. Push the repo to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Framework preset: **Next.js**. Build command: `next build`. No env vars needed.
4. Deploy. Point a custom domain (e.g. `jeffreyhamilton.dev`) at the project if you
   like — this site is intended to be the main domain.

## Author

**Jeffrey Hamilton**
GitHub: [@JeffreyHamilton6399](https://github.com/JeffreyHamilton6399)
Donate: [buymeacoffee.com/jeffreyscof](https://buymeacoffee.com/jeffreyscof)
