import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function InstructorSection() {
    return (
        <section className="bg-dark-200 py-20 border-y border-dark-100">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl"></div>
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-lg border border-dark-50">
                            {/* Placeholder for Instructor Image */}
                            <div className="absolute inset-0 bg-dark-400 flex items-center justify-center text-gray-500">
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                                    alt="Mike - Instrutor"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="inline-block text-primary font-bold tracking-wider text-sm uppercase">
                            Sobre o Instrutor
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            MIKE <span className="text-primary">OLIVEIRA</span>
                        </h2>
                        <h3 className="text-xl text-gray-300 font-medium">
                            Master em PDR & Estética Automotiva
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Com mais de 15 anos de experiência no mercado automotivo, Mike se tornou referência nacional em Martelinho de Ouro.
                            Já formou mais de 2.000 alunos presencialmente e online, desenvolvendo uma metodologia única que foca na
                            precisão técnica e na visão de negócios.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-gray-300">Certificação Internacional</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-gray-300">20+ Anos de Experiência</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-gray-300">Suporte Vitalício</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-gray-300">Metodologia Exclusiva</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
