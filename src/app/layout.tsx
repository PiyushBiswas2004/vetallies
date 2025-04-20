import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/footer"

export const metadata = {
  title: "VetAllies - Help a Stray Today",
  description:
    "Connecting animal lovers with strays in need. Post help requests, find animals to adopt, or donate to save a life.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background antialiased light" style={{colorScheme:"light"}}
    >
      <body>
        <Header />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
