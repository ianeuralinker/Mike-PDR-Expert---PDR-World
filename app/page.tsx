import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { NewsletterForm } from "@/components/newsletter-form"
import { CheckCircle2, Shield, Clock, Award } from "lucide-react"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Slideshow */}
            <HeroSlideshow />

            {/* Features Section */}
            <section className="container py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-dark-50 border border-dark-100 hover:border-primary transition-colors">
                        <div className="p-4 rounded-full bg-primary/10">
                            <CheckCircle2 className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-white">Sem Pintura</h3>
                        <p className="text-white/70 text-sm">
                            Preserva a pintura original de fábrica
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-dark-50 border border-dark-100 hover:border-primary transition-colors">
                        <div className="p-4 rounded-full bg-primary/10">
                            <Clock className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-white">Rápido e Eficiente</h3>
                        <p className="text-white/70 text-sm">
                            Serviço rápido sem comprometer qualidade
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-dark-50 border border-dark-100 hover:border-primary transition-colors">
                        <div className="p-4 rounded-full bg-primary/10">
                            <Shield className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-white">Garantia</h3>
                        <p className="text-white/70 text-sm">
                            Mantém a garantia de fábrica intacta
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-dark-50 border border-dark-100 hover:border-primary transition-colors">
                        <div className="p-4 rounded-full bg-primary/10">
                            <Award className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-white">Expertise</h3>
                        <p className="text-white/70 text-sm">
                            20+ anos de experiência comprovada
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-dark-400 py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                <span className="text-primary">Especialistas</span>
                                <br />
                                <span className="text-white">em PDR</span>
                            </h2>
                            <p className="text-white/80 text-lg">
                                PDR (Paintless Dent Repair) é a técnica mais avançada e não invasiva para
                                remoção de amassados. Restauramos o metal à sua forma original sem
                                comprometer a pintura de fábrica.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    Preservação do valor de revenda
                                </li>
                                <li className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    Processo ecologicamente correto
                                </li>
                                <li className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    Resultados garantidos
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Button size="lg" className="bg-primary hover:bg-primary-600 text-dark-300 font-semibold">
                                    Conheça Nossos Serviços
                                </Button>
                            </div>
                        </div>
                        <div className="bg-dark-200 rounded-lg p-8 aspect-square flex items-center justify-center">
                            <p className="text-white/50 text-center">
                                [Imagem do processo PDR]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Preview */}
            <section className="container py-16 md:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-primary">Nosso</span> <span className="text-white">Trabalho</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Confira alguns dos resultados que alcançamos com a técnica PDR
                    </p>
                </div>
                <div className="text-center">
                    <Link href="/galeria">
                        <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-dark-300">
                            Ver Galeria Completa
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Newsletter */}
            <section id="newsletter" className="bg-dark-400 py-16 md:py-24">
                <div className="container">
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            <span className="text-primary">Fique por</span> <span className="text-white">dentro</span>
                        </h2>
                        <p className="text-white/70 text-lg max-w-[85%]">
                            Receba dicas exclusivas sobre cuidados automotivos e seja o primeiro a
                            saber sobre novos serviços e promoções.
                        </p>
                        <NewsletterForm />
                    </div>
                </div>
            </section>
        </div>
    )
}
