import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code, Cpu, Database, Globe } from "lucide-react"
import Link from "next/link"

const tecnologias = [
  {
    categoria: "Lenguajes de Programación",
    icon: Code,
    items: [
      {
        nombre: "Python",
        descripcion: "Lenguaje principal para implementación científica y matematica",
        ventajas: ["NumPy y SciPy", "Matplotlib para visualización", "Jupyter Notebooks", "Sintaxis clara"],
        uso: "Implementación de algoritmos, análisis de datos y prototipado rápido",
        nivel: "Recomendado",
      },
      {
        nombre: "MATLAB/Octave",
        descripcion: "Entorno especializado en cálculo numérico",
        ventajas: [
          "Sintaxis matemática natural",
          "Toolboxes especializados",
          "Visualización integrada",
          "Debugging avanzado",
        ],
        uso: "Desarrollo y prueba de algoritmos numéricos",
        nivel: "Recomendado",
      },
      {
        nombre: "C/C++",
        descripcion: "Para implementaciones de alto rendimiento",
        ventajas: ["Máximo rendimiento", "Control de memoria", "Bibliotecas optimizadas", "Paralelización"],
        uso: "Implementaciones en producción y sistemas críticos",
        nivel: "Avanzado",
      },
     
    ],
  },
  {
    categoria: "Bibliotecas y Frameworks",
    icon: Database,
    items: [
      {
        nombre: "NumPy",
        descripcion: "Biblioteca fundamental para computación científica en Python",
        ventajas: ["Arrays multidimensionales", "Operaciones vectorizadas", "Álgebra lineal", "Integración C/Fortran"],
        uso: "Manipulación de matrices y vectores",
        nivel: "Esencial",
      },
      {
        nombre: "SciPy",
        descripcion: "Biblioteca de algoritmos científicos",
        ventajas: ["Métodos iterativos", "Álgebra lineal sparse", "Optimización", "Integración numérica"],
        uso: "Implementación de métodos numéricos avanzados",
        nivel: "Recomendado",
      },
      {
        nombre: "BLAS/LAPACK",
        descripción: "Bibliotecas optimizadas de álgebra lineal",
        ventajas: ["Máximo rendimiento", "Optimización hardware", "Estándar industrial", "Paralelización"],
        uso: "Operaciones de álgebra lineal de alto rendimiento",
        nivel: "Avanzado",
      },
      {
        nombre: "PETSc",
        descripcion: "Toolkit para ecuaciones diferenciales parciales",
        ventajas: ["Métodos iterativos", "Paralelización MPI", "Precondicionadores", "Escalabilidad"],
        uso: "Sistemas de gran escala y computación paralela",
        nivel: "Especializado",
      },
    ],
  },
  {
    categoria: "Herramientas de Desarrollo",
    icon: Cpu,
    items: [
      {
        nombre: "Jupyter Notebook",
        descripcion: "Entorno interactivo para desarrollo y documentación",
        ventajas: ["Desarrollo iterativo", "Visualización inline", "Documentación rica", "Compartir resultados"],
        uso: "Prototipado, análisis y presentación de resultados",
        nivel: "Recomendado",
      },
      {
        nombre: "Git",
        descripcion: "Control de versiones para código y documentación",
        ventajas: ["Historial completo", "Colaboración", "Branching", "Integración continua"],
        uso: "Gestión de código fuente y colaboración en equipo",
        nivel: "Esencial",
      },
      {
        nombre: "Docker",
        descripcion: "Contenedorización para reproducibilidad",
        ventajas: ["Entornos consistentes", "Portabilidad", "Aislamiento", "Escalabilidad"],
        uso: "Despliegue y reproducibilidad de experimentos",
        nivel: "Intermedio",
      },
      {
        nombre: "Profilers",
        descripcion: "Herramientas de análisis de rendimiento",
        ventajas: ["Identificar cuellos de botella", "Optimización", "Análisis de memoria", "Benchmarking"],
        uso: "Optimización de algoritmos y análisis de rendimiento",
        nivel: "Avanzado",
      },
    ],
  },
  {
    categoria: "Plataformas y Servicios",
    icon: Globe,
    items: [
      {
        nombre: "Google Colab",
        descripcion: "Entorno de notebooks en la nube",
        ventajas: ["GPU/TPU gratuitas", "Sin configuración", "Colaboración", "Integración Drive"],
        uso: "Desarrollo rápido y experimentación",
        nivel: "Accesible",
      },
      {
        nombre: "AWS/Azure/GCP",
        descripcion: "Plataformas de computación en la nube",
        ventajas: ["Escalabilidad", "Recursos especializados", "Servicios ML", "Almacenamiento"],
        uso: "Computación de alto rendimiento y despliegue",
        nivel: "Profesional",
      },
      {
        nombre: "HPC Clusters",
        descripcion: "Sistemas de computación de alto rendimiento",
        ventajas: ["Máximo rendimiento", "Paralelización masiva", "Memoria compartida", "Schedulers"],
        uso: "Problemas de gran escala y investigación",
        nivel: "Especializado",
      },
      {
        nombre: "GitHub/GitLab",
        descripcion: "Plataformas de desarrollo colaborativo",
        ventajas: ["Repositorios", "CI/CD", "Issues", "Documentación"],
        uso: "Gestión de proyectos y colaboración",
        nivel: "Esencial",
      },
    ],
  },
]

