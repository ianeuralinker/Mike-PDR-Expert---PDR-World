export function SiteFooter() {
    return (
        <footer className="border-t border-dark-50 bg-dark-400 text-white">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Mike PDR Expert</h3>
                        <p className="text-white/70 text-sm">
                            Especialista em restauração de amassados sem pintura (PDR).
                            Preservando a originalidade do seu veículo.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Links Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="text-white/70 hover:text-primary transition-colors">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="text-white/70 hover:text-primary transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/galeria" className="text-white/70 hover:text-primary transition-colors">
                                    Galeria
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Serviços</h3>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>Remoção de Amassados</li>
                            <li>Correção de Granizo</li>
                            <li>Restauração de Portas</li>
                            <li>Avaliação Gratuita</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Contato</h3>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>(11) 99999-9999</li>
                            <li>contato@mikepdrexpert.com</li>
                            <li>São Paulo - SP</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-dark-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} Mike PDR Expert. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-4 text-sm">
                        <a href="/politica-privacidade" className="text-white/50 hover:text-primary transition-colors">
                            Política de Privacidade
                        </a>
                        <a href="/termos" className="text-white/50 hover:text-primary transition-colors">
                            Termos de Uso
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
