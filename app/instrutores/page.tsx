import { InstructorSection } from "@/components/instructor-section"

export default function InstructorsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-dark-300 pt-20">
            <div className="container py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Nossos <span className="text-primary">Instrutores</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl">
                    Aprenda com quem é referência no mercado e vive o dia a dia da profissão.
                </p>
            </div>

            <InstructorSection />

            <section className="py-20 bg-dark-200">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Quer fazer parte do nosso time?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Estamos sempre em busca de profissionais talentosos para expandir nossa rede de instrutores parceiros.
                    </p>
                    <a
                        href="#contato"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                    >
                        Entre em Contato
                    </a>
                </div>
            </section>
        </div>
    )
}
