"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const supabase = createClient()

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const { error } = await supabase.auth.updateUser({
            password: password
        })

        if (error) {
            toast.error("Erro ao atualizar senha: " + error.message)
            setLoading(false)
        } else {
            toast.success("Senha atualizada com sucesso!")
            router.push("/admin")
            router.refresh()
        }
    }

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Nova Senha
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Digite sua nova senha abaixo.
                    </p>
                </div>
                <div className="grid gap-6">
                    <form onSubmit={handleUpdatePassword}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="password">
                                    Nova Senha
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="******"
                                    type="password"
                                    autoCapitalize="none"
                                    disabled={loading}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button disabled={loading}>
                                {loading && (
                                    <span className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Atualizar Senha
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
