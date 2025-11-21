import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"
import ReactMarkdown from "react-markdown"

export default async function BlogPost({
    params,
}: {
    params: { slug: string }
}) {
    const supabase = await createClient()
    const { data: post } = await supabase
        .from("posts")
        .select(`
            *,
            profiles(full_name)
        `)
        .eq("slug", params.slug)
        .eq("published", true)
        .single()

    if (!post) {
        notFound()
    }

    return (
        <article className="container max-w-4xl py-8 md:py-12 lg:py-16">
            {/* Header */}
            <header className="mb-8 space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    <span className="text-white">{post.title}</span>
                </h1>

                <div className="flex items-center gap-4 text-white/60">
                    <time dateTime={post.created_at}>
                        {formatDate(post.created_at)}
                    </time>
                    {post.profiles?.full_name && (
                        <>
                            <span>•</span>
                            <span>Por {post.profiles.full_name}</span>
                        </>
                    )}
                </div>

                {post.description && (
                    <p className="text-lg text-white/80 border-l-4 border-primary pl-4 italic">
                        {post.description}
                    </p>
                )}
            </header>

            {/* Cover Image */}
            {post.cover_image && (
                <div className="mb-8 aspect-video bg-dark-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white/30">
                        [Imagem de Capa]
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h1:text-primary prose-h1:text-4xl
                prose-h2:text-primary prose-h2:text-3xl
                prose-h3:text-white prose-h3:text-2xl
                prose-p:text-white/80 prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-white/80 prose-ol:text-white/80
                prose-li:marker:text-primary
                prose-code:text-primary prose-code:bg-dark-100 prose-code:px-1 prose-code:rounded
                prose-blockquote:border-l-primary prose-blockquote:text-white/70
                prose-hr:border-dark-100
            ">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    )
}
