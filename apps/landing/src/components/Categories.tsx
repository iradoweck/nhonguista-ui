'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { apiFetch } from '@/lib/api';

interface Category {
    id: string;
    name: string;
    slug: string;
    icon: string;
}

export function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiFetch('/categories')
            .then(data => setCategories(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-24 bg-zinc-100 dark:bg-zinc-900 rounded-2xl"></div>
                ))}
            </div>
        );
    }

    return (
        <section className="px-6 py-20 max-w-5xl mx-auto w-full">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Categorias</h2>
                <Link href="/servicos" className="text-orange-600 font-medium hover:underline">Ver todas</Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat) => {
                    const IconComponent = (Icons as any)[cat.icon] || Icons.LayoutGrid;
                    return (
                        <Link 
                            key={cat.id} 
                            href={`/servicos?category=${cat.slug}`}
                            className="group flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/5 transition-all"
                        >
                            <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                                <IconComponent className="w-8 h-8" />
                            </div>
                            <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-center">{cat.name}</span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
