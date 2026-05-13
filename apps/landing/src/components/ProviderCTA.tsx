'use client';

import Link from 'next/link';

export function ProviderCTA() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto rounded-[3rem] bg-orange-600 p-8 sm:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                
                <div className="flex-1 text-center md:text-left relative z-10">
                    <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
                        É profissional em Nampula?
                    </h2>
                    
                    <p className="text-xl text-orange-50/80 mb-10 max-w-xl">
                        Aumente os seus rendimentos e alcance mais clientes na maior rede de serviços da cidade. Registe-se hoje como um Nhonguista.
                    </p>
                    
                    <Link 
                        href="/registo?role=provider" 
                        className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white text-orange-600 text-lg font-black hover:bg-orange-50 transition-all shadow-2xl shadow-black/10 hover:scale-105 active:scale-95"
                    >
                        Quero ser Nhonguista
                    </Link>
                </div>
                <div className="flex-1 relative z-10 hidden md:block">
                    <div className="aspect-square rounded-[2rem] bg-orange-500/50 backdrop-blur-sm border border-white/20 p-4 rotate-3">
                        <img 
                            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800" 
                            alt="Profissional Nhonguista"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
