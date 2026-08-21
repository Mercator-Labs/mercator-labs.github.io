import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import "./globals.css"

const mona = localFont({ src: "./fonts/MonaSans.woff2", variable: "--font-mona", weight: "100 900" })
const alliance = localFont({ src: "./fonts/AllianceNo2.woff2", variable: "--font-alliance" })

const description = "Locamage reads optical, radar, hyperspectral, elevation, and street-level imagery with one model and answers questions in plain language. No GIS expertise needed."

export const metadata: Metadata = {
  metadataBase: new URL("https://locamage.com"),
  title: "Locamage: The Universal Geospatial Foundational Model",
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: "Locamage", title: "Locamage · AI for Satellite Imagery", description },
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = { themeColor: "#f4f7fb" }

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mona.variable} ${alliance.variable}`}>
      <body>{children}</body>
    </html>
  )
}
