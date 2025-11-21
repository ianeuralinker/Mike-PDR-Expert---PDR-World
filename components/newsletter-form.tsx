"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function NewsletterForm() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const supabase = createClient()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setLoading(true)
        const { error } = await supabase.from("leads").insert({ email })

        if (error) {
            if (error.code === "23505") { // Unique violation
                toast.error("Este email já está cadastrado!")
            } else {
                toast.error("Erro ao cadastrar. Tente novamente.")
            }
        } else {
            toast.success("Inscrição realizada com sucesso!")
            setEmail("")
        }
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
            />
            <Button type="submit" disabled={loading}>
                {loading ? "..." : "Inscrever"}
            </Button>
        </form>
    )
}
