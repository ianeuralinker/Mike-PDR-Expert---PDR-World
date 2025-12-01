import Image from "next/image"
import { CheckCircle2, Award, Users, BookOpen } from "lucide-react"

export function AboutSection() {
    return (
        <section className="bg-dark-200 py-20 lg:py-32">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Image */}
                    <div className="relative">
                        <div className="relative aspect-square w-full max-w-lg mx-auto">
                            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                alt="Sobre Nós"
                                fill
                                className="object-cover rounded-full border-8 border-dark-300 relative z-10"
                            />

                            {/* Orbital Badge */}
                            <div className="absolute top-0 right-0 bg-dark-400 p-6 rounded-2xl border border-white/10 shadow-xl z-20">
                                <div className="text-center">
                                    <span className="block text-4xl font-bold text-primary">15+</span>
                                    <span className="text-sm text-gray-400 uppercase tracking-wider">Anos de<br />História</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        <div className="inline-block text-primary font-bold tracking-wider text-sm uppercase">
                            Sobre a Mike PDR Expert
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Eleve seu Nível <br />
                            <span className="text-primary">Profissional</span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Com o privilégio de aprender na nossa Academia, você pode examinar os treinamentos e seus detalhes e começar a treinar muito rapidamente e facilmente.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex gap-4">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Award className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Certificados</h4>
                                    <p className="text-sm text-gray-500">Reconhecidos em todo país</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Comunidade</h4>
                                    <p className="text-sm text-gray-500">Networking exclusivo</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Material</h4>
                                    <p className="text-sm text-gray-500">Apostilas e vídeos HD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
