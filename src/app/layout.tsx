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
  metadataBase: new URL("https://auxilio.io"),
  title: {
    default: "Auxilio — Emergency response, rebuilt for the AI era.",
    template: "%s · Auxilio",
  },
  description:
    "Auxilio replaces outdated dispatch systems with real-time AI coordination, simultaneous responder mobilization, and software-defined public safety infrastructure.",
  keywords: [
    "AI dispatch",
    "emergency response",
    "public safety infrastructure",
    "Auxilio",
    "real-time coordination",
    "geospatial intelligence",
    "police software",
    "incident response",
  ],
  openGraph: {
    title: "Auxilio — Your Safety, Your Control.",
    description:
      "AI-native emergency response infrastructure. From SOS tap to 50 dispatched officers in under 5 seconds.",
    type: "website",
    url: "https://auxilio.io",
    siteName: "Auxilio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxilio — Your Safety, Your Control.",
    description:
      "AI-native emergency response infrastructure. From SOS tap to 50 dispatched officers in under 5 seconds.",
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
