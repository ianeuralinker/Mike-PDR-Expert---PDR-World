import { Award, Users, BookOpen, TrendingUp } from "lucide-react"

const STATS = [
    {
        icon: Users,
        value: "2.000+",
        label: "Alunos Formados"
    },
    {
        icon: Award,
        value: "15+",
        label: "Anos de Experiência"
    },
    {
        icon: BookOpen,
        value: "12",
        label: "Cursos Disponíveis"
    },
    {
        icon: TrendingUp,
        value: "98%",
        label: "Taxa de Satisfação"
    }
]

export function StatsSection() {
    return (
        <section className="py-16 bg-dark-400 border-y border-white/10">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={index}
                                className="text-center group"
                            >
                                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="h-8 w-8 text-primary" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
