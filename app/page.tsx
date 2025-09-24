import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Calculator, Users, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Método de Relajación
              <span className="text-primary block">Sistema de Ecuaciones</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Descubre el poder del análisis numérico con el método de relajación para resolver sistemas de ecuaciones
              lineales. Una técnica iterativa fundamental en matemáticas computacionales.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/teoria">
Teoria                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/practica">Práctica</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mathematical visualization */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Análisis Numérico</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Todo lo que necesitas saber sobre el método
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explora cada aspecto del método de relajación desde la teoría fundamental hasta la implementación
              práctica.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <BookOpen className="h-5 w-5 flex-none text-primary" />
                  Fundamentos Teóricos
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Comprende los principios matemáticos detrás del método de relajación y su convergencia.
                  </p>
                  <p className="mt-6">
                    <Link href="/teoria" className="text-sm font-semibold leading-6 text-primary hover:text-primary/80">
                      Explorar teoría <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Calculator className="h-5 w-5 flex-none text-primary" />
                  Implementación Práctica
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Aprende a implementar el algoritmo paso a paso con ejemplos detallados.</p>
                  <p className="mt-6">
                    <Link
                      href="/practica"
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                    >
                      Ver práctica <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Zap className="h-5 w-5 flex-none text-primary" />
                  Ejercicios Resueltos
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Practica con ejercicios resueltos paso a paso para dominar la técnica.</p>
                  <p className="mt-6">
                    <Link
                      href="/ejercicios"
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                    >
                      Resolver ejercicios <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Listo para dominar el método?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Comienza tu viaje en el análisis numérico con nuestro contenido estructurado y ejemplos prácticos.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/teoria">
                  Empezar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/grupo">
                  <Users className="mr-2 h-4 w-4" />
                  Conocer al equipo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
