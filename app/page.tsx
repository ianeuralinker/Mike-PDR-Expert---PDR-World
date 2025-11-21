import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Domine a Arte do Martelinho de Ouro
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Aprenda técnicas avançadas de funilaria artesanal, restaure carros clássicos e modernos, e transforme sua paixão em um negócio lucrativo.
                    </p>
                    <div className="space-x-4">
                        <Button size="lg" asChild>
                            <Link href="/blog">Ler o Blog</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="#newsletter">Entrar na Lista de Espera</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section id="newsletter" className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Fique por dentro
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Receba dicas exclusivas e seja o primeiro a saber sobre novos cursos e workshops.
                    </p>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="seu@email.com" />
                        <Button type="submit">Inscrever</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
