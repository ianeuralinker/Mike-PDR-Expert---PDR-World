import { createClient } from "@/lib/supabase/server"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export default async function GalleryPage() {
    const supabase = await createClient()
    const { data: items } = await supabase
        .from("gallery_items")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })

    return (
        <div className="container py-8 md:py-12 lg:py-24">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                        Galeria de Transformações
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Veja o poder do Martelinho de Ouro em ação. Resultados reais, sem pintura.
                    </p>
                </div>
            </div>
            <hr className="my-8" />
            {items?.length ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item: any) => (
                        <div key={item.id} className="flex flex-col space-y-3">
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                                <BeforeAfterSlider
                                    beforeImage={item.before_image_url}
                                    afterImage={item.after_image_url}
                                    alt={item.title}
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold leading-none">{item.title}</h3>
                                {item.description && (
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
                    <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                        <h3 className="mt-4 text-lg font-semibold">Nenhum trabalho encontrado</h3>
                        <p className="mb-4 mt-2 text-sm text-muted-foreground">
                            A galeria será atualizada em breve com novos trabalhos.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
