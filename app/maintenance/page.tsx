import Image from "next/image"

export default function MaintenancePage() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/maintenance-bg.png"
                    alt="Luxury Car Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
                <div className="mb-8 flex justify-center">
                    {/* Logo Placeholder - You can replace with actual logo component if available */}
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        MIKE <span className="text-[#ff6b00]">PDR</span> EXPERT
                    </h1>
                </div>

                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Estamos em Manutenção
                </h2>

                <p className="mb-8 text-lg text-gray-300 sm:text-xl">
                    Pedimos desculpas pelo inconveniente. Estamos atualizando nossa plataforma para trazer uma experiência ainda mais premium para você.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <div className="h-1 w-12 rounded-full bg-[#ff6b00]" />
                    <span className="text-sm font-medium uppercase tracking-widest text-[#ff6b00]">
                        Voltaremos em Breve
                    </span>
                    <div className="h-1 w-12 rounded-full bg-[#ff6b00]" />
                </div>
            </div>
        </div>
    )
}
