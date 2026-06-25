import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { IntroScreen } from "@/components/intro-screen";

// Runs synchronously before first paint. For returning visitors it marks the
// <html> with `intro-done` so the splash overlay is hidden immediately via CSS
// (no flash). First-time visitors see the splash and the client component
// fades it out.
const introScript = `try{if(localStorage.getItem('jh_intro_seen_v1')==='1'){document.documentElement.classList.add('intro-done')}}catch(e){}`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeffrey Hamilton — Privacy-first web tools",
  description:
    "A portfolio of privacy-first web tools by Jeffrey Hamilton. Compress, convert, edit, and transfer files entirely in your browser. No uploads, no servers, no tracking.",
  keywords: [
    "privacy-first",
    "web tools",
    "browser tools",
    "file compression",
    "image background remover",
    "exif remover",
    "url cleaner",
    "Jeffrey Hamilton",
  ],
  authors: [
    { name: "Jeffrey Hamilton", url: "https://github.com/JeffreyHamilton6399" },
  ],
  creator: "Jeffrey Hamilton",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jeffrey Hamilton — Privacy-first web tools",
    description:
      "A portfolio of privacy-first web tools. Compress, convert, edit, and transfer files entirely in your browser. No uploads, no tracking.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jeffrey Hamilton — Privacy-first web tools",
    description:
      "A portfolio of privacy-first web tools. No uploads, no servers, no tracking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: introScript }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IntroScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
