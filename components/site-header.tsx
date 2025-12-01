"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Menu, User } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function SiteHeader() {
    const [open, setOpen] = useState(false)

    return (
        <header className="absolute top-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-md shadow-sm">
            <div className="container flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo-expert.png"
                        alt="Mike PDR Expert"
                        width={200}
                        height={80}
                        className="h-16 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation - Centered */}
                <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link
                        href="/"
                        className="text-white hover:text-white/80 transition-colors font-medium text-base"
                    >
                        Início
                    </Link>
                    <Link
                        href="/sobre"
                        className="text-white hover:text-white/80 transition-colors font-medium text-base"
                    >
                        Sobre
                    </Link>
                    <Link
                        href="/cursos"
                        className="text-white hover:text-white/80 transition-colors font-medium text-base"
                    >
                        Cursos
                    </Link>
                    <Link
                        href="/instrutores"
                        className="text-white hover:text-white/80 transition-colors font-medium text-base"
                    >
                        Instrutores
                    </Link>
                    <Link
                        href="https://blog.mikepdrexpert.com"
                        target="_blank"
                        className="text-white hover:text-white/80 transition-colors font-medium text-base"
                    >
                        Blog
                    </Link>
                    <Link
                        href="#contato"
                        className="text-white hover:text-white/80 transition-colors font-medium text-base"
                    >
                        Contato
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {/* Hamburger Menu Icon - Desktop */}
                    <button className="text-white hover:text-white/80 transition-colors p-2 hidden lg:block">
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Search Icon */}
                    <button className="text-white hover:text-white/80 transition-colors p-2 hidden sm:block">
                        <Search className="h-5 w-5" />
                    </button>

                    {/* Dashboard Button */}
                    <Link href="/login" className="hidden sm:block">
                        <Button
                            variant="outline"
                            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#2563eb] font-medium px-4 py-2 rounded-md gap-2 transition-all"
                        >
                            <div className="h-5 w-5 rounded-full border border-primary flex items-center justify-center bg-primary">
                                <User className="h-3 w-3 text-dark-500" />
                            </div>
                            VIP PREMIUM
                        </Button>
                    </Link>

                    {/* Mobile Menu */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="lg:hidden text-white hover:text-white/80 hover:bg-white/10 p-2"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-black/95 border-white/20 w-[300px]">
                            <nav className="flex flex-col gap-6 mt-8">
                                <Link
                                    href="/"
                                    className="text-white hover:text-white/80 transition-colors font-medium text-base"
                                    onClick={() => setOpen(false)}
                                >
                                    Início
                                </Link>
                                <Link
                                    href="/sobre"
                                    className="text-white hover:text-white/80 transition-colors font-medium text-base"
                                    onClick={() => setOpen(false)}
                                >
                                    Sobre
                                </Link>
                                <Link
                                    href="/cursos"
                                    className="text-white hover:text-white/80 transition-colors font-medium text-base"
                                    onClick={() => setOpen(false)}
                                >
                                    Cursos
                                </Link>
                                <Link
                                    href="/instrutores"
                                    className="text-white hover:text-white/80 transition-colors font-medium text-base"
                                    onClick={() => setOpen(false)}
                                >
                                    Instrutores
                                </Link>
                                <Link
                                    href="https://blog.mikepdrexpert.com"
                                    target="_blank"
                                    className="text-white hover:text-white/80 transition-colors font-medium text-base"
                                    onClick={() => setOpen(false)}
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="#contato"
                                    className="text-white hover:text-white/80 transition-colors font-medium text-base"
                                    onClick={() => setOpen(false)}
                                >
                                    Contato
                                </Link>

                                <div className="border-t border-white/20 pt-6 mt-4">
                                    <Link href="/login" onClick={() => setOpen(false)}>
                                        <Button
                                            className="w-full bg-primary text-dark-500 hover:bg-primary/90 font-bold gap-2"
                                        >
                                            <User className="h-4 w-4" />
                                            VIP PREMIUM
                                        </Button>
                                    </Link>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
