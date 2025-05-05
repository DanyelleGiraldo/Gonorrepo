import React from "react"
import "./globals.css"
import { ThemeProvider } from "../../components/theme-provider"

const metadata = {
  title: "FitLife Elite - Premium Gym Experience",
  description: "Join FitLife Elite for a premium fitness experience",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="fitlife-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
