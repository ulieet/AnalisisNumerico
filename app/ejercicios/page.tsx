"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { BookOpen, Calculator } from "lucide-react"

const ejercicios = [
  {
    id: 1,
    titulo: "Sistema 2x2 Básico",
    dificultad: "Fácil",
    categoria: "Introducción",
    descripcion: "Resolver un sistema simple de 2 ecuaciones con 2 incógnitas",
    sistema: {
      ecuaciones: ["4x₁ - x₂ = 3", "-x₁ + 4x₂ = 6"],
      matriz: [
        [4, -1],
        [-1, 4],
      ],
      vector: [3, 6],
      solucionExacta: [1, 1],
    },
    pasos: [
      "Verificar dominancia diagonal: |4| > |-1| ✓, |4| > |-1| ✓",
      "Establecer ω = 1.2 (sobre-relajación moderada)",
      "Valores iniciales: x₁⁽⁰⁾ = 0, x₂⁽⁰⁾ = 0",
      "Aplicar fórmula SOR para cada variable",
      "Iterar hasta convergencia (ε = 0.001)",
    ],
    iteraciones: [
      { k: 0, x1: 0.0, x2: 0.0, error: "-" },
      { k: 1, x1: 0.9, x2: 1.62, error: 1.62 },
      { k: 2, x1: 1.086, x2: 1.0596, error: 0.5604 },
      { k: 3, x1: 1.0143, x2: 0.9829, error: 0.0767 },
      { k: 4, x1: 0.9959, x2: 0.9977, error: 0.0184 },
      { k: 5, x1: 0.9993, x2: 1.0006, error: 0.0034 },
    ],
  },
  {
    id: 2,
    titulo: "Sistema 3x3 Tridiagonal",
    dificultad: "Medio",
    categoria: "Sistemas Estructurados",
    descripcion: "Sistema tridiagonal típico en diferencias finitas",
    sistema: {
      ecuaciones: ["2x₁ - x₂ = 1", "-x₁ + 2x₂ - x₃ = 0", "-x₂ + 2x₃ = 1"],
      matriz: [
        [2, -1, 0],
        [-1, 2, -1],
        [0, -1, 2],
      ],
      vector: [1, 0, 1],
      solucionExacta: [1, 1, 1],
    },
    pasos: [
      "Verificar dominancia diagonal en matriz tridiagonal",
      "Elegir ω óptimo ≈ 1.0 - 1.2 para matrices tridiagonales",
      "Inicializar con vector cero",
      "Aplicar SOR con actualización inmediata",
      "Monitorear convergencia con norma infinito",
    ],
    iteraciones: [
      { k: 0, x1: 0.0, x2: 0.0, x3: 0.0, error: "-" },
      { k: 1, x1: 0.5, x2: 0.25, x3: 0.625, error: 0.625 },
      { k: 2, x1: 0.8125, x2: 0.6563, x3: 0.8281, error: 0.4063 },
      { k: 3, x1: 0.9141, x2: 0.857, x3: 0.9285, error: 0.2007 },
      { k: 4, x1: 0.9642, x2: 0.9321, x3: 0.9661, error: 0.0751 },
      { k: 5, x1: 0.983, x2: 0.9665, x3: 0.9832, error: 0.0344 },
    ],
  },
  {
    id: 3,
    titulo: "Sistema con Convergencia Lenta",
    dificultad: "Difícil",
    categoria: "Casos Especiales",
    descripcion: "Sistema mal condicionado que requiere optimización de ω",
    sistema: {
      ecuaciones: ["10x₁ + x₂ + x₃ = 12", "x₁ + 10x₂ + x₃ = 12", "x₁ + x₂ + 10x₃ = 12"],
      matriz: [
        [10, 1, 1],
        [1, 10, 1],
        [1, 1, 10],
      ],
      vector: [12, 12, 12],
      solucionExacta: [1, 1, 1],
    },
    pasos: [
      "Analizar número de condición de la matriz",
      "Probar diferentes valores de ω (0.8, 1.0, 1.2, 1.5)",
      "Comparar velocidad de convergencia",
      "Identificar ω óptimo experimentalmente",
      "Documentar comportamiento de convergencia",
    ],
    iteraciones: [
      { k: 0, x1: 0.0, x2: 0.0, x3: 0.0, error: "-" },
      { k: 5, x1: 0.8929, x2: 0.8929, x3: 0.8929, error: 0.1071 },
      { k: 10, x1: 0.9756, x2: 0.9756, x3: 0.9756, error: 0.0244 },
      { k: 15, x1: 0.9939, x2: 0.9939, x3: 0.9939, error: 0.0061 },
      { k: 20, x1: 0.9985, x2: 0.9985, x3: 0.9985, error: 0.0015 },
      { k: 25, x1: 0.9996, x2: 0.9996, x3: 0.9996, error: 0.0004 },
    ],
  },
]

