import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminSidebar } from "@/components/admin/sidebar"
import { AdminTopbar } from "@/components/admin/topbar"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()

    const {
        data: { user },
        error
    } = await supabase.auth.getUser()

    console.log("ADMIN LAYOUT USER:", user?.email)
    console.log("ADMIN LAYOUT ERROR:", error)

    if (!user) {
        redirect("/login")
    }

    return (
        <div className="flex min-h-screen bg-[#f5f6fa]">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <div className="flex flex-1 flex-col transition-all duration-200 ease-in-out md:pl-64">
                <AdminTopbar userEmail={user.email} />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