const getNivelColor = (nivel: string) => {
  switch (nivel) {
    case "Esencial":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    case "Recomendado":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "Intermedio":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    case "Avanzado":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "Especializado":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    case "Emergente":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    case "Profesional":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    case "Accesible":
      return "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }
}

export default function TecnologiasPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
          Tecnologías y Herramientas
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explora las tecnologías, bibliotecas y herramientas utilizadas para implementar y optimizar el método de
          relajación en diferentes entornos computacionales.
        </p>
      </div>

      {/* Stack Tecnológico Recomendado */}
      <Card className="mb-12 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Stack Tecnológico Recomendado</CardTitle>
          <CardDescription className="text-center text-base">
            Configuración ideal para comenzar con el método de relajación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Python</h3>
              <p className="text-sm text-muted-foreground">Lenguaje principal</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">NumPy + SciPy</h3>
              <p className="text-sm text-muted-foreground">Computación científica</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Jupyter</h3>
              <p className="text-sm text-muted-foreground">Desarrollo interactivo</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Git + GitHub</h3>
              <p className="text-sm text-muted-foreground">Control de versiones</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categorías de Tecnologías */}
      <div className="space-y-12">
        {tecnologias.map((categoria, idx) => (
          <section key={idx}>
            <div className="flex items-center gap-3 mb-6">
              <categoria.icon className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">{categoria.categoria}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {categoria.items.map((item, itemIdx) => (
                <Card key={itemIdx} className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{item.nombre}</CardTitle>
                        <CardDescription className="mt-2">{item.descripcion}</CardDescription>
                      </div>
                      <Badge className={getNivelColor(item.nivel)}>{item.nivel}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Ventajas Principales:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {item.ventajas.map((ventaja, vIdx) => (
                          <li key={vIdx} className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>{ventaja}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Uso Recomendado:</h4>
                      <p className="text-sm text-muted-foreground">{item.uso}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Recursos Adicionales */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Recursos de Aprendizaje</CardTitle>
          <CardDescription>Enlaces útiles para profundizar en las tecnologías mencionadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Documentación Oficial</h4>
              <div className="space-y-2">
                <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                  <Link href="https://numpy.org/doc/" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    NumPy Documentation
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                  <Link href="https://docs.scipy.org/" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    SciPy Documentation
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                  <Link href="https://matplotlib.org/stable/" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Matplotlib Documentation
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Tutoriales y Cursos</h4>
              <div className="space-y-2">
                <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                  <Link href="https://jupyter.org/try" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Try Jupyter Online
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                  <Link href="https://colab.research.google.com/" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Google Colab
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                  <Link href="https://github.com/" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
