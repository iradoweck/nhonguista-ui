'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin } from 'lucide-react';
import { apiFetch } from '@/lib/api';

interface Service {
    id: string;
    title: string;
    description: string;
    price_min: string;
    price_type: string;
    images: string[];
    user: { name: string; avatar: string | null };
    category: { name: string };
    location: { name: string };
    average_rating?: number;
}

export function FeaturedServices() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch more to ensure we have enough to pick one per category
        apiFetch('/services?featured=1&per_page=12')
            .then(data => {
                const rawServices: Service[] = data.data;
                // Lógica para pegar um de cada categoria (até 6)
                const uniqueByCategory: Service[] = [];
                const seenCategories = new Set();
                
                rawServices.forEach(s => {
                    if (!seenCategories.has(s.category.name) && uniqueByCategory.length < 6) {
                        uniqueByCategory.push(s);
                        seenCategories.add(s.category.name);
                    }
                });

                // Se não tivermos 6 únicos, preenchemos com os restantes até ter 6
                if (uniqueByCategory.length < 6) {
                    rawServices.forEach(s => {
                        if (!uniqueByCategory.find(u => u.id === s.id) && uniqueByCategory.length < 6) {
                            uniqueByCategory.push(s);
                        }
                    });
                }

                setServices(uniqueByCategory);
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <section className="px-6 py-20 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-[400px] bg-zinc-100 dark:bg-zinc-900 rounded-3xl"></div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (services.length === 0) return null;

    return (
        <section className="px-6 py-20 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Nhonguistas em Destaque</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-2">Um especialista de cada área, prontos para ajudar você.</p>
                    </div>
                    <Link href="/servicos" className="text-orange-600 font-medium hover:underline">Ver todos os serviços</Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link 
                            key={service.id} 
                            href={`/servicos/${service.id}`}
                            className="group flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all border border-zinc-100 dark:border-zinc-800"
                        >
                            <div className="relative h-56 w-full overflow-hidden">
                                <img 
                                    src={service.images?.[0] || 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800'} 
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-[10px] font-black text-orange-600 uppercase tracking-tighter">
                                    {service.category.name}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                                            {service.user.avatar ? (
                                                <img src={service.user.avatar} alt={service.user.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xs font-bold text-zinc-500">
                                                    {service.user.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{service.user.name}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-orange-500">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span className="text-xs font-bold">{(service.average_rating || 5.0).toFixed(1)}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                                    {service.title}
                                </h3>
                                
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-2 mb-4 flex-1">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-zinc-50 dark:border-zinc-800">
                                    <div className="flex items-center text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        {service.location.name}
                                    </div>
                                    <div className="text-sm font-black text-zinc-900 dark:text-zinc-50">
                                        {new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN', maximumFractionDigits: 0 }).format(Number(service.price_min))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
