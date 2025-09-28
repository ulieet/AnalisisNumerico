"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PracticaRelajacionPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6 text-foreground">
          Práctica
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Desarrollo detallado de 4 iteraciones con el método de relajación, mostrando cálculos de residuos y
          actualización del vector en cada paso.
        </p>
      </div>

      <Tabs defaultValue="planteo" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 h-14">
          <TabsTrigger value="planteo" className="text-lg">
            Planteo
          </TabsTrigger>
          <TabsTrigger value="iteraciones" className="text-lg">
            Iteraciones
          </TabsTrigger>
          <TabsTrigger value="solucion" className="text-lg">
            Solución
          </TabsTrigger>
        </TabsList>

         {/* PLANTEO */}
        <TabsContent value="planteo" className="space-y-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl">Planteo del Problema</CardTitle>
              <CardDescription className="text-lg">Presentación del ejercicio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg space-y-4">
                <p><strong>Problema:</strong></p>
                <p className="text-muted-foreground">
                  Resolver el siguiente sistema de ecuaciones utilizando el Método de Relajación con 4 iteraciones,
                  mostrando los residuos y la actualización del vector en cada paso.
                </p>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="font-semibold text-blue-800 dark:text-blue-200 mb-4 text-xl">Sistema de ecuaciones:</p>
                  <div className="font-mono text-xl space-y-3 text-center">
                    <div>10x₁ + 3x₂ + x₃ = 7</div>
                    <div>2x₁ + 15x₂ + 4x₃ = -16</div>
                    <div>x₁ + 2x₂ + 20x₃ = 57</div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="font-semibold text-green-800 dark:text-green-200 text-lg">Vector inicial:</p>
                  <p className="font-mono text-xl text-center mt-2">x⁽⁰⁾ = {"{0.8, -1.7, 2.5}"}</p>
                </div>

                <p className="text-muted-foreground">
                  Primero identificamos matriz A, vector x y vector b. Luego dividimos cada ecuación por -aᵢᵢ para que el coeficiente diagonal quede en -1. En este caso:
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-lg space-y-2">
                    <li>-x₁-3/10x₂ − 1/10x₃ = 7/10 (%por -10)</li>
                    <li>-2/15x₁ − x₂ − 4/15x₃ = 16/15 (%por -15)</li>
                    <li>-1/20x₁ − 2/20x₂ - x₃ = −57/20 (%por -20)</li>
                  </ul>
                </div>

                <p className="text-muted-foreground">
                  Se reescriben las ecuaciones en forma de residuos Rᵢ, quedando:
                </p>

                <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="font-mono text-lg space-y-2">
                    <div>−x₁ − 0.3x₂ − 0.1x₃ + 0.7 = 0 (R₁ → x₁)</div>
                    <div>−0.133x₁ − x₂ − 0.266x₃ − 1.066 = 0 (R₂ → x₂)</div>
                    <div>−0.05x₁ − 0.1x₂ − x₃ + 2.85 = 0 (R₃ → x₃)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>  

        {/* ITERACIONES */}
        <TabsContent value="iteraciones" className="space-y-8">
          <Card className="border-l-4">
            <CardHeader>
              <CardTitle className="text-2xl">Iteraciones</CardTitle>
              <CardDescription className="text-lg">
                Cálculo de residuos y actualización de variables paso a paso
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Iteración k=0 */}
              <div className="p-6 rounded-lg border">
                <h3 className="font-bold text-2xl mb-4 text-blue-800 dark:text-blue-200">Iteración k=0</h3>
                <div className="space-y-3 text-lg">
                  <p className="font-mono">x⁽⁰⁾ = {"{0.8, -1.7, 2.5}"}</p>
                  <div className="font-mono space-y-2">
                    <p>R₁ = −(0.8) − 0.3(−1.7) − 0.1(2.5) + 0.7 = 0.16 </p>
                    <p>R₂ = −0.133(0.8) − (−1.7) − 0.266(2.5) − 1.066 = −0.1374</p>
                    <p>R₃ = −0.05(0.8) − 0.1(−1.7) − (2.5) + 2.85 = 0.48</p>
                  </div>
                  <p className="text-blue-700 dark:text-blue-300 font-semibold">
                    |R₁|=0.16<br/>
                    |R₂|=0.1374<br/>
                    |R₃|=0.48<br/>
                    → el mayor es R₃, se corrige x₃:
                  </p>
                  <p className="font-mono text-xl bg-white dark:bg-gray-900 p-3 rounded border">
                    x₃⁽¹⁾ = 2.5 + 0.48 = 2.98 → x⁽¹⁾ = {"{0.8, -1.7, 2.98}"}
                  </p>
                </div>
              </div>

              {/* Iteración k=1 con video y botón */}
              <div className="p-6 rounded-lg border">
                <h3 className="font-bold text-2xl mb-4 text-green-800 dark:text-green-200">Iteración k=1</h3>
                <div className="mt-6">
                  <iframe
                    className="w-full aspect-video rounded-lg border shadow-lg"
                  src="https://www.youtube.com/embed/1-gjx837xDM"                    
                  title="Video explicativo Iteración k=1, k=2 y k=3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="/detalle"
                    className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors"
                  >
                    Ver detalle completo de cada iteración
                  </a>
                </div>
              </div>

              {/* Iteración k=2 y k=3 siguen igual */}
            </CardContent>
          </Card>
        </TabsContent>

        {/* SOLUCIÓN */}
        <TabsContent value="solucion" className="space-y-8">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
