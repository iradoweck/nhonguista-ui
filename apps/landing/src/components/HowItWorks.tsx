'use client';

export function HowItWorks() {
    const steps = [
        { step: "01", title: "Encontre o que Precisa", desc: "Pesquise por serviço ou categoria. Temos desde construção a serviços domésticos." },
        { step: "02", title: "Escolha o Profissional", desc: "Compare perfis, localizações e avaliações reais de outros clientes em Nampula." },
        { step: "03", title: "Fale Directo no WhatsApp", desc: "Clique no botão e comece a negociar sem intermediários. Simples e rápido." }
    ];

    return (
        <section id="como-funciona" className="px-6 py-24 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                        Como o Nhonguista Funciona?
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        Três passos simples para resolver o seu problema em Nampula.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((item, idx) => (
                        <div key={idx} className="relative p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                            <span className="text-5xl font-black text-orange-600/10 absolute top-4 right-8">{item.step}</span>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">{item.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
