import { createClient } from "@/lib/supabase/server"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export default async function GaleriaPage() {
    const supabase = await createClient()
    const { data: items } = await supabase
        .from("gallery_items")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })

    return (
        <div className="container py-8 md:py-12 lg:py-16">
            <div className="mb-12 space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    <span className="text-primary">Galeria</span> <span className="text-white">de Trabalhos</span>
                </h1>
                <p className="text-lg text-white/70 max-w-2xl">
                    Confira alguns dos resultados que alcançamos com a técnica PDR.
                    Arraste o controle para comparar o antes e depois.
                </p>
            </div>

            {items && items.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="space-y-4 bg-dark-50 border border-dark-100 rounded-lg p-4 hover:border-primary transition-colors"
                        >
                            <BeforeAfterSlider
                                beforeImage={item.before_image_url}
                                afterImage={item.after_image_url}
                                alt={item.title}
                            />
                            <div>
                                <h3 className="font-semibold text-lg text-white mb-2">
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="text-white/70 text-sm">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-dark-50 border border-dark-100 rounded-lg">
                    <p className="text-white/50 text-lg mb-4">
                        Ainda não temos itens na galeria.
                    </p>
                    <p className="text-white/40 text-sm">
                        Em breve você verá nossos trabalhos aqui!
                    </p>
                </div>
            )}
        </div>
    )
}
