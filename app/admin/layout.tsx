import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect("/login")
    }

    // Optional: Check for admin role here if you have a profiles table with roles
    // const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
    // if (profile?.role !== 'admin') { redirect('/') }

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex gap-6 md:gap-10">
                        <Link href="/admin" className="font-heading text-xl font-bold">
                            Mike PDR Admin
                        </Link>
                        <nav className="flex gap-6">
                            <Link
                                href="/admin/posts"
                                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                Posts
                            </Link>
                            <Link
                                href="/admin/gallery"
                                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                Galeria
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{user.email}</span>
                        <form action="/auth/signout" method="post">
                            <Button variant="ghost" size="sm">Sair</Button>
                        </form>
                    </div>
                </div>
            </header>
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[200px] flex-col md:flex">
                    <nav className="grid items-start gap-2">
                        <Link href="/admin">
                            <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                                Dashboard
                            </span>
                        </Link>
                        <Link href="/admin/posts">
                            <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                                Posts
                            </span>
                        </Link>
                        <Link href="/admin/gallery">
                            <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                                Galeria
                            </span>
                        </Link>
                        <Link href="/">
                            <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                                Ver Site
                            </span>
                        </Link>
                    </nav>
                </aside>
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    {children}
                </main>
            </div>
        </div>
    )
}