export default function EjerciciosPage() {
  const [ejercicioActivo, setEjercicioActivo] = useState<number | null>(null)
  const [mostrarSolucion, setMostrarSolucion] = useState<{ [key: number]: boolean }>({})

  const toggleSolucion = (id: number) => {
    setMostrarSolucion((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const getDificultadColor = (dificultad: string) => {
    switch (dificultad) {
      case "Fácil":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Medio":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Difícil":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Ejercicios Resueltos</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Practica con ejercicios paso a paso del método de relajación, desde casos básicos hasta sistemas complejos.
        </p>
      </div>

      <Tabs defaultValue="ejercicios" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ejercicios">Ejercicios Paso a Paso</TabsTrigger>
          <TabsTrigger value="problemas">Problemas Propuestos</TabsTrigger>
        </TabsList>

        {/* Ejercicios Resueltos */}
        <TabsContent value="ejercicios" className="space-y-6">
          {ejercicios.map((ejercicio) => (
            <Card key={ejercicio.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{ejercicio.titulo}</h3>
                      <Badge className={getDificultadColor(ejercicio.dificultad)}>{ejercicio.dificultad}</Badge>
                      <Badge variant="outline">{ejercicio.categoria}</Badge>
                    </div>
                    <p className="text-muted-foreground">{ejercicio.descripcion}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => toggleSolucion(ejercicio.id)}>
                    {mostrarSolucion[ejercicio.id] ? "Ocultar" : "Ver"} Solución
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Sistema de Ecuaciones */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Sistema de Ecuaciones
                  </h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="grid gap-2">
                      {ejercicio.sistema.ecuaciones.map((ecuacion, idx) => (
                        <div key={idx} className="text-center math-formula text-lg">
                          {ecuacion}
                        </div>
                      ))}
                    </div>
                    <Separator className="my-4" />
                    <div className="text-center text-sm text-muted-foreground">
                      Solución exacta: [{ejercicio.sistema.solucionExacta.join(", ")}]
                    </div>
                  </div>
                </div>

                {/* Solución Detallada */}
                <Collapsible open={mostrarSolucion[ejercicio.id]}>
                  <CollapsibleContent className="space-y-6">
                    {/* Pasos de Resolución */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Calculator className="h-4 w-4" />
                        Pasos de Resolución
                      </h4>
                      <div className="space-y-3">
                        {ejercicio.pasos.map((paso, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                              {idx + 1}
                            </div>
                            <p className="text-muted-foreground">{paso}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tabla de Iteraciones */}
                    <div>
                      <h4 className="font-semibold mb-3">Tabla de Iteraciones</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-border rounded-lg">
                          <thead>
                            <tr className="bg-muted/50">
                              <th className="border border-border p-3 text-left">Iteración</th>
                              {ejercicio.sistema.solucionExacta.map((_, idx) => (
                                <th key={idx} className="border border-border p-3 text-left">
                                  x₁{idx + 1 > 1 ? `₁${idx + 1}` : ""}
                                </th>
                              ))}
                              <th className="border border-border p-3 text-left">Error Máx.</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ejercicio.iteraciones.map((iter, idx) => (
                              <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                                <td className="border border-border p-3 font-mono">{iter.k}</td>
                                <td className="border border-border p-3 font-mono">
                                  {typeof iter.x1 === "number" ? iter.x1.toFixed(4) : iter.x1}
                                </td>
                                {(iter as any).x2 !== undefined && (
                                  <td className="border border-border p-3 font-mono">
                                    {typeof (iter as any).x2 === "number"
                                      ? (iter as any).x2.toFixed(4)
                                      : (iter as any).x2}
                                  </td>
                                )}
                                {(iter as any).x3 !== undefined && (
                                  <td className="border border-border p-3 font-mono">
                                    {typeof (iter as any).x3 === "number"
                                      ? (iter as any).x3.toFixed(4)
                                      : (iter as any).x3}
                                  </td>
                                )}
                                <td className="border border-border p-3 font-mono">
                                  {typeof iter.error === "number" ? iter.error.toFixed(4) : iter.error}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Análisis de Convergencia */}
                    <div className="bg-accent/10 p-6 rounded-lg border">
                      <h4 className="font-semibold mb-3 text-accent-foreground">Análisis de Convergencia</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Iteraciones necesarias:</strong> {ejercicio.iteraciones.length - 1}
                        </div>
                        <div>
                          <strong>Error final:</strong>{" "}
                          {typeof ejercicio.iteraciones[ejercicio.iteraciones.length - 1].error === "number"
                            ? ejercicio.iteraciones[ejercicio.iteraciones.length - 1].error.toFixed(6)
                            : ejercicio.iteraciones[ejercicio.iteraciones.length - 1].error}
                        </div>
                        <div>
                          <strong>Factor ω usado:</strong> 1.2
                        </div>
                        <div>
                          <strong>Tolerancia:</strong> 0.001
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Problemas Propuestos */}
        <TabsContent value="problemas" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Problemas Básicos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Problemas Básicos</CardTitle>
                <CardDescription>Para practicar los conceptos fundamentales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Problema 1</h4>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Fácil</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>3x₁ + x₂ = 5</div>
                      <div>x₁ + 3x₂ = 5</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Resolver con ω = 1.0 y ω = 1.3. Comparar convergencia.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Problema 2</h4>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Fácil</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>5x₁ - 2x₂ = 3</div>
                      <div>-x₁ + 4x₂ = 1</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Verificar dominancia diagonal antes de resolver.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Problema 3</h4>
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        Medio
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>4x₁ + x₂ - x₃ = 2</div>
                      <div>x₁ + 4x₂ + x₃ = 4</div>
                      <div>-x₁ + x₂ + 4x₃ = 2</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Sistema 3x3 con diferentes valores iniciales.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problemas Avanzados */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Problemas Avanzados</CardTitle>
                <CardDescription>Para estudiantes con experiencia</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Problema 4</h4>
                      <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Difícil</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Sistema 4x4 con matriz de Hilbert modificada</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Analizar comportamiento con diferentes factores ω.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Problema 5</h4>
                      <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Difícil</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Sistema con matriz no diagonalmente dominante</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Investigar condiciones de convergencia.</p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Problema 6</h4>
                      <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Difícil</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Optimización del factor ω para matriz específica</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Encontrar ω óptimo teórica y experimentalmente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Consejos para Resolver */}
          <Card>
            <CardHeader>
              <CardTitle>Consejos para Resolver los Problemas</CardTitle>
              <CardDescription>Estrategias y mejores prácticas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Antes de Empezar</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Verificar dominancia diagonal</li>
                    <li>• Elegir valores iniciales apropiados</li>
                    <li>• Determinar tolerancia adecuada</li>
                    <li>• Estimar número de iteraciones</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Durante la Resolución</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Monitorear convergencia</li>
                    <li>• Documentar cada iteración</li>
                    <li>• Verificar cálculos intermedios</li>
                    <li>• Ajustar ω si es necesario</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Verificación Final</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Sustituir en ecuaciones originales</li>
                    <li>• Calcular residuo ||Ax - b||</li>
                    <li>• Comparar con solución exacta</li>
                    <li>• Analizar eficiencia del método</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
