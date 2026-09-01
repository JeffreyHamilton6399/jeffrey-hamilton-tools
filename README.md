# Jeffrey Hamilton

The index page for seventeen small web tools. One screen, a grid of cards, each
card links out to a live deployment.

Every tool it links to does its work in the browser tab rather than on a server.

## The tools

`src/lib/tools.ts` is the source of truth for this list.

| Tool        | What it does                                              | Live                                |
| ----------- | --------------------------------------------------------- | ----------------------------------- |
| ShrinkRay   | Make a file smaller                                        | https://shrink-ray.vercel.app       |
| ConvertIt   | Change a file from one format to another                   | https://convertit-eta.vercel.app    |
| Cutout      | Take the background off a photo                            | https://cutout-murex.vercel.app     |
| DevToys     | Forty small developer tools on one page                    | https://devtoys-nu.vercel.app       |
| ExifErase   | Strip metadata out of a photo                              | https://exif-erase.vercel.app       |
| LinkClean   | Strip tracking parameters from a URL                       | https://linkclean-seven.vercel.app  |
| FileBeam    | Send a file straight to another device                     | https://filebeam-ten.vercel.app     |
| BlurIt      | Blur faces and details in a photo                          | https://blurit-lime.vercel.app      |
| MergePDF    | Merge, split and reorder PDF pages                         | https://merge-pdf-bice.vercel.app   |
| VoiceRip    | Split a song into vocals, drums and bass                   | https://voicerip.vercel.app         |
| SubtitleLab | Extract, write and fix subtitles                           | https://subtitlelab.vercel.app      |
| QRForge     | Make a QR code                                             | https://qrforge-tau.vercel.app      |
| Cleansheet  | Clean up a messy CSV                                       | https://cleansheet-seven.vercel.app |
| IDPhoto     | Crop a passport photo to spec                              | https://idphoto-six.vercel.app      |
| Unmark      | Find hidden characters and metadata                        | https://unmark-ebon.vercel.app      |
| VidGrab     | Download a video, then trim it                             | https://vidgrab-beta.vercel.app     |
| NoDoze      | Keep your computer awake                                   | https://nodoze.vercel.app           |

## The page itself

One screen on desktop, collapsing to a single column on a phone. Cards carry an
icon, a name, a line about what the tool does, and a link that opens it in a new
tab. Dark mode follows the system with a manual override.

Flat design. Nothing on the page moves, and nothing asks you to sign up.

## Running it

```bash
bun install
bun run dev
```

http://localhost:3000.

## Built with

Next.js 16 (App Router), TypeScript in strict mode, Tailwind CSS 4, shadcn/ui,
lucide-react and next-themes. Static, no backend. Package manager is bun.

## Layout

```
src/
  app/
    layout.tsx        root layout: fonts, metadata, ThemeProvider
    page.tsx          header, tool grid, footer
    globals.css       Tailwind theme and design tokens
  components/
    jh-logo.tsx       JH monogram
    tool-card.tsx
    theme-provider.tsx
    theme-toggle.tsx
  lib/
    tools.ts          name, description, icon, url
public/
    favicon.svg
```

## Deploying

Import the repo on Vercel with the Next.js preset. `next build`, no environment
variables. This one is meant to sit on the apex domain, so point a custom domain
at it if you have one.

---

Jeffrey Hamilton · [@JeffreyHamilton6399](https://github.com/JeffreyHamilton6399) ·
[buy me a coffee](https://buymeacoffee.com/jeffreyscof)
