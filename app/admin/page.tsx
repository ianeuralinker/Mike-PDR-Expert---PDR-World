export default function AdminPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                    Bem-vindo ao painel administrativo do Mike PDR Expert.
                </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Total de Posts</h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">--</div>
                    </div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Trabalhos na Galeria</h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">--</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
