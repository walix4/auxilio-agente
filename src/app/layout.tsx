import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter_display = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://walix4.github.io"),
  title: {
    default: "Auxilio Agente — The officer's field app",
    template: "%s · Auxilio Agente",
  },
  description:
    "Auxilio Agente turns every officer into a node in the dispatch network. Accept emergencies in one tap, navigate live to the incident, and capture everything that matters — straight from the field.",
  keywords: [
    "Auxilio Agente",
    "officer app",
    "police dispatch",
    "emergency response",
    "public safety",
    "field officer",
    "incident capture",
  ],
  openGraph: {
    title: "Auxilio Agente — The badge in your pocket.",
    description:
      "One-tap emergency acceptance, live turn-by-turn navigation, and instant incident capture for officers in the field.",
    type: "website",
    siteName: "Auxilio Agente",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxilio Agente — The badge in your pocket.",
    description:
      "One-tap emergency acceptance, live turn-by-turn navigation, and instant incident capture for officers in the field.",
  },
};

export const viewport: Viewport = {
  themeColor: "#03060f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter_display.variable} ${jetbrains.variable}`}>
      <body className="overflow-x-hidden bg-ink-950 text-haze-100 antialiased">
        <LenisProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
