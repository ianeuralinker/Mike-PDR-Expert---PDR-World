"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import Link from "next/link"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const supabase = createClient()
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const isConfigured = supabaseUrl && !supabaseUrl.includes("placeholder")


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            toast.error("Erro ao fazer login: " + error.message)
            setLoading(false)
        } else {
            toast.success("Login realizado com sucesso!")
            router.push("/admin")
            router.refresh()
        }
    }

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Bem-vindo de volta
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Entre com suas credenciais para acessar o painel.
                    </p>
                </div>
                <div className="grid gap-6">
                    <form onSubmit={handleLogin}>
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
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="password">
                                    Senha
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="******"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete="current-password"
                                    disabled={loading}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button disabled={loading}>
                                {loading && (
                                    <span className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Entrar
                            </Button>
                        </div>
                    </form>
                    <div className="text-center text-sm text-muted-foreground">
                        <Link href="/forgot-password" className="hover:text-primary underline underline-offset-4">
                            Esqueci minha senha
                        </Link>
                    </div>
                    {!isConfigured && (
                        <div className="mt-4 rounded-md bg-destructive/15 p-3 text-xs text-destructive">
                            <strong>Erro de Configuração:</strong><br />
                            Variáveis de ambiente do Supabase não detectadas.<br />
                            URL: {supabaseUrl || "Não definida"}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
