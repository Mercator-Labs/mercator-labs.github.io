import type { Metadata, Viewport } from "next"
import { Archivo, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" })
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" })

const description = "A universal geospatial foundation model. Point Locamage at imagery from any satellite, plane, or drone and ask in plain language. It reads the scene and answers."

export const metadata: Metadata = {
  metadataBase: new URL("https://locamage.com"),
  title: "Locamage: Ask any place what changed",
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: "Locamage", title: "Locamage: Ask any place what changed", description },
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = { colorScheme: "light", themeColor: "#fdfdfc" }

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
