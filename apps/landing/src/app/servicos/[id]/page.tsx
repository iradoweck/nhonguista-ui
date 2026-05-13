'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { apiFetch } from '@/lib/api';
import { 
    Star, MapPin, ArrowLeft, MessageCircle, 
    ShieldCheck, Calendar, Info, Loader2 
} from 'lucide-react';

interface Service {
    id: string;
    title: string;
    description: string;
    price_min: string;
    price_max: string;
    price_type: string;
    images: string[];
    user: { id: string; name: string; avatar: string | null; phone: string };
    category: { name: string };
    location: { name: string };
    reviews: any[];
}

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);
    const [isContacting, setIsContacting] = useState(false);
    
    const router = useRouter();
    const { isAuthenticated, token } = useAuth();

    useEffect(() => {
        apiFetch(`/services/${id}`)
            .then(setService)
            .finally(() => setLoading(false));
    }, [id]);

    const handleContact = async () => {
        if (!isAuthenticated) {
            router.push(`/login?redirect=/servicos/${id}`);
            return;
        }

        if (!service) return;

        setIsContacting(true);
        try {
            // Register contact in DB
            await apiFetch('/contacts', {
                method: 'POST',
                token: token!,
                body: JSON.stringify({
                    service_id: service.id,
                    provider_id: service.user.id,
                    message: `Olá ${service.user.name}, vi o seu serviço "${service.title}" no Nhonguista e gostaria de saber mais.`
                })
            });

            // Redirect to WhatsApp
            const whatsappMessage = encodeURIComponent(`Olá ${service.user.name}, vi o seu serviço "${service.title}" no Nhonguista e gostaria de saber mais.`);
            window.open(`https://wa.me/258${service.user.phone}?text=${whatsappMessage}`, '_blank');
        } catch (err) {
            console.error('Erro ao registar contacto:', err);
            // Even if DB fails, let's allow the redirect in MVP, or show error
            window.open(`https://wa.me/258${service.user.phone}`, '_blank');
        } finally {
            setIsContacting(false);
        }
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-10 h-10 animate-spin text-orange-600" /></div>;
    }

    if (!service) return <div>Serviço não encontrado.</div>;

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-20">
            <header className="px-6 py-4 bg-white dark:bg-black border-b border-zinc-100 dark:border-zinc-900 sticky top-0 z-40">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/servicos" className="flex items-center gap-2 text-zinc-500 hover:text-orange-600 font-bold">
                        <ArrowLeft className="w-5 h-5" />
                        Voltar
                    </Link>
                    <div className="text-sm font-black uppercase tracking-widest text-orange-600">{service.category.name}</div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    {/* Image Gallery */}
                    <div className="aspect-video rounded-[2.5rem] overflow-hidden bg-zinc-200 dark:bg-zinc-800 mb-8 shadow-2xl">
                        <img 
                            src={service.images?.[0] || 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800'} 
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 mb-4 leading-tight">
                        {service.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                        <div className="flex items-center gap-1 text-orange-500 font-bold">
                            <Star className="w-5 h-5 fill-current" />
                            4.9 (12 avaliações)
                        </div>
                        <div className="flex items-center gap-1 text-zinc-500">
                            <MapPin className="w-5 h-5" />
                            {service.location.name}, Nampula
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none mb-12">
                        <h3 className="text-xl font-bold mb-4">Sobre este serviço</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-wrap">
                            {service.description}
                        </p>
                    </div>

                    {/* Quality Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                        <div className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                            <div className="p-3 rounded-2xl bg-green-50 dark:bg-green-900/20 text-green-600">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Verificado</h4>
                                <p className="text-sm text-zinc-500">Identidade e referências confirmadas pela nossa equipa.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                            <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Disponibilidade</h4>
                                <p className="text-sm text-zinc-500">Atendimento em horário comercial e urgências em Nampula.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Contact */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white dark:bg-zinc-900 p-8 rounded-[3rem] shadow-2xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800">
                        <div className="mb-8">
                            <p className="text-sm text-zinc-500 mb-1">Preço estimado</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-zinc-900 dark:text-zinc-50">
                                    {new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN' }).format(Number(service.price_min))}
                                </span>
                                {service.price_max && (
                                    <span className="text-zinc-400 font-medium">
                                        - {new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN' }).format(Number(service.price_max))}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mt-2 block">
                                {service.price_type === 'fixo' ? 'Preço Fixo' : 'Preço Inicial / Negociável'}
                            </span>
                        </div>

                        <div className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-3xl mb-8 flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                                {service.user.avatar ? (
                                    <img src={service.user.avatar} alt={service.user.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xl font-black text-zinc-500">
                                        {service.user.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div>
                                <h4 className="font-bold text-zinc-900 dark:text-zinc-50">{service.user.name}</h4>
                                <p className="text-xs text-zinc-500">Membro desde 2026</p>
                            </div>
                        </div>

                        <button 
                            onClick={handleContact}
                            disabled={isContacting}
                            className="w-full h-16 rounded-2xl bg-green-600 text-white font-black text-lg flex items-center justify-center gap-3 hover:bg-green-700 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-green-600/20 disabled:opacity-50"
                        >
                            {isContacting ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    <MessageCircle className="w-6 h-6" />
                                    Contactar via WhatsApp
                                </>
                            )}
                        </button>
                        
                        {!isAuthenticated && (
                            <p className="text-center text-xs text-zinc-500 mt-4">
                                Precisa de estar logado para contactar o profissional.
                            </p>
                        )}

                        <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-start gap-3 text-xs text-zinc-400">
                                <Info className="w-4 h-4 mt-0.5" />
                                <p>
                                    Ao contactar, você concorda com os nossos Termos de Uso. O Nhonguista apenas facilita a conexão entre as partes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
