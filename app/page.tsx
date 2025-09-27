import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Calculator, Users, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Sistema de Ecuaciones Lineales
              <span className="text-primary block">Método de Relajación</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Presentación del desarrollo del método de relajación aplicado a sistemas de ecuaciones lineales.
              Incluye fundamentos teóricos, implementación práctica y ejemplos resueltos para su análisis.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/teoria">
                  Teoria
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/practica">Implementación</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Fondo decorativo */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Sección de Contenidos */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Presentación del Trabajo</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Contenido del informe
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              El trabajo se organiza en secciones para cubrir desde los conceptos teóricos hasta la aplicación
              computacional del método, incluyendo análisis de resultados.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <BookOpen className="h-5 w-5 flex-none text-primary" />
                  Introducción y Marco Teórico
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Explicación del método de relajación, sus fundamentos matemáticos y condiciones de convergencia.
                  </p>
                  <p className="mt-6">
                    <Link href="/teoria" className="text-sm font-semibold leading-6 text-primary hover:text-primary/80">
                      Ver teoría <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Calculator className="h-5 w-5 flex-none text-primary" />
                  Desarrollo e Implementación
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Algoritmo paso a paso y código implementado en TypeScript/Next.js para resolver sistemas de
                    ecuaciones.
                  </p>
                  <p className="mt-6">
                    <Link
                      href="/practica"
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                    >
                      Ver implementación <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Zap className="h-5 w-5 flex-none text-primary" />
                  Ejercicios y Resultados
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Casos de prueba resueltos con interpretación de resultados y conclusiones obtenidas.
                  </p>
                  <p className="mt-6">
                    <Link
                      href="/ejercicios"
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                    >
                      Ver ejercicios <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Conclusiones / CTA */}
      <section className="bg-primary/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Conclusiones y Próximos Pasos
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              El trabajo permitió comprender en profundidad el método de relajación y su aplicación computacional.
              Próximos pasos: probar con sistemas más grandes y comparar con otros métodos iterativos.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/teoria">
                  Leer informe completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/grupo">
                  <Users className="mr-2 h-4 w-4" />
                  Equipo de trabajo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
