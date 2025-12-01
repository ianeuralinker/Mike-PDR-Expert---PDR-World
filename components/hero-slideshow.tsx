"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

const SLIDES = [
    {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        title: "Conquiste Sua Carreira Com os Melhores Treinamentos",
        subtitle: "Encontre treinamentos baseados no seu nível de proficiência."
    },
    {
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        title: "Prepare-se Para o Futuro Automotivo",
        subtitle: "Garanta sua carreira com as técnicas mais avançadas de PDR."
    },
    {
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
        title: "Transforme Sua Paixão em Profissão",
        subtitle: "Aprenda com os melhores especialistas da indústria automotiva."
    }
]

export function HeroSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
    }

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
            {/* Background Images with Overlay */}
            {SLIDES.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            ))}

            {/* Content */}
            <div className="container relative z-10 h-full flex items-center">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in">
                        {SLIDES[currentSlide].title}
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                        {SLIDES[currentSlide].subtitle}
                    </p>

                    <div className="flex items-center gap-4">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-dark-500 font-bold text-base px-8 h-12 rounded-md"
                        >
                            Explorar Cursos →
                        </Button>

                        <button className="h-14 w-14 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all group">
                            <Play className="h-6 w-6 ml-1 fill-current" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded bg-primary hover:bg-primary/90 text-dark-500 flex items-center justify-center transition-all"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded bg-primary hover:bg-primary/90 text-dark-500 flex items-center justify-center transition-all"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${index === currentSlide
                                ? "w-8 bg-primary"
                                : "w-2 bg-white/50 hover:bg-primary/75"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}
