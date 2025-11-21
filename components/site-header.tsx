import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, User, Phone } from "lucide-react"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-dark-50 bg-dark-300 backdrop-blur supports-[backdrop-filter]:bg-dark-300/95">
            {/* Top Bar */}
            <div className="border-b border-dark-50 bg-dark-400">
                <div className="container flex h-10 items-center justify-between text-sm">
                    <p className="text-white/70">
                        Restauração Profissional de Amassados sem Pintura
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="tel:+5511999999999" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                            <Phone className="h-4 w-4" />
                            <span className="hidden sm:inline">(11) 99999-9999</span>
                        </Link>
                        <Link href="/login" className="flex items-center gap-1 text-white/70 hover:text-primary transition-colors">
                            <User className="h-4 w-4" />
                            <span className="hidden sm:inline">Minha Conta</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        alt="Mike PDR Expert"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                        priority
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-white hover:text-primary transition-colors font-medium"
                    >
                        Início
                    </Link>
                    <Link
                        href="/blog"
                        className="text-white hover:text-primary transition-colors font-medium"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/galeria"
                        className="text-white hover:text-primary transition-colors font-medium"
                    >
                        Galeria
                    </Link>
                    <Link
                        href="#contato"
                        className="text-white hover:text-primary transition-colors font-medium"
                    >
                        Contato
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary-600 text-dark-300 font-semibold hidden sm:flex"
                    >
                        Agendar Avaliação
                    </Button>
                </div>
            </div>
        </header>
    )
}
