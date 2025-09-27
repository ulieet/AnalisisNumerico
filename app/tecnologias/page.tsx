import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Cpu, Globe } from "lucide-react"

export default function TecnologiasPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
          Tecnologías Utilizadas
        </h1>

      </div>

      {/* Stack Tecnológico */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Stack Tecnológico</CardTitle>
          <CardDescription className="text-center text-base">
            Conjunto de tecnologías y servicios utilizados en el trabajo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Next.js</h3>
              <p className="text-sm text-muted-foreground">Framework de React para aplicaciones web rápidas y optimizadas</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Python + NumPy</h3>
              <p className="text-sm text-muted-foreground">Utilizado para el procesamiento de datos y cálculos científicos de alto rendimiento</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">v0</h3>
              <p className="text-sm text-muted-foreground">IA para generación de interfaces y estilos de forma eficiente</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">GitHub + Vercel</h3>
              <p className="text-sm text-muted-foreground">Control de versiones y despliegue automatico necesario para el proyecto</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
