"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { AlertTriangle, Loader2 } from "lucide-react"

export default function SettingsPage() {
    const [maintenanceMode, setMaintenanceMode] = useState(false)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const supabase = createClient()

    useEffect(() => {
        fetchSettings()
    }, [])

    const fetchSettings = async () => {
        try {
            const { data, error } = await supabase
                .from("settings")
                .select("value")
                .eq("key", "maintenance_mode")
                .single()

            if (error) {
                // If error (e.g., row doesn't exist), assume false
                console.error("Error fetching settings:", error)
            } else if (data) {
                setMaintenanceMode(data.value)
            }
        } catch (error) {
            console.error("Unexpected error:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleSave = async () => {
        setSaving(true)
        try {
            const { error } = await supabase
                .from("settings")
                .upsert({ key: "maintenance_mode", value: maintenanceMode })

            if (error) throw error

            toast.success("Configurações salvas com sucesso!")
        } catch (error: any) {
            toast.error("Erro ao salvar: " + error.message)
        } finally {
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className="flex h-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
                <p className="text-muted-foreground">
                    Gerencie as configurações globais do sistema.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Modo Manutenção</CardTitle>
                    <CardDescription>
                        Ative para bloquear o acesso público ao site. Apenas administradores poderão acessar.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4 rounded-md border p-4">
                        <AlertTriangle className="h-6 w-6 text-yellow-500" />
                        <div className="flex-1 space-y-1">
                            <Label htmlFor="maintenance-mode" className="text-base">
                                Ativar Manutenção
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Quando ativo, visitantes verão uma página de "Em Breve".
                            </p>
                        </div>
                        <Switch
                            id="maintenance-mode"
                            checked={maintenanceMode}
                            onCheckedChange={setMaintenanceMode}
                        />
                    </div>

                    <div className="flex justify-end">
                        <Button onClick={handleSave} disabled={saving}>
                            {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Salvar Alterações
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
