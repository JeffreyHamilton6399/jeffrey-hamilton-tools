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
  Coffee,
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
    desc: "Make a file smaller. Pick a target size or quality, then download it.",
    icon: Archive,
    url: "https://shrink-ray.vercel.app",
  },
  {
    name: "ConvertIt",
    desc: "Change an image, video, audio file or document into another format.",
    icon: ArrowLeftRight,
    url: "https://convertit-eta.vercel.app",
  },
  {
    name: "Cutout",
    desc: "Take the background off a photo and get a transparent PNG back.",
    icon: Scissors,
    url: "https://cutout-murex.vercel.app",
  },
  {
    name: "DevToys",
    desc: "Forty small developer tools on one page. Formatters, encoders, hashes.",
    icon: Braces,
    url: "https://devtoys-nu.vercel.app",
  },
  {
    name: "ExifErase",
    desc: "See what metadata a photo is carrying, then save a copy without it.",
    icon: ShieldCheck,
    url: "https://exif-erase.vercel.app",
  },
  {
    name: "LinkClean",
    desc: "Paste a link, get it back without the tracking parameters.",
    icon: Link2,
    url: "https://linkclean-seven.vercel.app",
  },
  {
    name: "FileBeam",
    desc: "Send a file straight from one device to another. It never touches a server.",
    icon: Send,
    url: "https://filebeam-ten.vercel.app",
  },
  {
    name: "BlurIt",
    desc: "Blur faces, plates, and anything else you would rather not post.",
    icon: EyeOff,
    url: "https://blurit-lime.vercel.app",
  },
  {
    name: "MergePDF",
    desc: "Merge PDFs, pull pages out, reorder them, rotate them.",
    icon: Files,
    url: "https://merge-pdf-bice.vercel.app",
  },
  {
    name: "VoiceRip",
    desc: "Split a song into vocals, drums, bass and the rest.",
    icon: AudioWaveform,
    url: "https://voicerip.vercel.app",
  },
  {
    name: "SubtitleLab",
    desc: "Pull subtitles out of a video, write new ones, or fix the timing.",
    icon: Captions,
    url: "https://subtitlelab.vercel.app",
  },
  {
    name: "QRForge",
    desc: "Make a QR code. Set the colors, add a logo, save PNG or SVG.",
    icon: QrCode,
    url: "https://qrforge-tau.vercel.app",
  },
  {
    name: "Cleansheet",
    desc: "Tidy up a messy CSV, then export it as CSV, TSV or JSON.",
    icon: Table2,
    url: "https://cleansheet-seven.vercel.app",
  },
  {
    name: "IDPhoto",
    desc: "Crop a passport photo to the official size rules and print a sheet.",
    icon: UserSquare,
    url: "https://idphoto-six.vercel.app",
  },
  {
    name: "Unmark",
    desc: "Find invisible characters and leftover metadata in text and files.",
    icon: ScanText,
    url: "https://unmark-ebon.vercel.app",
  },
  {
    name: "VidGrab",
    desc: "Download a direct video link or an .m3u8 stream, then trim it.",
    icon: Download,
    url: "https://vidgrab-beta.vercel.app",
  },
  {
    name: "NoDoze",
    desc: "Keep your computer awake. Stop it with a key you choose.",
    icon: Coffee,
    url: "https://nodoze-iota.vercel.app",
  },
]
