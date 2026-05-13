'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-20 bg-zinc-950 text-white px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-black text-lg">N</div>
                        <span className="text-xl font-black tracking-tight">Nhonguista</span>
                    </div>
                    <p className="text-zinc-400 max-w-sm">
                        A plataforma líder em Nampula para conectar clientes e prestadores de serviços. Criando oportunidades e simplificando o dia-a-dia.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Plataforma</h4>
                    <ul className="space-y-4 text-zinc-400 text-sm">
                        <li><Link href="/servicos" className="hover:text-white">Explorar Serviços</Link></li>
                        <li><Link href="#como-funciona" className="hover:text-white">Como Funciona</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Legal</h4>
                    <ul className="space-y-4 text-zinc-400 text-sm">
                        <li><span className="text-zinc-600 cursor-not-allowed">Termos de Uso (Em breve)</span></li>
                        <li><span className="text-zinc-600 cursor-not-allowed">Privacidade (Em breve)</span></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4 text-center md:text-left">
                <p>© {new Date().getFullYear()} Nhonguista. Desenvolvido pelos Irmãos Muacigarro & ZEDECK'S IT.</p>
                <div className="flex items-center gap-4">
                    <span>Nampula, Moçambique 🇲🇿</span>
                </div>
            </div>
        </footer>
    );
}
