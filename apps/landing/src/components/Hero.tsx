'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Star, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiFetch } from '@/lib/api';
import Link from 'next/link';

export function Hero() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentText, setCurrentText] = useState('');
    
    const words = [
        "o profissional certo", 
        "a solução ideal", 
        "o seu Nhonguista", 
        "um especialista", 
        "o apoio técnico"
    ];
    const placeholders = [
        "Procuro um canalizador em Muhala...",
        "Preciso de limpeza para hoje...",
        "Técnico de informática em Nampula...",
        "Pedreiro para obras pequenas...",
        "Mecânico de confiança..."
    ];

    // Typewriter effect
    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentWord = words[textIndex];
            if (!isDeleting) {
                setCurrentText(currentWord.substring(0, currentText.length + 1));
                if (currentText.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 2500); // 2.5s de pausa no final
                }
            } else {
                setCurrentText(currentWord.substring(0, currentText.length - 1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 40 : 80); // Um pouco mais rápido para não cansar
        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex]);

    // Placeholder animation
    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Real-time search logic
    useEffect(() => {
        if (search.length < 2) {
            setResults([]);
            return;
        }

        const debounce = setTimeout(() => {
            setLoading(true);
            apiFetch(`/services?search=${encodeURIComponent(search)}&per_page=5`)
                .then(data => setResults(data.data))
                .catch(() => setResults([]))
                .finally(() => setLoading(false));
        }, 300);

        return () => clearTimeout(debounce);
    }, [search]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
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
                <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8 min-h-[1.5em]">
                    Encontre <span className="text-orange-600 dark:text-orange-500 inline-block border-r-4 border-orange-600 animate-pulse pr-2">{currentText}</span> para o seu problema.
                </h1>
                
                <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-12">
                    De pedreiros a técnicos de informática, o Nhonguista conecta você aos melhores profissionais de Nampula. Rápido, seguro e WhatsApp-first.
                </p>

                <div className="w-full max-w-2xl relative">
                    <form 
                        onSubmit={handleSearch}
                        className="flex items-center p-2 bg-white dark:bg-zinc-900 rounded-full shadow-2xl border border-zinc-100 dark:border-zinc-800 focus-within:ring-2 focus-within:ring-orange-500/50 transition-all z-20 relative"
                    >
                        <div className="flex-1 flex items-center px-4 relative h-12">
                            <Search className="w-5 h-5 text-zinc-400 mr-3" />
                            <div className="relative flex-1 h-full">
                                <AnimatePresence mode="wait">
                                    {search === '' && (
                                        <motion.span
                                            key={placeholderIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none text-sm sm:text-base whitespace-nowrap"
                                        >
                                            {placeholders[placeholderIndex]}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                                <input 
                                    type="text" 
                                    className="w-full h-full bg-transparent outline-none text-zinc-900 dark:text-zinc-100 relative z-10"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            {loading && <Loader2 className="w-4 h-4 animate-spin text-orange-600 ml-2" />}
                        </div>
                        <button 
                            type="submit"
                            className="h-12 px-8 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20"
                        >
                            Pesquisar
                        </button>
                    </form>

                    {/* Real-time Results Dropdown */}
                    <AnimatePresence>
                        {search.length >= 2 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full left-0 w-full mt-4 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden z-10"
                            >
                                {results.length > 0 ? (
                                    <div className="p-4 space-y-2">
                                        {results.map((service) => (
                                            <Link 
                                                key={service.id}
                                                href={`/servicos/${service.id}`}
                                                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex-shrink-0">
                                                    <img src={service.images?.[0] || 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=100'} alt={service.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 text-left">
                                                    <h4 className="font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-orange-600 transition-colors">{service.title}</h4>
                                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                                        <MapPin className="w-3 h-3" />
                                                        <span>{service.location.name}</span>
                                                        <span className="text-zinc-300">•</span>
                                                        <Star className="w-3 h-3 fill-orange-500 text-orange-500" />
                                                        <span className="font-bold">5.0</span>
                                                    </div>
                                                </div>
                                                <div className="text-sm font-black text-orange-600">
                                                    MZN {service.price_min}
                                                </div>
                                            </Link>
                                        ))}
                                        <Link 
                                            href={`/servicos?search=${encodeURIComponent(search)}`}
                                            className="block w-full py-3 text-center text-sm font-bold text-zinc-500 hover:text-orange-600 transition-colors border-t border-zinc-50 dark:border-zinc-800 mt-2"
                                        >
                                            Ver todos os resultados para "{search}"
                                        </Link>
                                    </div>
                                ) : !loading ? (
                                    <div className="p-8 text-center text-zinc-500">
                                        Nenhum resultado encontrado para "{search}"
                                    </div>
                                ) : null}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-2">✓ Verificados</span>
                    <span className="flex items-center gap-2">✓ Nampula-first</span>
                    <span className="flex items-center gap-2">✓ Contacto Directo</span>
                </div>
            </div>
        </section>
    );
}
