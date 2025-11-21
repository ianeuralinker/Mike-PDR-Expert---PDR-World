import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

export default async function BlogPage() {
    const supabase = await createClient()
    const { data: posts } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })

    return (
        <div className="container py-8 md:py-12 lg:py-24">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                        Blog
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Dicas, tutoriais e novidades sobre o mundo do Martelinho de Ouro.
                    </p>
                </div>
            </div>
            <hr className="my-8" />
            {posts?.length ? (
                <div className="grid gap-10 sm:grid-cols-2">
                    {posts.map((post: any) => (
                        <article key={post.id} className="group relative flex flex-col space-y-2">
                            {post.cover_image && (
                                <img
                                    src={post.cover_image}
                                    alt={post.title}
                                    className="rounded-md border bg-muted transition-colors"
                                />
                            )}
                            <h2 className="text-2xl font-extrabold">{post.title}</h2>
                            {post.description && (
                                <p className="text-muted-foreground">{post.description}</p>
                            )}
                            <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                                <span className="sr-only">Ver artigo</span>
                            </Link>
                            <p className="text-sm text-muted-foreground">
                                {formatDate(post.created_at)}
                            </p>
                        </article>
                    ))}
                </div>
            ) : (
                <p>Nenhum post encontrado.</p>
            )}
        </div>
    )
}
