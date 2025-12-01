import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative w-full bg-gradient-to-r from-dark-300 to-dark-400 overflow-hidden py-20 lg:py-32">
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-slide-in">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Prepare-se Para o <br />
                            <span className="text-primary">Futuro Automotivo</span>
                        </h1>

                        <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                            Garanta sua carreira com as técnicas mais avançadas de Martelinho de Ouro e Estética Automotiva. Aprenda com quem é referência no mercado.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-primary hover:bg-primary-600 text-dark-500 font-bold text-base px-8 h-14 rounded-md">
                                EXPLORAR CURSOS →
                            </Button>

                            <Button size="icon" className="h-14 w-14 rounded-full bg-dark-200 hover:bg-primary hover:text-dark-500 border border-white/10 text-white transition-all">
                                <Play className="h-6 w-6 ml-1" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative hidden lg:block">
                        <div className="relative h-[600px] w-full">
                            {/* Background Blob/Shape */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />

                            <Image
                                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop"
                                alt="Estudante Automotivo"
                                fill
                                className="object-cover rounded-2xl shadow-2xl border border-white/10 relative z-10"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-10 -left-10 z-20 bg-dark-200 p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-dark-500 font-bold text-xl">
                                    2k+
                                </div>
                                <div>
                                    <p className="text-white font-bold">Alunos Formados</p>
                                    <p className="text-xs text-gray-400">Em todo o Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
