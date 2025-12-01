import { HeroSlideshow } from "@/components/hero-slideshow"
import { FeatureSplit } from "@/components/feature-split"
import { CourseGrid } from "@/components/course-grid"
import { AboutSection } from "@/components/about-section"
import { InstructorSection } from "@/components/instructor-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-dark-300">
            <HeroSlideshow />

            <StatsSection />

            <FeatureSplit />

            <CourseGrid />

            <AboutSection />

            <InstructorSection />

            <TestimonialsSection />

            {/* Newsletter */}
            <section id="newsletter" className="bg-dark-400 py-16 md:py-24 border-t border-white/10">
                <div className="container">
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-primary">FIQUE POR</span> <span className="text-white">DENTRO</span>
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
