"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DetallePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6 text-foreground">
          Detalle de Iteraciones
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Desarrollo detallado de 4 iteraciones con el Método de Relajación, mostrando cálculos de residuos y actualización del vector en cada paso.
        </p>
      </div>

      {/* Iteraciones k=1 a k=4 */}
      <div className="space-y-8">
        {/* Iteración k=1 */}
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-2xl">Iteración k=1</CardTitle>
            <CardDescription className="text-lg">Cálculo de residuos y actualización del vector</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 font-mono text-lg">
            <p>x⁽¹⁾ = {"{0.8, -1.7, 2.98}"}</p>
            <p>R₁ = −(0.8) − 0.3(−1.7) − 0.1(2.98) + 0.7 = 0.112</p>
            <p>R₂ = −0.133(0.8) − (−1.7) − 0.266(2.98) − 1.066 = −0.26508</p>
            <p>R₃ = −0.05(0.8) − 0.1(−1.7) − (2.98) + 2.85 = 0</p>
            <p className="font-semibold text-green-700 dark:text-green-300">
              |R₁|=0.112 |R₂|=0.26508 |R₃|=0 → el mayor es R₂, se corrige x₂:
            </p>
            <p>x₂⁽²⁾ = −1.7 + (−0.26508) = −1.96508 → x⁽²⁾ = {"{0.8, -1.96508, 2.98}"}</p>
          </CardContent>
        </Card>

        {/* Iteración k=2 */}
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-2xl">Iteración k=2</CardTitle>
            <CardDescription className="text-lg">Cálculo de residuos y actualización del vector</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 font-mono text-lg">
            <p>x⁽²⁾ = {"{0.8, -1.96508, 2.98}"}</p>
            <p>R₁ = −(0.8) − 0.3(−1.96508) − 0.1(2.98) + 0.7 = 0.1915</p>
            <p>R₂ = −0.133(0.8) − (−1.96508) − 0.266(2.98) − 1.066 = 0</p>
            <p>R₃ = −0.05(0.8) − 0.1(−1.96508) − (2.98) + 2.85 = 0.02650</p>
            <p className="font-semibold text-purple-700 dark:text-purple-300">
              |R₁|=0.1915 |R₂|=0 |R₃|=0.02650 → el mayor es R₁, se corrige x₁:
            </p>
            <p>x₁⁽³⁾ = 0.8 + 0.1915 = 0.9915 → x⁽³⁾ = {"{0.9915, -1.96508, 2.98}"}</p>
          </CardContent>
        </Card>

        {/* Iteración k=3 */}
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="text-2xl">Iteración k=3</CardTitle>
            <CardDescription className="text-lg">Cálculo de residuos y actualización del vector</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 font-mono text-lg">
            <p>x⁽³⁾ = {"{0.9915, -1.96508, 2.98}"}</p>
            <p>R₁ = −(0.9915) − 0.3(−1.96508) − 0.1(2.98) + 0 = 0</p>
            <p>R₂ = −0.133(0.9915) − (−1.96508) − 0.266(2.98) − 1.066 = −0.02546</p>
            <p>R₃ = −0.05(0.9915) − 0.1(−1.96508) − (2.98) + 2.85 = 0.01693</p>
            <p className="font-semibold text-orange-700 dark:text-orange-300">
              |R₁|=0 |R₂|=0.02546 |R₃|=0.01693 → el mayor es R₂, se corrige x₂:
            </p>
            <p>x₂⁽⁴⁾ = −1.96508 + (−0.02546) = −1.99054 → x⁽⁴⁾ = {"{0.9915, -1.99054, 2.98}"}</p>
          </CardContent>
        </Card>

    
      </div>

      {/* SOLUCIÓN FINAL */}
      <div id="solucion-final" className="mt-12">
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-2xl">Solución Final</CardTitle>
            <CardDescription className="text-lg">Vector después de 4 iteraciones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-8 rounded-lg border">
              <h3 className="text-2xl font-bold text-center mb-6">Vector Solución Final</h3>
              <div className="grid grid-cols-3 gap-6 text-center text-2xl font-bold font-mono">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
                  <div className="text-sm text-muted-foreground mb-2">x₁</div>
                  <div>0.9915</div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
                  <div className="text-sm text-muted-foreground mb-2">x₂</div>
                  <div>−1.99054</div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
                  <div className="text-sm text-muted-foreground mb-2">x₃</div>
                  <div>2.98</div>
                </div>
              </div>
              <p className="text-muted-foreground text-center mt-6 text-lg">
                Se realizaron exactamente 4 iteraciones. A partir de este punto, los residuos son pequeños y se
                considera que el sistema converge.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
