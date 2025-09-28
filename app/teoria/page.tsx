import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"

export default function TeoriaPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 bg-background text-foreground">
      <div className="max-w-4xl w-full space-y-8">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">TEORÍA</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Presentación e idea */}
        <section className="space-y-6">
          <div className="border-l-4 border-l-primary pl-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introducción</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El método de relajación es una técnica <strong className="text-foreground">iterativa</strong> para
              resolver sistemas de ecuaciones lineales. A diferencia de métodos directos como Gauss o Gauss-Jordan, no
              buscamos la solución exacta en un único paso, sino que partimos de una aproximación inicial y la vamos{" "}
              <strong className="text-foreground">corrigiendo paso a paso</strong> hasta acercarnos a la solución.
            </p>
          </div>
        </section>

        {/* Qué es el método */}
        <section className="space-y-6">
          <div className="border-l-4 border-l-chart-2 pl-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">¿Qué es el método de relajación?</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Es un método iterativo que actualiza las incógnitas de manera progresiva en cada iteración. La idea es
              obtener una solución aproximada, mejorando en cada paso, hasta alcanzar la precisión deseada.
            </p>
          </div>
        </section>

        {/* Cuándo usarlo */}
        <section className="space-y-6">
          <div className="border-l-4 border-l-chart-3 pl-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">¿Cuándo usarlo?</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground text-lg">
              <li>Cuando los sistemas son muy grandes y resolverlos de forma directa es costoso.</li>
              <li>Cuando preferimos un resultado aproximado rápidamente en lugar de la solución exacta.</li>
              <li>Cuando queremos reducir el uso de memoria y operaciones de matrices.</li>
            </ul>
          </div>
        </section>

        {/* Ventajas y desventajas en Card */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-3 pb-4">
              <CheckCircle className="text-green-500 h-6 w-6" />
              <CardTitle className="text-xl text-foreground">Ventajas frente a Gauss-Jordan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Menor costo computacional:</strong> requiere menos operaciones con matrices que
                  crecen en complejidad a medida que aumenta el número de incógnitas.
                </li>
                <li>
                  <strong className="text-foreground">Memoria más eficiente:</strong> el método iterativo trabaja solo con el vector de incógnitas y no necesita almacenar toda la matriz aumentada.
                </li>
                <li>
                  <strong className="text-foreground">Flexibilidad:</strong> se puede detener cuando la aproximación es
                  suficientemente precisa.
                </li>
                <li>
                  <strong className="text-foreground">Escalabilidad:</strong> ideal para sistemas grandes.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-3 pb-4">
              <XCircle className="text-red-500 h-6 w-6" />
              <CardTitle className="text-xl text-foreground">Desventajas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Convergencia lenta:</strong> necesita muchas iteraciones para
                  acercarse a la solución.
                </li>
                <li>
                  <strong className="text-foreground">Dependencia de normalización:</strong> si las ecuaciones no están
                  bien preparadas, puede diverger.
                </li>
                <li>
                  <strong className="text-foreground">No siempre converge:</strong> si el sistema no es diagonalmente
                  dominante, puede oscilar.
                </li>
                <li>
                  <strong className="text-foreground">Obsoleto frente a métodos modernos:</strong> hoy se prefiere SOR o
                  Conjugate Gradient.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Conclusión */}
        <section className="space-y-6">
          <div className="border-l-4 border-l-chart-4 pl-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Conclusión</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground leading-relaxed text-lg">
                La principal ventaja es su <strong className="text-foreground">simplicidad</strong> y bajo uso de
                memoria. Sin embargo, puede ser <strong className="text-foreground">inestable o muy lento</strong>{" "}
                dependiendo del sistema, por lo que hoy suele reemplazarse por métodos más eficientes.
              </p>
            </div>
          </div>
        </section>

        {/* Navegación a otras secciones */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/practica"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                ir a ejercicio de práctica
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
