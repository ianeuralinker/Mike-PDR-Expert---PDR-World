import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { formatDate } from "@/lib/utils"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

interface PostPageProps {
    params: {
        slug: string
    }
}

export default async function PostPage({ params }: PostPageProps) {
    const supabase = await createClient()
    const { data: post } = await supabase
        .from("posts")
        .select("*, profiles(full_name)")
        .eq("slug", params.slug)
        .single()

    if (!post) {
        notFound()
    }

    return (
        <article className="container max-w-3xl py-6 lg:py-12">
            <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Button variant="ghost" size="sm" asChild className="-ml-2">
                        <Link href="/blog">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Voltar
                        </Link>
                    </Button>
                </div>
                <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                    {post.title}
                </h1>
                {post.profiles?.full_name && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <p>Por {post.profiles.full_name}</p>
                    </div>
                )}
                <p className="text-sm text-muted-foreground">
                    {formatDate(post.created_at)}
                </p>
            </div>
            {post.cover_image && (
                <img
                    src={post.cover_image}
                    alt={post.title}
                    className="my-8 rounded-md border bg-muted transition-colors"
                />
            )}
            <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown>{post.content || ""}</ReactMarkdown>
            </div>
        </article>
    )
}
