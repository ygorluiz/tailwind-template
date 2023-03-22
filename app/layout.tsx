import type { AppProps } from "next/app"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en">
        <head />
        <body
          className={cn(
            "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <div className="container flex-1">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
