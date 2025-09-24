import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Método de Relajación - Sistema de Ecuaciones",
  description: "Análisis Numérico: Método de Relajación para Sistemas de Ecuaciones Lineales",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
