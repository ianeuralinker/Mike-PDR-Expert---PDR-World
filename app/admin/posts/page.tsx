"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { formatDate } from "@/lib/utils"

export default function AdminPostsPage() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    // Simple form state for now - ideally use a rich text editor later
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [content, setContent] = useState("")
    const [description, setDescription] = useState("")
    const [coverImage, setCoverImage] = useState("")
    const [submitting, setSubmitting] = useState(false)

    const supabase = createClient()

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const { data, error } = await supabase
            .from("posts")
            .select("*")
            .order("created_at", { ascending: false })

        if (error) {
            toast.error("Erro ao carregar posts")
        } else {
            setPosts(data || [])
        }
        setLoading(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)

        // Get current user for profile_id
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            toast.error("Usuário não autenticado")
            setSubmitting(false)
            return
        }

        // Get profile id
        const { data: profile } = await supabase.from('profiles').select('id').eq('id', user.id).single()

        const { error } = await supabase.from("posts").insert({
            title,
            slug,
            content,
            description,
            cover_image: coverImage,
            profile_id: profile?.id,
            published: true
        })

        if (error) {
            toast.error("Erro ao salvar: " + error.message)
        } else {
            toast.success("Post criado com sucesso!")
            setTitle("")
            setSlug("")
            setContent("")
            setDescription("")
            setCoverImage("")
            fetchPosts()
        }
        setSubmitting(false)
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Tem certeza que deseja excluir?")) return

        const { error } = await supabase.from("posts").delete().eq("id", id)
        if (error) {
            toast.error("Erro ao excluir")
        } else {
            toast.success("Post excluído")
            fetchPosts()
        }
    }

    return (
        <div className="container py-10 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Gerenciar Blog</h1>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6 border p-6 rounded-lg">
                    <h2 className="text-xl font-semibold">Criar Novo Post</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Título</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                    setSlug(e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''))
                                }}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug (URL)</Label>
                            <Input
                                id="slug"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Descrição Curta</Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cover">URL da Imagem de Capa</Label>
                            <Input
                                id="cover"
                                value={coverImage}
                                onChange={(e) => setCoverImage(e.target.value)}
                                placeholder="https://..."
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="content">Conteúdo (Markdown)</Label>
                            <Textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="min-h-[200px] font-mono"
                                required
                            />
                        </div>
                        <Button type="submit" disabled={submitting}>
                            {submitting ? "Salvando..." : "Publicar Post"}
                        </Button>
                    </form>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Posts Publicados</h2>
                    {loading ? (
                        <p>Carregando...</p>
                    ) : (
                        <div className="space-y-4">
                            {posts.map((post) => (
                                <div key={post.id} className="border rounded-lg p-4 space-y-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold">{post.title}</h3>
                                            <p className="text-xs text-muted-foreground">{formatDate(post.created_at)}</p>
                                        </div>
                                        <Button variant="destructive" size="sm" onClick={() => handleDelete(post.id)}>
                                            Excluir
                                        </Button>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
