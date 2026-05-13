'use client';

import { useState, useEffect } from 'react';
import { Users, Briefcase, Clock, Map, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { apiFetch } from '@/lib/api';

export function Stats() {
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        apiFetch('/stats')
            .then(data => setStats(data))
            .catch(err => console.error(err));
    }, []);

    const items = [
        { 
            label: "Nhonguers", 
            value: stats?.nhonguers || 0, 
            icon: Users, 
            color: "text-blue-600",
            desc: "Clientes registados"
        },
        { 
            label: "Nhonguistas", 
            value: (stats?.nhonguistas || 0) + (stats?.nhonguista_pro || 0), 
            icon: Briefcase, 
            color: "text-orange-600",
            desc: `${stats?.nhonguista_pro || 0} Pro • ${stats?.nhonguistas || 0} Free`
        },
        { 
            label: "Nhonga", 
            value: stats?.nhonga || 0, 
            icon: TrendingUp, 
            color: "text-green-600",
            desc: "Serviços disponíveis"
        },
        { 
            label: "Tempo no Ar", 
            value: stats?.time_in_market?.value || 0, 
            unit: stats?.time_in_market?.unit || "Dias",
            icon: Clock, 
            color: "text-purple-600",
            desc: `Desde ${stats?.launch_date || '12 de Maio de 2026'}`
        },
        { 
            label: "Províncias", 
            value: stats?.provincias || 1, 
            icon: Map, 
            color: "text-red-600",
            desc: "Foco atual em Nampula"
        }
    ];

    return (
        <section className="px-6 py-24 bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {items.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center p-4 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
                        >
                            <div className={`p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 mb-6 ${item.color}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50">
                                    {item.value}
                                </span>
                                {item.unit && (
                                    <span className="text-xs font-bold text-zinc-400 uppercase">{item.unit}</span>
                                )}
                            </div>
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mt-1">{item.label}</h3>
                            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-2 uppercase tracking-widest font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
