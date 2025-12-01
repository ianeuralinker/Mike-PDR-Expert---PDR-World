import { CourseCard } from "@/components/course-card"

const COURSES = [
    {
        title: "Curso Completo de Martelinho de Ouro",
        description: "Aprenda do zero ao avançado a técnica de desamassar carros sem pintura. Curso prático com certificação reconhecida.",
        price: "R$ 2.497,00",
        rating: 5,
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop",
        slug: "martelinho-de-ouro-completo",
        tag: "Mais Vendido"
    },
    {
        title: "Especialização em Granizo",
        description: "Técnicas avançadas para reparo de danos causados por chuva de granizo. Aumente seu faturamento com alta demanda.",
        price: "R$ 1.897,00",
        rating: 5,
        image: "https://images.unsplash.com/photo-1605218427306-6354db696fc3?q=80&w=1000&auto=format&fit=crop",
        slug: "especializacao-granizo",
        tag: "Avançado"
    },
    {
        title: "Polimento Técnico e Vitrificação",
        description: "Domine a arte do detalhamento automotivo. Aprenda a corrigir pintura e aplicar proteções cerâmicas.",
        price: "R$ 1.297,00",
        rating: 4,
        image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop",
        slug: "polimento-tecnico",
    },
    {
        title: "Gestão de Oficina Automotiva",
        description: "Aprenda a administrar seu negócio, precificar serviços e atrair clientes de alto padrão.",
        price: "R$ 497,00",
        rating: 5,
        image: "https://images.unsplash.com/photo-1553440637-d22ed8a02528?q=80&w=1000&auto=format&fit=crop",
        slug: "gestao-oficina",
    }
]

export function CourseGrid() {
    return (
        <section className="container py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        NOSSOS <span className="text-primary">CURSOS</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl">
                        Escolha o treinamento ideal para sua carreira. Todos os cursos incluem certificação e suporte vitalício.
                    </p>
                </div>
                <div className="hidden md:block h-1 w-32 bg-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {COURSES.map((course) => (
                    <CourseCard key={course.slug} {...course} />
                ))}
            </div>
        </section>
    )
}
