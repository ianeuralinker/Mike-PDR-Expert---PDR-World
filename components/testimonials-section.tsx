import { Star, Quote } from "lucide-react"
import Image from "next/image"

const TESTIMONIALS = [
    {
        name: "Carlos Silva",
        role: "Formado em 2022",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        content: "O curso mudou minha vida! Hoje tenho minha própria oficina e ganho 3x mais do que ganhava antes.",
        rating: 5
    },
    {
        name: "Lucas Oliveira",
        role: "Formado em 2023",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        content: "A metodologia do Mike é única. Aprendi técnicas que me fazem se destacar no mercado.",
        rating: 5
    },
    {
        name: "Rafael Santos",
        role: "Formado em 2021",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
        content: "Excelente investimento! O suporte vitalício fez toda diferença na minha carreira.",
        rating: 5
    }
]

export function TestimonialsSection() {
    return (
        <section className="py-20 bg-dark-300">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        O QUE NOSSOS <span className="text-primary">ALUNOS DIZEM</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Mais de 2.000 profissionais transformaram suas carreiras. Veja o que eles têm a dizer.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-dark-200 p-8 rounded-2xl border border-white/10 relative hover:-translate-y-2 transition-all duration-300"
                        >
                            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
