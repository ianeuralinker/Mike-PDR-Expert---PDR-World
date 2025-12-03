"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import Link from "next/link"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const supabase = createClient()

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.protocol}//${window.location.host}/auth/callback?next=/redefinir-senha`,
        })

        if (error) {
            toast.error("Erro ao enviar email: " + error.message)
        } else {
            toast.success("Email de recuperação enviado! Verifique sua caixa de entrada.")
        }
        setLoading(false)
    }

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Recuperar Senha
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Digite seu email para receber um link de redefinição.
                    </p>
                </div>
                <div className="grid gap-6">
                    <form onSubmit={handleReset}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="email">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    placeholder="nome@exemplo.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    disabled={loading}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <Button disabled={loading}>
                                {loading && (
                                    <span className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Enviar Link
                            </Button>
                        </div>
                    </form>
                    <div className="text-center text-sm text-muted-foreground">
                        <Link href="/login" className="hover:text-primary underline underline-offset-4">
                            Voltar para o login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
