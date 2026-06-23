import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://natureswaybeauty-kidderminster.co.uk"),
  title: {
    default: "Nature's Way Beauty Salon · Kidderminster | Est. 1986",
    template: "%s · Nature's Way Beauty Salon",
  },
  description:
    "Kidderminster's loved beauty salon since 1986. Nails, facials, waxing, electrolysis, massage, spray tanning & slimming treatments by expert therapists. Book on WhatsApp today.",
  keywords: [
    "beauty salon Kidderminster",
    "nails Kidderminster",
    "facials",
    "waxing",
    "electrolysis",
    "massage",
    "spray tan",
    "Nature's Way Beauty Salon",
  ],
  openGraph: {
    title: "Nature's Way Beauty Salon · Kidderminster",
    description:
      "Beauty, the natural way. Expert nails, facials, waxing, massage & more since 1986.",
    type: "website",
    locale: "en_GB",
    siteName: "Nature's Way Beauty Salon",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2f4738",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
