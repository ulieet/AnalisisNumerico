"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Calculator } from "lucide-react"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Teoría", href: "/teoria" },
  { name: "Práctica", href: "/practica" },
  { name: "Comparación", href: "/comparacion" },
  { name: "Tecnologías", href: "/tecnologias" },
  { name: "Grupo", href: "/grupo" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Calculator className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">Método de Relajación</span>
        </Link>

        {/* Menú */}
        <div className="flex flex-wrap gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
