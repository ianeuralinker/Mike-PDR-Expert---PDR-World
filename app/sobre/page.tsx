import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-dark-300 pt-20">
            <div className="container py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Sobre a <span className="text-primary">Mike PDR Expert</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl">
                    Conheça nossa história e nossa missão de formar os melhores profissionais do mercado automotivo.
                </p>
            </div>

            <AboutSection />

            <StatsSection />

            <section className="py-20 bg-dark-200">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl font-bold text-white">Nossa Missão</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Nossa missão é elevar o padrão do mercado de reparação automotiva no Brasil e no mundo,
                            oferecendo treinamentos de excelência que transformam vidas e carreiras.
                            Acreditamos que através do conhecimento técnico e da gestão profissional,
                            nossos alunos podem alcançar a independência financeira e o reconhecimento que merecem.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
