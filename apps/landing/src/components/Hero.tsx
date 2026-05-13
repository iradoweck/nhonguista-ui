'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export function Hero() {
    const [search, setSearch] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to search page with query
        window.location.href = `/servicos?search=${encodeURIComponent(search)}`;
    };

    return (
        <section className="relative px-6 py-20 sm:py-32 overflow-hidden bg-white dark:bg-black">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-orange-100/50 dark:bg-orange-900/20 blur-3xl"></div>
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-zinc-100/50 dark:bg-zinc-800/20 blur-3xl"></div>
            </div>

            <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
                    Encontre o <span className="text-orange-600 dark:text-orange-500">profissional certo</span> para o seu problema.
                </h1>
                
                <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-12">
                    De pedreiros a técnicos de informática, o Nhonguista conecta você aos melhores profissionais de Nampula. Rápido, seguro e WhatsApp-first.
                </p>

                <form 
                    onSubmit={handleSearch}
                    className="w-full max-w-2xl flex items-center p-2 bg-white dark:bg-zinc-900 rounded-full shadow-2xl border border-zinc-100 dark:border-zinc-800 focus-within:ring-2 focus-within:ring-orange-500/50 transition-all"
                >
                    <div className="flex-1 flex items-center px-4">
                        <Search className="w-5 h-5 text-zinc-400 mr-3" />
                        <input 
                            type="text" 
                            placeholder="O que você está procurando? Ex: canalizador, limpeza..."
                            className="w-full h-12 bg-transparent outline-none text-zinc-900 dark:text-zinc-100"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="h-12 px-8 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20"
                    >
                        Pesquisar
                    </button>
                </form>

                <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-2">✓ Verificados</span>
                    <span className="flex items-center gap-2">✓ Nampula-first</span>
                    <span className="flex items-center gap-2">✓ Contacto Directo</span>
                </div>
            </div>
        </section>
    );
}
