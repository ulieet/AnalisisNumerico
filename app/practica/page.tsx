"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, RotateCcw, Code, FileText } from "lucide-react"

export default function PracticaPage() {
  const [matrixA, setMatrixA] = useState([
    [4, -1, 0],
    [-1, 4, -1],
    [0, -1, 4],
  ])
  const [vectorB, setVectorB] = useState([15, 10, 10])
  const [omega, setOmega] = useState(1.25)
  const [tolerance, setTolerance] = useState(0.001)
  const [maxIterations, setMaxIterations] = useState(50)
  const [results, setResults] = useState<any[]>([])
  const [isCalculating, setIsCalculating] = useState(false)

  const resetExample = () => {
    setMatrixA([
      [4, -1, 0],
      [-1, 4, -1],
      [0, -1, 4],
    ])
    setVectorB([15, 10, 10])
    setOmega(1.25)
    setTolerance(0.001)
    setMaxIterations(50)
    setResults([])
  }

  const calculateSOR = () => {
    setIsCalculating(true)
    const n = matrixA.length
    const x = new Array(n).fill(0) // Valores iniciales
    const iterations = []

    for (let k = 0; k < maxIterations; k++) {
      const xOld = [...x]
      let maxError = 0

      for (let i = 0; i < n; i++) {
        let sum = 0
        for (let j = 0; j < n; j++) {
          if (i !== j) {
            sum += matrixA[i][j] * x[j]
          }
        }
        const newValue = (1 - omega) * x[i] + (omega / matrixA[i][i]) * (vectorB[i] - sum)
        const error = Math.abs(newValue - x[i])
        maxError = Math.max(maxError, error)
        x[i] = newValue
      }

      iterations.push({
        iteration: k + 1,
        values: [...x],
        error: maxError,
      })

      if (maxError < tolerance) break
    }

    setResults(iterations)
    setIsCalculating(false)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Implementación Práctica</h1>
      </div>

      <Tabs defaultValue="simulator" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="simulator">Simulador Interactivo</TabsTrigger>
          <TabsTrigger value="algorithm">Algoritmo Detallado</TabsTrigger>
          <TabsTrigger value="implementation">Implementación</TabsTrigger>
        </TabsList>

        {/* Simulador Interactivo */}
        <TabsContent value="simulator" className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Panel de Configuración */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Configuración del Sistema
                </CardTitle>
                <CardDescription>Configura la matriz A, vector b y parámetros del método</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Matriz A */}
                <div>
                  <Label className="text-base font-semibold">Matriz A (3x3)</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {matrixA.map((row, i) =>
                      row.map((val, j) => (
                        <Input
                          key={`${i}-${j}`}
                          type="number"
                          value={val}
                          onChange={(e) => {
                            const newMatrix = [...matrixA]
                            newMatrix[i][j] = Number.parseFloat(e.target.value) || 0
                            setMatrixA(newMatrix)
                          }}
                          className="text-center"
                        />
                      )),
                    )}
                  </div>
                </div>

                {/* Vector B */}
                <div>
                  <Label className="text-base font-semibold">Vector b</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {vectorB.map((val, i) => (
                      <Input
                        key={i}
                        type="number"
                        value={val}
                        onChange={(e) => {
                          const newVector = [...vectorB]
                          newVector[i] = Number.parseFloat(e.target.value) || 0
                          setVectorB(newVector)
                        }}
                        className="text-center"
                      />
                    ))}
                  </div>
                </div>

                {/* Parámetros */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="omega">Factor ω</Label>
                    <Input
                      id="omega"
                      type="number"
                      step="0.01"
                      value={omega}
                      onChange={(e) => setOmega(Number.parseFloat(e.target.value) || 1)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="tolerance">Tolerancia</Label>
                    <Input
                      id="tolerance"
                      type="number"
                      step="0.0001"
                      value={tolerance}
                      onChange={(e) => setTolerance(Number.parseFloat(e.target.value) || 0.001)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="maxIter">Máximo de Iteraciones</Label>
                  <Input
                    id="maxIter"
                    type="number"
                    value={maxIterations}
                    onChange={(e) => setMaxIterations(Number.parseInt(e.target.value) || 50)}
                  />
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <Button onClick={calculateSOR} disabled={isCalculating} className="flex-1">
                    {isCalculating ? "Calculando..." : "Ejecutar SOR"}
                  </Button>
                  <Button variant="outline" onClick={resetExample}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Resultados */}
            <Card>
              <CardHeader>
                <CardTitle>Resultados de la Iteración</CardTitle>
                <CardDescription>Evolución de la solución a través de las iteraciones</CardDescription>
              </CardHeader>
              <CardContent>
                {results.length > 0 ? (
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Convergencia alcanzada en {results.length} iteraciones
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Iter</th>
                            <th className="text-left p-2">x₁</th>
                            <th className="text-left p-2">x₂</th>
                            <th className="text-left p-2">x₃</th>
                            <th className="text-left p-2">Error</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.map((result, idx) => (
                            <tr key={idx} className="border-b">
                              <td className="p-2">{result.iteration}</td>
                              <td className="p-2">{result.values[0].toFixed(6)}</td>
                              <td className="p-2">{result.values[1].toFixed(6)}</td>
                              <td className="p-2">{result.values[2].toFixed(6)}</td>
                              <td className="p-2">{result.error.toFixed(8)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {results.length > 0 && (
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Solución Final:</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>x₁ = {results[results.length - 1].values[0].toFixed(6)}</div>
                          <div>x₂ = {results[results.length - 1].values[1].toFixed(6)}</div>
                          <div>x₃ = {results[results.length - 1].values[2].toFixed(6)}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    Configura el sistema y presiona "Ejecutar SOR" para ver los resultados
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Algoritmo Detallado */}
        <TabsContent value="algorithm" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Algoritmo Paso a Paso
              </CardTitle>
              <CardDescription>Implementación detallada del método SOR (Successive Over-Relaxation)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="border-l-4 border-l-primary pl-6">
                  <h3 className="text-lg font-semibold mb-3">1. Inicialización</h3>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                    <div>• Establecer valores iniciales: x⁽⁰⁾ = [0, 0, ..., 0]</div>
                    <div>• Definir factor de relajación: ω ∈ (0, 2)</div>
                    <div>• Establecer tolerancia: ε (ej. 10⁻⁶)</div>
                    <div>• Definir máximo de iteraciones: k_max</div>
                  </div>
                </div>

                <div className="border-l-4 border-l-chart-2 pl-6">
                  <h3 className="text-lg font-semibold mb-3">2. Iteración Principal</h3>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="mb-3">Para cada iteración k = 0, 1, 2, ... hasta convergencia:</p>
                    <div className="font-mono text-sm space-y-2">
                      <div>Para i = 1, 2, ..., n:</div>
                      <div className="ml-4 math-formula text-base">
                        x_i⁽ᵏ⁺¹⁾ = (1-ω)x_i⁽ᵏ⁾ + (ω/a_ii)[b_i - Σ(j&lt;i) a_ij·x_j⁽ᵏ⁺¹⁾ - Σ(j&gt;i) a_ij·x_j⁽ᵏ⁾]
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-l-chart-3 pl-6">
                  <h3 className="text-lg font-semibold mb-3">3. Verificación de Convergencia</h3>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="mb-3">Calcular el error máximo:</p>
                    <div className="font-mono text-sm math-formula text-center text-base mb-3">
                      error = max|x_i⁽ᵏ⁺¹⁾ - x_i⁽ᵏ⁾|
                    </div>
                    <p className="text-sm">Si error &lt; ε, entonces PARAR (convergencia alcanzada)</p>
                    <p className="text-sm">Si k &gt; k_max, entonces PARAR (máximo de iteraciones)</p>
                  </div>
                </div>

                <div className="border-l-4 border-l-chart-4 pl-6">
                  <h3 className="text-lg font-semibold mb-3">4. Consideraciones Importantes</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Factores de Éxito</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Matriz diagonalmente dominante</li>
                        <li>• Factor ω bien elegido</li>
                        <li>• Buena estimación inicial</li>
                        <li>• Tolerancia apropiada</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Selección de ω</h4>
                      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                        <li>• ω = 1: Método Gauss-Seidel</li>
                        <li>• 0 &lt; ω &lt; 1: Sub-relajación</li>
                        <li>• 1 &lt; ω &lt; 2: Sobre-relajación</li>
                        <li>• ω ≥ 2: No converge</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Implementación */}
        <TabsContent value="implementation" className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Implementación en Python
                </CardTitle>
                <CardDescription>Código completo del método SOR en Python</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import numpy as np

def sor_method(A, b, omega=1.0, tol=1e-6, max_iter=100):
    """
    Método SOR para resolver Ax = b
    
    Parámetros:
    A: matriz de coeficientes (n x n)
    b: vector de términos independientes
    omega: factor de relajación
    tol: tolerancia para convergencia
    max_iter: máximo número de iteraciones
    
    Retorna:
    x: vector solución
    iterations: número de iteraciones
    """
    n = len(A)
    x = np.zeros(n)  # Estimación inicial
    
    for k in range(max_iter):
        x_old = x.copy()
        
        for i in range(n):
            sum1 = sum(A[i][j] * x[j] for j in range(i))
            sum2 = sum(A[i][j] * x_old[j] for j in range(i+1, n))
            
            x[i] = (1 - omega) * x_old[i] + \\
                   omega * (b[i] - sum1 - sum2) / A[i][i]
        
        # Verificar convergencia
        if np.linalg.norm(x - x_old, np.inf) < tol:
            return x, k + 1
    
    return x, max_iter

# Ejemplo de uso
A = np.array([[4, -1, 0],
              [-1, 4, -1],
              [0, -1, 4]], dtype=float)

b = np.array([15, 10, 10], dtype=float)

# Resolver con SOR
x, iterations = sor_method(A, b, omega=1.25)

print(f"Solución: {x}")
print(f"Iteraciones: {iterations}")
print(f"Verificación Ax: {A @ x}")
print(f"Vector b: {b}")
`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Implementación en MATLAB
                </CardTitle>
                <CardDescription>Código equivalente en MATLAB/Octave</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`function [x, iter] = sor_method(A, b, omega, tol, max_iter)
    % Método SOR para resolver Ax = b
    %
    % Entrada:
    %   A - matriz de coeficientes (n x n)
    %   b - vector de términos independientes
    %   omega - factor de relajación
    %   tol - tolerancia para convergencia
    %   max_iter - máximo número de iteraciones
    %
    % Salida:
    %   x - vector solución
    %   iter - número de iteraciones realizadas
    
    if nargin < 3, omega = 1.0; end
    if nargin < 4, tol = 1e-6; end
    if nargin < 5, max_iter = 100; end
    
    n = length(A);
    x = zeros(n, 1);  % Estimación inicial
    
    for k = 1:max_iter
        x_old = x;
        
        for i = 1:n
            sum1 = A(i, 1:i-1) * x(1:i-1);
            sum2 = A(i, i+1:n) * x_old(i+1:n);
            
            x(i) = (1 - omega) * x_old(i) + ...
                   omega * (b(i) - sum1 - sum2) / A(i, i);
        end
        
        % Verificar convergencia
        if norm(x - x_old, inf) < tol
            iter = k;
            return;
        end
    end
    
    iter = max_iter;
end

% Ejemplo de uso
A = [4, -1, 0; -1, 4, -1; 0, -1, 4];
b = [15; 10; 10];

[x, iter] = sor_method(A, b, 1.25, 1e-6, 100);

fprintf('Solución: [%.6f, %.6f, %.6f]\\n', x);
fprintf('Iteraciones: %d\\n', iter);
fprintf('Verificación Ax: [%.6f, %.6f, %.6f]\\n', A*x);
fprintf('Vector b: [%.6f, %.6f, %.6f]\\n', b);
`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>

          {/* Consejos de Implementación */}
          <Card>
            <CardHeader>
              <CardTitle>Consejos de Implementación</CardTitle>
              <CardDescription>Mejores prácticas para implementar el método SOR</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Optimizaciones</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        1
                      </Badge>
                      <span>Usar aritmética de punto flotante de doble precisión</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        2
                      </Badge>
                      <span>Implementar verificación de dominancia diagonal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        3
                      </Badge>
                      <span>Almacenar solo elementos no nulos para matrices dispersas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        4
                      </Badge>
                      <span>Usar vectorización cuando sea posible</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Validaciones</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        1
                      </Badge>
                      <span>Verificar que la matriz sea cuadrada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        2
                      </Badge>
                      <span>Comprobar que los elementos diagonales no sean cero</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        3
                      </Badge>
                      <span>Validar que 0 &lt; ω &lt; 2</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        4
                      </Badge>
                      <span>Monitorear la convergencia en cada iteración</span>
                    </li>
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
