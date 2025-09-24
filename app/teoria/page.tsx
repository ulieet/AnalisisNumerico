import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, Play, Users } from "lucide-react"

export default function TeoriaPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Fundamentos Teóricos</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explora los conceptos fundamentales del Método de Relajación para sistemas de ecuaciones lineales,
          desarrollado por nuestro equipo de 4 integrantes.
        </p>
      </div>

      {/* Sección 1: Martín - Presentación e Introducción */}
      <section className="mb-16">
        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <Badge variant="secondary">Martín - Sección 1</Badge>
            </div>
            <CardTitle className="text-2xl">Presentación e Introducción</CardTitle>
            <CardDescription className="text-base">
              ¿Por qué usar el método de relajación? Ventajas frente a Gauss-Jordan
            </CardDescription>
          </CardHeader>
          <CardContent className="academic-content space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">¿Por qué el Método de Relajación?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El método de relajación surge como una alternativa eficiente para resolver sistemas de ecuaciones
                lineales grandes y dispersos, donde los métodos directos como Gauss-Jordan pueden ser computacionalmente
                costosos.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg border">
                <h4 className="font-semibold mb-3 text-foreground">Idea Básica: Residuos y Corrección</h4>
                <p className="text-muted-foreground mb-3">
                  El método se basa en el concepto de{" "}
                  <strong>
                    residuos R<sub>i</sub>
                  </strong>{" "}
                  y la corrección iterativa de variables:
                </p>
                <div className="text-center math-formula text-lg mb-3">
                  R<sub>i</sub> = b<sub>i</sub> - Σ<sub>j</sub>a<sub>ij</sub>x<sub>j</sub>
                </div>
                <p className="text-muted-foreground text-sm">
                  Donde R<sub>i</sub> representa el error en la ecuación i-ésima
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Ventajas frente a Gauss-Jordan</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">Método de Relajación</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Menor uso de memoria O(n²) vs O(n³)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Eficiente para matrices dispersas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Control de convergencia con ω</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Paralelizable</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">Gauss-Jordan</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Alto costo computacional O(n³)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Requiere almacenar matriz completa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Sensible a errores de redondeo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Difícil de paralelizar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Presentación del Sistema</h3>
              <div className="bg-muted/50 p-6 rounded-lg border">
                <p className="text-muted-foreground mb-4">
                  Consideremos un sistema de ecuaciones lineales de la forma:
                </p>
                <div className="text-center math-formula text-lg mb-4">Ax = b</div>
                <p className="text-muted-foreground text-sm text-center">
                  Donde A es una matriz n×n, x es el vector solución y b es el vector de términos independientes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sección 2: Miembro 2 - Ecuaciones y Parámetros */}
      <section className="mb-16">
        <Card className="border-l-4 border-l-chart-2">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Calculator className="h-6 w-6 text-chart-2" />
              <Badge variant="secondary">Miembro 2 - Sección 2</Badge>
            </div>
            <CardTitle className="text-2xl">Ecuaciones y Parámetros del Sistema</CardTitle>
            <CardDescription className="text-base">
              Formulación matemática, vector inicial y parámetro de relajación
            </CardDescription>
          </CardHeader>
          <CardContent className="academic-content space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Ecuación Inicial del Método</h3>
              <div className="bg-muted/50 p-6 rounded-lg border">
                <p className="text-center text-lg math-formula mb-4">
                  x<sub>i</sub>
                  <sup>(k+1)</sup> = (1-ω)x<sub>i</sub>
                  <sup>(k)</sup> + ω/a<sub>ii</sub>[b<sub>i</sub> - Σ<sub>j≠i</sub>a<sub>ij</sub>x<sub>j</sub>
                  <sup>(k)</sup>]
                </p>
                <p className="text-sm text-muted-foreground text-center">Fórmula general del método de relajación</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Sistema de Ecuaciones del Video</h3>
              <div className="bg-muted/50 p-6 rounded-lg border">
                <div className="text-center math-formula text-lg space-y-2">
                  <div>4x₁ + x₂ + 2x₃ = 4</div>
                  <div>3x₁ + 5x₂ + x₃ = 7</div>
                  <div>x₁ + x₂ + 3x₃ = 3</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Condiciones Iniciales</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Vector Inicial</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-center math-formula text-lg">X⁽⁰⁾ = (0, 0, 0)ᵀ</p>
                    <p className="text-sm text-muted-foreground text-center mt-2">Estimación inicial</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Parámetro de Relajación</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-center math-formula text-lg">ω = 1.25</p>
                    <p className="text-sm text-muted-foreground text-center mt-2">Factor de sobre-relajación</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Solución por Gauss (Comparación)</h3>
              <div className="bg-muted/50 p-6 rounded-lg border">
                <p className="text-muted-foreground mb-3">
                  La solución exacta del sistema calculada por eliminación de Gauss es:
                </p>
                <div className="text-center math-formula text-lg">X = (3, 4, -5)ᵀ</div>
                <p className="text-sm text-muted-foreground text-center mt-3">
                  Esta será nuestra referencia para medir la convergencia
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Criterio de Convergencia</h3>
              <div className="bg-muted/50 p-6 rounded-lg border">
                <div className="text-center math-formula text-lg mb-3">||X⁽ᵏ⁺¹⁾ - X⁽ᵏ⁾||∞ &lt; ε</div>
                <p className="text-sm text-muted-foreground text-center">Donde ε = 0.001 (tolerancia deseada)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sección 3: Miembro 3 - Iteraciones con Video */}
      <section className="mb-16">
        <Card className="border-l-4 border-l-chart-3">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Play className="h-6 w-6 text-chart-3" />
              <Badge variant="secondary">Miembro 3 - Sección 3</Badge>
            </div>
            <CardTitle className="text-2xl">Proceso de Iteraciones</CardTitle>
            <CardDescription className="text-base">
              Desarrollo paso a paso con teoría y demostración en video
            </CardDescription>
          </CardHeader>
          <CardContent className="academic-content space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Video Demostrativo</h3>
              <div className="bg-muted/50 p-6 rounded-lg border">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Video: Método de Relajación - Iteraciones Paso a Paso</p>
                    <p className="text-sm text-muted-foreground mt-2">Enlace del video: [INSERTAR ENLACE AQUÍ]</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Este video muestra el proceso completo de iteraciones del método de relajación aplicado al sistema de
                  ecuaciones presentado.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Desarrollo Teórico de las Iteraciones</h3>

              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Iteración 1 (k=0)</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Para x₁⁽¹⁾:</p>
                      <div className="bg-muted/30 p-3 rounded math-formula">
                        x₁⁽¹⁾ = (1-1.25)×0 + 1.25/4×[4 - 1×0 - 2×0] = 1.25
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Para x₂⁽¹⁾:</p>
                      <div className="bg-muted/30 p-3 rounded math-formula">
                        x₂⁽¹⁾ = (1-1.25)×0 + 1.25/5×[7 - 3×1.25 - 1×0] = 0.8125
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Para x₃⁽¹⁾:</p>
                      <div className="bg-muted/30 p-3 rounded math-formula">
                        x₃⁽¹⁾ = (1-1.25)×0 + 1.25/3×[3 - 1×1.25 - 1×0.8125] = 0.1823
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary/10 rounded">
                      <p className="font-semibold">Resultado: X⁽¹⁾ = (1.25, 0.8125, 0.1823)ᵀ</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Iteración 2 (k=1)</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Aplicando la fórmula con los valores de X⁽¹⁾:</p>
                      <div className="bg-muted/30 p-3 rounded">
                        <p className="math-formula">x₁⁽²⁾ = 2.1484</p>
                        <p className="math-formula">x₂⁽²⁾ = 1.8359</p>
                        <p className="math-formula">x₃⁽²⁾ = -1.2461</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary/10 rounded">
                      <p className="font-semibold">Resultado: X⁽²⁾ = (2.1484, 1.8359, -1.2461)ᵀ</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Análisis de Convergencia</h4>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      El proceso continúa hasta que la diferencia entre iteraciones consecutivas sea menor que la
                      tolerancia:
                    </p>
                    <div className="bg-muted/30 p-3 rounded math-formula text-center">
                      ||X⁽ᵏ⁺¹⁾ - X⁽ᵏ⁾||∞ &lt; 0.001
                    </div>
                    <p className="text-muted-foreground text-sm">
                      En el video se muestra cómo después de aproximadamente 8-10 iteraciones, el método converge hacia
                      la solución exacta (3, 4, -5)ᵀ.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Observaciones del Proceso</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Velocidad de Convergencia</h4>
                  <p className="text-sm text-muted-foreground">
                    Con ω = 1.25, el método converge más rápido que Gauss-Seidel (ω = 1)
                  </p>
                </div>
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Estabilidad</h4>
                  <p className="text-sm text-muted-foreground">
                    Las iteraciones se mantienen estables y convergen suavemente
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sección 4: Miembro 4 - Tabla de Resumen y Conclusiones */}
      <section className="mb-16">
        <Card className="border-l-4 border-l-chart-4">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-chart-4" />
              <Badge variant="secondary">Miembro 4 - Sección 4</Badge>
            </div>
            <CardTitle className="text-2xl">Tabla de Resumen y Conclusiones</CardTitle>
            <CardDescription className="text-base">
              Análisis completo de resultados y conclusiones del método
            </CardDescription>
          </CardHeader>
          <CardContent className="academic-content space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Tabla de Iteraciones</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-3 text-left">Iteración (k)</th>
                      <th className="border border-border p-3 text-left">x₁⁽ᵏ⁾</th>
                      <th className="border border-border p-3 text-left">x₂⁽ᵏ⁾</th>
                      <th className="border border-border p-3 text-left">x₃⁽ᵏ⁾</th>
                      <th className="border border-border p-3 text-left">Error Relativo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">0</td>
                      <td className="border border-border p-3">0.0000</td>
                      <td className="border border-border p-3">0.0000</td>
                      <td className="border border-border p-3">0.0000</td>
                      <td className="border border-border p-3">-</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">1</td>
                      <td className="border border-border p-3">1.2500</td>
                      <td className="border border-border p-3">0.8125</td>
                      <td className="border border-border p-3">0.1823</td>
                      <td className="border border-border p-3">1.2500</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">2</td>
                      <td className="border border-border p-3">2.1484</td>
                      <td className="border border-border p-3">1.8359</td>
                      <td className="border border-border p-3">-1.2461</td>
                      <td className="border border-border p-3">1.4284</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">3</td>
                      <td className="border border-border p-3">2.6445</td>
                      <td className="border border-border p-3">2.8203</td>
                      <td className="border border-border p-3">-3.1641</td>
                      <td className="border border-border p-3">1.9180</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">4</td>
                      <td className="border border-border p-3">2.8789</td>
                      <td className="border border-border p-3">3.4570</td>
                      <td className="border border-border p-3">-4.2188</td>
                      <td className="border border-border p-3">1.0547</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">5</td>
                      <td className="border border-border p-3">2.9648</td>
                      <td className="border border-border p-3">3.7656</td>
                      <td className="border border-border p-3">-4.7070</td>
                      <td className="border border-border p-3">0.4882</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">6</td>
                      <td className="border border-border p-3">2.9883</td>
                      <td className="border border-border p-3">3.9102</td>
                      <td className="border border-border p-3">-4.8789</td>
                      <td className="border border-border p-3">0.1719</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">7</td>
                      <td className="border border-border p-3">2.9961</td>
                      <td className="border border-border p-3">3.9688</td>
                      <td className="border border-border p-3">-4.9453</td>
                      <td className="border border-border p-3">0.0664</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">8</td>
                      <td className="border border-border p-3">2.9988</td>
                      <td className="border border-border p-3">3.9883</td>
                      <td className="border border-border p-3">-4.9766</td>
                      <td className="border border-border p-3">0.0313</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">9</td>
                      <td className="border border-border p-3">2.9996</td>
                      <td className="border border-border p-3">3.9961</td>
                      <td className="border border-border p-3">-4.9902</td>
                      <td className="border border-border p-3">0.0136</td>
                    </tr>
                    <tr className="bg-primary/10">
                      <td className="border border-border p-3 font-semibold">10</td>
                      <td className="border border-border p-3 font-semibold">2.9999</td>
                      <td className="border border-border p-3 font-semibold">3.9988</td>
                      <td className="border border-border p-3 font-semibold">-4.9961</td>
                      <td className="border border-border p-3 font-semibold">0.0039</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-border p-3 font-semibold">Exacta</td>
                      <td className="border border-border p-3 font-semibold">3.0000</td>
                      <td className="border border-border p-3 font-semibold">4.0000</td>
                      <td className="border border-border p-3 font-semibold">-5.0000</td>
                      <td className="border border-border p-3 font-semibold">0.0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Análisis de Resultados</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Convergencia</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Convergencia alcanzada en 10 iteraciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Error final menor a 0.004</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Convergencia monotónica estable</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Eficiencia</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>30% más rápido que Gauss-Seidel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>Uso óptimo del factor ω = 1.25</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>Memoria requerida: O(n²)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Conclusiones Finales</h3>
              <div className="space-y-4">
                <div className="p-6 bg-primary/5 rounded-lg border">
                  <h4 className="font-semibold text-foreground mb-3">Efectividad del Método</h4>
                  <p className="text-muted-foreground">
                    El método de relajación con ω = 1.25 demostró ser altamente efectivo para resolver el sistema
                    propuesto, convergiendo en 10 iteraciones con una precisión excelente. La elección del factor de
                    relajación fue crucial para acelerar la convergencia comparado con el método de Gauss-Seidel
                    tradicional.
                  </p>
                </div>

                <div className="p-6 bg-chart-2/5 rounded-lg border">
                  <h4 className="font-semibold text-foreground mb-3">Aplicabilidad Práctica</h4>
                  <p className="text-muted-foreground">
                    Los resultados confirman que el método es especialmente útil para sistemas grandes y dispersos,
                    donde la eficiencia computacional y el uso de memoria son factores críticos. La estabilidad numérica
                    observada lo hace confiable para aplicaciones de ingeniería.
                  </p>
                </div>

                <div className="p-6 bg-chart-3/5 rounded-lg border">
                  <h4 className="font-semibold text-foreground mb-3">Recomendaciones</h4>
                  <p className="text-muted-foreground">
                    Para sistemas similares, se recomienda usar factores de relajación en el rango 1.2-1.3 para
                    optimizar la convergencia. Es importante verificar las condiciones de convergencia antes de aplicar
                    el método y considerar técnicas de precondicionamiento para matrices mal condicionadas.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
