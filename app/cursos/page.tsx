import { CourseGrid } from "@/components/course-grid"
import { FeatureSplit } from "@/components/feature-split"

export default function CoursesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-dark-300 pt-20">
            <div className="container py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Nossos <span className="text-primary">Cursos</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl">
                    Treinamentos práticos e teóricos para todos os níveis, do iniciante ao avançado.
                </p>
            </div>

            <CourseGrid />

            <FeatureSplit />
        </div>
    )
}
