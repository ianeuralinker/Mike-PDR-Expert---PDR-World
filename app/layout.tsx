import type { Metadata } from 'next'
import { Orbitron, Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Toaster } from "sonner"

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
    title: 'Mike PDR Expert - Cursos Automotivos Premium',
    description: 'Transforme sua paixão por carros em profissão com nossos cursos de Martelinho de Ouro e Estética Automotiva.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={cn(montserrat.variable, orbitron.variable, "min-h-screen bg-dark-300 font-sans antialiased text-white")}>
                <div className="relative flex min-h-screen flex-col">
                    <SiteHeader />
                    <div className="flex-1">{children}</div>
                    <SiteFooter />
                </div>
                <Toaster />
            </body>
        </html>
    )
}
