"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    ShoppingBag,
    ListOrdered,
    Package,
    Users,
    Settings,
    LogOut,
    Menu,
    X
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const sidebarItems = [
    {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        title: "Posts",
        href: "/admin/posts",
        icon: ShoppingBag, // Using ShoppingBag as placeholder for Posts/Products
    },
    {
        title: "Galeria",
        href: "/admin/gallery",
        icon: Package, // Using Package as placeholder for Gallery/Inventory
    },
    {
        title: "Instrutores",
        href: "/admin/instructors",
        icon: Users,
    },
    {
        title: "Manutenção",
        href: "/admin/settings",
        icon: Settings,
    },
]

export function AdminSidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="fixed top-4 left-4 z-50 md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>

            {/* Sidebar Container */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 transform bg-[#1c1c21] text-white transition-transform duration-200 ease-in-out md:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Logo Area */}
                <div className="flex h-16 items-center justify-center border-b border-gray-800">
                    <div className="flex items-center gap-2 font-bold text-xl">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-[#ff6b00]">
                            <ShoppingBag className="h-5 w-5 text-white" />
                        </div>
                        <span>Larkon</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-6 px-4 space-y-2">
                    <div className="mb-2 px-4 text-xs font-semibold uppercase text-gray-500">
                        Geral
                    </div>
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-[#ff6b00]/10 hover:text-[#ff6b00]",
                                    isActive
                                        ? "bg-[#ff6b00]/10 text-[#ff6b00]"
                                        : "text-gray-400"
                                )}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.title}
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer / Logout */}
                <div className="absolute bottom-0 w-full border-t border-gray-800 p-4">
                    <form action="/auth/signout" method="post">
                        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-500">
                            <LogOut className="h-5 w-5" />
                            Sair
                        </button>
                    </form>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
