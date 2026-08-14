import {
  Archive,
  ArrowLeftRight,
  Scissors,
  Braces,
  ShieldCheck,
  Link2,
  Send,
  EyeOff,
  Files,
  AudioWaveform,
  Captions,
  QrCode,
  Table2,
  UserSquare,
  ScanText,
  Download,
  type LucideIcon,
} from "lucide-react"

export type Tool = {
  name: string
  desc: string
  icon: LucideIcon
  url: string
}

export const tools: Tool[] = [
  {
    name: "ShrinkRay",
    desc: "Shrink files to a fraction of their size, right in your browser. No uploads, ever.",
    icon: Archive,
    url: "https://shrink-ray.vercel.app",
  },
  {
    name: "ConvertIt",
    desc: "Convert images, audio, and docs between formats without ever leaving your browser.",
    icon: ArrowLeftRight,
    url: "https://convertit-eta.vercel.app",
  },
  {
    name: "Cutout",
    desc: "Erase image backgrounds in one click—free, instant, and entirely on your device.",
    icon: Scissors,
    url: "https://cutout-murex.vercel.app",
  },
  {
    name: "DevToys",
    desc: "A full toolbox of dev utilities in one bookmark: formatters, encoders, hashes, and more.",
    icon: Braces,
    url: "https://devtoys-nu.vercel.app",
  },
  {
    name: "ExifErase",
    desc: "Scrub hidden metadata from your photos before they ever leave your device.",
    icon: ShieldCheck,
    url: "https://exif-erase.vercel.app",
  },
  {
    name: "LinkClean",
    desc: "Strip trackers and junk params from any link in a single click.",
    icon: Link2,
    url: "https://linkclean-seven.vercel.app",
  },
  {
    name: "FileBeam",
    desc: "Beam files straight between your devices—no server, no cloud, no middleman.",
    icon: Send,
    url: "https://filebeam-ten.vercel.app",
  },
  {
    name: "BlurIt",
    desc: "Blur faces and sensitive details in photos before you share them.",
    icon: EyeOff,
    url: "https://blurit-lime.vercel.app",
  },
  {
    name: "MergePDF",
    desc: "Merge, split, and rearrange PDF pages with drag-and-drop—no uploads, no sign-up, no ads.",
    icon: Files,
    url: "https://merge-pdf-bice.vercel.app",
  },
  {
    name: "VoiceRip",
    desc: "Split any song into vocals, drums, bass, and music—right in your browser. No uploads.",
    icon: AudioWaveform,
    url: "https://voicerip.vercel.app",
  },
  {
    name: "SubtitleLab",
    desc: "Extract, create, and fix subtitles from video or audio—privately in your browser. No uploads.",
    icon: Captions,
    url: "https://subtitlelab.vercel.app",
  },
  {
    name: "QRForge",
    desc: "Generate QR codes instantly. Customize colors, add a logo, export PNG or SVG—100% client-side.",
    icon: QrCode,
    url: "https://qrforge-tau.vercel.app",
  },
  {
    name: "Cleansheet",
    desc: "Clean up a messy CSV: dedupe rows, trim, split and merge columns, export to JSON. No uploads.",
    icon: Table2,
    url: "https://cleansheet-seven.vercel.app",
  },
  {
    name: "IDPhoto",
    desc: "Passport photos cropped to the official head-size rules, with a printable sheet. Free, no uploads.",
    icon: UserSquare,
    url: "https://idphoto-six.vercel.app",
  },
  {
    name: "Unmark",
    desc: "Reveal invisible characters and hidden metadata in text and files, then strip them out. No uploads.",
    icon: ScanText,
    url: "https://unmark-ebon.vercel.app",
  },
  {
    name: "VidGrab",
    desc: "Download direct video links and .m3u8 streams, then trim them or pull the audio. No uploads.",
    icon: Download,
    url: "https://vidgrab-beta.vercel.app",
  },
]
