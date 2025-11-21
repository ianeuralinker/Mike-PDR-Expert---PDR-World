import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default async function BlogPage() {
    const supabase = await createClient()
    const { data: posts } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })

    return (
        <div className="container py-8 md:py-12 lg:py-16">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mb-12">
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="text-primary">Blog</span> <span className="text-white">PDR Expert</span>
                    </h1>
                    <p className="text-lg text-white/70 max-w-2xl">
                        Dicas, técnicas e informações sobre PDR (Paintless Dent Repair) e cuidados automotivos.
                    </p>
                </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts?.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                        <Card className="h-full bg-dark-50 border-dark-100 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
                            {post.cover_image && (
                                <div className="aspect-video bg-dark-200 rounded-t-lg overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-white/30">
                                        [Imagem do Post]
                                    </div>
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-white hover:text-primary transition-colors">
                                    {post.title}
                                </CardTitle>
                                <CardDescription className="text-white/60">
                                    {formatDate(post.created_at)}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-white/70 line-clamp-3">
                                    {post.description || ""}
                                </p>
                                <Button
                                    variant="ghost"
                                    className="mt-4 text-primary hover:text-primary hover:bg-primary/10 p-0"
                                >
                                    Ler mais →
                                </Button>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            {!posts || posts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-white/50 text-lg">Nenhum post publicado ainda.</p>
                </div>
            )}
        </div>
    )
}
