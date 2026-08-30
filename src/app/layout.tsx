import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { IntroScreen } from "@/components/intro-screen";

// Runs synchronously before first paint. For returning visitors it marks the
// <html> with `intro-done` so the splash overlay is hidden immediately via CSS
// (no flash). First-time visitors see the splash and the client component
// fades it out.
const introScript = `try{if(localStorage.getItem('jh_intro_seen_v1')==='1'){document.documentElement.classList.add('intro-done')}}catch(e){}`;

const sans = Inter_Tight({
  variable: "--font-app-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-app-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeffrey Hamilton",
  description:
    "Sixteen small web tools that run in the browser tab: compression, format conversion, PDF and CSV editing, metadata stripping, device-to-device transfer, QR codes.",
  authors: [{ name: "Jeffrey Hamilton" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jeffrey Hamilton",
    description:
      "Sixteen small web tools that run in the browser tab.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jeffrey Hamilton",
    description:
      "Sixteen small web tools that run in the browser tab.",
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
        className={`${sans.variable} ${mono.variable} antialiased bg-background text-foreground`}
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
