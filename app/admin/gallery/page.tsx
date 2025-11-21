"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export default function AdminGalleryPage() {
    const [items, setItems] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [beforeUrl, setBeforeUrl] = useState("")
    const [afterUrl, setAfterUrl] = useState("")
    const [submitting, setSubmitting] = useState(false)

    const supabase = createClient()

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        const { data, error } = await supabase
            .from("gallery_items")
            .select("*")
            .order("created_at", { ascending: false })

        if (error) {
            toast.error("Erro ao carregar galeria")
        } else {
            setItems(data || [])
        }
        setLoading(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)

        const { error } = await supabase.from("gallery_items").insert({
            title,
            description,
            before_image_url: beforeUrl,
            after_image_url: afterUrl,
        })

        if (error) {
            toast.error("Erro ao salvar: " + error.message)
        } else {
            toast.success("Item adicionado com sucesso!")
            setTitle("")
            setDescription("")
            setBeforeUrl("")
            setAfterUrl("")
            fetchItems()
        }
        setSubmitting(false)
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Tem certeza que deseja excluir?")) return

        const { error } = await supabase.from("gallery_items").delete().eq("id", id)
        if (error) {
            toast.error("Erro ao excluir")
        } else {
            toast.success("Item excluído")
            fetchItems()
        }
    }

    return (
        <div className="container py-10 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Gerenciar Galeria</h1>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6 border p-6 rounded-lg">
                    <h2 className="text-xl font-semibold">Adicionar Novo Trabalho</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Título</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Descrição</Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="before">URL da Imagem "Antes"</Label>
                            <Input
                                id="before"
                                value={beforeUrl}
                                onChange={(e) => setBeforeUrl(e.target.value)}
                                placeholder="https://..."
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="after">URL da Imagem "Depois"</Label>
                            <Input
                                id="after"
                                value={afterUrl}
                                onChange={(e) => setAfterUrl(e.target.value)}
                                placeholder="https://..."
                                required
                            />
                        </div>
                        <Button type="submit" disabled={submitting}>
                            {submitting ? "Salvando..." : "Adicionar à Galeria"}
                        </Button>
                    </form>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Trabalhos Existentes</h2>
                    {loading ? (
                        <p>Carregando...</p>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="border rounded-lg p-4 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                        <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}>
                                            Excluir
                                        </Button>
                                    </div>
                                    <div className="h-48 w-full">
                                        <BeforeAfterSlider
                                            beforeImage={item.before_image_url}
                                            afterImage={item.after_image_url}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
