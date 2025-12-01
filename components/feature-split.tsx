import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FeatureSplit() {
    return (
        <section className="container py-16">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Student Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-200 p-8 lg:p-12 flex flex-col justify-center min-h-[400px]">
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-3xl font-bold text-white">
                            Aprenda com os <br />
                            <span className="text-primary">Melhores do Mercado</span>
                        </h3>
                        <p className="text-gray-400 max-w-sm">
                            Tenha acesso a cursos práticos e teóricos, com certificação reconhecida e suporte direto com especialistas.
                        </p>
                        <Button className="bg-primary hover:bg-primary-600 text-dark-500 font-bold">
                            Começar Agora →
                        </Button>
                    </div>

                    <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-50 group-hover:opacity-70 transition-opacity">
                        <Image
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                            alt="Estudante"
                            fill
                            className="object-cover mask-image-linear-gradient"
                        />
                    </div>
                </div>

                {/* Instructor Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-200 p-8 lg:p-12 flex flex-col justify-center min-h-[400px]">
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-3xl font-bold text-white">
                            Torne-se um <br />
                            <span className="text-primary">Instrutor Parceiro</span>
                        </h3>
                        <p className="text-gray-400 max-w-sm">
                            Compartilhe seu conhecimento e monetize sua expertise automotiva através da nossa plataforma.
                        </p>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-dark-500 font-bold">
                            Saiba Mais
                        </Button>
                    </div>

                    <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-50 group-hover:opacity-70 transition-opacity">
                        <Image
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
                            alt="Instrutor"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
