"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
    {
        title: "Restauração de Amassados sem Pintura",
        subtitle: "PDR - Paintless Dent Repair",
        description: "Tecnologia de ponta para reparos perfeitos preservando a pintura original",
        cta: "Saiba Mais",
        image: "/slides/slide1.jpg"
    },
    {
        title: "Resultados Profissionais Garantidos",
        subtitle: "20% DE DESCONTO",
        description: "Expertise comprovada em restauração de veículos de luxo",
        cta: "Agendar Avaliação",
        image: "/slides/slide2.jpg"
    },
    {
        title: "Preserve o Valor do Seu Veículo",
        subtitle: "Processo Sustentável e Rápido",
        description: "Sem uso de produtos químicos, mantendo a garantia de fábrica",
        cta: "Ver Galeria",
        image: "/slides/slide3.jpg"
    }
]

export function HeroSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextSlide = () => {
        setIsAutoPlaying(false)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setIsAutoPlaying(false)
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false)
        setCurrentSlide(index)
    }

    return (
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-dark-300">
            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-dark-300 via-dark-300/80 to-transparent z-10" />

                        {/* Background pattern (simulating car image area) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-dark-200 to-dark-400" />

                        {/* Content */}
                        <div className="relative z-20 container mx-auto h-full flex items-center">
                            <div className="max-w-2xl space-y-6 animate-fade-in">
                                <p className="text-white/80 text-sm md:text-base uppercase tracking-wider">
                                    {slide.subtitle}
                                </p>

                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                                    <span className="text-primary">{slide.title.split(' ')[0]}</span>
                                    <br />
                                    <span className="text-white">{slide.title.split(' ').slice(1).join(' ')}</span>
                                </h1>

                                <p className="text-white/90 text-base md:text-lg max-w-lg">
                                    {slide.description}
                                </p>

                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary-600 text-dark-300 font-semibold px-8 py-6 text-lg"
                                >
                                    {slide.cta}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-primary/20 hover:bg-primary/40 backdrop-blur-sm p-3 rounded-full transition-all"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-primary/20 hover:bg-primary/40 backdrop-blur-sm p-3 rounded-full transition-all"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all rounded-full ${index === currentSlide
                                ? "bg-primary w-12 h-3"
                                : "bg-white/40 hover:bg-white/60 w-3 h-3"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
